var BoxAnimation = function(options){

    var defaults = {
        selector : $('#Boxes'),

        elements : {
            panel : '.box'
        }
    };

    this.config = $.extend(true, defaults, options || { });

    this.$selector = this.config.selector;
    this.$panel = $(this.config.elements.panel);

    this.initialize();
};

BoxAnimation.prototype.initialize = function(options){
    this.bindPanelEvents();
};

BoxAnimation.prototype.bindPanelEvents = function(){
    var that = this;

    this.$panel.on('click.panel', function(event){
        that.explodePanel(event.target);
        that.hideRemainingPanels(event.target);
        that.bindNonPanelEvents();
    });

};

BoxAnimation.prototype.unBindPanelEvents = function(){
    var that = this;
    this.$panel.unbind('click.panel');
};

BoxAnimation.prototype.bindNonPanelEvents = function(){
    var that = this;
    $('body:not(".box")').on('click', function(){
        that.reset(); 
    });
};

BoxAnimation.prototype.reset = function(){
   this.$panel.removeAttr('style');
};

BoxAnimation.prototype.explodePanel = function(panel){

    TweenLite.from($(panel), 2, {css: { 
        top: "-300px",
        left: "300px"
    }, ease: Back.easeIn});

    TweenLite.to($(panel), 2, {css: { 
        zIndex: 3,
        position: "absolute",
        top: "0px",
        left: "0px",
        height: "100%",
        width: "100%"
    }, ease: Back.easeOut});
};