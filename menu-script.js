// zoom
let zoomLevel =1;

const target = document.querySelector(".calculator-zoom");
const ZOOM_MIN = 0.5;
const ZOOM_MAX = 2;
const ZOOM_STEP = 0.1;

function zoomIn() {
  zoomLevel += ZOOM_STEP;
  updateZoom();
}

function zoomOut() {
  zoomLevel -= ZOOM_STEP;
  updateZoom();
}

function updateZoom() {
  zoomLevel = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, zoomLevel));
  target.style.transform = `scale(${zoomLevel})`;
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