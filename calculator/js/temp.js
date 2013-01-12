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
