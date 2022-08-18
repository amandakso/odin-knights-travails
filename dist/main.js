/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/class.js":
/*!**********************!*\
  !*** ./src/class.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard),
/* harmony export */   "Knight": () => (/* binding */ Knight)
/* harmony export */ });
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
        if (x > limit || y > limit || x < 0 || y < 0) {
            return false;
        }
        return true;
    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "./src/class.js");


function knightMoves(start, end) {
    // create Gameboard and starting Knight
    const gameboard = new _class__WEBPACK_IMPORTED_MODULE_0__.Gameboard(8);

    const knight = new _class__WEBPACK_IMPORTED_MODULE_0__.Knight(start);
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
                    let childKnight = new _class__WEBPACK_IMPORTED_MODULE_0__.Knight(nextMove);
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxPQUFPLEVBQUUsSUFBSTtBQUNyRCx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQSwyQiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4ta25pZ2h0cy10cmF2YWlscy8uL3NyYy9jbGFzcy5qcyIsIndlYnBhY2s6Ly9vZGluLWtuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWtuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWtuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWtuaWdodHMtdHJhdmFpbHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgS25pZ2h0ICB7XG4gICAgY29uc3RydWN0b3IoYXJyKSB7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBhcnI7XG4gICAgICAgIHRoaXMucHJldmlvdXMgPSBbXTtcbiAgICAgICAgdGhpcy5lbmQgPSBudWxsO1xuICAgICAgICB0aGlzLmNoaWxkMSA9IG51bGw7XG4gICAgICAgIHRoaXMuY2hpbGQyID0gbnVsbDtcbiAgICAgICAgdGhpcy5jaGlsZDMgPSBudWxsO1xuICAgICAgICB0aGlzLmNoaWxkNCA9IG51bGw7XG4gICAgICAgIHRoaXMuY2hpbGQ1ID0gbnVsbDtcbiAgICAgICAgdGhpcy5jaGlsZDYgPSBudWxsO1xuICAgICAgICB0aGlzLmNoaWxkNyA9IG51bGw7XG4gICAgICAgIHRoaXMuY2hpbGQ4ID0gbnVsbDtcblxuICAgIH1cbn1cblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihudW0pIHtcbiAgICAgICAgdGhpcy5saW1pdCA9IG51bTtcbiAgICB9XG4gICAgY2hlY2tNb3ZlKGFycikge1xuICAgICAgICAvLyBjaGVjayB0aGF0IGFycmF5cyBhcmUgdmFsaWQgbGVuZ3RoIFxuICAgICAgICBpZiAoYXJyLmxlbmd0aCAhPSAyKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgdGhhdCBpbnRlZ2VyIHZhbHVlcyBhcmUgZ2l2ZW5cbiAgICAgICAgbGV0IHggPSBhcnJbMF07XG4gICAgICAgIGxldCB5ID0gYXJyWzFdXG4gICAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcih4KSB8fCAhTnVtYmVyLmlzSW50ZWdlcih5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBsaW1pdCA9IHRoaXMubGltaXQgLSAxO1xuICAgICAgICBpZiAoeCA+IGxpbWl0IHx8IHkgPiBsaW1pdCB8fCB4IDwgMCB8fCB5IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgS25pZ2h0LCBHYW1lYm9hcmQgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgS25pZ2h0LCBHYW1lYm9hcmQgfSBmcm9tIFwiLi9jbGFzc1wiO1xuXG5mdW5jdGlvbiBrbmlnaHRNb3ZlcyhzdGFydCwgZW5kKSB7XG4gICAgLy8gY3JlYXRlIEdhbWVib2FyZCBhbmQgc3RhcnRpbmcgS25pZ2h0XG4gICAgY29uc3QgZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCg4KTtcblxuICAgIGNvbnN0IGtuaWdodCA9IG5ldyBLbmlnaHQoc3RhcnQpO1xuICAgIGtuaWdodC5lbmQgPSBlbmQ7XG5cblxuICAgIC8vIGlmIGluaXRpYWwgc3RhcnQgYW5kIGVuZCBhcmUgdGhlIHNhbWVcbiAgICBsZXQgbW92ZXM7XG4gICAgbGV0IHBhdGggPSBbXTtcbiAgICBpZiAoc3RhcnRbMF0gPT09IGVuZFswXSAmJiBzdGFydFsxXSA9PT0gZW5kWzFdKSB7XG4gICAgICAgIG1vdmVzID0gMDtcbiAgICAgICAgcGF0aC5wdXNoKGVuZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgXG4gICAgICAgIGxldCBmb3VuZEVuZHBvaW50ID0gZmFsc2U7XG4gICAgICAgIGxldCBjdXJyZW50ID0ga25pZ2h0O1xuICAgICAgICBsZXQgZW5kcG9pbnQgPSBjdXJyZW50LmVuZDtcbiAgICAgICAgbGV0IHF1ZXVlID0gW107XG4gICAgICAgIGxldCBwcmV2ID0gY3VycmVudC5wcmV2aW91cztcbiAgICAgICAgLy8gdHJ5IG1vdmVcbiAgICAgICAgd2hpbGUgKGZvdW5kRW5kcG9pbnQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBtYWtlTW92ZXMoY3VycmVudCk7XG4gICAgICAgICAgICBmdW5jdGlvbiBtYWtlTW92ZXMoY3VycmVudCkge1xuICAgICAgICAgICAgICAgIHByZXYgPSBjdXJyZW50LnByZXZpb3VzO1xuICAgICAgICAgICAgICAgIC8vIGZvciBjaGlsZCAxXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1ha2VNb3ZlcyhxdWV1ZS5zaGlmdCgpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGQgPSBjdXJyZW50LmNoaWxkMTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFyciA9IGN1cnJlbnQuc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0TW92ZSA9IGNoaWxkT25lKGFycik7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuY2hpbGQxID0gbWFrZU1vdmUoY2hpbGQsIGFyciwgcHJldiwgbmV4dE1vdmUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dE1vdmUgIT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2goY3VycmVudC5jaGlsZDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGVjayA9IGNoZWNrRW5kcG9pbnQoZW5kcG9pbnQsIG5leHRNb3ZlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoID0gKGN1cnJlbnQuY2hpbGQxLnByZXZpb3VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGgucHVzaChjdXJyZW50LmVuZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlcyA9IHBhdGgubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBmb3IgY2hpbGQgMlxuICAgICAgICAgICAgICAgICAgICBjaGlsZCA9IGN1cnJlbnQuY2hpbGQyO1xuICAgICAgICAgICAgICAgICAgICBhcnIgPSBjdXJyZW50LnN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICBuZXh0TW92ZSA9IGNoaWxkVHdvKGFycik7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuY2hpbGQyID0gbWFrZU1vdmUoY2hpbGQsIGFyciwgcHJldiwgbmV4dE1vdmUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dE1vdmUgIT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2goY3VycmVudC5jaGlsZDIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrID0gY2hlY2tFbmRwb2ludChlbmRwb2ludCwgbmV4dE1vdmUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2sgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGggPSAoY3VycmVudC5jaGlsZDIucHJldmlvdXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aC5wdXNoKGN1cnJlbnQuZW5kKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVzID0gcGF0aC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGZvciBjaGlsZCAzXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkID0gY3VycmVudC5jaGlsZDM7XG4gICAgICAgICAgICAgICAgICAgIGFyciA9IGN1cnJlbnQuc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIG5leHRNb3ZlID0gY2hpbGRUaHJlZShhcnIpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50LmNoaWxkMyA9IG1ha2VNb3ZlKGNoaWxkLCBhcnIsIHByZXYsIG5leHRNb3ZlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRNb3ZlICE9IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKGN1cnJlbnQuY2hpbGQzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGNoZWNrRW5kcG9pbnQoZW5kcG9pbnQsIG5leHRNb3ZlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoID0gY3VycmVudC5jaGlsZDMucHJldmlvdXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoLnB1c2goY3VycmVudC5lbmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZXMgPSBwYXRoLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gZm9yIGNoaWxkIDRcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQgPSBjdXJyZW50LmNoaWxkNDtcbiAgICAgICAgICAgICAgICAgICAgYXJyID0gY3VycmVudC5zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgbmV4dE1vdmUgPSBjaGlsZEZvdXIoYXJyKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC5jaGlsZDQgPSBtYWtlTW92ZShjaGlsZCwgYXJyLCBwcmV2LCBuZXh0TW92ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0TW92ZSAhPSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVldWUucHVzaChjdXJyZW50LmNoaWxkNCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBjaGVja0VuZHBvaW50KGVuZHBvaW50LCBuZXh0TW92ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGVjayA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCA9IChjdXJyZW50LmNoaWxkNC5wcmV2aW91cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoLnB1c2goY3VycmVudC5lbmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZXMgPSBwYXRoLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gZm9yIGNoaWxkIDVcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQgPSBjdXJyZW50LmNoaWxkNTtcbiAgICAgICAgICAgICAgICAgICAgYXJyID0gY3VycmVudC5zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgbmV4dE1vdmUgPSBjaGlsZEZpdmUoYXJyKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC5jaGlsZDUgPSBtYWtlTW92ZShjaGlsZCwgYXJyLCBwcmV2LCBuZXh0TW92ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0TW92ZSAhPSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVldWUucHVzaChjdXJyZW50LmNoaWxkNSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBjaGVja0VuZHBvaW50KGVuZHBvaW50LCBuZXh0TW92ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGVjayA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCA9IChjdXJyZW50LmNoaWxkNS5wcmV2aW91cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoLnB1c2goY3VycmVudC5lbmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZXMgPSBwYXRoLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gZm9yIGNoaWxkIDZcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQgPSBjdXJyZW50LmNoaWxkNjtcbiAgICAgICAgICAgICAgICAgICAgYXJyID0gY3VycmVudC5zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgbmV4dE1vdmUgPSBjaGlsZFNpeChhcnIpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50LmNoaWxkNiA9IG1ha2VNb3ZlKGNoaWxkLCBhcnIsIHByZXYsIG5leHRNb3ZlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRNb3ZlICE9IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKGN1cnJlbnQuY2hpbGQ2KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGNoZWNrRW5kcG9pbnQoZW5kcG9pbnQsIG5leHRNb3ZlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoID0gKGN1cnJlbnQuY2hpbGQ2LnByZXZpb3VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGgucHVzaChjdXJyZW50LmVuZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlcyA9IHBhdGgubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBmb3IgY2hpbGQgN1xuICAgICAgICAgICAgICAgICAgICBjaGlsZCA9IGN1cnJlbnQuY2hpbGQ3O1xuICAgICAgICAgICAgICAgICAgICBhcnIgPSBjdXJyZW50LnN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICBuZXh0TW92ZSA9IGNoaWxkU2V2ZW4oYXJyKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC5jaGlsZDcgPSBtYWtlTW92ZShjaGlsZCwgYXJyLCBwcmV2LCBuZXh0TW92ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0TW92ZSAhPSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVldWUucHVzaChjdXJyZW50LmNoaWxkNyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBjaGVja0VuZHBvaW50KGVuZHBvaW50LCBuZXh0TW92ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGVjayA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCA9IChjdXJyZW50LmNoaWxkNy5wcmV2aW91cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoLnB1c2goY3VycmVudC5lbmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZXMgPSBwYXRoLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gZm9yIGNoaWxkIDhcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQgPSBjdXJyZW50LmNoaWxkODtcbiAgICAgICAgICAgICAgICAgICAgYXJyID0gY3VycmVudC5zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgbmV4dE1vdmUgPSBjaGlsZEVpZ2h0KGFycik7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuY2hpbGQ4ID0gbWFrZU1vdmUoY2hpbGQsIGFyciwgcHJldiwgbmV4dE1vdmUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dE1vdmUgIT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2goY3VycmVudC5jaGlsZDgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrID0gY2hlY2tFbmRwb2ludChlbmRwb2ludCwgbmV4dE1vdmUpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBlbmQgcG9pbnQgd2FzIHJlYWNoZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoID0gKGN1cnJlbnQuY2hpbGQ4LnByZXZpb3VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGgucHVzaChjdXJyZW50LmVuZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlcyA9IHBhdGgubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ha2VNb3ZlcyhxdWV1ZS5zaGlmdCgpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbWFrZU1vdmUoY2hpbGQsIGFyciwgcHJldiwgbmV4dE1vdmUpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZD09PSBudWxsKSB7IC8vIFxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIG1vdmUgaXMgdmFsaWRcbiAgICAgICAgICAgICAgICBpZiAoIWdhbWVib2FyZC5jaGVja01vdmUobmV4dE1vdmUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkID0gZmFsc2U7IC8vIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGRLbmlnaHQgPSBuZXcgS25pZ2h0KG5leHRNb3ZlKTtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRLbmlnaHQuZW5kID0gY3VycmVudC5lbmQ7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkS25pZ2h0LnByZXZpb3VzID0gcHJldjtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhc3QgPSBjaGlsZEtuaWdodC5wcmV2aW91c1tjaGlsZEtuaWdodC5wcmV2aW91cy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyciAhPSBsYXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEtuaWdodC5wcmV2aW91cy5wdXNoKGFycik7IC8vIHByZXZlbnQgZHVwbGljYXRlc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkID0gY2hpbGRLbmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjaGVja0VuZHBvaW50KGFycjEsIGFycjIpIHtcbiAgICAgICAgICAgIGlmIChhcnIxWzBdID09PSBhcnIyWzBdICYmIGFycjFbMV0gPT09IGFycjJbMV0pIHtcbiAgICAgICAgICAgICAgICBmb3VuZEVuZHBvaW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY2hpbGRPbmUoYXJyKSB7XG4gICAgICAgICAgICBsZXQgeCA9IGFyclswXTtcbiAgICAgICAgICAgIGxldCB5ID0gYXJyWzFdO1xuICAgICAgICAgICAgeCA9IHggKyAyO1xuICAgICAgICAgICAgeSA9IHkgKyAxO1xuICAgICAgICAgICAgbGV0IG5ld0FyciA9IFt4LCB5XTtcbiAgICAgICAgICAgIHJldHVybiBuZXdBcnI7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY2hpbGRUd28oYXJyKSB7XG4gICAgICAgICAgICBsZXQgeCA9IGFyclswXTtcbiAgICAgICAgICAgIGxldCB5ID0gYXJyWzFdO1xuICAgICAgICAgICAgeCA9IHggKyAyO1xuICAgICAgICAgICAgeSA9IHkgLSAxO1xuICAgICAgICAgICAgbGV0IG5ld0FyciA9IFt4LCB5XTtcbiAgICAgICAgICAgIHJldHVybiBuZXdBcnI7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY2hpbGRUaHJlZShhcnIpIHtcbiAgICAgICAgICAgIGxldCB4ID0gYXJyWzBdO1xuICAgICAgICAgICAgbGV0IHkgPSBhcnJbMV07XG4gICAgICAgICAgICB4ID0geCArIDE7XG4gICAgICAgICAgICB5ID0geSArIDI7XG4gICAgICAgICAgICBsZXQgbmV3QXJyID0gW3gsIHldO1xuICAgICAgICAgICAgcmV0dXJuIG5ld0FycjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjaGlsZEZvdXIoYXJyKSB7XG4gICAgICAgICAgICBsZXQgeCA9IGFyclswXTtcbiAgICAgICAgICAgIGxldCB5ID0gYXJyWzFdO1xuICAgICAgICAgICAgeCA9IHggKyAxO1xuICAgICAgICAgICAgeSA9IHkgLSAyO1xuICAgICAgICAgICAgbGV0IG5ld0FyciA9IFt4LCB5XTtcbiAgICAgICAgICAgIHJldHVybiBuZXdBcnI7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY2hpbGRGaXZlKGFycikge1xuICAgICAgICAgICAgbGV0IHggPSBhcnJbMF07XG4gICAgICAgICAgICBsZXQgeSA9IGFyclsxXTtcbiAgICAgICAgICAgIHggPSB4IC0gMTtcbiAgICAgICAgICAgIHkgPSB5ICsgMjtcbiAgICAgICAgICAgIGxldCBuZXdBcnIgPSBbeCwgeV07XG4gICAgICAgICAgICByZXR1cm4gbmV3QXJyO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNoaWxkU2l4KGFycikge1xuICAgICAgICAgICAgbGV0IHggPSBhcnJbMF07XG4gICAgICAgICAgICBsZXQgeSA9IGFyclsxXTtcbiAgICAgICAgICAgIHggPSB4IC0gMTtcbiAgICAgICAgICAgIHkgPSB5IC0gMjtcbiAgICAgICAgICAgIGxldCBuZXdBcnIgPSBbeCwgeV07XG4gICAgICAgICAgICByZXR1cm4gbmV3QXJyO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNoaWxkU2V2ZW4oYXJyKSB7XG4gICAgICAgICAgICBsZXQgeCA9IGFyclswXTtcbiAgICAgICAgICAgIGxldCB5ID0gYXJyWzFdO1xuICAgICAgICAgICAgeCA9IHggLSAyO1xuICAgICAgICAgICAgeSA9IHkgKyAxO1xuICAgICAgICAgICAgbGV0IG5ld0FyciA9IFt4LCB5XTtcbiAgICAgICAgICAgIHJldHVybiBuZXdBcnI7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY2hpbGRFaWdodChhcnIpIHtcbiAgICAgICAgICAgIGxldCB4ID0gYXJyWzBdO1xuICAgICAgICAgICAgbGV0IHkgPSBhcnJbMV07XG4gICAgICAgICAgICB4ID0geCAtIDI7XG4gICAgICAgICAgICB5ID0geSAtIDE7XG4gICAgICAgICAgICBsZXQgbmV3QXJyID0gW3gsIHldO1xuICAgICAgICAgICAgcmV0dXJuIG5ld0FycjtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGZ1bmN0aW9uIHByaW50UGF0aChwYXRoLCBtb3Zlcykge1xuICAgICAgICBsZXQgbXNnID0gbW92ZXMgPT09IDEgPyAnbW92ZScgOiAnbW92ZXMnO1xuICAgICAgICBsZXQgbWVzc2FnZSA9IGBZb3UgbWFkZSBpdCBpbiAke21vdmVzfSAke21zZ30hIEhlcmUncyB5b3VyIHBhdGg6XFxuYDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZSArIEpTT04uc3RyaW5naWZ5KHBhdGhbaV0pICsgJ1xcbic7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcHJpbnRQYXRoKHBhdGgsIG1vdmVzKTtcblxuXG59XG5cbmtuaWdodE1vdmVzKFswLDRdLCBbNCwgM10pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==