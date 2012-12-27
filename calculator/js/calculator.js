$(function() {

    function Calculator(){}

    Calculator.prototype.inputDigit = function(digit){

        if(this.currentValue === null){
            this.currentValue = digit;
        } else {
            var stringValue = '' + this.currentValue + digit;
            this.currentValue = parseInt(stringValue, 10);
        }

        return this.currentValue;
    };

    Calculator.prototype.add = function(){

        if(this.currentValue === null){
            return 0;
        }
        if(this.lastOperator === null){
            this.lastOperator = 'add';
            this.lastResutls = this.currentValue;
        }
        else {
            switch(this.lastOperator){
                case 'add':
                this.lastResult = this.lastResult + this.currentValue;
                break;
                case 'subtract':
                this.lastResult = this.lastResult - this.currentValue;
                break;
            }
        }
    };

});
