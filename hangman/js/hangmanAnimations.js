function HangmanAnimations(element){
    this.element;
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
    $('.hangman').addClass('dead');

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
    $('.playground').hide();
    
    if(game_state === 'win'){
        $('.hangman').addClass('alive')
        $('.message h1').text('Cheers!!');
        var hangman =  $('.hangman');
        TweenMax.to(hangman, 2, {css:{
            top:'0px'},
            ease:Bounce.easeOut,
            onComplete:this.hangWord,
            onCompleteScope:this
        });
    } else if(game_state === 'lose'){
        var hangman =  $('.hangman');
        TweenMax.to(hangman, 2, {css:{
            top:'0px'},
            ease:Bounce.easeOut,
            onComplete:this.hangWord,
            onCompleteScope:this
        });
    }
}

HangmanAnimations.prototype.bounce = function(state){

    if(state == 'in'){
        var hangman =  $('.hangman');
        TweenMax.to(hangman, 2, {css:{
            top:'0px'},
            ease:Bounce.easeOut,
            onComplete:this.hangWord,
            onCompleteScope:this
        });
    } 
}

HangmanAnimations.prototype.dumpLetter = function(letter){
    $('.animated-letter').append($('<span>' + letter + '</span>'));

    setTimeout(function(){
        TweenMax.to($('.animated-letter span'), .2, {css:{
            top:'300px'},
            ease:Bounce.easeOut,
            onComplete:reset
        });
    }, 50);

    function reset(){
        TweenMax.to($('.animated-letter span'), .5, {css:{
            left:'-=50px'},
            ease:Bounce.easeOut
        });
        $('form input').focus().val('');
    }
}

HangmanAnimations.prototype.showBodyPart = function(index){
    $('.hangman-man div').eq(index-1).toggle();
}

$(function(){
    HangmanAnimations();
    HangmanAnimations.prototype.initialize();
});