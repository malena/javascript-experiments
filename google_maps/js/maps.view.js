function MapView(model){

	this.model = model;

	// map variables
    this.map_options = {
    	zoom: 2,
    	center: new google.maps.LatLng(+43.7000, -79.4000),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.markers_array = [];

    // tab variable, default = 'reach'
    this.tab_category = 'reach';

    // initialize google map
    this.map = new google.maps.Map(document.getElementById("map-canvas"), this.map_options);

    // marker variable options
    this.marker_options = {
    	position: this.map.getCenter(),
        draggable: true,
        animation: google.maps.Animation.DROP,
    	map: this.map,
    	title: 'Click to Zoom'
    };


    this.info_window_options = {
    	disableAutoPan: false,
    	maxWidth: 0,
    	pixelOffset: new google.maps.Size(20, -25),
    	zIndex: null
    };
    // initialize marker inside of intitalize
    //this.marker = new google.maps.Marker(this.marker_options);

   	// initialization
	this.initialize();
};

MapView.prototype.initialize = function(){
    var locations = this.model.getCategoryLocations(this.tab_category);
	this.setMarkers(locations, this.tab_category);
	this.bindTab();
};

MapView.prototype.bindTab = function(){
	var Tabs = new TabView();
	var that = this;

	$('.map-tabs').on('click.mapevents', 'li', function(){

        that.info_window.close();
	    that.clearMarkers();
        that.map.setZoom(2);

	    var locations = that.model.getCategoryLocations(Tabs.category);
		that.setMarkers(locations, Tabs.category);
    });
};

MapView.prototype.setMarkers = function(locations, category){

    var marker;
    var info_window;

    for(var i = 0; i < locations.length; i++){
	    marker = new google.maps.Marker({
	        map : this.map,
	        draggable: true,
	        animation: google.maps.Animation.DROP,
	        position: new google.maps.LatLng(locations[i]['latitude'] , locations[i]['longitude']),
	        icon : 'images/icon-' + category + '.png'
	    });

	    this.markers_array.push(marker);

	    info_window = this.getInfoWindow(locations[i]);

	    this.bindMarkerEvents(info_window, marker);
    }
};

MapView.prototype.bindMarkerEvents = function(info_window, marker){
    google.maps.event.addListener(marker, 'click', function() {
	    info_window.open(this.map,marker);
	    this.map.setZoom(8);
	    this.map.setCenter(marker.getPosition());
	});
};

MapView.prototype.clearMarkers = function(){
	var that = this;
	for (var i = 0; i < that.markers_array.length; i++){
		that.markers_array[i].setMap(null);	
	}
	that.markers_array = new Array(); 
};


MapView.prototype.getInfoWindow = function(location){
    var html = '<div class="map-info map-' + this.tab_category + '"> <div class="title"><h2><img src="images/flags/' + location.code + '.png"></img>' + location.title + '</h2><h3>' + location.city + '</h3></div> <div class="map-info-content"><p>' + location.description + '</p></div> </div>';
    var options = {
        content: html,
        boxStyle: { 
            background: "url('images/tipbox-" + this.tab_category + ".png') no-repeat top left",
            opacity: 1,
            width: "400px"
        },
        closeBoxMargin: "10px 20px 10px 10px",
        closeBoxURL: "images/close.png",
        infoBoxClearance: new google.maps.Size(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false
    }

    return new InfoBox(options);
};
