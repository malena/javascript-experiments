$(document).ready(function(){

	function Hangman(){
	}

	Hangman.prototype.initialize = function(){
		this.populateWord();
	}


    Hangman.prototype.populateWord = function(){
        var word = this.chooseRandomWord();
        for(var i = 0; i < 3; i++){
            $('.random-letter').clone().removeClass('random-letter').appendTo('.random-word');
        }
        $('.random-word li').addClass('random-letter');
    }

    Hangman.prototype.chooseRandomWord = function(){
        var words = ['happy', 'hungry', 'tree'];
        var random = Math.round(Math.random()*words.length);
        return words[random];
    }


	Hangman.prototype.initialize();

});