$(function() {

    var numberSet = [ 0 ];
    var operators = [];
    var results = [];

    var handleDigitClick = function(event) {
        var digit = $(this).attr('id');
        $('.digit').text(digit);
    };

    $('li.numbers').on('click', handleDigitClick);

});
