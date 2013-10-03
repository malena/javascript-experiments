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

    // tab variables
    this.tab_category = 'reach';

   	// initialization
	this.initialize();

};

MapView.prototype.initialize = function(){
	this.initMap();
	this.setMarkers(this.map, this.model.createLocationsArray('reach'), this.tab_category);
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
	    that.closeInfoWindow();
	    that.tab_category = category;
	    that.clearMarkers();
	    that.resetZoom();
		that.setMarkers(map, that.model.createLocationsArray(that.tab_category), that.tab_category);
    });
};

MapView.prototype.closeInfoWindow = function(){
	console.log(this.info_window);
	this.info_window.close();
};

MapView.prototype.resetZoom = function(){
	this.map.setZoom(1);
};

MapView.prototype.setMarkers = function(map, locations_array, category){
	var that = this;
	var array = locations_array;
    var marker, i;

    for(i = 0; i < array.length; i++){
	    marker = new google.maps.Marker({
	        map : map,
	        draggable: true,
	        animation: google.maps.Animation.DROP,
	        position: new google.maps.LatLng(array[i][0] , array[i][1]),
	        icon : 'images/icon-' + category + '.png'
	    });

	    this.markers_array.push(marker);

	    var options = this.createInfoWindowOptions(that.tab_category);
	    var infoWindow = this.injectInfoWindowOptions(options);

	    this.bindMarkerEvents(infoWindow, map, marker);
    }

    this.createInfoWindowContent(this.tab_category);
};

MapView.prototype.clearMarkers = function(){
	var that = this;
	for (var i = 0; i < that.markers_array.length; i++){
		that.markers_array[i].setMap(null);	
	}
	that.markers_array = new Array(); 
};

MapView.prototype.createInfoWindowOptions = function(category){
	var content = this.getInfoWindowContent(category);

	this.info_window_options = {
		content: content,
    	disableAutoPan: false,
    	maxWidth: 0,
    	pixelOffset: new google.maps.Size(20, -25),
    	zIndex: null,
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

	return this.info_window_options;
};

MapView.prototype.injectInfoWindowOptions = function(options){
    this.info_window = new InfoBox(options);
    return this.info_window;
};

MapView.prototype.bindMarkerEvents = function(info_window, map, marker){
    google.maps.event.addListener(marker, 'click', function() {
	    info_window.open(map,marker);
	    map.setZoom(8);
	    map.setCenter(marker.getPosition());
	});
};

MapView.prototype.createInfoWindowContent = function(category){
	return this.model.data_array[category];
};

MapView.prototype.getInfoWindowContent = function(category, content_options) {
	var html;
	var data;

	if (category == 'reach'){
		this.createInfoWindowContent('reach');	
		data = this.model.data_array[category];
	    html = '<div class="map-info map-reach"> <div class="title"><h2>' + data[0].title + '</h2><h3>Subtitle</h3></div> <div class="map-info-content"><p>Lorem ipsum</p> <p>Lorem ipsum oadl lorem</p></div> </div>';
	} else if (category == 'facilities'){
		data = this.model.data_array[category];
	    html = '<div class="map-info map-facilities"> <div class="title"><h2>' + data[0].title + '</h2><h3>Subtitle</h3></div><div class="map-info-content"><p>Lorem ipsum</p><p>Lorem ipsum oadl lorem</p></div> </div>';
	} else {
		data = this.model.data_array[category];
	    html = '<div class="map-info map-brands"> <div class="title"><h2>' + data[0].title + '</h2><h3>Subtitle</h3></div><div class="map-info-content"><p>Lorem ipsum</p><p>Lorem ipsum oadl lorem</p></div> </div>';
	}

    return html;
};