$(document).ready(function(){


    //CLEAN UP!

    var letter = $('.word ul');
    TweenLite.to(letter, 3, {css:{
        transformPerspective: 200
    }});

    var hangman = $('.hangman');
    TweenLite.to(hangman, 3, {css:{
        top: '0px'},
        ease: Bounce.easeOut
    });

	$('.hover').hover(function(){
		$(this).addClass('flip');
	},function(){
		$(this).removeClass('flip');
	});

    var word_count = $('.word ul li').length;

    var flip = function(i){

            secret_letter.eq(i).addClass('flip');

            setInterval(function(){
               secret_letter.eq(i).removeClass('flip');
            }, 280);
    };


    var secret_letter = $('.hover');

    var i = 0;

    setInterval(function(){
        flip(i);
        return i++
    },190);


});
