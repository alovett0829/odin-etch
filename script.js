const container = document.getElementById('grid');
const clear = document.getElementById('clear');
let size = 75;

function makeGrid (size) {
        let sizeSecondPower = Math.pow(size, 2);
        console.log(sizeSecondPower);

        for (let i = 0; i < sizeSecondPower; i++) {
                const cell = document.createElement("div");
                container.appendChild(cell);
                cell.classList.add("cell-style");
        }

        container.style['grid-template-columns'] = `repeat(${size}, 1fr)`;
        container.style['grid-template-rows'] = `repeat(${size}, 1fr)`;
}



document.addEventListener("DOMContentLoaded", function () {
        let createdCells = document.getElementsByClassName('cell-style');

        for (let i = 0; i < createdCells.length; i++) {
                createdCells[i].addEventListener('mouseover', () => {
                        createdCells[i].classList.add('change');
                });
        }
        
        function reset () {
                for (let i = 0; i < createdCells.length; i++) {
                        createdCells[i].classList.remove('change');
                }
        }

        clear.addEventListener('click', reset);
});

makeGrid(size);





