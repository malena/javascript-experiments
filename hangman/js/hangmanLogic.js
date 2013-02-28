function HangmanWordDisplay(){
    this.words          = ['sake', 'vodka', 'brandy', 'cider', 'rum'];
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
    var random_index = this.getRandomIndex(this.words_count);

    if (this.words[random_index] === undefined){
       return this.words[0];

    } else {
       return this.words[random_index];
    }
}

HangmanWordDisplay.prototype.getRandomIndex = function(word_list_count){
    var random = Math.round(Math.random() * (word_list_count) + 0);
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