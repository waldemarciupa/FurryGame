/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Game = __webpack_require__(/*! ./game */ "./js/game.js");

const game = new Game();
game.showFurry();
game.showCoin();
game.startGame();
document.addEventListener('keydown', function (event) {
  game.turnFurry(event);
});
const playAgainBtn = document.querySelector('.button');
playAgainBtn.addEventListener('click', function () {
  const playAgain = new Game();
  const over = document.querySelector('#over');
  over.classList.add('invisible');
  playAgain.showFurry();
  playAgain.showCoin();
  playAgain.startGame();
  document.addEventListener('keydown', function (event) {
    playAgain.turnFurry(event);
  });
});

/***/ }),

/***/ "./js/coin.js":
/*!********************!*\
  !*** ./js/coin.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

const Coin = function () {
  this.x = Math.floor(Math.random() * 10);
  this.y = Math.floor(Math.random() * 10);
};

module.exports = Coin;

/***/ }),

/***/ "./js/furry.js":
/*!*********************!*\
  !*** ./js/furry.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

const Furry = function () {
  this.x = 0;
  this.y = 0;
  this.direction = 'right';
};

module.exports = Furry;

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Furry = __webpack_require__(/*! ./furry */ "./js/furry.js");

const Coin = __webpack_require__(/*! ./coin */ "./js/coin.js");

const Game = function () {
  this.board = document.querySelectorAll('#board div');
  this.furry = new Furry();
  this.coin = new Coin();
  this.score = 0;
  this.scoreValue = document.querySelector('#score strong');
  this.scoreValue.innerText = this.score;

  this.index = function (x, y) {
    return x + y * 10;
  };

  this.showFurry = function () {
    this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
  };

  this.hideVisibeFurry = function () {
    this.classFurry = document.querySelector('.furry');
    this.classFurry.classList.remove('furry');
  };

  this.showCoin = function () {
    this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
  };

  this.moveFurry = function () {
    this.hideVisibeFurry();

    if (this.furry.direction === "right") {
      this.furry.x = this.furry.x + 1;
    } else if (this.furry.direction === "left") {
      this.furry.x = this.furry.x - 1;
    } else if (this.furry.direction === "up") {
      this.furry.y = this.furry.y - 1;
    } else if (this.furry.direction === "down") {
      this.furry.y = this.furry.y + 1;
    }

    this.gameOver();
    this.showFurry();
    this.checkCoinCollision();
  };

  this.turnFurry = function (event) {
    switch (event.which) {
      case 37:
        this.furry.direction = 'left';
        break;

      case 39:
        this.furry.direction = 'right';
        break;

      case 38:
        this.furry.direction = 'up';
        break;

      case 40:
        this.furry.direction = 'down';
        break;
    }
  };

  this.checkCoinCollision = function () {
    if (this.coin.x === this.furry.x && this.coin.y === this.furry.y) {
      this.board[this.index(this.coin.x, this.coin.y)].classList.remove('coin');
      this.playSound('coin');
      this.score++;
      this.scoreValue.innerText = this.score;
      this.coin = new Coin();
      this.level();
      this.showCoin();
    }
  };

  this.gameOver = function () {
    if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
      clearInterval(this.idSetInterval);
      this.board[this.index(this.coin.x, this.coin.y)].classList.remove('coin');
      this.playSound('wrong');
      this.over = document.querySelector('#over');
      this.over.classList.remove("invisible");
      this.result = over.querySelector("span");
      this.result.innerText = ' ' + this.score;
      this.hideVisibleFurry();
    }
  };

  this.startGame = function () {
    let self = this;
    this.idSetInterval = setInterval(function () {
      self.moveFurry();
    }, 200);
  };

  this.playSound = function (name) {
    const audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
  };

  this.level = function () {
    if (this.score === 5) {
      clearInterval(this.idSetInterval);
      this.idSetInterval = setInterval(() => {
        this.moveFurry();
      }, 150);
    }

    if (this.score === 10) {
      clearInterval(this.idSetInterval);
      this.idSetInterval = setInterval(() => {
        this.moveFurry();
      }, 130);
    }

    if (this.score === 15) {
      clearInterval(this.idSetInterval);
      this.idSetInterval = setInterval(() => {
        this.moveFurry();
      }, 110);
    }

    if (this.score === 20) {
      clearInterval(this.idSetInterval);
      this.idSetInterval = setInterval(() => {
        this.moveFurry();
      }, 90);
    }

    if (this.score === 25) {
      clearInterval(this.idSetInterval);
      this.idSetInterval = setInterval(() => {
        this.moveFurry();
      }, 80);
    }
  };
};

module.exports = Game;

/***/ })

/******/ });
//# sourceMappingURL=out.js.map