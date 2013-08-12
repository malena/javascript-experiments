$(function() {

	var controller = new Controller();
	console.log(document.cookie);
	controller.getListFromCookie();
	//controller.updateLabelState();

	//console.log("on init current list is" + controller.current_list);
	//console.log("on init cookie list is" + controller.cookie_list);


	//Binding
	$('a').on('click', function(){
		//console.log('on click cookie list is' + document.cookie);

		controller.initializeCookie();

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

		controller.makeCookie(controller.current_list);
	});

});