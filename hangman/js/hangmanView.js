
$(document).ready(function(){

    function HangmanAnimations(){
        // TODO: These are undefined when called in a method?
        this.hangman = '.hangman';
        this.playground = '.playground';
    }

    HangmanAnimations.prototype.initialize = function(){
        //this.bounceIn();
        //this.flipPanel('.p-click.panel', 'click');
        this.checkLetter();
        this.startGameScreen();
    }

    HangmanAnimations.prototype.startGameScreen = function(){
        var playground = $('.playground');
        TweenMax.to(playground, 1, {css:{
            opacity:1}
        })
    }

    HangmanAnimations.prototype.deadManFace = function(){
        $('.hangman').addClass('dead');

        setTimeout($.proxy(function(){
            this.startGameScreen();
        }, HangmanAnimations.prototype),1000);
    }

    HangmanAnimations.prototype.hangWord = function(){
        var word = $('.message span');
        TweenMax.to(word, 2, {css:{
            rotationZ: 90,
            top:'145px',
            left:'-80px'},
            ease:Elastic.easeOut,
            onComplete:this.deadManFace,
            onCompleteScope:this
        });
    }

    HangmanAnimations.prototype.bounceIn = function(){
        var hangman =  $('.hangman');
        TweenMax.to(hangman, 2, {css:{
            top:'0px'},
            ease:Bounce.easeOut,
            onComplete:this.hangWord,
            onCompleteScope:this
        });
    }


    HangmanAnimations.prototype.flipPanel = function(element, hangmanEvent) {
        $(element).on(hangmanEvent, function(){
            $(element).addClass('flip');
            $('form').fadeIn();
        });
    };

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

    HangmanAnimations.prototype.dumpLetter = function(letter){
        console.log(letter);
        $('.incorrect-letters').append('<span class="' + letter + '">' + letter + '</span>');
        $('.letter-guess').parent().append('<div class="white-bg"></div>');

        $('.white-bg').append($('span.' + letter));

        setTimeout(function(){
            TweenMax.to($('.white-bg span'), .5, {css:{
                top:'300px'},
                ease:Bounce.easeOut,
                onComplete:reset
            });
        }, 200);

        function reset(){
            $('form input').focus().val('');
            $('.white-bg').hide();
        }
    }


    HangmanAnimations.prototype.checkLetter = function(){
        var self = this;


        $('.letter-guess').submit(function(e){
            e.preventDefault();

            var letter = $(this).find('input').val();
            console.log(letter);

            if (letter) {
                //TODO: function that will flip all panels with the letter in question

                //Find the panel who's child is the matching letter
                //Flip panel of correct letter

                $('.panel .back p').text(letter).removeClass('flip');
                //TODO: make that letter not clickable after success

            } else {
                var garbage_letter = $(this).find('input').val();
                self.dumpLetter(garbage_letter);
                self.resetPanel();
                //$(this).closest('div.panel').removeClass('flip');
            }

        });
    }

    HangmanAnimations.prototype.resetPanel = function() {
    };

    HangmanAnimations.prototype.checkIfAllCardsFlipped = function() {
        //TODO: Rethink this!
        //Do any .front p have a "?"? 
        // This doesn't work because the last check will always contain a "?";
        if($('div.front p:contains("?")')){
            console.log('continue');
        } else {
            console.log('done!');
        }
    }

   
    HangmanAnimations.prototype.initialize();

});
