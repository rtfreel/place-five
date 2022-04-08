class Game{

    constructor(size) {
        this.size = size;
        this.table = []

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
    }

    roundCorners() {
        $("#game-field > tr:first-child > td:first-child").css("border-top-left-radius", "1vw");
        $("#game-field > tr:first-child > td:last-child").css("border-top-right-radius", "1vw");
        $("#game-field > tr:last-child > td:first-child").css("border-bottom-left-radius", "1vw");
        $("#game-field > tr:last-child > td:last-child").css("border-bottom-right-radius", "1vw");
    }
}