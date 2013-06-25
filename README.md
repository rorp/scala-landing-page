Scala Landing Page
==================

A simple "landing page" application, based on [Play Framework](http://www.playframework.com/), [ecwid-mailchimp](https://github.com/Ecwid/ecwid-mailchimp), and [Twitter Bootstrap](https://github.com/twitter/bootstrap).

Scala Landing Page can be hosted on Heroku and integrated with MailChimp -- both of which have free plans that will work fine.

# Instructions

1. Setup an account on [Heroku](heroku.com) (you can use the free account)
Instructions: [http://devcenter.heroku.com/articles/quickstart]()
Make sure you have the pre-reqs: [http://devcenter.heroku.com/articles/quickstart#prerequisites]()

1. Setup an account on [MailChimp](mailchimp.com)
Instructions: [http://kb.mailchimp.com/category/getting-started/]

1. Extract **scala-landing-page** into a folder
    `$ git clone git://github.com/rorp/scala-landing-page.git`

1. Navigate to that folder.

    `$ cd scala-landing-page`

1. Remove the local git repository.

    `$ rm -rf .git`

1. Open `conf/application.conf` in a text editor. Add your MailChimp API key (mailchimp.apikey) and list name (mailchimp.listname).

1. Modify `app/views/main.scala.html`, replacing sample content with your own. Make sure you have not removed @content tag.

1. Test the landing page locally at (http://localhost:9000/).

    `$ play run`

    When done press ^D to stop the local application.

1. Once you have edited `conf/application.conf` and `app/views/main.scala.html`, run the following commands from your project folder:

    `$ git init`

    `$ git add .`

    `$ git commit -m "setting up landing page"`

1. Now create your Heroku app by running from your project folder:

    `$ heroku create`

1. Now run `git push heroku master` to push the code to your Heroku app.  Once it's finished, run `heroku open` to launch a browser and go to your app.

	You should see a landing page and be able to enter in an email address.

1.  You will probably want a custom domain, following the instructions here [http://devcenter.heroku.com/articles/custom-domains]() to setup your domain to point to your brand-new landing page.

# Credits

Inspired by

- [quartzmo/email-landing-page](https://github.com/quartzmo/email-landing-page)
- [swanson/LandingPad.rb](https://github.com/swanson/LandingPad.rb)
