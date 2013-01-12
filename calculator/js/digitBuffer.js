function DigitBuffer(){
    this.hasValue = false;
    this.digitChars = '0';
}

DigitBuffer.prototype.inputDigit = function(digit){
    this.digitChars = this.digitChars + digit;
    this.hasValue = true;
};

DigitBuffer.prototype.clear = function(){
    this.digitChars = '0';
    this.hasValue = false;
};

DigitBuffer.prototype.getValue = function(){
    return parseInt(this.digitChars,10);
};


