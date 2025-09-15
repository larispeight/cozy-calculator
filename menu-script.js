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

// Log Tab
  const visorToggleBtn = document.getElementById('toggleLog');
  const visorRight = document.getElementById('visorRight');

visorToggleBtn.addEventListener('click', () => {
    const isOpen = visorToggleBtn.getAttribute('aria-expanded') === 'true';
      visorToggleBtn.setAttribute('aria-expanded', !isOpen);
      visorRight.hidden = isOpen;
  document.body.classList.toggle('visor-open'); 
visorToggleBtn.textContent = !isOpen ? 'Hide Log' : 'Log Tab';
if (!isOpen) {
        visorRight.querySelector('#logList')?.focus();
    }
});