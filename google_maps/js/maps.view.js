function MapView(options){
    var defaults = {};
    this.config = $.extend(true, defaults, options || { });

    this.map_options = {
    	zoom: 1,
    	center: new google.maps.LatLng(+43.7000, -79.4000),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.data_array = this.config.data;
    this.grouped_array = this.groupDataByCategory();

	this.initialize();

};

MapView.prototype.initialize = function(){
	this.initMap();
	this.bindTabEvents(this.map);
	console.log(this.generateLocationsArray('reach'));
	this.setMarkers(this.map, this.generateLocationsArray('reach'));
};

MapView.prototype.initMap = function(){
    this.map = new google.maps.Map(document.getElementById("map-canvas"), this.map_options);
};

MapView.prototype.bindTabEvents = function(map){
	var tabs = new TabView();
	var that = this;

	$('.map-tabs').on('click.mapevents', 'li', function(){
		var category = tabs.loadMap();
	    that.tab_category = category;
	    //reset map
	    //push locations array to marker
		that.setMarkers(map, that.generateLocationsArray[category]);
    });

};

MapView.prototype.setMarkers = function(map, locations_array){
	var array = locations_array;
    var marker, i;

    if (map == null){
    	console.log('is this happening?')
    	return false;
    }

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

MapView.prototype.groupDataByCategory = function() {
	var grouped_array = _.groupBy(this.data_array, 'category');
	return grouped_array;
};

MapView.prototype.generateLocationsArray = function(category) {
	var category_array = this.grouped_array[category];

	var locations_array = [];
	var lat;
	var lng;
	var i;
	var max = 3;

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
