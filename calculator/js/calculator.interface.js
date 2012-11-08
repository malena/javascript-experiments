$(function() {

    $('.numbers li').on('click', function(){
        var button = $(this);
        TweenLite.to(button, 1, {css:{
            borderTop: 'none',
            borderBottom: 'solid 1px #eee',
            boxShadow: 'inset 0 1px 4px rgba(0, 0, 0, 0.6)'}
        });
    });

});
