function MapData(options){

    // merge default object properties 
    // with what was passsed in index.html
    // used if you had default properties to set in this object
    // that you use for methods in this object scope.
    // for now literally pass data via index.html page

    var defaults = {};

    this.config = $.extend(true, defaults, options || { });

    this.geocoder = new google.maps.Geocoder();

    this.map_options = {
    	zoom: 1,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

	this.initialize();
};

MapData.prototype.initialize = function(){
	this.initMap();
};

MapData.prototype.generateLocationsArray = function() {
	var locationsArray = [];
	var lat;
	var lng;
	var i;

	for(i = 0; i < this.config.data.length; i++){
		lat = this.config.data[i].latitude;
		lng = this.config.data[i].longitude;
		locationsArray.push([lat, lng]);
	}

	return locationsArray;
};

MapData.prototype.initMap = function() {
	var array = this.generateLocationsArray();

	var default_lat = array[0][0];
	var default_lng = array[0][1];

    this.map_options['center'] = new google.maps.LatLng(default_lat, default_lng);

    var map = new google.maps.Map(document.getElementById("map-canvas"), this.map_options);

    var coord;

    var marker, i;

    for(i = 0; i < array.length; i++){
	    marker = new google.maps.Marker({
	        map : map,
	        draggable: true,
	        animation: google.maps.Animation.DROP,
	        position: new google.maps.LatLng(array[i][0] , array[i][1])
	    });
    }

    var info_window = this.initInfoWindow();

    this.bindMarker(info_window, map, marker);

};

MapData.prototype.initInfoWindow = function(){

    var infowindow = new google.maps.InfoWindow({
    	content: this.getInfoWindowContent(),
    	maxWidth: 200
    });

    return infowindow;
};

MapData.prototype.bindMarker = function(info_window, map, marker){
    google.maps.event.addListener(marker, 'mouseover', function() {
	    info_window.open(map,marker);
	});
};

MapData.prototype.getInfoWindowContent = function() {
    var html = '<div id="map-content"><p>alo</p></div>';
    return html;
};
