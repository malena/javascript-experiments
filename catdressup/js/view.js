function dressUpView(){
	var model = new CatImage();

	$('a').on('click', function(){
		alert('hello' + model._getTag());
	});
}
