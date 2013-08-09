function Controller(){
	this.data = new Data();
	this.currentList = this.getList();
}

Controller.prototype.getList = function(){

	var wishlist = _.pluck(this.data.list, 'name');
	return wishlist;
};

Controller.prototype.toggleActive = function(element){
	$(element).toggleClass('active');
};

Controller.prototype.addToList = function(product_id) {
	var newList = _.union(this.currentList, [product_id]);
	console.log(newList);
	this.currentList = newList;
	return newList;
};

Controller.prototype.removeFromList = function(product_id) {
	var newList = _.without(this.currentList, product_id);
	console.log(newList);
	this.currentList = newList;
	return newList;
};

Controller.prototype.getWishProduct = function(element){
	var product_id = $(element).attr('data-id');
	return product_id;
};

Controller.prototype.productStatusIn = function(element){
	$(element).parent('li').attr('data-in-list', 'true');
};

Controller.prototype.productStatusOut = function(element){
	$(element).parent('li').attr('data-in-list', 'false');
};
