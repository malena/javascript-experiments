function MapData(options){

    var defaults = {};

    this.config = $.extend(true, defaults, options || { });

    this.map_options = {
    	zoom: 1,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.locationsArray = this.generateLocationsArray(); 
	this.initialize();
};

MapData.prototype.initialize = function(){
	this.initMap();
};



MapData.prototype.initMap = function() {
	this.centerMap();
    var map = new google.maps.Map(document.getElementById("map-canvas"), this.map_options);
    this.initMarkers(map);
};

MapData.prototype.initMarkers = function(map){
	var self = this;
    var marker, i;

    for(i = 0; i < this.locationsArray.length; i++){
	    marker = new google.maps.Marker({
	        map : map,
	        draggable: true,
	        animation: google.maps.Animation.DROP,
	        position: new google.maps.LatLng(self.locationsArray[i][0] , self.locationsArray[i][1])
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

	for(i = 0; i < this.config.data.length; i++){
		lat = this.config.data[i].latitude;
		lng = this.config.data[i].longitude;
		locationsArray.push([lat, lng]);
	}
	return locationsArray;
};


MapData.prototype.centerMap = function(){
	var lat = this.locationsArray[0][0];
	var lng = this.locationsArray[0][1];
    this.map_options['center'] = new google.maps.LatLng(lat, lng);
};

MapData.prototype.getInfoWindowContent = function() {
    var html = '<div id="map-content"><p>alo</p></div>';
    return html;
};
