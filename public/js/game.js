const X = 0;
const Y = 1;
const FILES = 8;
const RANKS = 8;
var board = [];
var wp1;
var bp1;

$(function() {

    startGame();

});
function setup(){


    ClearAllPieces();
    initBoardSquares();
    initBoardPieces();

}
function startGame(){
    makeBoard();
    setup();

}

function jsonTOBoard(json){

    var v = JSON.parse(json);

    for(var i = 0; i < v.length; i++) {
        for(var j = 0; j < v[i].length; j++) {
            if(v[i][j] != 0){
                var tempPiece = pieceFactory(v[i][j].type);
                v[i][j] = Object.assign(tempPiece, v[i][j]);
            };
        }
    }
    console.log(v);
}

function makeBoard() {

    for(x=0; x<FILES; x++) {

        board[x] = [];

        for (y = 0; y < RANKS; y++) {

            board[x][y] = 0;

        }

    }
     wp1 = new pawn("w", [0,1]); board[0][1] = wp1;
     bp1 = new pawn("w", [0,7]); board[0][7] = bp1;
     bp1 = new pawn("w", [1,7]); board[1][7] = bp1;


}

function move(piece, to){

    piece.move(to,board);
    setup();
    firebase();
}

function firebase(){

   database.ref('tv/update').transaction(
        function (update) {
            return (update || 0) + 1;
        }
    );
    database.ref('tv/date').transaction(
        function (date) {
            var options = {
                weekday: "long", year: "numeric", month: "short",
                day: "numeric", hour: "2-digit", minute: "2-digit"
            };
            return (new Date()).toLocaleDateString("en-NZ", options);
        }
    );

}
function ClearAllPieces() {
    $(".Piece").remove();
}

function initBoardSquares(){

    var light = 0;
    var rankName;
    var fileName;
    var divString;
    var lastLight = 0;
    var rankIter = 0;
    var fileIter = 0;
    var lightString;

    for(rankIter = RANKS; rankIter >= 0; rankIter--) {

        light = lastLight ^ 1;
        lastLight ^= 1;
        rankName = "rank" + (rankIter);
        for(fileIter = 0; fileIter <= FILES; fileIter++) {
            fileName = "file" + (fileIter);

            if(light==0) lightString="Light";
            else lightString = "Dark";
            divString = "<div class=\"Square " + rankName + " " + fileName + " " + lightString + "\"/>";
            light^=1;
            $("#Board").append(divString);
        }

    }

}
function initBoardPieces() {

    var rankName;
    var fileName;
    var imageString;
    var pieceFileName;
    var piece;

    for(x= 0; x < RANKS; x++) {

        for(y = 0; y < FILES; y++) {

            if (board[x][y] != 0) {

                piece = board[x][y];
                rankName = "rank"+y;
                fileName = "file"+x;
                pieceFileName = "/public/js/images/"+piece.colour+"_"+piece.constructor.name+".png";
                imageString = "<image src=\"" + pieceFileName + "\" class=\"Piece " + rankName + " " + fileName + "\"/>";
                $("#Board").append(imageString);
            }

        }
    }

}