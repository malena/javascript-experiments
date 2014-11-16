function MapModel(options){
    var defaults = {};
    this.config = $.extend(true, defaults, options || { });

    this.data = this.config.data;
    this.data_array = _.groupBy(this.data, 'category');
};


MapModel.prototype.getCategoryLocations = function(category){
	var that = this;
	var category_array;

	if(category == 'reach'){
		category_array = that.data_array.reach;
	} else if(category == 'brands'){
		category_array = that.data_array.brands;
	} else {
		category_array = that.data_array.facilities;
	}

	return category_array;
};
