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
	this.bindInputButton();
};

MapData.prototype.initMap = function() {

	var lat = this.config.latitude;
	var lng = this.config.longitude;

    this.map_options['center'] = new google.maps.LatLng(lat, lng);

    var mapOptions = this.map_options;
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    var contentString = '<div id="map-content"><p>alo</p></div>';

    var infowindow = new google.maps.InfoWindow({
    	content: contentString,
    	maxWidth: 200
    });

    var marker = new google.maps.Marker({
        map : map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: new google.maps.LatLng(lat, lng),
        title: 'my title'
    });

    google.maps.event.addListener(marker, 'click', function() {
	    infowindow.open(map,marker);
	});

};

MapData.prototype.bindInputButton = function () {
	var that = this;
	$('#button').on('click', function(){
		that.codeAddress()
	});
};

MapData.prototype.codeAddress = function () {
	var map;
	var geocoder = this.geocoder;
    var user_address = document.getElementById('address').value;

    var address = geocoder.geocode({'address' : user_address }, function(results, status){
        if(status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);    
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location 
            });
        } else {
            alert('geocode was not successfull becuz: ' + status);
        }
    });

    this.map_options['center'] = address;

    var mapOptions = this.map_options;

    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
};

