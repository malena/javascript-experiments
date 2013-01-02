function CalculatorView(){

    var calculator = new Calculator({});

    var $display = $('.display');

    $('.digit').each(function(){
        $(this).click(function(){
            var $digit = $(this).text();
            var currentValue = $digit;
            currentValue = calculator.inputDigit($digit);
            $display.text(currentValue);
        });
    });

    $('#add').click(function(){
        var result = calculator.add();
        $display.text(result);
    });

    $('#equals').click(function(){
        var result = calculator.equals();
        $display.text(result);
    });

    $('#subtract').click(function(){
        var result = calculator.subtract();
        $display.text(result);
    });

    $('#multiply').click(function(){
        var result = calculator.multiply();
        $display.text(result);
    });

    $('#divide').click(function(){
        var result = calculator.divide();
        $display.text(result);
    });

    $('.close').hover(function(){
        $('.close span').toggle();
    });
}

