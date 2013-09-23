$(document).ready(function(){
	$('.panel').on('click', function(){
		$(this).addClass('flip');
	});

	$('#LetterGuess').submit(function(){
		var letter = $('.back p').text();

		if ($("input:first").val() == letter) {
			//function that will flip all panels with the letter in question
			alert('yes');	
		}

	});
});
