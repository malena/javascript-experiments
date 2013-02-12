
$(document).ready(function(){

    function HangmanAnimations(){
        var word_count =    $('.word ul li').length;
    }

    HangmanAnimations.prototype.initialize = function(){
       this.bounceIn();
       this.onIntroFlipLetters();
    }

    HangmanAnimations.prototype.deadManFace = function(){
        $('.hangman').addClass('dead');
    }

    HangmanAnimations.prototype.hangWord = function(){
       $('.message span').addClass('tween');

        var word = $('.message span');
        TweenLite.to(word, 3, {css:{
            top: '145px',
            left: '-80px',
            rotationZ: 90},
            ease: Elastic.easeOut,
            onComplete: this.deadManFace
        });
    }

    HangmanAnimations.prototype.bounceIn = function(){
        var hangman =  $('.hangman');
        TweenLite.to(hangman, 3, {css:{
            top: '0px'},
            ease: Bounce.easeOut,
            onComplete: this.hangWord 
        });
    }

    HangmanAnimations.prototype.transformPerspective = function(){
        var word =          $('.word ul');
        TweenLite.to(word, 3, {css:{
            transformPerspective: 200
        }});
    }

    HangmanAnimations.prototype.onHoverFlipLetter = function(element) {
        $('.hover').hover(function(){
            $(this).addClass('flip');
        },function(){
            $(this).removeClass('flip');
        });
    }

    HangmanAnimations.prototype.onIntroFlipLetters = function(element) {
        var i =             0;
        var secret_letter = $('.hover');

        var flip = function(i){
            secret_letter.eq(i).addClass('flip');

            setInterval(function(){
               secret_letter.eq(i).removeClass('flip');
            }, 280);
        };
        setInterval(function(){
            flip(i);
            return i++
        },190);
    }

  

    HangmanAnimations.prototype.initialize();

});
