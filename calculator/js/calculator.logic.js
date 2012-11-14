$(function() {

    var numberSet = [ 0 ];
    var operators = [];
    var results = [];

    var handleOperatorClick = function(event) {

        $(this).each(function(){

            operators.push($(this).attr('id'));
            numberSet.push(parseInt($('.digit').text(),10));

            console.log('this is the numbers clicked so far:' + numberSet);
            console.log(operators);


            var operator = $(this).attr('id');
            var state = operators.length;


            var calculator = {

                add             : function (x,y) {
                    var result = (x + y);
                    $('.digit').text(result);
                    return result;
                },

                subtract        : function (x,y) {
                    var result = (x - y);
                    $('.digit').text(Math.abs(result));
                    return result;
                },

                divide          : function (x,y) {
                    var result = (x / y);
                    $('.digit').text(result);
                    return result;
                },

                multiply        : function (x,y) {
                    var result = (x * y);
                    $('.digit').text(result);
                    return result;
                }

            };



            switch(operator) {

                case 'add':
                    if (operators.length == 1){
                        var result = calculator.add(numberSet[0], numberSet[1]);
                        results.push(result);
                    } else {
                        var result = calculator.add(results[operators.length - 2], numberSet[operators.length]);
                        results.push(result);
                        $('.digit').text(result);
                    }
                break;

                case 'subtract':
                    if (operators.length == 1){
                        var result = Math.abs(calculator.subtract(numberSet[0], numberSet[1]));
                        results.push(result);
                    } else {
                        var result = calculator.subtract(results[operators.length - 2], numberSet[operators.length]);
                        results.push(result);
                        $('.digit').text(result);
                    }
                break;

            }


        });

    };

    $('li.operator').on('click', handleOperatorClick);

});
