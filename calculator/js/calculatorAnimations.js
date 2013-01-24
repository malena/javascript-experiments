$(document).ready(function(){

    function Animation(element){
        this.element = element;
    }

    Animation.prototype.slideIn = function(element){
        console.log('slide in animation');
    };

    var calculatorAnimation = new Animation({});


    var calculator = $('#calculator');
    calculatorAnimation.slideIn(calculator);



});
