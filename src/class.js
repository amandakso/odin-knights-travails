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
        if (arr.length != 2) {
            return false;
        }
        let x = arr[0];
        let y = arr[1];

    }
}