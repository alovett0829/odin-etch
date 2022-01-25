const container = document.getElementById('grid');

for (let i = 0; i < 16; i++) {
        const cell = document.createElement("div");
        container.appendChild(cell);
        cell.classList.add("cell-style");
}

document.addEventListener("DOMContentLoaded", function () {
        let createdCells = document.getElementsByClassName('cell-style');

        for (let i = 0; i < createdCells.length; i++) {
                createdCells[i].addEventListener('mouseover', () => {
                        createdCells[i].classList.add('change');
                });
        }
});
