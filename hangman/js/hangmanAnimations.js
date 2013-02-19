function HangmanAnimations(element){
    this.element;
}

HangmanAnimations.prototype.initialize = function(){
    //this.bounce('in');
    //this.flipPanel('.p-click.panel', 'click');
    this.startGameScreen();
}

HangmanAnimations.prototype.startGameScreen = function(){
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
        top:'145px',
        left:'-80px'},
        ease:Elastic.easeOut
    });
    this.deadManFace();
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

$(function(){
    HangmanAnimations();
    HangmanAnimations.prototype.initialize();
});