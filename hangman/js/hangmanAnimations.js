function HangmanAnimations(){
    this.animated_letter_container = '.animated-letter';
    this.hangman = '.hangman';
}

HangmanAnimations.prototype.initialize = function(){
    this.startGameScreen();
}

HangmanAnimations.prototype.startGameScreen = function(){
    var playground = $('.playground');
    TweenMax.from(playground, 1, {css:{
        opacity:1}
    })
    TweenMax.to(playground, 1, {css:{
        opacity:1}
    })
}

HangmanAnimations.prototype.deadManFace = function(){
    $(this.hangman).addClass('dead');

    setTimeout($.proxy(function(){
        this.startGameScreen();
    }, HangmanAnimations.prototype),1000);
}

HangmanAnimations.prototype.hangWord = function(){
    var word = $('.message span');
    TweenMax.to(word, 2, {css:{
        rotationZ: 90,
        top:'88px',
        left:'81px'},
        ease:Elastic.easeOut
    });
    this.deadManFace();
}

HangmanAnimations.prototype.endGame = function(game_state){
    var self = this;
    $('.playground').hide();
    
    if(game_state === 'win'){
        $(self.hangman).addClass('alive')
        $('.message h1').text('Cheers!!');
        TweenMax.to($(self.hangman), 2, {css:{
            top:'0px'},
            ease:Bounce.easeOut,
            onComplete:this.hangWord,
            onCompleteScope:this
        });
    } else if(game_state === 'lose'){
        TweenMax.to($(self.hangman), 2, {css:{
            top:'0px'},
            ease:Bounce.easeOut,
            onComplete:this.hangWord,
            onCompleteScope:this
        });
    }
}

HangmanAnimations.prototype.bounce = function(state){
    var self = this;

    if(state == 'in'){
        TweenMax.to($(self.hangman), 2, {css:{
            top:'0px'},
            ease:Bounce.easeOut,
            onComplete:this.hangWord,
            onCompleteScope:this
        });
    } 
}

HangmanAnimations.prototype.dumpLetter = function(letter){
    $(this.animated_letter_container).append($('<span class="tween-letter">' + letter + '</span>'));

    setTimeout(function(){
        TweenMax.to($('.tween-letter'), .2, {css:{
            top:'300px'},
            ease:Bounce.easeOut,
            onComplete:reset
        });
    }, 50);

    function reset(){
        TweenMax.to($('.tween-letter'), .5, {css:{
            left:'-=50px'},
            ease:Bounce.easeOut
        });
        $('form input').focus().val('');
    }
}

HangmanAnimations.prototype.showBodyPart = function(index){
    $('.hangman-man div').eq(index-1).toggle();
}
