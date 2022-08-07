const X_PLAYER = "<img src='/img/X.png' class='img-fluid'>";
const O_PLAYER = "<img src='/img/O.png' class='img-fluid'>";
let currentPlayer = X_PLAYER;
const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let playerX = new Array();
let playerO = new Array();

function cellClick(index){

    switch(index){
        case 0: let cell_0 = document.getElementById('cell-0');
                if(cell_0.innerHTML.trim() == ""){
                    cell_0.innerHTML = displayPlayer();
                    cell_0.onclick = "";
                    cell_0.style.cursor = "not-allowed";
                    checkWin(index);
                    swapTurn();
                }
                break;

        case 1: let cell_1 = document.getElementById('cell-1');
                if(cell_1.innerHTML.trim() == ""){
                    cell_1.innerHTML = displayPlayer();
                    cell_1.removeAttribute('onlick');
                    cell_1.style.cursor = "not-allowed";
                    checkWin(index);
                    swapTurn();
                }
                break;

        case 2: let cell_2 = document.getElementById('cell-2');
                if(cell_2.innerHTML.trim() == ""){
                    cell_2.innerHTML = displayPlayer();
                    cell_2.removeAttribute('onlick');
                    cell_2.style.cursor = "not-allowed";
                    checkWin(index);
                    swapTurn();
                }
                break;

        case 3: let cell_3 = document.getElementById('cell-3');
                if(cell_3.innerHTML.trim() == ""){
                    cell_3.innerHTML = displayPlayer();
                    cell_3.removeAttribute('onlick');
                    cell_3.style.cursor = "not-allowed";
                    checkWin(index);
                    swapTurn();
                }
                break;

        case 4: let cell_4 = document.getElementById('cell-4');
                if(cell_4.innerHTML.trim() == ""){
                    cell_4.innerHTML = displayPlayer();
                    cell_4.removeAttribute('onlick');
                    cell_4.style.cursor = "not-allowed";
                    checkWin(index);
                    swapTurn();
                }
                break;

        case 5: let cell_5 = document.getElementById('cell-5');
                if(cell_5.innerHTML.trim() == ""){
                    cell_5.innerHTML = displayPlayer();
                    cell_5.removeAttribute('onlick');
                    cell_5.style.cursor = "not-allowed";
                    checkWin(index);
                    swapTurn();
                }
                break;

        case 6: let cell_6 = document.getElementById('cell-6');
                if(cell_6.innerHTML.trim() == ""){
                    cell_6.innerHTML = displayPlayer();
                    cell_6.removeAttribute('onlick');
                    cell_6.style.cursor = "not-allowed";
                    checkWin(index);
                    swapTurn();
                }
                break;

        case 7: let cell_7 = document.getElementById('cell-7');
                if(cell_7.innerHTML.trim() == ""){
                    cell_7.innerHTML = displayPlayer();
                    cell_7.removeAttribute('onlick');
                    cell_7.style.cursor = "not-allowed";
                    checkWin(index);
                    swapTurn();
                }
                break;
                
        case 8: let cell_8 = document.getElementById('cell-8');
                if(cell_8.innerHTML.trim() == ""){
                    cell_8.innerHTML = displayPlayer();
                    cell_8.removeAttribute('onlick');
                    cell_8.style.cursor = "not-allowed";
                    checkWin(index);
                    swapTurn();
                }
                break;

    }
}

function swapTurn(){

    if(currentPlayer === X_PLAYER){
        currentPlayer = O_PLAYER;
    }else{
        currentPlayer = X_PLAYER
    }
}

function displayPlayer(){
    
    return currentPlayer === X_PLAYER ? X_PLAYER : O_PLAYER;
}

function checkWin(index){

    // check if current player has a winning hand
    // only stsrt checking when player x has size number of selections
    var win = false;
    var playerSelections = new Array();

    if (currentPlayer === X_PLAYER){
        playerX.push(index);
        playerX.sort(function(a , b) { return a - b});
        playerSelections = playerX;

    }else {
        playerO.push(index);
        playerO.sort(function(a , b) { return a - b});
	    playerSelections = playerO;
    }
    
    if (playerSelections.length >= 3) {
        // check if any 'winners' are also in your selections
        
        for (i = 0; i < winningCombination.length; i++) {
            var sets = winningCombination[i];  // winning hand
            var setFound = true;
            
            for (r = 0; r < sets.length; r++) {
                // check if number is in current players hand
                // if not, break, not winner
                var found = false;
                
                // players hand
                for (s = 0; s < playerSelections.length; s++) {
                    if (sets[r] == playerSelections[s]) {
                        found = true;
                        break;
                    }
                }

                // value not found in players hand
                // not a valid set, move on
                if (found == false) {
                    setFound = false;
                    break;
                }

                // [0] [1] [2]
                // [3] [4] [5]
                // [6] [7] [8]
            }

            if (setFound == true) {
                win = true;
                break;
            }
        }
    }

    if(win){
        const player = currentPlayer === X_PLAYER ? "X" : "O";
        document.getElementById('winner').style.visibility = "visible";
        document.getElementById('player-win').innerHTML = "Player " + player + "!";
    }

    if((playerX.length === 4 && playerO.length === 5) || (playerX.length === 5 && playerO.length === 4)){
        document.getElementById('winner').style.visibility = "visible";
        document.getElementById('player-win').innerHTML = "Draw!";
    }
}

function reset(){

    currrentPlayer = X_PLAYER;
    playerX = new Array();
    playerO = new Array();
    document.getElementById('winner').style.visibility = "hidden";

    let tic_cells = document.querySelectorAll(".tic_cell");
    for(let i=0; i<=tic_cells.length; i++){
        tic_cells[i].innerHTML = "";
        tic_cells[i].style.cursor = "pointer";
        tic_cells[i].addEventListener('click', () => {
           return cellClick(i);
        });
    }
}