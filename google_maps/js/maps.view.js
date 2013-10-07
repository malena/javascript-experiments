function MapView(model){

	this.model = model;

	// model category data
    this.category_data_array = this.model.data_array;

	// map variables
    this.map_options = {
    	zoom: 1,
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
    var locations = this.getLocations(this.tab_category);

	this.setMarkers(locations, this.tab_category);
	this.bindTab(this.map);
};

MapView.prototype.getLocations = function(category){
	return this.model.createLocationsArray(category);
};

MapView.prototype.bindTab = function(map){
	var tabs = new TabView();
	var that = this;

	$('.map-tabs').on('click.mapevents', 'li', function(){
		var category = tabs.loadMap();
	    that.closeInfoWindow();
	    that.tab_category = category;
	    that.clearMarkers();
	    that.resetZoom();

	    var locations = that.getLocations(that.tab_category);
		that.setMarkers(locations, that.tab_category);
    });
};

MapView.prototype.setMarkers = function(locations_array, category){

    var marker;
    var info_window;

    for(var i = 0; i < locations_array.length; i++){
	    marker = new google.maps.Marker({
	        map : this.map,
	        draggable: true,
	        animation: google.maps.Animation.DROP,
	        position: new google.maps.LatLng(locations_array[i]['latitude'] , locations_array[i]['longitude']),
	        icon : 'images/icon-' + category + '.png'
	    });

	    this.markers_array.push(marker);

	    info_window = this.getInfoWindow(locations_array[i]);
	    // bind events on each marker
	    // each binding adds a location specific info Window to each marker
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
    var content = this.getInfoWindowContent(location);
    var options = this.getInfoWindowOptions(this.tab_category, content);
    this.info_window = new InfoBox(options);
    return this.info_window;
};

MapView.prototype.getInfoWindowOptions = function(category, content){

	var options = {
    	content: content,
    	boxStyle: { 
            background: "url('images/tipbox-" + category + ".png') no-repeat top left",
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

	var updated_options = $.extend(this.info_window_options, options);

	return updated_options; 
};

MapView.prototype.getInfoWindowContent = function(location) {
	var html;
    html = '<div class="map-info map-reach"> <div class="title"><h2>' + location.title + '</h2><h3>Subtitle</h3></div> <div class="map-info-content"><p>Lorem ipsum</p> <p>Lorem ipsum oadl lorem</p></div> </div>';
    return html;
};

MapView.prototype.closeInfoWindow = function(){
	this.info_window.close();
};

MapView.prototype.resetZoom = function(){
	this.map.setZoom(1);
};