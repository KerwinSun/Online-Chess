class piece {

    constructor(colour, location) {
        this.colour = colour;
        this.location = location;
        this.type = this.constructor.name;
    }

    checkBounds(to){

        var maxBound = RANKS;
        var minBound = 0;

        if(to[X] > maxBound || to[Y] > maxBound || to[X] < minBound || to[Y] < minBound){

            return false;

        }
        return true;
    }

}