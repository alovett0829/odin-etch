const container = document.getElementById('grid');
const createdCells = document.getElementsByClassName('created-cell');
const sizeLabel = document.getElementById('size-label');
const pickColor = document.getElementById('pick-color');
const rainbow = document.getElementById('rainbow-color');
const gridLines = document.getElementById('grid-lines');
const eraser = document.getElementById('eraser');
const clear = document.getElementById('clear');

let squares = 16;
let sizeSecondPower = 256;

function makeGrid (squares, sizeSecondPower) {

        for (let i = 0; i < sizeSecondPower; i++) {
                const cell = document.createElement("div");
                container.appendChild(cell);
                cell.classList.add("created-cell");
        }

        container.style['grid-template-columns'] = `repeat(${squares}, 1fr)`;
        container.style['grid-template-rows'] = `repeat(${squares}, 1fr)`;
}

function getValue (squares, sizeSecondPower) {

        squares = document.getElementById('squares').value;
        sizeSecondPower = Math.pow(squares, 2);

        while (container.firstChild) {
                container.removeChild(container.firstChild);
        }

        sizeLabel.innerText = `${squares} X ${squares}`;

        makeGrid(squares, sizeSecondPower);
        changeColor();
};

function changeColor () {
        for (let i = 0; i < createdCells.length; i++) {
                createdCells[i].addEventListener('mouseover', () => {
                        createdCells[i].style.cssText = "background-color: black";
                });
        }
}

pickColor.addEventListener('input', (e) => {
        let newColor = e.target.value;
        for (let i = 0; i < createdCells.length; i++) {
                createdCells[i].addEventListener('mouseover', () => {
                        createdCells[i].style.cssText = `background-color: ${newColor}`;
                });
        }
});

rainbow.addEventListener('click', () => {
        for (let i = 0; i < createdCells.length; i++) {
                createdCells[i].addEventListener('mouseover', () => {

                        let r = Math.floor(Math.random() * 256);
                        let g = Math.floor(Math.random() * 256);;
                        let b = Math.floor(Math.random() * 256);;

                        createdCells[i].style.cssText = `background-color: rgb(${r}, ${g}, ${b})`;
                });
        }       
});

gridLines.addEventListener('click', () => {
        for (let i = 0; i < createdCells.length; i++) {
                createdCells[i].classList.toggle('grid-lines');
        }
});


eraser.addEventListener('click', () => {
        for (let i = 0; i < createdCells.length; i++) {
                createdCells[i].addEventListener('mouseover', () => {
                        createdCells[i].style.cssText = "background-color: light gray";
                });
        }
});

clear.addEventListener('click', () => {
        for (let i = 0; i < createdCells.length; i++) {
                createdCells[i].style.cssText = "background-color: light gray";
        }
});

document.addEventListener("DOMContentLoaded", () => {
        changeColor();  
});

makeGrid (squares, sizeSecondPower);