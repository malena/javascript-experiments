$(function() {

	var controller = new Controller();
	controller.getList();

	//Binding
	$('a').on('click', function(){

		controller.toggleActive(this);
		var siblings = $(this).siblings('a');
		controller.toggleActive(siblings);

		controller.getWishProduct(this);

		var product_id = $(this).attr('data-id');

		var that = this;

		if($(this).parent('li').attr('data-in-list') == 'false'){
			controller.addToList(product_id);
			controller.productStatusIn(that);
		} else {
			controller.removeFromList(product_id);
			controller.productStatusOut(that);
		}
	});

});