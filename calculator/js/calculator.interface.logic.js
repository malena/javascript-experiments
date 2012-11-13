$(function() {

    var numberSet = [ 0 ];
    var operators = [null];


    var handleDigitClick = function(event) {
        var counter = 1;

        if($(this).hasClass('operator')){
            counter = counter++;
            console.log(counter);
        }

        var digit = $(this).attr('id');

        if(!isNaN(digit)){
            $('.digit').append(digit);
        }

        /*
            If operator clicked
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

    };

    $('.numbers li').each(function(){
        $(this).bind('click', handleDigitClick);
    });

});
