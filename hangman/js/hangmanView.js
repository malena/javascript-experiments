function HangmanView(){

	var hangman = new HangmanWordDisplay({});
	var hangman_initialize = hangman.initialize();
	var hangman_word_array = hangman.word_array;

    $('.letter-guess').submit(function(e){
        e.preventDefault();

        var letter = $(this).find('input').val();
        //console.log('input letter: ' + letter);
        var letter_index = hangman_word_array.indexOf(letter);
        //console.log('letter index: ' + letter_index);
    	var array_letter = hangman_word_array[letter_index];	
    	//console.log('array letter is: ' + array_letter);

    	if(letter_index >= 0){
	        $("div.guess p:contains('" + letter + "')").parent().parent().addClass('flip');
    	} 
    	else {
    		console.log('no match');
    		var animate = new HangmanAnimations({});
    		animate.dumpLetter(letter);
    		//animate incorrect letter
    	}
    });

}