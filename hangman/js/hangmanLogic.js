function HangmanWordDisplay(){
    this.words          = ['happy', 'hungry', 'tree', 'mug', 'cat', 'dog'];
    this.words_count    = this.words.length;
    this.word           = this.getWord();
    this.letter_count   = this.word.length; 
    this.word_array     = this.word.split('');
    this.letter_panel   = '.random-letter';
    this.letter_element = '.div.back p';
}

HangmanWordDisplay.prototype.initialize = function(){
    this.clonePanels(this.letter_count, $(this.letter_panel));
    this.populatePanelsWithLetters(this.word_array, this.letter_element);
}

HangmanWordDisplay.prototype.getWord = function(){
    var random_index = this.getRandomIndex(6);
    if (this.words[random_index] === undefined){
        return this.words[1]; //back up word
    } else {
       return this.words[random_index]; //chosen word
    }
}

HangmanWordDisplay.prototype.getRandomIndex = function(word_list_count){
    var random = Math.round(Math.random() * (word_list_count -  0) + 0);
    return random;
}

HangmanWordDisplay.prototype.clonePanels = function(amount, element){
    for(var i = 1; i < amount; i++){
        element.clone().removeClass('random-letter').appendTo('.random-word');
    }
    $('.random-word li').addClass('random-letter');
}

HangmanWordDisplay.prototype.populatePanelsWithLetters = function(word_array, element){
    $(element).each(function(index){
        $(this).text(word_array[index]);
    });
}