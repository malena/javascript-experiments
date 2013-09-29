function MapData(options){

    // merge default object properties 
    // with what was passsed in index.html
    // used if you had default properties to set in this object
    // that you use for methods in this object scope.
    // for now literally pass data via index.html page

    var defaults = {};

    this.config = $.extend(true, defaults, options || { });

    this.initialize();

};


MapData.prototype.initialize = function() {
	this.getTitle();
};

MapData.prototype.getTitle = function(){
	console.log(this.config.title);    
};


