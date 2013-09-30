function MapView(options){
    var defaults = {};
    this.config = $.extend(true, defaults, options || { });

    this.map_options = {
    	zoom: 1,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.data_array = this.config.data;
    this.data_reset = [];

	this.initialize();
};

MapView.prototype.initialize = function(){
    this.locations_array = this.generateLocationsArray('reach');
	this.centerMap();
	this.initMap();
	this.bindTab(this.map);
	this.setMarkers(this.map, this.locations_array);
};

MapView.prototype.bindTab = function(map){
	var tabs = new TabView();
	var that = this;

	$('.map-tabs').on('click.mapevents', 'li', function(){
		var category = tabs.loadMap();
	    that.tab_category = category;
	    that.locations_array = that.generateLocationsArray(that.tab_category);
	    //reset map
	    //push locations array to marker
		that.setMarkers(map, that.locations_array);
    });

};

MapView.prototype.initMap = function(){
    this.map = new google.maps.Map(document.getElementById("map-canvas"), this.map_options);
};

MapView.prototype.setMarkers = function(map, locations_array){
	var array = locations_array;
	console.log(array);

    var marker, i;

    for(i = 0; i < array.length; i++){
	    marker = new google.maps.Marker({
	        map : map,
	        draggable: true,
	        animation: google.maps.Animation.DROP,
	        position: new google.maps.LatLng(array[i][0] , array[i][1])
	    });
	    this.bindMarkerEvents(this.initInfoWindow(), map, marker);
    }

};

MapView.prototype.initInfoWindow = function(){
    var infowindow = new google.maps.InfoWindow({
    	content: this.getInfoWindowContent(),
    	maxWidth: 200
    });
    return infowindow;
};

MapView.prototype.bindMarkerEvents = function(info_window, map, marker){
    google.maps.event.addListener(marker, 'click', function() {
	    info_window.open(map,marker);
	    map.setZoom(8);
	    map.setCenter(marker.getPosition());
	});
};

MapView.prototype.generateLocationsArray = function(category) {

	var grouped_array = _.groupBy(this.data_array, 'category');
	var category_array;

	if(category == 'reach'){
		category_array = grouped_array.reach;
	} else if(category == 'brands'){
		category_array = grouped_array.brands;
	} else {
		category_array = grouped_array.facilities;
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


MapView.prototype.centerMap = function(){
	var locations_array = this.locations_array;

	var lat = locations_array[0][0];
	var lng = locations_array[0][1];
    this.map_options['center'] = new google.maps.LatLng(lat, lng);
};

MapView.prototype.getInfoWindowContent = function() {
    var html = '<div id="map-content"><p>alo</p></div>';
    return html;
};
