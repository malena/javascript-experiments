function TicTacToeAnimations(){

}

TicTacToeAnimations.prototype.initialize = function(){
    //var testElement = $('.tictactoe div');
    //this.highlightWinningBlock(testElement, 2);
}

TicTacToeAnimations.prototype.populateBox = function(element, player_letter){
    $(element).text(player_letter);
}

TicTacToeAnimations.prototype.highlightWinningBlock = function(element, index){
    $(element).eq(index).addClass('highlight');
}


