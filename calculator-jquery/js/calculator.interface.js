$(function() {

    /*
    // Using GSAP
        $('.numbers li').on('click', function(){
            var button = $(this);
            var buttonClicked = new TimelineLite();
            buttonClicked.to(button, 0.20, {css:{
                borderTop: 'none',
                borderBottom: 'solid 1px #eee',
                boxShadow: 'inset 0 1px 4px rgba(0, 0, 0, 0.6)'},
                onComplete: buttonClicked.reverse()
            });
        });
    */


    // Using jQuery
    $('.numbers li').on('click', function(){
        var $button = $(this);

        $button.toggleClass('active');

        setTimeout(function(){
            $button.removeClass('active');
        }, 100);
    });


});
