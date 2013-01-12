function Calculator(){
    this.currentValue = null;
    this.lastOperator = null;
    this.currentOperator = null;
    this.stringValue = '';
    this.clearState = false;
}

Calculator.prototype.inputDigit = function(digit){
    if(this.currentValue === null){
        this.currentValue = digit;
        console.log('I\'m null!');
        return this.currentValue;
    }
    else {
        if(this.clearState === true) {
            this.currentValue = digit;
            console.log('display cleared');
            this.clearState = false;
            return this.currentValue;
        }
        else {
            this.stringValue = '' + this.currentValue + digit;
            this.currentValue = this.stringValue;
            return this.currentValue;
        }

        this.stringValue = '' + this.currentValue + digit;
        this.currentValue = this.stringValue;
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
        this.clearState = true;
        return this.lastResult;
    }
    if(this.lastOperator === 'equals'){
        this.lastOperator = 'add';
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

        this.lastOperator = 'add';
        this.clearState = true;
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
        this.clearState = true;
        return this.lastResult;
    }
    if(this.lastOperator === 'equals'){
        this.lastOperator = 'subtract';
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

        this.lastOperator = 'subtract';
        this.clearState = true;
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
        this.clearState = true;
        return this.lastResult;
    }
    if(this.lastOperator === 'equals'){
        this.lastOperator = 'multiply';
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

        this.lastOperator = 'multiply';
        this.clearState = true;
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
        this.clearState = true;
        return this.lastResult;
    }
    if(this.lastOperator === 'equals'){
        this.lastOperator = 'multiply';
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

        this.lastOperator = 'divide';
        this.clearState = true;
        return this.lastResult;
    }
};

Calculator.prototype.equals = function(){
    if(this.currentValue === null){
        return 0;
    }
    if(this.lastOperator === null){
        this.lastResult = this.currentValue;
        this.lastOperator = 'equals';
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

        this.lastOperator = 'equals';
        this.clearState = true;
        return this.lastResult;
    }
};

