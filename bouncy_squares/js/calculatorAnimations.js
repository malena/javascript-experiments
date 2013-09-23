function Animation(element){
    this.element = element;
}

Animation.prototype.slideIn = function(element){
    TweenLite.to(element, 1, {css:{
        top: '50%'},
        ease: Power3.easeInOut
    });
};

Animation.prototype.borderRadiusJiggle = function(element, state){
    if(state == 'mouseIn'){
        TweenLite.to(element, 0.10, {css:{
            borderRadius:"18px",
            textShadow: '0px 1px 1px 1px blue',
            color: '#000'},
            ease: Linear.easeNone
        });
    }
    if(state == 'mouseOut'){
        TweenMax.to(element, 0.10, {css:{
            borderRadius:"20px",
            textShadow: '0px 1px 1px 1px red',
            color: '#999'},
            ease: Linear.easeNone
        });
    }
};

Animation.prototype.buttonPush = function(element){
    var buttonPush = new TimelineLite();
    buttonPush.to(element, 0.05, {css:{
        borderTop: 'none',
        borderBottom: 'solid 1px #eee',
        boxShadow: 'inset 0 1px 4px rgba(0, 0, 0, 0.6)'},
        onComplete: buttonPush.reverse()
    });
};

$(function(){

    var calculatorAnimation = new Animation({});
    var container = $('.centered');

    calculatorAnimation.slideIn(container);

    $('.digits li').hover(
        function(){
            calculatorAnimation.borderRadiusJiggle($(this), 'mouseIn');
        },
        function(){
            calculatorAnimation.borderRadiusJiggle($(this), 'mouseOut');
        }
    );

    $('.digits li').on('click', function(){
        calculatorAnimation.buttonPush($(this));
    });

    $('.close').on('hover', function(){
        $('.close span').toggle();
    });

    $('.close').click(function(){
        container.hide();
    });


});
