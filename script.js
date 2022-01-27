const container = document.getElementById('grid');
const clear = document.getElementById('clear');
const buttonSquares = document.getElementById('button-squares');
const createdCells = document.getElementsByClassName('cell-style');
const label = document.getElementById('size');

let squares = 16;
let sizeSecondPower = 256;

function getValue (squares, sizeSecondPower) {

        squares = document.getElementById('squares').value;
        sizeSecondPower = Math.pow(squares, 2);

        while (container.firstChild) {
                container.removeChild(container.firstChild);
        }

        label.innerText = `${squares} X ${squares}`;

        makeGrid(squares, sizeSecondPower);
        reset();
        changeColor();


};

function makeGrid (squares, sizeSecondPower) {

        for (let i = 0; i < sizeSecondPower; i++) {
                const cell = document.createElement("div");
                container.appendChild(cell);
                cell.classList.add("cell-style");
        }

        container.style['grid-template-columns'] = `repeat(${squares}, 1fr)`;
        container.style['grid-template-rows'] = `repeat(${squares}, 1fr)`;
}

document.addEventListener("DOMContentLoaded", function () {

        changeColor();  
        reset();
        clear.addEventListener('click', reset);

});

function changeColor () {
        for (let i = 0; i < createdCells.length; i++) {
                createdCells[i].addEventListener('mouseover', () => {
                        createdCells[i].classList.add('change');
                });
        }
}

function reset () {
        for (let i = 0; i < createdCells.length; i++) {
                createdCells[i].classList.remove('change');
        }
}

makeGrid (squares, sizeSecondPower);





