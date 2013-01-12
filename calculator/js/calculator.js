function Calculator(){
    this.lastOperator = null;
    this.lastResult = null;
    this.digitBuffer = new DigitBuffer();
}

Calculator.prototype.inputDigit = function(digit){
    this.digitBuffer.inputDigit(digit);
};

Calculator.prototype.getCurrentValue = function(){
    return this.digitBuffer.getValue();
};

Calculator.prototype.operate = function(operation){
    /*
    if(this.lastResult === null){
        console.log('No last result');

        if (this.digitBuffer.hasValue){
           return this.getCurrentValue();
        }
        return 0;
    }
    */

    if(this.lastOperator === null){
        this.lastOperator = operation;
        this.lastResult = this.digitBuffer.getValue();
        this.digitBuffer.clear();
        console.log('No operation. Last result: ' + this.lastResult);
        return this.lastResult;
    }
    if(this.lastOperator === 'equals'){
        console.log('Equals. Last operator: ' + this.lastOperator +
            'Last result: ' + this.lastResult);
        this.lastOperator = operation;
        return this.lastResult;
    } else {
        var message = this.lastResult + ' ' + this.lastOperator + ' ' + this.getCurrentValue() + ' = ';
        switch(this.lastOperator){
            case 'add':
            this.lastResult = this.lastResult + this.digitBuffer.getValue();
            break;
            case 'subtract':
            this.lastResult = this.lastResult - this.digitBuffer.getValue();
            break;
            case 'multiply':
            this.lastResult = this.lastResult * this.digitBuffer.getValue();
            break;
            case 'divide':
            this.lastResult = this.lastResult / this.digitBuffer.getValue();
            break;
        }
        console.log(message + this.lastResult + '.');

        this.lastOperator = operation;
        this.digitBuffer.clear();
        return this.lastResult;
    }
};

Calculator.prototype.equals = function(){
    return this.operate('equals');
};

Calculator.prototype.add = function(){
    return this.operate('add');
};

Calculator.prototype.subtract = function(){
    return this.operate('subtract');
};

Calculator.prototype.multiply = function(){
    return  this.operate('multiply');
};

Calculator.prototype.divide = function(){
    return  this.operate('divide');
};


