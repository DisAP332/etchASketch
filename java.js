const container = document.getElementById("container");
const cellBlock = document.getElementsByClassName('griditem');
const div = document.getElementById('grid-item')
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "griditem";
  };
};
makeRows(16, 16);
