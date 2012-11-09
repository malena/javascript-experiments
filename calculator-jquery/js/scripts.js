$(function() {

    $('button').click(function(){

        var firstInputVal = parseInt($('#firstInput').val());
        var secondInputVal = parseInt($('#secondInput').val());


        var calculator = {

            firstInput      : firstInputVal,
            secondInput     : secondInputVal,

            add             : function () {
                return (this.firstInput + this.secondInput);
            },

            subtract        : function () {
                return (this.firstInput - this.secondInput);
            },

            divide          : function () {
                return (this.firstInput / this.secondInput);
            },

            multiply        : function () {
                return (this.firstInput * this.secondInput);
            },

            square          : function () {
                return (Math.sqrt(this.firstInput));
            },

            power           : function () {
                return (Math.pow(this.firstInput, this.secondInput));
            }
        };


        var operationSelected = $('input[name=operation]:checked').val();

        switch (operationSelected) {

            case "add":
                alert(calculator.add());
            break;

            case "subtract":
                alert(calculator.subtract());
            break;

            case "divide":
                alert(calculator.divide());
            break;

            case "multiply":
                alert(calculator.multiply());
            break;

            case "multiply":
                alert(calculator.square());
            break;

            case "square":
                alert(calculator.power());
            break;
        }

    });

});
