class Knight  {
    constructor(arr) {
        this.start = arr;
        this.previous = [];
        this.end = null;
        this.child1 = null;
        this.child2 = null;
        this.child3 = null;
        this.child4 = null;
        this.child5 = null;
        this.child6 = null;
        this.child7 = null;
        this.child8 = null;

    }
}

class Gameboard {
    constructor(num) {
        this.limit = num;
    }
    checkMove(arr) {
        // check that arrays are valid length 
        if (arr.length != 2) {
            return false;
        }
        // check that integer values are given
        let x = arr[0];
        let y = arr[1]
        if (!Number.isInteger(x) || !Number.isInteger(y)) {
            return false;
        }
        let limit = this.limit - 1;
        if (x > limit || y > limit) {
            return false;
        }
        return true;
    }
}

export { Knight, Gameboard }