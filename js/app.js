const Game = require("./game");

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
})