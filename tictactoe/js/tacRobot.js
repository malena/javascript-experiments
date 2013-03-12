function TicTacToeRobot(){
	this.blockCount = 8;
}

TicTacToeRobot.prototype.initialize = function(){
	var tictactoe = new TicTacToe({});
	var player = tictactoe.player;
	console.log(player);
}

TicTacToeRobot.prototype.randomNumber = function(){
	var maxCount = this.blockCount;
	var random = Math.round(Math.random()*maxCount);
	return random;
}

TicTacToeRobot.prototype.chooseBlock = function(openSpots){
	var newIndex = this.randomNumber();

	$('.tictactoe div a').each(function(index){

		if($(this).text() !== ''){
			return $(this);
		}
		else {
			$('.tictactoe div a').eq(newIndex).text('o');
		}
	});
	//return block to insert and pass it to tacLogic methods
}

TicTacToeRobot.prototype.populateBlock = function(){
	// use methods in tacLogic.js
}


