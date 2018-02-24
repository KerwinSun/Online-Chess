function pieceFactory(pieceType){

    if(pieceType = 'pawn'){

        return new pawn();

    }
    if(pieceType = 'rook'){

        return new rook();

    }
    if(pieceType = 'knight'){

        return new knight();

    }
    if(pieceType = 'bishop'){

        return new bishop();

    }
    if(pieceType = 'queen'){

        return new queen();

    }
    if(pieceType = 'king'){

        return new king();

    }
    if(pieceType = 'placehold') {

        return new placehold();

    }
    return null

}