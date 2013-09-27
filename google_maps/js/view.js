function MJN_MapView (){
    var elements = {
        tabs : '.map-tabs'
    }

    this.tabs = elements.tabs;
    this.$tab = $(elements.tabs).find('li');
    this.category = 'null';

    this.initialize();
}

MJN_MapView.prototype.initialize = function (){
    this.bindTabEvents();
};

MJN_MapView.prototype.bindTabEvents = function (){
    var that = this;

    $(this.tabs).on('click', 'li', function(){
        that.toggleTabState(this);
        that.resetTabStyles();

        that.updateCategoryStatus(this);
        that.initializeMap();
    });

    $(this.tabs).on('hover', 'li', function(){
        that.animateTab(this);
    });

};

MJN_MapView.prototype.updateCategoryStatus = function(current_tab){
    this.category = this.getCategory(current_tab);
};

MJN_MapView.prototype.getCategory = function(current_tab){
    var category = $(current_tab).attr('data-category');
    return category;
};

MJN_MapView.prototype.initializeMap = function(category){
    console.log('initialize Map for this category: ' + this.category);

};

MJN_MapView.prototype.toggleTabState = function(current_tab) {
    this.$tab.removeClass('active');
    $(current_tab).addClass('active');
};

MJN_MapView.prototype.animateTab = function(tab) {
    
};

MJN_MapView.prototype.resetTabStyles = function(tab, direction) {
    this.$tab.removeAttr('style'); 
};
