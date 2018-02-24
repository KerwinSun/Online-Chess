var currentPiece = null;

$("#SetFen").click(function () {

    jsonTOBoard(JSON.stringify(board));
});

function ClickedSquare(pageX, pageY) {

    console.log('ClickedSquare() at ' + pageX + ',' + pageY);
    var position = $('#Board').position();

    var workedX = Math.floor(position.left);
    var workedY = Math.floor(position.top);

    pageX = Math.floor(pageX);
    pageY = Math.floor(pageY);

    var x = Math.floor((pageX-workedX) / 60);
    var y = Math.floor(8-(pageY-workedY) / 60);

    if(!currentPiece){

        currentPiece = board[x][y];

    }else {

        move(currentPiece, [x, y]);
        currentPiece = null;

    }

}

function deSelectSq() {
    $('.Square').each( function(index) {
            $(this).removeClass('SqSelected');
    } );
    $('.Piece').each( function(index) {
        $(this).removeClass('SqSelected');
    } );
}

$(document).on('click','.Piece', function (e) {
    deSelectSq();
    $(this).addClass('SqSelected');
    ClickedSquare(e.pageX, e.pageY);
});

$(document).on('click','.Square', function (e) {
    deSelectSq();
    ClickedSquare(e.pageX, e.pageY);
    currentPiece = null;
});