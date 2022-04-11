let game;
let tic = true;

$(document).ready(function(){
    game = new Game("#game-field", "#size-label");
    game.generate(MIN_SIZE);
});

function mark(row, col){
    let sym = tic ? "&times;" : "o";
    game.cells[row][col].setSymbol(sym);
    tic = !tic;
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