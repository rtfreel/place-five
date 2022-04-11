const SIZE_FONT_REL = {
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

class Cell {
    constructor(size) {
        this.sym = "&nbsp";
        this.html = $("<td class=\"square\">" + this.sym + "</td>");
        $(this.html).css("font-size", SIZE_FONT_REL[size] + "vh");
        
        let obj = this;
        $(this.html).click(function(){
            mark(obj.getRow(), obj.getCol());
        });
    }
    
    getRow() { return $(this.html).parent().index(); }
    getCol() { return $(this.html).index(); }

    setSymbol(sym) { 
        this.sym = sym;
        $(this.html).html(sym); 
    }
}