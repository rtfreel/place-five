const MAX_SIZE = 15,
      MIN_SIZE = 5;

class Game{
    constructor(table, sizeOut = undefined) {
        this.table = table;
        this.sizeOut = sizeOut;
    }

    generate(size) {
        this.size = size;
        this.generateCells();
        this.renderTable();
        if(this.sizeOut != undefined)
            $(this.sizeOut).html(this.size + "&times;" + this.size);
    }

    /**
     * undefined - game is still running
     * -1 - tie
     * {id} - winner
     */
    checkWinner() {
        let sortedCells = {};
        let curId;
        for(let i = 0; i < this.size; i++){
            for(let j = 0; j < this.size; j++){
                curId = this.cells[i][j].playerId;
                if(sortedCells[curId] == undefined)
                    sortedCells[curId] = [];
                sortedCells[curId].push(this.cells[i][j]);
            }
        }
        // if no empty cells left
        if(sortedCells[-1] == undefined) return -1;
        
        // actual winner checking 

        return undefined;
    }

    generateCells() {
        this.cells = [];
        for(let i = 0; i < this.size; i++){
            this.cells.push([]);
            for(let j = 0; j < this.size; j++){
                this.cells[i].push(new Cell(this.size));
            }
        }
    }

    renderTable() {
        $(this.table).empty();
        for(let i = 0; i < this.size; i++){
            let cur = $("<tr></tr>");
            for(let j = 0; j < this.size; j++){
                cur.append(this.cells[i][j].html);
            }
            $(this.table).append(cur);
        }
        this.roundCorners();
    }

    roundCorners() {
        $(this.table + " > tr:first-child > td:first-child").css("border-top-left-radius", "1vw");
        $(this.table + " > tr:first-child > td:last-child").css("border-top-right-radius", "1vw");
        $(this.table + " > tr:last-child > td:first-child").css("border-bottom-left-radius", "1vw");
        $(this.table + " > tr:last-child > td:last-child").css("border-bottom-right-radius", "1vw");
    }
}