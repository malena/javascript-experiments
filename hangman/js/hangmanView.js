function HangmanView(){
	var hangman = new HangmanWordDisplay({});
	var hangman_initialize = hangman.initialize();
	var hangman_word_array = hangman.word_array;
    var hangman_word_letter_count = hangman.letter_count;
    var incorrect = 1;
    var index_correct = 0;

    $('.letter-guess').submit(function(e){
        e.preventDefault();

        var letter = $(this).find('input').val(); // input letter
        var letter_index = hangman_word_array.indexOf(letter); // letter index
        var animate = new HangmanAnimations({});

        // dump letter
    	if(letter_index == -1){
            //keep track of number of incorrect letters
    		//animate incorrect letter
            animate.showBodyPart(incorrect);
            if (incorrect == 6) {
                setTimeout(function(){
                    animate.endGame('lose');
                }, 1000);
            }
            animate.dumpLetter(letter);
            incorrect++
    	}
        //if there is a return value then flip letter of matching index
        else {
            index_correct++;
            if(index_correct == hangman.letter_count){
                $("div.guess p:contains('" + letter + "')").parent().parent().addClass('flip');
                setTimeout(function(){
                    $.proxy(animate.endGame('win'), animate);
                }, 1000);
            } else {
                $("div.guess p:contains('" + letter + "')").parent().parent().addClass('flip');
            }
        } 

        //reset input box
        $('form input').focus().val('');
    });

}