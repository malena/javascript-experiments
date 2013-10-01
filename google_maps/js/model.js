function MapModel(options){

    var defaults = {};
    this.config = $.extend(true, defaults, options || { });

    this.data_array = this.config.data;

    this.initialize();

};

MapModel.prototype.initialize = function(){
	new MapView(this);
};

MapModel.prototype.createCategoryArray = function(){
    this.category_data_array = _.groupBy(this.data_array, 'category');
    return this.category_data_array;
};
