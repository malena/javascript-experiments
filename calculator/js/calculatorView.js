function CalculatorView(){

    var calculator = new Calculator({});

    var $display = $('.display');

    $('.digit').each(function(){
        $(this).click(function(){
            var $digit = $(this).text();
            var currentValue = calculator.inputDigit($digit);
            $display.text(currentValue);
        });
    });

    $('#add').click(function(){
        var result = calculator.add();
        $display.val(result);
    });

    $('#equals').click(function(){
        var result = calculator.equals();
        $display.val(result);
    });
}

