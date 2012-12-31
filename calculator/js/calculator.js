function Calculator(){
    this.currentValue = null;
    this.lastOperator = null;
    var stringValue;
}


Calculator.prototype.inputDigit = function(digit){
    if(this.currentValue === null){
        this.currentValue = digit;
        return this.currentValue;
    }
    if(this.lastOperator !== null){
        $('.display').text('');
        stringValue = digit;
        this.currentValue = stringValue;
        return this.currentValue;
    } else {
        stringValue = '' + this.currentValue + digit;
        this.currentValue = stringValue;
        return this.currentValue;
    }
};

Calculator.prototype.add = function(){
    if(this.currentValue === null){
        return 0;
    }
    if(this.lastOperator === null){
        this.lastOperator = 'add';
        this.lastResult = this.currentValue;
        return this.lastResult;
    } else {
        switch(this.lastOperator){
            case 'add':
            this.lastResult = parseInt(this.lastResult,10) + parseInt(this.currentValue,10);
            break;
            case 'subtract':
            this.lastResult = parseInt(this.lastResult,10) - parseInt(this.currentValue,10);
            break;
            case 'multiply':
            this.lastResult = parseInt(this.lastResult,10) * parseInt(this.currentValue,10);
            break;
            case 'divide':
            this.lastResult = parseInt(this.lastResult,10) / parseInt(this.currentValue,10);
            break;
        }
        return this.lastResult;
    }
};

Calculator.prototype.subtract = function(){
    if(this.currentValue === null){
        return 0;
    }
    if(this.lastOperator === null){
        this.lastOperator = 'subtract';
        this.lastResult = this.currentValue;
        return this.lastResult;
    } else {
        switch(this.lastOperator){
            case 'add':
            this.lastResult = parseInt(this.lastResult,10) + parseInt(this.currentValue,10);
            break;
            case 'subtract':
            this.lastResult = parseInt(this.lastResult,10) - parseInt(this.currentValue,10);
            break;
            case 'multiply':
            this.lastResult = parseInt(this.lastResult,10) * parseInt(this.currentValue,10);
            break;
            case 'divide':
            this.lastResult = parseInt(this.lastResult,10) / parseInt(this.currentValue,10);
            break;
        }
        return this.lastResult;
    }
};

Calculator.prototype.multiply = function(){
    if(this.currentValue === null){
        return 0;
    }
    if(this.lastOperator === null){
        this.lastOperator = 'multiply';
        this.lastResult = this.currentValue;
        return this.lastResult;
    } else {
        switch(this.lastOperator){
            case 'add':
            this.lastResult = parseInt(this.lastResult,10) + parseInt(this.currentValue,10);
            break;
            case 'subtract':
            this.lastResult = parseInt(this.lastResult,10) - parseInt(this.currentValue,10);
            break;
            case 'multiply':
            this.lastResult = parseInt(this.lastResult,10) * parseInt(this.currentValue,10);
            break;
            case 'divide':
            this.lastResult = parseInt(this.lastResult,10) / parseInt(this.currentValue,10);
            break;
        }
        return this.lastResult;
    }
};

Calculator.prototype.divide = function(){
    if(this.currentValue === null){
        return 0;
    }
    if(this.lastOperator === null){
        this.lastOperator = 'divide';
        this.lastResult = this.currentValue;
        return this.lastResult;
    } else {
        switch(this.lastOperator){
            case 'add':
            this.lastResult = parseInt(this.lastResult,10) + parseInt(this.currentValue,10);
            break;
            case 'subtract':
            this.lastResult = parseInt(this.lastResult,10) - parseInt(this.currentValue,10);
            break;
            case 'multiply':
            this.lastResult = parseInt(this.lastResult,10) * parseInt(this.currentValue,10);
            break;
            case 'divide':
            this.lastResult = parseInt(this.lastResult,10) / parseInt(this.currentValue,10);
            break;
        }
        return this.lastResult;
    }
};
