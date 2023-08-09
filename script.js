'use strict';

const container = document.querySelector('.container');
const settings = document.querySelectorAll('.settings');
const rainbowBtn = document.getElementById('rainbowBtn');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');
const sizeBtn = document.getElementById('sizeBtn');
const colorPall = document.getElementById('colorpicker');

function createGrid(col, rows) {
    for (let i = 0; i < (col * rows); i++) {
        const cell = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`
        container.appendChild(cell);
        cell.classList.add('grid-cell');
    }
}
createGrid(16, 16)

function gridDraw() {
    const boxes = document.querySelectorAll('.grid-cell');
    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = `rgb(58, 58, 69)`;
        })
    })
}

gridDraw();


function colorMode() {
    const boxes = document.querySelectorAll('.grid-cell')
    colorPall.addEventListener('input', () => {
        boxes.forEach(box => {
            box.addEventListener('mouseover', () => {
                box.style.backgroundColor = colorPall.value;
            })
        })
    })
}

colorMode();


function rainbowMode() {
    const boxes = document.querySelectorAll('.grid-cell');
    rainbowBtn.addEventListener('click', () => {
        boxes.forEach(box => {
            box.addEventListener('mouseover', () => {
                let R = Math.floor(Math.random() * 255);
                let G = Math.floor(Math.random() * 255);
                let B = Math.floor(Math.random() * 255);
                box.style.backgroundColor = `rgb(${R},${G},${B})`
            })
        })
    })
}
rainbowMode();

function eraseGrid() {
    const boxes = document.querySelectorAll('.grid-cell');
    eraserBtn.addEventListener('click', () => {
        boxes.forEach(box => {
            box.addEventListener('mouseover', () => {
                box.style.backgroundColor = '#ecf0ff'
            })
        })
    })
}
eraseGrid()

function clearGrid() {
    const boxes = document.querySelectorAll('.grid-cell')
    clearBtn.addEventListener('click', () => {
        boxes.forEach(box => {
            box.style.backgroundColor = '#ecf0ff'
        })
    })
}

clearGrid();

function reset() {
    const boxes = document.querySelectorAll('.grid-cell');
    boxes.forEach(box => {
        box.remove();
    })
}


function gridSize() {
    sizeBtn.addEventListener('click', () => {
        let user = prompt('What size do you want your grid to be?');
        if (user === null || user == NaN || user < 1 || user > 64) {
            reset();
            createGrid(16, 16);
            gridDraw();
            colorMode();
            rainbowMode();
            eraseGrid();
            clearGrid();
        } else {
            reset();
            createGrid(user, user);
            gridDraw();
            colorMode();
            rainbowMode();
            eraseGrid();
            clearGrid();
        }
    })
}
gridSize();