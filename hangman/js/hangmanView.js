function HangmanView(){
    this.incorrect_index = 0;

	var hangman = new HangmanWordDisplay({});
	var hangman_initialize = hangman.initialize();
	var hangman_word_array = hangman.word_array;
    var hangman_word_letter_count = hangman.letter_count;
    var i = 0;
    var index_correct = 0;

    $('.letter-guess').submit(function(e){
        e.preventDefault();

        var letter = $(this).find('input').val();
        //console.log('input letter: ' + letter);
        var letter_index = hangman_word_array.indexOf(letter);
        //console.log('letter index: ' + letter_index);
    	var array_letter = hangman_word_array[letter_index];	
    	//console.log('array letter is: ' + array_letter);

        var animate = new HangmanAnimations({});

        //if there is a return value then flip letter of matching index
    	if(letter_index >= 0){
            console.log(hangman.letter_count);
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
        // otherwise dump letter
    	else {
            i++;
    		console.log('no match');
    		animate.dumpLetter(letter);

            //keep track of number of incorrect letters
    		//animate incorrect letter
            console.log(i);
            animate.showBodyPart(i);

            if (i == 6) {
                setTimeout(function(){
                    animate.endGame('lose');
                }, 1000);
            }
    	}

        //reset input box
        $('form input').focus().val('');
    });

}