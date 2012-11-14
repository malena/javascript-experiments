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
            console.log('operator state is ' + operators.length);


            var operator = $(this).attr('id');
            var state = operators.length;


            var calculator = {

                add             : function (x,y) {
                    var result = (x + y);
                    $('.digit').text(result);
                    return result;
                },

                subtract        : function (x,y) {
                    return (x - y);
                },

                divide          : function (x,y) {
                    return (x / y);
                },

                multiply        : function (x,y) {
                    return (x * y);
                }

            };



            switch(operator) {

                case 'add':
                    if (operators.length == 1){
                        var result = calculator.add(numberSet[0], numberSet[1]);
                        results.push(result);
                        console.log('the first result is: ' + result);

                    }
                    else {
                        var result = calculator.add(results[operators.length - 2], numberSet[operators.length]);
                        results.push(result);
                        console.log('the next result is: ' + result);
                        console.log('this is the accumulative results' + results);
                        $('.digit').text(result);
                    }
                break;

                case 'subtract':
                break;

            }


        });

    };

    $('li.operator').on('click', handleOperatorClick);

});
