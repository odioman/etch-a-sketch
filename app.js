// create grid
const grid = document.querySelector(".grid")

function createGrid(rows, cols) {
   grid.style.setProperty('--grid-rows', rows);
   grid.style.setProperty('--grid-cols', cols);
   for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement('div');
      grid.appendChild(cell).className = "grid-item";       
   };
};

createGrid(16,16);

// Query Selectors for Buttons
const simpleBtn = document.querySelector('.simpleBtn')
const randomBtn = document.querySelector('.randomBtn')
const clearBtn = document.querySelector('.clearBtn')

// Random Color
const gridItem = document.querySelectorAll('.grid-item')

function randomColor() {
    randomBtn.addEventListener('click', () => {
        gridItem.forEach(gridItem => gridItem.addEventListener('mouseover', () => {

        let randomRed = Math.floor(Math.random() * 256)
        let randomGreen = Math.floor(Math.random() * 256)
        let randomBlue = Math.floor(Math.random() * 256)
        gridItem.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`

        }))
    })
}    
randomColor();

// Eraser
function clearColor() {
    clearBtn.addEventListener('click', () => {
        gridItem.forEach(gridItem => gridItem.addEventListener('mouseover', () => {
        let white = 'rgb(255,255,255)'

        gridItem.style.backgroundColor = white
        }))
    })

}
clearColor();

// Fully Black 

function simpleColor() {
    simpleBtn.addEventListener('click', () => {
        gridItem.forEach(gridItem => gridItem.addEventListener('mouseover', () => {
        let black = 'rgb(0,0,0)'
        
        gridItem.style.backgroundColor = black
        }))
    })
}
simpleColor();