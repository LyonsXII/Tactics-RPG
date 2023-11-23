const tiles = document.querySelectorAll(".tile");

// Ally starting positions
const allyStartingPositions = [[10,2], [10,3], [11,2], [11,3], [11,4]];
const allyPositions = [[10,2], [10,3], [11,2], [11,3], [11,4]];
const allyPositionsDivs = [];
allyPositions.forEach((position) => {
  allyPositionsDivs.push(document.querySelectorAll(".tile")[gridConversion(position[0], position[1])]);
});

allyStartingPositions.forEach((position) => {
  tiles[gridConversion(position[0], position[1])].style.backgroundColor = "lightgreen";
});

// Movement
tiles.forEach((tile) => {
  if (allyPositionsDivs.includes(tile)) {
    tile.addEventListener("click", (tile) => {
      tile.target.style.backgroundColor = "green";
      tiles.forEach((tile) => {
        tile.removeEventListener("click")
      })
    });
  }
});

const options = document.querySelectorAll(".option");
options[0].addEventListener("click", (option) => {
  option.target.style.backgroundColor = "green";
});

// Converts grid coordinates to the matching div
function gridConversion (x, y) {return (x * 12) + y;};