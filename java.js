const DEFAULT_SIZE = 16

let currentSize = DEFAULT_SIZE

function setCurrentSize(newSize) { //value becomes newSize
  currentSize = newSize //newSize becomes curentSize
  console.log(currentSize)
  reloadGrid(currentSize)
}

const grid = document.getElementById('grid');
var slider = document.getElementById('gridSizer');
var gridSizeOutput = document.getElementById('gridSizeOutput');

gridSizeOutput.textContent=slider.value;
slider.oninput = function(){
  gridSizeOutput.textContent = slider.value;
}

//slider.onmousemove = (e) => updateSizeValue(e.target.value)
slider.onchange = (e) => changeSize(e.target.value) //callout function changeSize

function changeSize(value) {
  setCurrentSize(value) //move sliders value to setCurrentSize
}

function reloadGrid(currentSize) {
  clearGrid() //clear the grid first then move currentSize to setupGrid
  setupGrid(currentSize)
}
function clearGrid(){
  grid.innerHTML = ''
}
function setupGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div')
    gridElement.classList.add('grid-element')
    grid.appendChild(gridElement)
  }
}
setupGrid()
const gridE = document.querySelector('grid-element')
gridE.addEventListener('click', function handleClick(){
gridE.Classlist.add('background-color:blue;')
})
