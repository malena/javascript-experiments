function TicTacToeView(){

    var animate = new TicTacToeAnimations({});
	var tictactoe = new TicTacToe({});
	tictactoe.initialize();

    //This contains game events

    $('.tictactoe a').click(function(){
        animate.populateBox(this, tictactoe.player);
        tictactoe.playerToggle();
    });

}