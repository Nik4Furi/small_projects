
console.log('Welcome in Tic Tac Toe');

const X_text = 'X', O_text = 'O'; //Turns can user do, first turn is O
let flagO = true;
let grid = [null, null, null, null, null, null, null, null, null]; //Used to store the turns of users

//-------------------- Container to handle the boxes i/p --------------
const boxes = Array.from(document.querySelectorAll('.box'));


//----------------- Write the login to win the game---------------X
const playerWin = () => {
// stopTurn()
    //Between of the bounderies
    if (grid[1] == X_text && grid[4] == X_text && grid[7] == X_text) {
        // console.log('win at 1,4,7 ', X_text);
        stopTurn(X_text);
        return;
    }
    if (grid[1] == O_text && grid[4] == O_text && grid[7] == O_text) {
        // console.log('win at 1,4,7 ', O_text);
        stopTurn(O_text);
        return;
    }

    if (grid[3] == X_text && grid[4] == X_text && grid[5] == X_text) {
        // console.log('win at 3,4,5 ', X_text);
        stopTurn(X_text);
        return;
    }
    if (grid[3] == O_text && grid[4] == O_text && grid[5] == O_text) {
        // console.log('win at 3,4,5 ', O_text);
        stopTurn(O_text);
        return;
    }

    if (grid[6] == X_text && grid[7] == X_text && grid[8] == X_text) {
        // console.log('win at 3,4,5 ', X_text);
        stopTurn(X_text);
        return;
    }
    if (grid[6] == O_text && grid[7] == O_text && grid[8] == O_text) {
        // console.log('win at 3,4,5 ', O_text);
        stopTurn(O_text);
        return;
    }
   

    //----------- We check diagonally to finding the turn
    if (grid[0] == X_text ) {

        //if x is at 0, then for wining is x is required for 3,6 index(Vertical) and 2,3 for(Horizontal) and 4,8 (Diagonal)

        if (grid[3] == X_text && grid[6] == X_text) {
           
            // console.log('win at 3,6 ', X_text);
            stopTurn(X_text);
            return;
        }

        if (grid[2] == X_text && grid[1] == X_text) {
            // console.log('win at 2,4 ', X_text);
            stopTurn(X_text);
            return;
        }

        if (grid[4] == X_text && grid[8] == X_text) {
            // console.log('win at 4,8 ', X_text);
            stopTurn(X_text);
            return;
        }
    }

    if (grid[0] == O_text) {

        //if x is at 0, then for wining is x is required for 3,6 index(Vertical) and 2,3 for(Horizontal) and 4,8 (Diagonal)

        if (grid[3] == O_text && grid[6] == O_text) {
            // console.log('win at 3,6 ', O_text);
            stopTurn(O_text);
            return;
        }

        if (grid[2] == O_text && grid[1] == O_text) {
            // console.log('win at 2,4 ', O_text);
            stopTurn(O_text);
            return;
        }

        if (grid[4] == O_text && grid[8] == O_text) {
            // console.log('win at 4,8 ', O_text);
            stopTurn(O_text);
            return;
        }
    }

    
    if (grid[2] == O_text) {

        //if x is at 0, then for wining is x is required for 3,6 index(Vertical) and 2,3 for(Horizontal) and 4,8 (Diagonal)

        if (grid[5] == O_text && grid[8] == O_text) {
            // console.log('win at 5,7 ', O_text);
            stopTurn(O_text);
            return;
        }

        if (grid[4] == O_text && grid[6] == O_text) {
            // console.log('win at 2,4 ', O_text);
            stopTurn(O_text);
            return;
        }
    }

    if (grid[2] == X_text) {

        //if x is at 0, then for wining is x is required for 3,6 index(Vertical) and 2,3 for(Horizontal) and 4,8 (Diagonal)

        if (grid[5] == X_text && grid[8] == X_text) {
            // console.log('win at 5,7 ', X_text);
            stopTurn(X_text);
            return;
        }

        if (grid[4] == X_text && grid[6] == X_text) {
            // console.log('win at 2,4 ', X_text);
            stopTurn(X_text);
            return;
        }
    }
}

//---------------------- Declaration the wining person ------------------------X
const stopTurn = (winner)=>{
    const WiningBox = document.getElementById('WiningBox');
    // console.log('check winigbox ',WiningBox.children[0]);

    WiningBox.children[0].innerText =  `${winner} Win`
    
}

// ------------------------------- Button to restart the game-------------------X
const btn = document.getElementById('btn');
btn.addEventListener('click',()=>{
    grid = [null, null, null, null, null, null, null, null, null]; //Used to store the turns of users   
    const WiningBox = document.getElementById('WiningBox');
    // console.log('check winigbox ',WiningBox.children[0]);

    WiningBox.children[0].innerText =  `Let's re-start to play`

    boxes.forEach((box,index)=>{
        box.innerHTML = '';
    })
})

boxes.forEach((box, index) => {
    box.addEventListener('click', ()=>{
        if (grid[index] == null) {
            if (flagO) grid[index] = O_text, flagO = false;
            else grid[index] = X_text, flagO = true;
    
            playerWin();
    
            box.innerHTML = grid[index];
        }
    })        
})