function TabView(options){
    var defaults = {};
    this.config = $.extend(true, defaults, options || {});

    var elements = {
        tabs : '.map-tabs'
    }

    this.tabs = elements.tabs;
    this.$tab = $(elements.tabs).find('li');
    this.category = 'reach';

    this.bindTabEvents();
}

TabView.prototype.bindTabEvents = function (){
    var that = this;

    $(this.tabs).on('click.tabevents', 'li', function(){
        that.setTabActive(this);
        that.category = $(this).attr('data-category');
    });

    $(this.tabs).on('mouseenter', 'li', function(){
        that.animateTab(this, 'up');
    });

    $(this.tabs).on('mouseleave', 'li', function(){
        that.animateTab(this, 'down');
    });
};

TabView.prototype.setTabActive = function(tab) {
    this.$tab.removeClass('active');
    $(tab).addClass('active');
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

