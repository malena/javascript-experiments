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

    this.winningSet = {
        playerO : ['o', 'o', 'o'],
        playerX : ['x', 'x', 'x']
    }
}

TicTacToe.prototype.initialize = function(){
    //this.loopThroughArrays();
}

TicTacToe.prototype.checkForWin = function(){
    var obj = this.threeConsecutiveBlocks;
    var winningSet = this.winningSet.playerX.join('');

    for(var propt in obj){
        var array = obj[propt];
        set = array.join('');
        if (set === winningSet){
            alert('win');
           return true;
        } else {
            console.log('no match');
        }
    }
}

TicTacToe.prototype.replaceWinningSetItemWithPlayer = function(player, position){
  var array = this.threeConsecutiveBlocks.set1;
  var index = array.indexOf(position);
  
  var index = array.indexOf(position);

  if(index !== -1){
    array[index] = player;
  }
  console.log(array);
}

TicTacToe.prototype.checkForThreeOfSameKind = function(){
   //get set1 first value and plug it into the bottom
   var $element =  $('.tictactoe div');
   var value = $element.eq(1).find('a').text();
   console.log('value: ' + value);

}

TicTacToe.prototype.returnClickedBlockPosition = function(element){
   var blockPosition = $(element).parent().index() + 1;

    if(blockPosition == 1){
        console.log('set is:' + this.threeConsecutiveBlocks.set1);
        console.log('set is:' + this.threeConsecutiveBlocks.set4);
        console.log('set is:' + this.threeConsecutiveBlocks.set7);
    }
    else if(blockPosition == 2){
        console.log('set is:' + this.threeConsecutiveBlocks.set1);
        console.log('set is:' + this.threeConsecutiveBlocks.set5);
    }
    else if(blockPosition == 3){
        console.log('set is:' + this.threeConsecutiveBlocks.set1);
        console.log('set is:' + this.threeConsecutiveBlocks.set6);
        console.log('set is:' + this.threeConsecutiveBlocks.set8);
    }
    else if(blockPosition == 4){
        console.log('set is:' + this.threeConsecutiveBlocks.set2);
        console.log('set is:' + this.threeConsecutiveBlocks.set4);
    }
    else if(blockPosition == 5){
        console.log('set is:' + this.threeConsecutiveBlocks.set2);
        console.log('set is:' + this.threeConsecutiveBlocks.set5);
        console.log('set is:' + this.threeConsecutiveBlocks.set7);
        console.log('set is:' + this.threeConsecutiveBlocks.set8);
    }
    else if(blockPosition == 6 ) {

    }
    console.log('block position is: ' + blockPosition);
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

