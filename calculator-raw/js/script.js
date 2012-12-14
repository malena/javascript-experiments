$(function() {

    var counter = 0;

    var mathemator = {

        add      : function(x,y){
            return x + y;
        },
        subtract : function(x,y){
            return x - y;
        },
        multiply : function(x,y){
           return x * y;
        },
        divide   : function(x,y){
            return x/y;
        }

    };

    var digits = new Array();
    var results = new Array();
    var numbers = new Array();

    results[0] = 0;


    var storeClickedDigit = function (){
        //store numbers clicked into array
        var digit = $(this).attr('id');
        digits.push(parseInt(digit, 10));
        //console.log(digits);
    };


    var storeDisplayedNumber = function(){


        //join digits array into one string
        var number_string = digits.join('');

        //store string into numbers array
        numbers.push(parseInt(number_string, 10));
        console.log(numbers);

        //clear digits array
        digits.length = 0;

    };

    var calculate = function(){

        var operator = $(this).attr('id');

        switch (operator){
            case 'add':
            results.push(parseInt(mathemator.add(results[counter], numbers[counter]), 10));
            console.log(results);
            break;

            case 'subtract':
            if (results.length == 1){
                results.push(Math.abs(parseInt(mathemator.subtract(results[counter], numbers[counter]), 10)));
            } else {
                results.push(parseInt(mathemator.subtract(results[counter], numbers[counter]), 10));
            }

            console.log(results);
            break;

        }

        counter++;
    };


    $('.numbers').on('click', storeClickedDigit);
    $('.digits').on('click', 'li.operator', storeDisplayedNumber);
    $('.digits').on('click', 'li.operator', calculate);



});
