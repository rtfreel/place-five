let game;
let players;
let curPlayer = 0;
let tic = true;

// entry point
$(document).ready(function(){
    game = new Game("#game-field", "#size-label");
    game.generate(MIN_SIZE);

    players = [new Player(game, 0, "&times"),
                new AI(AI_DIFFICULT, game, 1, "o")];

    aiTurnCheck();

    $("#size-label").click(function() {
        game.generate(game.size);
        curPlayer = 0;
        aiTurnCheck();
    });
});

function turn(row, col){
    // skip turn if game is finishrd for any reason
    if(!game.running){
        if(game.started) return;
        game.start();
    }

    // if cell is occupied
    if(game.cells[row][col].playerId != -1) return;
    
    game.cells[row][col].occupie(curPlayer, players[curPlayer]);

    // check winner
    let winner = game.checkWinner(curPlayer);
    switch (winner){
        case undefined: break;  // game goes on
        case -1:                // tie
            alert("It's a tie");
            return;
        default:                // winner
            alert("Player " + winner + " is the winner!");
            return;
    }

    // next player
    curPlayer++;
    curPlayer %= players.length;

    // AI move
    aiTurnCheck();
}

function aiTurnCheck() {
    let move = players[curPlayer].makeMove();
    if(move != undefined) 
        turn(move[0], move[1]);
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
    curPlayer = 0;
    aiTurnCheck();
}