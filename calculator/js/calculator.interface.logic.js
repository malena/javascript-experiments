$(function() {

    var numberSet = [ 0 ];
    var operators = [];

    var handleDigitClick = function(event) {

        $(this).each(function(){

            var digit = $(this).attr('id');

            if(!isNaN(digit)){
                $('.digit').append(digit);
            }

            if($(this).hasClass('operator')){

                operators.push($(this).attr('id'));
                numberSet.push(parseInt($('.digit').text(),10));

                console.log(numberSet);
                console.log(operators);
                $('.digit').text('');
            }

        });

    };

    $('.numbers li').on('click', handleDigitClick);

});
