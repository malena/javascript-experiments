function TicTacToeView(){

    var animate = new TicTacToeAnimations({});
    animate.initialize();
	var tictactoe = new TicTacToe({});

    $('.tictactoe a').click(function(e){
        e.preventDefault();

        var position = tictactoe.returnClickedBlockPosition(this);

        animate.populateBox(this, tictactoe.player);

        tictactoe.replaceWinningSetItemWithPlayer(tictactoe.player, position);

        $(this).parent().removeClass('available');

        if(tictactoe.checkForWin(tictactoe.player)){
            tictactoe.gameOver(tictactoe.player);
        }

        tictactoe.playerToggle();

        if(tictactoe.player == "o") {
            console.log('player o turn');
            var random = Math.floor(Math.random()*9)
            var random_block = $('.tictactoe').children()[random];
            console.log(random_block);

            var position = tictactoe.returnClickedBlockPosition($(random_block).children());
            $(random_block).children().text('o');

            tictactoe.replaceWinningSetItemWithPlayer(tictactoe.player, position);
            $(random_block).removeClass('available');
            tictactoe.playerToggle();
        }

    });

}