const MAX_SIZE = 15,
      MIN_SIZE = 5,
      SIZE_FONT_REL = {
          5: 10,
          6: 8.4,
          7: 7.1,
          8: 6.1,
          9: 5.4,
          10: 4.8,
          11: 4.3,
          12: 3.9,
          13: 3.6,
          14: 3.3,
          15: 3
      };

class Game{
    constructor(size) {
        this.size = size;
        this.generateField();
    }

    generateField() {
        $("#game-field").empty();
        for(let i = 0; i < this.size; i++){
            let cur = $("<tr></tr>");
            for(let j = 0; j < this.size; j++){
                cur.append("<td class=\"square\">&nbsp</td>");
            }
            $("#game-field").append(cur);
        }
        this.roundCorners();
        $(".square").css("font-size", SIZE_FONT_REL[this.size] + "vh");
        $("#size-label").html(this.size + "&times;" + this.size);

        $(".square").click(function(){
            const row = $(this).parent().index();
            const col = $(this).index();
            mark(row, col);
         });
    }

    roundCorners() {
        $("#game-field > tr:first-child > td:first-child").css("border-top-left-radius", "1vw");
        $("#game-field > tr:first-child > td:last-child").css("border-top-right-radius", "1vw");
        $("#game-field > tr:last-child > td:first-child").css("border-bottom-left-radius", "1vw");
        $("#game-field > tr:last-child > td:last-child").css("border-bottom-right-radius", "1vw");
    }
}