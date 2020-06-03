'use strict';

// grid initialization
const gameGrid = document.querySelector('.game-container__grid');
let currentPosition = 4;
const currentRotation = 0;
const width = 10;
const height = 20;
let random = Math.floor(Math.random() * tetrominoes.length);
let currentIdentifier = tetrominoes[random];
let current = currentIdentifier.rotation[currentRotation];

//create 200 divs inside the game container
for (let i = 0; i < 200; i++) {
    const stdDiv = document.createElement('div');
    stdDiv.classList.add('game-container__square');
    gameGrid.appendChild(stdDiv);
}

//grab the 200 squares in the array in a manageable array
const squares = Array.from(
    document.querySelectorAll('.game-container__square')
);

//variable that manages how to render the tetrominoes in the grid
let tetrominoRender = {};

//helper function to change the tetrominoRender if the tetromino is I which occupies an area of 16 instead of 9
function renderHelper() {
    if (currentIdentifier.tetromino === 'i') {
        tetrominoRender = {
            0: squares[currentPosition],
            1: squares[currentPosition + 1],
            2: squares[currentPosition + 2],
            3: squares[currentPosition + 3],
            4: squares[currentPosition + width],
            5: squares[currentPosition + width + 1],
            6: squares[currentPosition + width + 2],
            7: squares[currentPosition + width + 3],
            8: squares[currentPosition + width * 2],
            9: squares[currentPosition + width * 2 + 1],
            10: squares[currentPosition + width * 2 + 2],
            11: squares[currentPosition + width * 2 + 3],
            12: squares[currentPosition + width * 3],
            13: squares[currentPosition + width * 3 + 1],
            14: squares[currentPosition + width * 3 + 2],
            15: squares[currentPosition + width * 3 + 3]
        };
    } else {
        tetrominoRender = {
            0: squares[currentPosition],
            1: squares[currentPosition + 1],
            2: squares[currentPosition + 2],
            3: squares[currentPosition + width],
            4: squares[currentPosition + width + 1],
            5: squares[currentPosition + width + 2],
            6: squares[currentPosition + width * 2],
            7: squares[currentPosition + width * 2 + 1],
            8: squares[currentPosition + width * 2 + 2]
        };
    }
}

function draw() {
    renderHelper();
    for (let tetro in tetrominoRender) {
        if (current[tetro] === 1) {
            tetrominoRender[tetro].classList.add('painted');
        }
    }
}

function undraw() {
    renderHelper();
    for (let tetro in tetrominoRender) {
        if (current[tetro] === 1) {
            tetrominoRender[tetro].classList.remove('painted');
        }
    }
}

function gravity() {
    undraw();
    currentPosition += width;
    draw();
}

draw();

setInterval(gravity, 1000);
