'use strict';

// grid initialization
const gameGrid = document.querySelector('.game-container__grid');
let currentPosition = 4;
let currentRotation = 0;
const width = 10;
const height = 20;
let random = Math.floor(Math.random() * tetrominoes.length);
let currentIdentifier = tetrominoes[random];
let current = currentIdentifier.rotation[currentRotation];

//create 200 divs inside the game container
for (let i = 0; i < 210; i++) {
    const stdDiv = document.createElement('div');
    stdDiv.classList.add('game-container__square');
    if (i >= 200) {
        stdDiv.classList.add('set');
    }
    gameGrid.appendChild(stdDiv);
}

//grab the 200 squares in the array in a manageable array
const squares = Array.from(
    document.querySelectorAll('.game-container__square')
);

//variable that manages how to render the tetrominoes in the grid
let tetrominoRender = [];
let tetrominoRenderIndex = [];

//helper function to change the tetrominoRender if the tetromino is I which occupies an area of 16 instead of 9
function renderHelper() {
    if (currentIdentifier.tetromino === 'i') {
        tetrominoRenderIndex = [
            currentPosition,
            currentPosition + 1,
            currentPosition + 2,
            currentPosition + 3,
            currentPosition + width,
            currentPosition + width + 1,
            currentPosition + width + 2,
            currentPosition + width + 3,
            currentPosition + width * 2,
            currentPosition + width * 2 + 1,
            currentPosition + width * 2 + 2,
            currentPosition + width * 2 + 3,
            currentPosition + width * 3,
            currentPosition + width * 3 + 1,
            currentPosition + width * 3 + 2,
            currentPosition + width * 3 + 3
        ];
        tetrominoRender = [
            squares[tetrominoRenderIndex[0]],
            squares[tetrominoRenderIndex[1]],
            squares[tetrominoRenderIndex[2]],
            squares[tetrominoRenderIndex[3]],
            squares[tetrominoRenderIndex[4]],
            squares[tetrominoRenderIndex[5]],
            squares[tetrominoRenderIndex[6]],
            squares[tetrominoRenderIndex[7]],
            squares[tetrominoRenderIndex[8]],
            squares[tetrominoRenderIndex[9]],
            squares[tetrominoRenderIndex[10]],
            squares[tetrominoRenderIndex[11]],
            squares[tetrominoRenderIndex[12]],
            squares[tetrominoRenderIndex[13]],
            squares[tetrominoRenderIndex[14]],
            squares[tetrominoRenderIndex[15]]
        ];
    } else {
        tetrominoRenderIndex = [
            currentPosition,
            currentPosition + 1,
            currentPosition + 2,
            currentPosition + width,
            currentPosition + width + 1,
            currentPosition + width + 2,
            currentPosition + width * 2,
            currentPosition + width * 2 + 1,
            currentPosition + width * 2 + 2
        ];
        tetrominoRender = [
            squares[tetrominoRenderIndex[0]],
            squares[tetrominoRenderIndex[1]],
            squares[tetrominoRenderIndex[2]],
            squares[tetrominoRenderIndex[3]],
            squares[tetrominoRenderIndex[4]],
            squares[tetrominoRenderIndex[5]],
            squares[tetrominoRenderIndex[6]],
            squares[tetrominoRenderIndex[7]],
            squares[tetrominoRenderIndex[8]]
        ];
    }
}

function dropTetromino() {
    random = Math.floor(Math.random() * tetrominoes.length);
    currentPosition = 4;
    currentRotation = 0;
}

let tetrominoDraw;
let tetrominoDrawIndex;
function draw() {
    renderHelper();
    tetrominoDraw = [];
    tetrominoDrawIndex = [];
    for (let tetro in tetrominoRender) {
        if (current[tetro] === 1) {
            tetrominoRender[tetro].classList.add('painted');
            tetrominoDraw.push(tetrominoRender[tetro]);
            tetrominoDrawIndex.push(tetrominoRenderIndex[tetro]);
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
    boundary();
}

function boundary() {
    if (
        tetrominoDrawIndex.some((tetro) =>
            squares[tetro + width].classList.contains('set')
        )
    ) {
        tetrominoDraw.forEach((tetro) => {
            tetro.classList.add('set');
            dropTetromino();
        });
    }
}

setInterval(gravity, 100);
