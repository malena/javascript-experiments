$(function() {

    function CalculatorView(){

        var calculator = new Calculator();
        var $display = $('.display');
        var $digit = $('.digit');

        $('.digit').each(function(){
            $digit.click(function(){
                var currentValue = calculator.inputDigit($digit.val());
                $display.val(currentValue);
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




});
