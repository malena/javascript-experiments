
$(document).ready(function(){

    //Todo: Clean this up!

    var calculator = $('#calculator');
    calculator.css({ 'display':'block', 'position':'relative', 'top':'-800px'});
    TweenLite.to(calculator, 1, {css:{display:'block', top: '150px'}, ease: Power3.easeInOut});
    TweenLite.to(calculator, 1, {css:{boxShadow: '0px 17px 40px 4px #999'}});

    $('.digits li').on('click', function(){
        var button = $(this);
        var buttonClicked = new TimelineLite();
        buttonClicked.to(button, 0.05, {css:{
            borderTop: 'none',
            borderBottom: 'solid 1px #eee',
            boxShadow: 'inset 0 1px 4px rgba(0, 0, 0, 0.6)'},
            onComplete: buttonClicked.reverse()
        });
    });

    $('.digits li').hover(function(){
        var digit = $(this);
        TweenMax.to(digit, 0.10, {css:{borderRadius:"18px", textShadow: '0px 1px 1px 1px blue', color: '#000'}, ease: Linear.easeNone});
    },function(){
        var digit = $(this);
        TweenMax.to(digit, 0.10, {css:{borderRadius:"20px", textShadow: '0px 1px 1px 1px red', color: '#999'}, ease: Linear.easeNone});
    });

    $('.close').on('hover', function(){
        $('.close span').toggle();
    });

    $('.close').click(function(){
        calculator.hide();
    });


});
