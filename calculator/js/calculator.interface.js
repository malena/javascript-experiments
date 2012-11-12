$(function() {

    $('.numbers li').on('click', function(){

        var button = $(this);
        var digit = $(this).attr('id');
        var buttonClicked = new TimelineLite();

        /* Button Click */
        buttonClicked.to(button, 0.10, {css:{
            borderTop: 'none',
            borderBottom: 'solid 1px #eee',
            boxShadow: 'inset 0 1px 4px rgba(0, 0, 0, 0.6)'},
            onComplete: buttonClicked.reverse()
        });

        /* Display Digit */
        $('.digit').append(digit);

        /* If operator clicked get current number displayed */
        if($(this).hasClass('operator')){
            var storedNumber = $('.digit').text();
            console.log(storedNumber);
        }

    });


});
