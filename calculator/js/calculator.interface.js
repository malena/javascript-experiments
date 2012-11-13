$(function() {

    /* Number Set Array */
    var numberSet = [ 0 ];
    var operators = [null];

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
        if(!isNaN(digit)){
            $('.digit').append(digit);
        }


        /*  If operator clicked
            get current number displayed
            store current number displayed
            store current operator
        */

        if($(this).hasClass('operator')){
            operators[1] = $(this).attr('id');
            numberSet[1] = $('.digit').text();
            console.log(numberSet);
            console.log(operators);
            $('.digit').text('');
        }

    });


});
