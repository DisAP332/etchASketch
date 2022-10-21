const DEFAULT_SIZE = 0
let color = 'black';

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
    let gridElement = document.createElement('div')
    gridElement.classList.add('gridElement')
    gridElement.setAttribute('name', 'cube' + [i])
    gridElement.addEventListener('mouseover', colorSquare)
    
    
    //let gridElementArray = []
    //gridElementArray.push(document.getElementsByName(gridElement[i]))
    grid.appendChild(gridElement)
    //console.log(gridElementArray);
  } 
}

function colorSquare() {
  this.style.backgroundColor = color;
}