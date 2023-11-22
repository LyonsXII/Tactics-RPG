const tiles = document.querySelectorAll(".tile");
tiles.forEach((tile) => {
  tile.addEventListener("click", (tile) => {
    console.log(tile);
    tile.target.style.backgroundColor = "red";
  });
});