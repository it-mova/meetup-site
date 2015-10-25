$(function () {
    function checkForm(username, email, phone, captcha) {
        let error;
        if (!username) {
            error = "Калі ласка, увядзіце імя.";
        } else if (!email) {
            error = "Калі ласка, увядзіце карэктны эмэйл.";
        } else if (!phone) {
            error = "Калі ласка, увядзіце тэлефон.";
        } else if (!captcha) {
            error = "Калі увядзіце код бяспекі.";
        }
        return {error, success: error === undefined};
    }

    function warnUser(message) {
        $('#success').html("<div class='alert alert-danger'>");
        $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
        $('#success > .alert-danger').append(`<strong>${message}`);
        $('#success > .alert-danger').append('</div>');
    }

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function ($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var username = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var captcha = $("input#captcha").val();

            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            let checkFormResult = checkForm(username, email, phone, captcha);
            if (checkFormResult.success) {
                $.ajax({
                    url: "/register",
                    type: "POST",
                    data: {username, email, phone, captcha},
                    cache: false,
                    success: function () {
                        // Success message
                        $('#success').html("<div class='alert alert-success'>");
                        $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                        $('#success > .alert-success')
                            .append("<strong>Віншуем, вы паспяхова зарэгістраваліся! </strong>");
                        $('#success > .alert-success')
                            .append('</div>');

                        //clear all fields
                        $('#contactForm').trigger("reset");
                    },
                    error: function (err) {
                        // Fail message
                        let errorCode = err.responseJSON && err.responseJSON.error ? err.responseJSON.error.code : 0;
                        if(errorCode == 101) {
                            warnUser(`Прабачце, але адрас ${email} ужо зарэгістраваны!`);
                        }else if(errorCode == 102) {
                            warnUser(`Прабачце ${username}, Вы ўвялі няправільны код бяспекі!`);
                        }else {
                            warnUser(`Прабачце ${firstName}, падаецца, што сервер не адказвае!`);
                        }
                        //clear all fields
                        $("#captcha-image").attr("src", "/captcha.jpg?id="+new Date().getTime());
                    },
                })
            } else {
                warnUser(checkFormResult.error);
            }
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function () {
    $('#success').html('');
});
