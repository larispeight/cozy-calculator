// zoom
let zoomLevel =1;

const target = document.querySelector(".background");


function zoomIn() {
  zoomLevel += 0.1;
  updateZoom();
}

function zoomOut() {
  zoomLevel -= 0.1;
  updateZoom();
}

function updateZoom() {
  target.style.zoom = zoomLevel;
}


// night-mode
const toggle = document.getElementById("checkbox")

toggle.addEventListener("click", () => {
  document.body.classList.toggle("night-mode");
});