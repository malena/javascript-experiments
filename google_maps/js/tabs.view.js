function TabView(options){
    var defaults = {};
    this.config = $.extend(true, defaults, options || {});

    var elements = {
        tabs : '.map-tabs'
    }

    this.tabs = elements.tabs;
    this.$tab = $(elements.tabs).find('li');
    this.category = 'reach';

    this.initialize();
}

TabView.prototype.initialize = function (){
    this.bindTabEvents();
    this.loadMap();
};

TabView.prototype.bindTabEvents = function (){
    var that = this;

    $(this.tabs).on('click.tabevents', 'li', function(){
        that.toggleTabState(this);
        that.resetTabStyles();
    });

    $(this.tabs).on('click.categoryevents', 'li', function(){
        that.updateCategoryStatus(this);
    });

    $(this.tabs).on('click.mapevents', 'li', function(){
        that.loadMap();
    });

    $(this.tabs).on('mouseenter', 'li', function(){
        if(!that.isActive(this)){
            that.animateTab(this, 'up');
        }
    });

    $(this.tabs).on('mouseleave', 'li', function(){
        if(!that.isActive(this)){
            that.animateTab(this, 'down');
        }
    });
};

TabView.prototype.isActive = function(element){
    if($(element).hasClass('active')){
        return true;
    } else {
        return false;
    }
};

TabView.prototype.updateCategoryStatus = function(current_tab){
    this.category = this.getCategory(current_tab);
};

TabView.prototype.getCategory = function(current_tab){
    var category = $(current_tab).attr('data-category');
    return category;
};

TabView.prototype.loadMap = function(){
    console.log('load ' + this.category + ' map');
};

TabView.prototype.toggleTabState = function(current_tab) {
    this.$tab.removeClass('active');
    $(current_tab).addClass('active');
};

TabView.prototype.animateTab = function(tab, direction) {
    var speed = .4;

    if(direction == 'up') {

        TweenLite.to(tab, speed, {css: {
            marginTop: '-10px',
            height: '65px' }
        });
    } else if (direction == 'down') {
        TweenLite.to(tab, speed, {css: {
            marginTop: '0px',
            height: '55px' }
        });

    }
};

TabView.prototype.resetTabStyles = function(tab, direction) {
    this.$tab.removeAttr('style'); 
};