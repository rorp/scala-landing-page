(function () {
    var bootstrap_alert = function () {}
    bootstrap_alert.alert = function (message, type) {
        $('#alert_placeholder').html('<div class="alert alert-' + type + ' fade in"><a class="close" data-dismiss="alert">&times;</a><span>' + message + '</span></div>');
    }
    bootstrap_alert.error = function (message) {
        this.alert(message, "error");
    }
    bootstrap_alert.success = function (message) {
        this.alert(message, "success");
    }

    $("#subscribeForm").submit(function (event) {
        event.preventDefault();
        var $form = $(this);
        var $input = $form.find('input[name="email"]');
        var email = $input.val();
        var posting = $.post(subscribeUrl, { email: email });
        posting.done(function (data) {
            bootstrap_alert.success(data.success);
        }).fail(function (jqXHR, textStatus) {
            if (jqXHR.status == 500 || jqXHR.status == 400) {
                var data;
                try {
                    data = $.parseJSON(jqXHR.responseText);
                } catch (e)  {
                    data = {};
                }
                if ("errors" in data) {
                    if ("email" in data.errors) {
                        var message = "";
                        data.errors.email.forEach(function (msg) {
                            message += msg + " ";
                        }, $form);
                        bootstrap_alert.error(message);
                    } else {
                        bootstrap_alert.error("Unknown error");
                    }
                }
            } else {
                bootstrap_alert.error("Request failed");
            }
        });
    });
}());