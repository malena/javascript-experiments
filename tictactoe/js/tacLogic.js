function TicTacToe(){
    this.player = 'x';
    this.turn = this.player;

    this.threeConsecutiveBlocks = {
       set1 : [1,2,3],
       set2 : [4,5,6],
       set3 : [7,8,9],
       set4 : [1,4,7],
       set5 : [2,5,8],
       set6 : [3,6,9],
       set7 : [1,5,9],
       set8 : [3,5,7]
    }
}

TicTacToe.prototype.initialize = function(){
}

TicTacToe.prototype.checkForThreeOfSameKind = function(){
   //get set1 first value and plug it into the bottom
   var $element =  $('.tictactoe div');
   var value = $element.eq(1).find('a').text();
   console.log('value: ' + value);

}

TicTacToe.prototype.returnClickedBlockPosition = function(element){
   var blockPosition = $(element).parent().index() + 1;
   console.log(blockPosition);

   if(blockPosition == 1){
        //map the player letter with set array
        //for instance 1 is x so new array is set1populated = [x, 2, 3]
        //once set1populated has three matching of either x or o, game is over
        console.log('set is:' + this.threeConsecutiveBlocks.set1);
        console.log('set is:' + this.threeConsecutiveBlocks.set4);
        console.log('set is:' + this.threeConsecutiveBlocks.set7);
   }
   return blockPosition;
}

TicTacToe.prototype.playerTurn = function(){
    this.markBlock(this.player)
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

