function TicTacToeView(){

    var animate = new TicTacToeAnimations({});
    animate.initialize();
	var tictactoe = new TicTacToe({});

    $('.tictactoe a').click(function(e){
        e.preventDefault();

        var position = tictactoe.returnClickedBlockPosition(this);

        animate.populateBox(this, tictactoe.player);

        tictactoe.replaceWinningSetItemWithPlayer(tictactoe.player, position);

        if(tictactoe.checkForWin(tictactoe.player)){
            tictactoe.gameOver();
        }

        tictactoe.playerToggle();

    });

}