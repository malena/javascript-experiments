function CatImage(){
		this.src = 'malena';
		this.tag = 'cats';
}

CatImage.prototype._getTag = function(){
	return this.tag;
};

