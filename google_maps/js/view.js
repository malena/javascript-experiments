function MJN_MapView (){
    var elements = {
        tabs : '.map-tabs'
    }

    this.tabs = elements.tabs;
    this.$tab = $(elements.tabs).find('li');

    this.initialize();

    var model = new MJN_Map();
}

MJN_MapView.prototype.initialize = function (){
    this.bindTabEvents();
};

MJN_MapView.prototype.bindTabEvents = function (){
    var that = this;

    $(this.tabs).on('click', 'li', function(){
        that.toggleTabState(this);
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

MJN_MapView.prototype.isActive = function(element){
    if($(element).hasClass('active')){
        return true;
    } else {
        return false;
    }
};

MJN_MapView.prototype.toggleTabState = function(current_tab) {
    this.$tab.removeClass('active');
    $(current_tab).addClass('active');
};

MJN_MapView.prototype.animateTab = function(tab, direction) {
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



