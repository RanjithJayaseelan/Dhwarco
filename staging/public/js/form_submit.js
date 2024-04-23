
$(document).ready(function () {
    $('#submit-newbtn').click(() => {
        var name = $('#name').val();
        var company = $('#company').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var location = $('#location-place').val();
        var seat = $("#seat").val();
        var data = {
            name: name, company: company, email: email, phone: phone, location: location,seat: seat
        };
        $.ajax({
            url: "https://formsubmit.co/ajax/info@dhwarco.com",
            method: "POST",
            data: data,
        }).done(function (response) {
            var response = JSON.parse(response);
            if (response.success) {
                $("#myModal .cancel").click()
                
            } else {
                $("#myModal .cancel").click()
             
            }
        });
    })
}) 