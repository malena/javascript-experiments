$(function() {

    /* On click store number */
    $('.numbers li').on('click', function(){
        var digit = $(this).attr('id');
        console.log(digit);
    });


});
