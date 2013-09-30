function MapView(options){
    var defaults = {};
    this.config = $.extend(true, defaults, options || { });

    this.map_options = {
    	zoom: 1,
    	center: new google.maps.LatLng(+43.7000, -79.4000),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.data_array = this.config.data;
    this.category_data_array = _.groupBy(this.data_array, 'category');

    this.markers_array = [];

	this.initialize();
};

MapView.prototype.initialize = function(){
	this.initMap();
	this.setMarkers(this.map, this.generateLocationsArray('reach'));
	this.bindTab(this.map);
};

MapView.prototype.initMap = function(){
    this.map = new google.maps.Map(document.getElementById("map-canvas"), this.map_options);
};

MapView.prototype.bindTab = function(map){
	var tabs = new TabView();
	var that = this;

	$('.map-tabs').on('click.mapevents', 'li', function(){
		var category = tabs.loadMap();
	    that.tab_category = category;
	    that.clearMarkers();
		that.setMarkers(map, that.generateLocationsArray(that.tab_category));
    });
};

MapView.prototype.clearMarkers = function(){
	var that = this;
	for (var i = 0; i < that.markers_array.length; i++){
		that.markers_array[i].setMap(null);	
	}
	that.markers_array = [];
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

	    this.markers_array.push(marker);
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
	var that = this;
	var category_array;

	if(category == 'reach'){
		category_array = that.category_data_array.reach;
	} else if(category == 'brands'){
		category_array = that.category_data_array.brands;
	} else {
		category_array = that.category_data_array.facilities;
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


MapView.prototype.getInfoWindowContent = function() {
    var html = '<div id="map-content"><p>alo</p></div>';
    return html;
};
