function HangmanView(){
    this.incorrect_index = 0;

	var hangman = new HangmanWordDisplay({});
	var hangman_initialize = hangman.initialize();
	var hangman_word_array = hangman.word_array;
    var i = 0;

    $('.letter-guess').submit(function(e){
        e.preventDefault();

        var letter = $(this).find('input').val();
        //console.log('input letter: ' + letter);
        var letter_index = hangman_word_array.indexOf(letter);
        //console.log('letter index: ' + letter_index);
    	var array_letter = hangman_word_array[letter_index];	
    	//console.log('array letter is: ' + array_letter);


        //if there is a return value then flip letter of matching index
    	if(letter_index >= 0){
	        $("div.guess p:contains('" + letter + "')").parent().parent().addClass('flip');
    	} 
        // otherwise dump letter
    	else {
            i++;
    		console.log('no match');
    		var animate = new HangmanAnimations({});
    		animate.dumpLetter(letter);

            //keep track of number of incorrect letters
    		//animate incorrect letter
            console.log(i);
            animate.showBodyPart(i);

            if (i == 6) {
                animate.endGame();
            }

    	}

        //reset input box
        $('form input').focus().val('');
    });

}