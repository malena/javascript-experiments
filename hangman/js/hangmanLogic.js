function HangmanWordDisplay(element){
	this.element;	
}

HangmanWordDisplay.prototype.initialize = function(){
    this.words = ['happy', 'hungry', 'tree', 'mug', 'cat', 'dog'];
    this.words_length = this.words.length;

    var panel_count = this.getWordLetterCount();
    console.log('panel count: ' + panel_count);

    this.clonePanels(panel_count);

}

HangmanWordDisplay.prototype.getWord = function(){
    var random_index = this.getRandomIndex(6);
    if (this.words[random_index] === undefined){
        console.log('back up word ' + this.words[1]);
        return this.words[1];
    } else {
       console.log('chosen word is ' + this.words[random_index]);
       return this.words[random_index];
    }
}

HangmanWordDisplay.prototype.getWordLetterCount = function(){
    var word = this.getWord();
    return word.length;
}

HangmanWordDisplay.prototype.getRandomIndex = function(word_list_count){
    var random = Math.round(Math.random() * (word_list_count -  0) + 0);
    return random;
}

HangmanWordDisplay.prototype.clonePanels = function(panel_count){
    for(var i = 1; i < panel_count; i++){
        $('.random-letter').clone().removeClass('random-letter').appendTo('.random-word');
    }
    $('.random-word li').addClass('random-letter');
}

HangmanWordDisplay.prototype.populatePanelsWithLetters = function(){

}

$(function(){
	HangmanWordDisplay.prototype.initialize();	
});


