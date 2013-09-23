function CalculatorView(){

    var calculator = new Calculator({});

    var $display = $('.display');

    $('.digit').each(function(){
        $(this).click(function(){
            var $digit = $(this).text();
            calculator.inputDigit($digit);
            var currentValue = calculator.getCurrentValue();
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



}

