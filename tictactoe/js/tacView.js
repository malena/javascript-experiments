function TicTacToeView(){

    var animate = new TicTacToeAnimations({});
    animate.initialize();
	var tictactoe = new TicTacToe({});
	tictactoe.initialize();

    //This contains game events

    $('.tictactoe a').click(function(e){
        e.preventDefault();
        var block = $(this).parent();
        var position = tictactoe.returnClickedBlockPosition(this);

        animate.populateBox(this, tictactoe.player);
        
        tictactoe.replaceWinningSetItemWithPlayer(tictactoe.player, position);
        tictactoe.checkForWin();

        tictactoe.playerToggle();

    });

}