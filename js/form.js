$(document).ready(function () {
    $('.submit').click(function (event) {

        var email = $('.form__email').val()
        var subject = $('.form__subject').val()
        var message = $('.form__message').val()
        var statusElm = $('.form__status')
        statusElm.empty()
        
        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>Email is valid</div>')
        } else {
            event.preventDefault();
            statusElm.append('<div>Email is not valid</div>')
        }

        if(subject.length >= 2) {
            statusElm.append('<div>subject is valid</div>')
        } else {
            event.preventDefault();
            statusElm.append('<div>subject is not valid</div>')
        }
    
        if(message.length >= 10) {
            statusElm.append('<div>message is valid</div>')
        } else {
            event.preventDefault();
            statusElm.append('<div>message is not valid</div>')
        }



    })
});