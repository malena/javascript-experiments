function HangmanWordDisplay(){
    this.words          = ['happy', 'hungry', 'tree', 'mug', 'cat', 'dog'];
    this.words_count    = this.words.length;
    this.word           = this.getWord();
    this.letter_count   = this.word.length; 
    this.word_array     = this.word.split('');
}

HangmanWordDisplay.prototype.initialize = function(){
    this.clonePanels(this.letter_count);
    this.populatePanelsWithLetters();
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

HangmanWordDisplay.prototype.getRandomIndex = function(word_list_count){
    var random = Math.round(Math.random() * (word_list_count -  0) + 0);
    return random;
}

HangmanWordDisplay.prototype.clonePanels = function(letter_count){
    for(var i = 1; i < letter_count; i++){
        $('.random-letter').clone().removeClass('random-letter').appendTo('.random-word');
    }
    $('.random-word li').addClass('random-letter');
}

HangmanWordDisplay.prototype.populatePanelsWithLetters = function(){
    var character_array = this.word.split('');

    $('div.back p').each(function(index){
        $(this).text(character_array[index]);
    });
}