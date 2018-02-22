class pawn extends piece{

    /*
    legal move detection behaviour for piece
    */
    isMoveLegal(to, board){

        if(!super.checkBounds(to)){

            return false;

        }
        //basic push
        if(to[Y] - 1 == this.location[Y] && to[X] == this.location[X]){
            if(board[to[X]][to[Y]] == 0){
                return true;
            }else{
                return false;
            }
        }

        //capture
        if(to[Y] - this.location[Y] == 1 && Math.abs(to[X] - this.location[X]) == 1){
            if(!board[to[X]][to[Y]] == 0){
                return true;
            }else{
                return false;
            }
        }


        return false;

    }
    /*
    movement behaviour for piece
    */
    move(to, board){

        if(this.isMoveLegal(to, board)) {

            board[to[X]][to[Y]] = board[this.location[X]][this.location[Y]];
            board[this.location[X]][this.location[Y]] = 0;
            this.location[X] = to[X];
            this.location[Y] = to[Y];
            console.log(this.location);
            return true;
        };

        return false;
    }


}