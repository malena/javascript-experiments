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

    this.caseSets = {
        case1 : {
            set1 : this.threeConsecutiveBlocks.set1,
            set2 : this.threeConsecutiveBlocks.set4,
            set3 : this.threeConsecutiveBlocks.set7
        },
        case2 : {
            set1 : this.threeConsecutiveBlocks.set1,
            set2 : this.threeConsecutiveBlocks.set5
        },
        case3 : {
            set1 : this.threeConsecutiveBlocks.set1,
            set2 : this.threeConsecutiveBlocks.set6,
            set3 : this.threeConsecutiveBlocks.set8
        },
        case4 : {
            set1 : this.threeConsecutiveBlocks.set2,
            set2 : this.threeConsecutiveBlocks.set4,
        },
        case5 : {
            set1 : this.threeConsecutiveBlocks.set2,
            set2 : this.threeConsecutiveBlocks.set5,
            set3 : this.threeConsecutiveBlocks.set7,
            set4 : this.threeConsecutiveBlocks.set8
        },
        case6 : {
            set1 : this.threeConsecutiveBlocks.set2,
            set2 : this.threeConsecutiveBlocks.set6,
        },
        case7 : {
            set1 : this.threeConsecutiveBlocks.set3,
            set2 : this.threeConsecutiveBlocks.set4,
            set3 : this.threeConsecutiveBlocks.set8
        },
        case8: {
            set1 : this.threeConsecutiveBlocks.set3,
            set2 : this.threeConsecutiveBlocks.set5,
        },
        case9 : {
            set1 : this.threeConsecutiveBlocks.set3,
            set2 : this.threeConsecutiveBlocks.set6,
            set3 : this.threeConsecutiveBlocks.set7
        }
    }

    this.winningSet = {
        playerO : ['o', 'o', 'o'],
        playerX : ['x', 'x', 'x']
    }
}

TicTacToe.prototype.initialize = function(){
}

TicTacToe.prototype.checkForWin = function(player){
    var winningSet;

    if(player === 'x'){
        winningSet = this.winningSet.playerX.join('');
    }
    else if(player === 'o'){
        winningSet = this.winningSet.playerO.join('');
    }
    var obj = this.threeConsecutiveBlocks;

    for(var propt in obj){
        var array = obj[propt];
        set = array.join('');
        if (set === winningSet){
           return true;
        } 
    }
}

TicTacToe.prototype.injectPlayerMarkInSet = function(caseSet, player, position){
    var caseSets = caseSet;

    for (var propt in caseSets){
        var array = caseSets[propt];             
        var index = array.indexOf(position);

        if(index !== -1){
          array[index] = player;
        }
    }
}

TicTacToe.prototype.replaceWinningSetItemWithPlayer = function(player, position){
    switch(position){
        case 1:
        this.injectPlayerMarkInSet(this.caseSets.case1, player, position);
        break;
        case 2:
        this.injectPlayerMarkInSet(this.caseSets.case2, player, position);
        break;
        case 3:
        this.injectPlayerMarkInSet(this.caseSets.case3, player, position);
        break;
        case 4:
        this.injectPlayerMarkInSet(this.caseSets.case4, player, position);
        break;
        case 5:
        this.injectPlayerMarkInSet(this.caseSets.case5, player, position);
        break;
        case 6:
        this.injectPlayerMarkInSet(this.caseSets.case6, player, position);
        break;
        case 7:
        this.injectPlayerMarkInSet(this.caseSets.case7, player, position);
        break;
        case 8:
        this.injectPlayerMarkInSet(this.caseSets.case8, player, position);
        break;
        case 9:
        this.injectPlayerMarkInSet(this.caseSets.case9, player, position);
        break;
    }
}

TicTacToe.prototype.returnClickedBlockPosition = function(element){
    var blockPosition = $(element).parent().index() + 1;
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

TicTacToe.prototype.gameOver = function(player){
     alert(player + ' wins!');
     location.reload();
}

TicTacToe.prototype.chooseBox = function(){
    //Choose box from available spots
}

TicTacToe.prototype.findOpenSpots = function(){
   //Find available spots 
}

