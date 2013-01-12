function Calculator(){
    this.previousValue = null;
    this.lastOperator = null;
    this.currentOperator = null;
    this.stringValue = '';
    this.clearState = false;
    this.digitBuffer = new DigitBuffer();
}


Calculator.prototype.inputDigit = function(digit){
    this.digitBuffer.inputDigit(digit);
};

Calculator.prototype.getCurrentValue = function(){
    return this.digitBuffer.getValue();
};

Calculator.prototype.add = function(){
    if(!this.digitBuffer.hasValue){
        return 0;
    }
    if(this.lastOperator === null){
        this.lastOperator = 'add';
        this.lastResult = this.digitBuffer.getValue();
        this.digitBuffer.clear();
        return this.lastResult;
    }
    if(this.lastOperator === 'equals'){
        this.lastOperator = 'add';
        return this.lastResult;
    } else {
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

        this.lastOperator = 'add';
        this.digitBuffer.clear();
        return this.lastResult;
    }
};

Calculator.prototype.subtract = function(){
    if(this.previousValue === null){
        return 0;
    }
    if(this.lastOperator === null){
        this.lastOperator = 'subtract';
        this.lastResult = this.previousValue;
        this.clearState = true;
        return this.lastResult;
    }
    if(this.lastOperator === 'equals'){
        this.lastOperator = 'subtract';
        return this.lastResult;
    } else {
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

        this.lastOperator = 'subtract';
        this.digitBuffer.clear();
        return this.lastResult;
    }
};

Calculator.prototype.multiply = function(){
    if(this.previousValue === null){
        return 0;
    }
    if(this.lastOperator === null){
        this.lastOperator = 'multiply';
        this.lastResult = this.previousValue;
        this.clearState = true;
        return this.lastResult;
    }
    if(this.lastOperator === 'equals'){
        this.lastOperator = 'multiply';
        return this.lastResult;
    } else {
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

        this.lastOperator = 'multiply';
        this.digitBuffer.clear();
        return this.lastResult;
    }
};

Calculator.prototype.divide = function(){
    if(this.previousValue === null){
        return 0;
    }
    if(this.lastOperator === null){
        this.lastOperator = 'divide';
        this.lastResult = this.previousValue;
        this.clearState = true;
        return this.lastResult;
    }
    if(this.lastOperator === 'equals'){
        this.lastOperator = 'multiply';
        return this.lastResult;
    } else {
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

        this.lastOperator = 'divide';
        this.digitBuffer.clear();
        return this.lastResult;
    }
};

Calculator.prototype.equals = function(){
    if(this.previousValue === null){
        return 0;
    }
    if(this.lastOperator === null){
        this.lastResult = this.previousValue;
        this.lastOperator = 'equals';
        return this.lastResult;
    } else {
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

        this.lastOperator = 'equals';
        this.digitBuffer.clear();
        return this.lastResult;
    }
};

