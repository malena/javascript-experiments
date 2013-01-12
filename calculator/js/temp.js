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
