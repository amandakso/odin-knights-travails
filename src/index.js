import { Knight, Gameboard } from "./class";

function knightMoves(start, end) {
    // create Gameboard and starting Knight
    const gameboard = new Gameboard(8);

    const knight = new Knight(start);
    knight.end = end;


    // if initial start and end are the same
    let moves;
    let path = [];
    if (start[0] === end[0] && start[1] === end[1]) {
        moves = 0;
        path.push(end);
    } else {
        
        let foundEndpoint = false;
        let current = knight;
        let endpoint = current.end;
        let queue = [];
        let prev = current.previous;
        // try move
        while (foundEndpoint === false) {
            makeMoves(current);
            function makeMoves(current) {
                prev = current.previous;
                // for child 1
                if (current === false) {
                    makeMoves(queue.shift());
                } else {
                    let child = current.child1;
                    let arr = current.start;
                    let nextMove = childOne(arr);
                    current.child1 = makeMove(child, arr, prev, nextMove);
                    if (nextMove != false) {
                        queue.push(current.child1);
                    }
                    let check = checkEndpoint(endpoint, nextMove);
                    if (check === true) {
                        path = (current.child1.previous);
                        path.push(current.end);
                        moves = path.length - 1;
                        return;
                    }
                    // for child 2
                    child = current.child2;
                    arr = current.start;
                    nextMove = childTwo(arr);
                    current.child2 = makeMove(child, arr, prev, nextMove);
                    if (nextMove != false) {
                        queue.push(current.child2);
                    }
                    check = checkEndpoint(endpoint, nextMove);
                    if (check === true) {
                        path = (current.child2.previous);
                        path.push(current.end);
                        moves = path.length - 1;
                        return;
                    }
                    // for child 3
                    child = current.child3;
                    arr = current.start;
                    nextMove = childThree(arr);
                    current.child3 = makeMove(child, arr, prev, nextMove);
                    if (nextMove != false) {
                        queue.push(current.child3);
                    }
                    check = checkEndpoint(endpoint, nextMove);
                    if (check === true) {
                        path = current.child3.previous;
                        path.push(current.end);
                        moves = path.length - 1;
                        return;
                    }
                    // for child 4
                    child = current.child4;
                    arr = current.start;
                    nextMove = childFour(arr);
                    current.child4 = makeMove(child, arr, prev, nextMove);
                    if (nextMove != false) {
                        queue.push(current.child4);
                    }
                    check = checkEndpoint(endpoint, nextMove);
                    if (check === true) {
                        path = (current.child4.previous);
                        path.push(current.end);
                        moves = path.length - 1;
                        return;
                    }
                    // for child 5
                    child = current.child5;
                    arr = current.start;
                    nextMove = childFive(arr);
                    current.child5 = makeMove(child, arr, prev, nextMove);
                    if (nextMove != false) {
                        queue.push(current.child5);
                    }
                    check = checkEndpoint(endpoint, nextMove);
                    if (check === true) {
                        path = (current.child5.previous);
                        path.push(current.end);
                        moves = path.length - 1;
                        return;
                    }
                    // for child 6
                    child = current.child6;
                    arr = current.start;
                    nextMove = childSix(arr);
                    current.child6 = makeMove(child, arr, prev, nextMove);
                    if (nextMove != false) {
                        queue.push(current.child6);
                    }
                    check = checkEndpoint(endpoint, nextMove);
                    if (check === true) {
                        path = (current.child6.previous);
                        path.push(current.end);
                        moves = path.length - 1;
                        return;
                    }
                    // for child 7
                    child = current.child7;
                    arr = current.start;
                    nextMove = childSeven(arr);
                    current.child7 = makeMove(child, arr, prev, nextMove);
                    if (nextMove != false) {
                        queue.push(current.child7);
                    }
                    check = checkEndpoint(endpoint, nextMove);
                    if (check === true) {
                        path = (current.child7.previous);
                        path.push(current.end);
                        moves = path.length - 1;
                        return;
                    }
                    // for child 8
                    child = current.child8;
                    arr = current.start;
                    nextMove = childEight(arr);
                    current.child8 = makeMove(child, arr, prev, nextMove);
                    if (nextMove != false) {
                        queue.push(current.child8);
                    }
                    check = checkEndpoint(endpoint, nextMove);
                    // check if end point was reached
                    if (check === true) {
                        path = (current.child8.previous);
                        path.push(current.end);
                        moves = path.length - 1;
                        return;
                    } else {
                        makeMoves(queue.shift())
                    }
                }
            }
        }

        function makeMove(child, arr, prev, nextMove) {
            if (child=== null) { // 
                // check if move is valid
                if (!gameboard.checkMove(nextMove)) {
                    child = false; // 
                    return child
                } else {
                    let childKnight = new Knight(nextMove);
                    childKnight.end = current.end;
                    childKnight.previous = prev;
                    let last = childKnight.previous[childKnight.previous.length - 1];
                    if (arr != last) {
                        childKnight.previous.push(arr); // prevent duplicates
                    }
                    child = childKnight;
                    return child;
                }
            }
        }

        function checkEndpoint(arr1, arr2) {
            if (arr1[0] === arr2[0] && arr1[1] === arr2[1]) {
                foundEndpoint = true;
                return true;
            } else {
                return false;
            }
        }

        function childOne(arr) {
            let x = arr[0];
            let y = arr[1];
            x = x + 2;
            y = y + 1;
            let newArr = [x, y];
            return newArr;
        }
        function childTwo(arr) {
            let x = arr[0];
            let y = arr[1];
            x = x + 2;
            y = y - 1;
            let newArr = [x, y];
            return newArr;
        }
        function childThree(arr) {
            let x = arr[0];
            let y = arr[1];
            x = x + 1;
            y = y + 2;
            let newArr = [x, y];
            return newArr;
        }
        function childFour(arr) {
            let x = arr[0];
            let y = arr[1];
            x = x + 1;
            y = y - 2;
            let newArr = [x, y];
            return newArr;
        }
        function childFive(arr) {
            let x = arr[0];
            let y = arr[1];
            x = x - 1;
            y = y + 2;
            let newArr = [x, y];
            return newArr;
        }
        function childSix(arr) {
            let x = arr[0];
            let y = arr[1];
            x = x - 1;
            y = y - 2;
            let newArr = [x, y];
            return newArr;
        }
        function childSeven(arr) {
            let x = arr[0];
            let y = arr[1];
            x = x - 2;
            y = y + 1;
            let newArr = [x, y];
            return newArr;
        }
        function childEight(arr) {
            let x = arr[0];
            let y = arr[1];
            x = x - 2;
            y = y - 1;
            let newArr = [x, y];
            return newArr;
        }

    }
    function printPath(path, moves) {
        let msg = moves === 1 ? 'move' : 'moves';
        let message = `You made it in ${moves} ${msg}! Here's your path:\n`;
        for (let i = 0; i < path.length; i++) {
            message = message + JSON.stringify(path[i]) + '\n';
        }
        console.log(message);
    }

    printPath(path, moves);


}

knightMoves([0,4], [4, 3]);