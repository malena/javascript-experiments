$(window).load(function(){

	var slider = new Slider();
	var animations = new Animations();
	var $container = $('ul');
	var count = 0;
	var max_count = slider.clickCount;

	$('a').on('click', function(){

		var width = slider.width; 

		//TODO: count needs to be relative to slider object length (img count)
		var image_hide = $('ul').find('li').eq(count);
		console.log(count);

		count++;

		animations.toggleFade(image_hide);

		if($(this).hasClass('right')){
			animations.slideLeft($container, width);

			if(count == 1){
				animations.toggleHidden('.left');
			} else if(count == max_count){
				animations.toggleHidden('.right');
				count = 0;
			}


		} else if($(this).hasClass('left')){
			animations.slideRight($container, width);

			if(count == 1){
				animations.toggleHidden('.right');
			}
			else if(count == max_count){
				animations.toggleHidden('.left');
				count = 0;
			}
		}
	});

});