function Animations(){
}

Animations.prototype.slideLeft = function(element, width){

	TweenMax.to(element, 1.6, {css: {
		left: '-=' + width + 'px'}, 
		onComplete: function(){
			console.log('tween completed');
		},
		ease: Expo.easeOut
	});
};

Animations.prototype.slideRight = function(element, width){

	TweenMax.to(element, 1.6, {css: {
		left: '+=' + width + 'px'}, 
		onComplete: function(){
			console.log('tween completed');
		},
		ease: Expo.easeOut
	});
};

Animations.prototype.toggleFade = function (element){

	TweenLite.fromTo(element, 0.2, {opacity:1}, {opacity:0});
	
};

Animations.prototype.toggleHidden = function(element){

	var opacity = $(element).css('opacity');

	if (opacity == '0'){
		TweenMax.to(element, 0.3, {css: {
			opacity: '1'},
			ease: Expo.easeInOut
		});
		$(element).show();
	} else {
		TweenMax.to(element, 0.3, {css: {
			opacity: '0'},
			ease: Expo.easeInOut,
			onComplete: function(){
				$(element).hide('slow');
			}
		});
	}
};
