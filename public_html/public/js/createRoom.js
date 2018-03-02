var currentPiece = null;

$("#SetFen").click(function () {
    var name = ""; 
    name = document.getElementById("roomName").value;
    createAndStoreGame(name);
});

function jsonTOBoard(json){

    var v = JSON.parse(json);

    for(var i = 0; i < v.length; i++) {
        for(var j = 0; j < v[i].length; j++) {
            if(v[i][j] !== 0){
                var tempPiece = pieceFactory(v[i][j].type);
                v[i][j] = Object.assign(tempPiece, v[i][j]);
            }
        }
    }
    console.log(v);
}

function createAndStoreGame(name) {

    var board = [];
    
    for(x=0; x<FILES; x++) {

        board[x] = [];

        for (y = 0; y < RANKS; y++) {

            board[x][y] = 0;

        }

    }
    bp1 = new pawn("b", [0,7]); board[0][7] = bp1;
    bp1 = new pawn("b", [1,7]); board[1][7] = bp1;
    bp1 = new pawn("b", [2,7]); board[2][7] = bp1;
    bp1 = new pawn("b", [3,7]); board[3][7] = bp1;
    bp1 = new pawn("b", [4,7]); board[4][7] = bp1;
    bp1 = new pawn("b", [5,7]); board[5][7] = bp1;
    wp1 = new pawn("b", [6,1]); board[6][7] = wp1;
    bp1 = new pawn("b", [7,7]); board[7][7] = bp1;
    bp1 = new pawn("w", [0,2]); board[0][2] = bp1;
    bp1 = new pawn("w", [1,2]); board[1][2] = bp1;
    bp1 = new pawn("w", [2,2]); board[2][2] = bp1;
    bp1 = new pawn("w", [3,2]); board[3][2] = bp1;
    bp1 = new pawn("w", [4,2]); board[4][2] = bp1;
    bp1 = new pawn("w", [5,2]); board[5][2] = bp1;
    bp1 = new pawn("w", [6,2]); board[6][2] = bp1;
    bp1 = new pawn("w", [7,2]); board[7][2] = bp1;

    var boardJson = JSON.stringify(board);
     
    database.ref('/games/' + name).set(
        {
        name: name,
        board: boardJson
        }
    );
    
}
function displayRooms(snapshot){
    
    var div = document.getElementById('roomList');
    div.innerHTML = "";
    
    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        div.innerHTML += item.name + '<br>';
    });
    
    
}

firebase.database().ref("/games").on('value', function(snapshot) {
  displayRooms(snapshot);
});
