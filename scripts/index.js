let game;
let tic = true;

$(document).ready(function(){
    game = new Game(MIN_SIZE);
});

function mark(row, col){
    let sym = tic ? "&times;" : "o";
    $("#game-field tr:eq(" + row + ") td:eq(" + col + ")").html(sym);
    tic = !tic;
}

function resize(add) {
    let newSize;
    if(add) {   // make table larger by one
        if(game.size == MAX_SIZE)
            return;
        newSize = game.size + 1;
    } else {    // shrink table by one
        if(game.size == MIN_SIZE)
            return;
        newSize = game.size - 1;
    }
    game = new Game(newSize);
}