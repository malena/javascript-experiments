
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
            set3 : this.threeConsecutiveBlocks.set8
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
    //this.loopThroughArrays();
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
        } else {
            console.log('no match');
        }
    }
}

TicTacToe.prototype.replaceWinningSetItemWithPlayer = function(player, position){

    var caseSets;

    switch(position){

        case 1:
        caseSets = this.caseSets.case1;
        for (var propt in caseSets){
            var array = caseSets[propt];             
            var index = array.indexOf(position);

            if(index !== -1){
              array[index] = player;
            }
            console.log(array);
        }
        break;

        case 2:
        caseSets = this.caseSets.case2;
        for (var propt in caseSets){
            var array = caseSets[propt];             
            var index = array.indexOf(position);

            if(index !== -1){
              array[index] = player;
            }
            console.log(array);
        }
        break;

        case 3:
        caseSets = this.caseSets.case3;
        for (var propt in caseSets){
            var array = caseSets[propt];             
            var index = array.indexOf(position);

            if(index !== -1){
              array[index] = player;
            }
            console.log(array);
        }
        break;

        case 4:
        caseSets = this.caseSets.case4;
        for (var propt in caseSets){
            var array = caseSets[propt];             
            var index = array.indexOf(position);

            if(index !== -1){
              array[index] = player;
            }
            console.log(array);
        }
        break;

        case 5:
        caseSets = this.caseSets.case5;
        for (var propt in caseSets){
            var array = caseSets[propt];             
            var index = array.indexOf(position);

            if(index !== -1){
              array[index] = player;
            }
            console.log(array);
        }
        break;

        case 6:
        caseSets = this.caseSets.case6;
        for (var propt in caseSets){
            var array = caseSets[propt];             
            var index = array.indexOf(position);

            if(index !== -1){
              array[index] = player;
            }
            console.log(array);
        }
        break;

        case 7:
        caseSets = this.caseSets.case7;
        for (var propt in caseSets){
            var array = caseSets[propt];             
            var index = array.indexOf(position);

            if(index !== -1){
              array[index] = player;
            }
            console.log(array);
        }
        break;

        case 8:
        caseSets = this.caseSets.case8;
        for (var propt in caseSets){
            var array = caseSets[propt];             
            var index = array.indexOf(position);

            if(index !== -1){
              array[index] = player;
            }
            console.log(array);
        }
        break;

        case 9:
        caseSets = this.caseSets.case9;
        for (var propt in caseSets){
            var array = caseSets[propt];             
            var index = array.indexOf(position);

            if(index !== -1){
              array[index] = player;
            }
            console.log(array);
        }
        break;
    }
}

TicTacToe.prototype.returnClickedBlockPosition = function(element){
    var blockPosition = $(element).parent().index() + 1;
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

