const Person = "person";
const AI = "ai";

let game;
let players;
let curPlayer = 0;
let tic = true;

$(document).ready(function(){
    game = new Game("#game-field", "#size-label");
    game.generate(MIN_SIZE);
    players = [{type: Person, sym: "&times;"},
                {type: AI, sym: "o"}];
});

function turn(row, col){
    // cell is occupied
    if(game.cells[row][col].playerId != -1) return;
    
    game.cells[row][col].occupie(curPlayer, players[curPlayer]);

    // check winner
    let winner = game.checkWinner();
    switch (winner){
        case undefined: break;  // game goes on
        case -1:                // tie
            alert("It's a tie");
            return;
        default:                // winner
            alert("Player " + winner + "is the winner!");
            return;
    }

    // next player
    curPlayer++;
    curPlayer %= players.length;

    // AI move
    if(players[curPlayer].type == AI){
        let r, c;
        do {
            r = Math.floor(Math.random() * game.size);
            c = Math.floor(Math.random() * game.size);
        } while (game.cells[r][c].playerId != -1);
        turn(r, c);
    }
}

function resize(add) {
    if(add) {   // make table larger by one
        if(game.size == MAX_SIZE)
            return;
        game.generate(game.size + 1);
    } else {    // shrink table by one
        if(game.size == MIN_SIZE)
            return;
        game.generate(game.size - 1);
    }
}