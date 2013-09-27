var MJN_Map = function(){
    this.instantiateGoogleMaps();
};


MJN_Map.prototype.initialize = function() {
    var geocoder;
    var map;

    geocoder = new google.maps.Geocoder();

    var address = geocoder.geocode({'address' : 'Toronto, ON'}, function(results){
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map : map,
            position: results[0].geometry.location
        });
    });

    var mapOptions = {
        center: address,
        zoom: 9,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
};

MJN_Map.prototype.codeAddress = function () {

    var address = document.getElementById('address').value;
    geocoder.geocode({'address' : address }, function(results, status){
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
};

MJN_Map.prototype.instantiateGoogleMaps = function(){
    google.maps.event.addDomListener(window, 'load', this.initialize());
};
