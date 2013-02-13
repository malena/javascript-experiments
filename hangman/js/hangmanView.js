
$(document).ready(function(){

    function HangmanAnimations(){
    }

    HangmanAnimations.prototype.initialize = function(){
       this.bounceIn();
       this.onClickFlipPanel();
       this.checkLetter();
    }

    HangmanAnimations.prototype.startGameScreen = function(){
        var playground = $('.playground');
        TweenMax.to(playground, 1, {css:{
            opacity:1}
        })
    }

    HangmanAnimations.prototype.deadManFace = function(){
        $('.hangman').addClass('dead');

        setTimeout(function(){
            HangmanAnimations.prototype.startGameScreen();
        },3000);
    }

    HangmanAnimations.prototype.hangWord = function(){
        var word = $('.message span');
        TweenMax.to(word, 2, {css:{
            rotationZ: 90,
            top:'145px',
            left:'-80px'},
            ease:Elastic.easeOut,
            onComplete:HangmanAnimations.prototype.deadManFace
        });
    }

    HangmanAnimations.prototype.bounceIn = function(){
        var hangman =  $('.hangman');
        TweenMax.to(hangman, 2, {css:{
            top:'0px'},
            ease:Bounce.easeOut,
            onComplete:this.hangWord
        });
    }

    HangmanAnimations.prototype.onClickFlipPanel = function(){
        $('.hover').on('click', function(){
            $(this).addClass('flip');
            $('form').fadeIn();
        });
    }

    HangmanAnimations.prototype.onIntroFlipLetters = function(element) {
        var i =             0;
        var secret_letter = $('.hover');

        function flip(i){
            secret_letter.eq(i).addClass('flip');

            setInterval(function(){
               secret_letter.eq(i).removeClass('flip');
            }, 280);
        };

        var word_count =    $('.word ul li').length;
        if (i <= word_count) {
            setInterval(function(){
                flip(i);
                return i++
            },190);
        }
    }

    HangmanAnimations.prototype.checkLetter = function(){
        $('.letter-guess').submit(function(e){
            e.preventDefault();
            var letter = $(this).prev().text();

            if ($("input:first").val() === letter) {
                //function that will flip all panels with the letter in question
                alert(letter);
                $(this).closest('div.panel').removeClass('flip');
                $(this).closest('div.front p').append(letter);

            } else {
                alert('nope');
            }
        });
    }

    HangmanAnimations.prototype.initialize();

});
