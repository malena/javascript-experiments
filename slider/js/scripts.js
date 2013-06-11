	function Slider(){

		this.container = $('section:first');

		// is this to obtain just the one image object and not the array?	
		this.sliderObject = $('img')[0];
		this.sliderCount = $('img').length;	

		this.height = this.sliderObject.height;
		this.width = (this.sliderObject.width);

		this.arrowObject = $('a')[0];
		this.arrowWidth = $('a').width() * 2;
		this.arrowRatio = (this.arrowWidth / (this.arrowWidth + (this.sliderCount * this.width))) * 100;

		this.bodyWidth = $(window).width();
		this.inView = 3; // variable 
		this.sliderContainerWidth = ((this.inView / this.sliderCount) * 100) + this.arrowRatio;
		this.sliderWidth = (this.width * this.inView) + this.arrowWidth;

		this.sliderRatio = (this.sliderWidth * 100) / this.bodyWidth;
		this.clickCount = parseInt(this.sliderCount - this.inView);

		this.viewPortWidth = this.sliderCount * this.width;

		this.sliderObjectIndex = 0;

		// assign a new Constructor 
		// which can exist as a seperate file 
		// to an object property like so: 
		// this.someObject = new SomeObject();
		// and use this.someObject inside any prototype function of this object

		this.initializeSlider();
	}

	Slider.prototype.initializeSlider = function(){
		this.setViewPortWidth();
		this.windowWidth();
	};

	Slider.prototype.windowWidth = function(){
		var self = this;
		$(window).resize(function(){
			console.log($(this).width());
			return $(this).width();
		});
	};

	Slider.prototype.setViewPortWidth = function(windowWidth){
		$('section').css('width', this.sliderRatio + '%');
	};

	Slider.prototype.getContainerWidth = function() {
		var width = this.container.offsetWidth; 
		return width;
	};

	Slider.prototype.resizeContainerWidth = function(){
		var self = this;
		this.setViewPortWidth();

		window.onresize = function(){
			width = self.container.offsetWidth;
			console.log("offset" + width);
			self.setViewPortWidth();
		}
	};
