function MapData(options){
    var defaults = {};
    this.config = $.extend(true, defaults, options || { });

    this.map_options = {
    	zoom: 1,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.data_array = this.config.data;
	this.initialize();
};

MapData.prototype.initialize = function(){
	this.centerMap();
	this.initMap();
	this.setMarkers(this.map);
};

MapData.prototype.initMap = function(){
    this.map = new google.maps.Map(document.getElementById("map-canvas"), this.map_options);
};

MapData.prototype.setMarkers = function(map){
	var locations_array = [];
	locations_array = this.generateLocationsArray();
    var marker, i;

    for(i = 0; i < locations_array.length; i++){
	    marker = new google.maps.Marker({
	        map : map,
	        draggable: true,
	        animation: google.maps.Animation.DROP,
	        position: new google.maps.LatLng(locations_array[i][0] , locations_array[i][1])
	    });
    }

    this.bindInfoWindow(this.initInfoWindow(), map, marker);
};

MapData.prototype.initInfoWindow = function(){
    var infowindow = new google.maps.InfoWindow({
    	content: this.getInfoWindowContent(),
    	maxWidth: 200
    });
    return infowindow;
};

MapData.prototype.bindInfoWindow = function(info_window, map, marker){
    google.maps.event.addListener(marker, 'mouseover', function() {
	    info_window.open(map,marker);
	});
};

MapData.prototype.generateLocationsArray = function() {
	var locationsArray = [];
	var lat;
	var lng;
	var i;
	var max = this.data_array.length;

	for(i = 0; i < max; i++){
		lat = this.data_array[i].latitude;
		lng = this.data_array[i].longitude;
		locationsArray.push([lat, lng]);
	}

	return locationsArray;
};


MapData.prototype.centerMap = function(){
	var locations_array = this.generateLocationsArray();

	var lat = locations_array[0][0];
	var lng = locations_array[0][1];
    this.map_options['center'] = new google.maps.LatLng(lat, lng);
};

MapData.prototype.getInfoWindowContent = function() {
    var html = '<div id="map-content"><p>alo</p></div>';
    return html;
};
