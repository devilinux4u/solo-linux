$(document).ready(() => {

    $('#smsg').submit((e) => {
        e.preventDefault();
        $.ajax({
            url: '/contact',
            type: 'POST',
            async: false,
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify({
                name: $('input[name=name]').val(),
                email: $('input[name=email]').val(),
                msg: $('textarea[name=msg]').val()
            }),
            success: (data) => {
                if (data.bool == 'false') {
                    $(".sent").append('<p class="infosendn">NOT Delevered</p>')
                }
                else {
                    $(".sent").append('<p class="infosendy">Message Delevered</p>')
                }
            }
        });
    });
})