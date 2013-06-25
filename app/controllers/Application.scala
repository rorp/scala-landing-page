package controllers

import play.api.mvc._
import play.api.data._
import play.api.data.Forms._
import play.api.libs.json.{JsValue, Json}
import play.api.templates.HtmlFormat
import extras._


object Application extends Controller {

  val subscribeForm = Form(
    "email" -> email
  )

  def index = Action {
    Ok(views.html.index(subscribeForm))
  }

  def subscribe = Action { implicit request =>

    def errorsAsJson(errors: JsValue) = Json.obj("errors" -> errors)
    def escape(s: String) = HtmlFormat.escape(s).toString()

    val result = subscribeForm.bindFromRequest.fold(
      errors => errorsAsJson(errors.errorsAsJson),
      email => {
        MailChimp.subscribe(email) match {
          case Right(msg) => Json.obj("success" -> escape(msg))
          case Left(msg) => errorsAsJson(Json.obj("email" -> Json.arr(escape(msg))))
        }
      }
    )
    Ok(result)
  }

}