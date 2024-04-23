$(document).ready(function () {
    $('#submit-schbtn').click(() => {
        var msg = document.getElementById("submission");
        msg.style.display = "none";
        var err = document.getElementById("error");
        err.style.display = "none";
        var name = $('#name-sch').val();
        var company = $('#company-sch').val();
        var email = $('#email-sch').val();
        var phone = $('#phone-sch').val();
        var location = $('#location-sch').val();
        var data = {
            name: name, company: company, email: email, phone: phone, location: location
        };
        $.ajax({
            url: "https://formsubmit.co/ajax/info@dhwarco.com",
            method: "POST",
            data: data,
        }).done(function (response) {
            var response = JSON.parse(response);
            console.log(response)
            if (response.success) {
                msg.style.display = "block"; 

            } else {

                err.style.display = "block";
            }
        });
    })
}) 