// Add event listeners to the buttons.
const moveSection1Button = document.getElementById('move-section-1');
const moveSection2Button = document.getElementById('move-section-2');

// Add functions to move the sections of the page.
function moveSection1() {
  // Move section 1 to the top of the page.
  document.getElementById('section-1').style.top = '0px';
}

function moveSection2() {
  // Move section 2 to the bottom of the page.
  document.getElementById('section-2').style.top = '100px';
}

// Add event listeners to the buttons.
moveSection1Button.addEventListener('click', moveSection1);
moveSection2Button.addEventListener('click', moveSection2);
