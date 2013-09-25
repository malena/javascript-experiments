function MJN_MapView (){
    var elements = {
        tabs : '.map-tabs'
    }

    this.tabs = elements.tabs;
    this.$tab = $(elements.tabs).find('li');

    this.initialize();
}

MJN_MapView.prototype.initialize = function (){
    this.bindTabEvents();
};

MJN_MapView.prototype.bindTabEvents = function (){
    var that = this;

    $(this.tabs).on('click', 'li', function(){
        that.toggleTabState(this);
    });

    $(this.tabs).on('hover', 'li', function(){
        that.animateTab(this);
    });

};

MJN_MapView.prototype.toggleTabState = function(current_tab) {
    this.$tab.removeClass('active');
    $(current_tab).addClass('active');
};

MJN_MapView.prototype.animateTab = function(tab) {
    
};



