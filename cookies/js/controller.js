function Controller(){
	this.data = new Data();
	this.current_list = this.getList();
	this.cookie_name = 'awesome-cookie';
	this.cookie_created = null; 

}

Controller.prototype.initializeCookie = function(){
	this.makeInitialCookie();
	this.populateEmptyCookie();
    // console.log("cookie is created =" + this.cookie_created);
    this.makeCookie(this.current_list);
	this.cookie_list = document.cookie; 
};

Controller.prototype.makeInitialCookie = function() {
    document.cookie = this.cookie_name + "=[]; path=/";
    this.cookie_created = 'true';
};

Controller.prototype.makeCookie = function(list) {
    document.cookie = this.cookie_name + "=" + list + "; path=/";
    console.log("cookie updated to " + document.cookie);
};

Controller.prototype.populateEmptyCookie = function(list){
    document.cookie = this.cookie_name  + "=" + list + "; path=/";
    //console.log('doc cookie is' + document.cookie);		
};


Controller.prototype.getList = function(){
	var wishlist = _.pluck(this.data.list, 'name');
	return wishlist;
};

Controller.prototype.toggleActive = function(element){
	$(element).toggleClass('active');
};

Controller.prototype.addToList = function(product_id) {
	var newList = _.union(this.current_list, [product_id]);
	//console.log("new list added " + newList);
	this.current_list = newList;
	//console.log("current_list " + this.current_list);
	return newList;
};

Controller.prototype.removeFromList = function(product_id) {
	var newList = _.without(this.current_list, product_id);
	//console.log("new list removed " + newList);
	this.current_list = newList;
	//console.log("current list " + this.current_list);
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

Controller.prototype.updateLabelState = function(){
	var i;
	var myCookieArray = this.getListFromCookie();	
	var myLabelArray = this.getListOfProducts();

	for(i=myLabelArray.length - 1; i>= 0; --i){
		if(myCookieArray.indexOf(myLabelArray[i]) >= 0){
			myLabelArray.splice(i, 1);	
			console.log(myLabelArray);
		}	
	}
};

Controller.prototype.getListOfProducts = function(){

	var array = [];

	$('li').each(function(index){
		var id = $(this).attr('data-id');
		array.push(id)
	});

	return array;
};

Controller.prototype.getListFromCookie = function(){
        var cookie_value = document.cookie;
        var cookie_start = cookie_value.indexOf(" " + this.cookie_name + "=");
        if (cookie_start === -1) {
          cookie_start = cookie_value.indexOf(this.cookie_name + "=");
        }
        if (cookie_start === -1) {
          cookie_value = null;
        }
        else {
            cookie_start = cookie_value.indexOf("=", cookie_start) + 1;
            var cookie_end = cookie_value.indexOf(";", cookie_start);
            if (cookie_end === -1) {
                cookie_end = cookie_value.length;
            }
            //cookie_value = unescape(cookie_value.subtring(0,n));
            cookie_value = unescape(cookie_value.substring(cookie_start,cookie_end));
            cookie_value = cookie_value.split(',');
        }

        return cookie_value;
};