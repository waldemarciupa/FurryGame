const Furry = require("./furry");
const Coin = require("./coin");

const Game = function () {
    this.board = document.querySelectorAll('#board div');
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;

    this.scoreValue = document.querySelector('#score strong');
    this.scoreValue.innerText = this.score;

    this.index = function (x, y) {
        return x + (y * 10);
    }

    this.showFurry = function () {
        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
    }

    this.hideVisibeFurry = function () {
        this.classFurry = document.querySelector('.furry');
        this.classFurry.classList.remove('furry');
    }

    this.showCoin = function () {
        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
    }

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
    }

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
    }

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
    }

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
    }

    this.startGame = function () {
        let self = this;

        this.idSetInterval = setInterval(function () {
            self.moveFurry();
        }, 200)

    }

    this.playSound = function (name) {
        const audio = new Audio('sounds/' + name + '.mp3');
        audio.play();
    };

    this.level = function () {
        if (this.score === 5) {
            clearInterval(this.idSetInterval);

            this.idSetInterval = setInterval(() => {
                this.moveFurry();
            }, 150)
        }

        if (this.score === 10) {
            clearInterval(this.idSetInterval);

            this.idSetInterval = setInterval(() => {
                this.moveFurry();
            }, 130)
        }

        if (this.score === 15) {
            clearInterval(this.idSetInterval);

            this.idSetInterval = setInterval(() => {
                this.moveFurry();
            }, 110)
        }

        if (this.score === 20) {
            clearInterval(this.idSetInterval);

            this.idSetInterval = setInterval(() => {
                this.moveFurry();
            }, 90)
        }

        if (this.score === 25) {
            clearInterval(this.idSetInterval);

            this.idSetInterval = setInterval(() => {
                this.moveFurry();
            }, 80)
        }
    }
}

module.exports = Game;