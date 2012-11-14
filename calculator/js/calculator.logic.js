$(function() {

    $('button').click(function(){


        var calculator = {

            x: x,
            y: y,

            add             : function () {
                return (this.x + this.y);
            },

            subtract        : function () {
                return (this.x - this.y);
            },

            divide          : function () {
                return (this.x / this.y);
            },

            multiply        : function () {
                return (this.x * this.y);
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
