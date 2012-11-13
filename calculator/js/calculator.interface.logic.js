$(function() {

    /* Number Set Array */
    var numberSet = [ 0 ];
    var operators = [null];

    $('.numbers li').on('click', function(){

        var digit = $(this).attr('id');


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
