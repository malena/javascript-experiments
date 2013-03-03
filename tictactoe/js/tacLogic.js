function TicTacToe(){
    this.player = 'x';
    this.turn = this.player;
}

TicTacToe.prototype.initialize = function(){
}

TicTacToe.prototype.playerTurn = function(){
    return this.player; 
}

TicTacToe.prototype.playerToggle = function(){

    if(this.player === 'x') {
        this.player = 'o';
    }
    else{
        this.player = 'x';
    }
}

TicTacToe.prototype.chooseBox = function(){
    //Choose box from available spots
}

TicTacToe.prototype.findOpenSpots = function(){
   //Find available spots 
}

