function HangmanAnimations(element){
    this.element;
}

HangmanAnimations.prototype.initialize = function(){
    this.startGameScreen();
    //this.endGame();
}

HangmanAnimations.prototype.startGameScreenOld = function(){
    var playground = $('.playground');
    TweenMax.from(playground, 1, {css:{
        opacity:1,
        top: '-200px'},
        ease:Elastic.easeOut
    })
    TweenMax.to(playground, 1, {css:{
        opacity:1}
    })
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
    }, HangmanAnimations.prototype),2000);
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

HangmanAnimations.prototype.endGame = function(){
    $('.playground').hide();
    var hangman =  $('.hangman');
    TweenMax.to(hangman, 2, {css:{
        top:'0px'},
        ease:Bounce.easeOut,
        onComplete:this.hangWord,
        onCompleteScope:this
    });
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
    else if(state == 'out'){
    }
}

HangmanAnimations.prototype.dumpLetter = function(letter){
    console.log(letter);
    //$('.incorrect-letters').append('<span class="' + letter + '">' + letter + '</span>');

    $('.white-bg').append($('<span>' + letter + '</span>'));

    setTimeout(function(){
        TweenMax.to($('.white-bg span'), .5, {css:{
            top:'300px'},
            ease:Bounce.easeOut,
            onComplete:reset
        });
    }, 200);



    function reset(){
        TweenMax.to($('.white-bg span'), .5, {css:{
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