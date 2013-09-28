function TabView(){
    var elements = {
        tabs : '.map-tabs'
    }

    this.tabs = elements.tabs;
    this.$tab = $(elements.tabs).find('li');
    this.category = 'null';

    this.initialize();

    var model = new MJN_Map();
}

