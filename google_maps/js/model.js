function MapModel(options){

    var defaults = {};
    this.config = $.extend(true, defaults, options || { });

    this.data = this.config.data;

    this.data_array = _.groupBy(this.data, 'category');

    this.initialize();

};

MapModel.prototype.initialize = function(){
	new MapView(this);
};

MapModel.prototype.createLocationsArray = function(category){
	var that = this;
	var category_array;

	if(category == 'reach'){
		category_array = that.data_array.reach;
	} else if(category == 'brands'){
		category_array = that.data_array.brands;
	} else {
		category_array = that.data_array.facilities;
	}

	var locations_array = [];
	var lat;
	var lng;
	var i;
	var max = category_array.length;

	for(i = 0; i < max; i++){
		lat = category_array[i].latitude;
		lng = category_array[i].longitude;
		locations_array.push([lat, lng]);
	}

	return locations_array;

};

