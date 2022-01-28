const container = document.getElementById('grid');
const clear = document.getElementById('clear');
const buttonSquares = document.getElementById('button-squares');
const createdCells = document.getElementsByClassName('cell-style');
const label = document.getElementById('size');
const pickColor = document.getElementById('pick-color');
const gridLines = document.getElementById('grid-lines');
const eraser = document.getElementById('eraser');
const rainbow = document.getElementById('rainbow-color');

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
                        createdCells[i].style.cssText = "background-color: black";
                });
        }
}

function reset () {
        for (let i = 0; i < createdCells.length; i++) {
                createdCells[i].style.cssText = "background-color: ligth gray";
        }
}


eraser.addEventListener('click', function () {
        for (let i = 0; i < createdCells.length; i++) {
                createdCells[i].addEventListener('mouseover', () => {
                        createdCells[i].style.cssText = "background-color: light gray";
                });
        }
});

pickColor.addEventListener('input', function (e) {
        let newColor = e.target.value;
        for (let i = 0; i < createdCells.length; i++) {
                createdCells[i].addEventListener('mouseover', () => {
                        createdCells[i].style.cssText = `background-color: ${newColor}`;
                });
        }

});

rainbow.addEventListener('click', function () {

        for (let i = 0; i < createdCells.length; i++) {
                createdCells[i].addEventListener('mouseover', () => {

                        let r = Math.floor(Math.random() * 256);
                        let g = Math.floor(Math.random() * 256);;
                        let b = Math.floor(Math.random() * 256);;

                        createdCells[i].style.cssText = `background-color: rgb(${r}, ${g}, ${b})`;

                });
        }       
});

gridLines.addEventListener('click', function () {
        for (let i = 0; i < createdCells.length; i++) {
                createdCells[i].classList.toggle('grid-lines');
        }
});

makeGrid (squares, sizeSecondPower);




