function MapModel(options){

    var defaults = {};
    this.config = $.extend(true, defaults, options || { });

    this.data_array = this.config.data;
    this.category_data_array = _.groupBy(this.data_array, 'category');

    this.tab_category = 'reach';

	this.initialize();

};