let game;
let tic = true;

$(document).ready(function(){
    game = new Game(10);

    $(".square").click(function(){
       const row = $(this).parent().index();
       const col = $(this).index();
       mark(row, col);
    });
});

function mark(row, col){
    let sym = tic ? "&times;" : "o";
    $("#game-field tr:eq(" + row + ") td:eq(" + col + ")").html(sym);
    tic = !tic;
}