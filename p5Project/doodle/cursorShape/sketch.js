function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
}

function draw() {
  let drawX = mouseX;
  let drawY = mouseY;

  if (mouseX === 0 && mouseY === 0) {
    drawX = -100;
    drawY = -100;
  }

  if (mouseIsPressed) {
    fill("#FF6EC7");
    circle(drawX, drawY, 50);
  } else {
    fill("#00CED1");
    square(drawX, drawY, 50);
  }
}

function clearCanvas() {
  background("black");
}

function showHint() {
  let modal = createDiv();
  modal.style('width', '100%');
  modal.style('height', '100%');
  modal.style('background-color', 'rgba(0,0,0,0.5)');
  modal.style('position', 'fixed');
  modal.style('top', '0');
  modal.style('left', '0');
  modal.style('display', 'flex');
  modal.style('justify-content', 'center');
  modal.style('align-items', 'center');

  let text = createDiv('Move your mouse around the canvas to draw with a square. Press the mouse and drag to draw with a circle.');
  text.parent(modal);
  text.style('color', 'white');
  text.style('font-size', '18px');
  text.style('font-family', 'Courier New');
  text.style('margin', '30px');
  text.style('text-align', 'center'); 
  text.style('display', 'flex');
  text.style('justify-content', 'center');
  text.style('align-items', 'center'); 

  let closeButton = createDiv('X');
  closeButton.parent(modal);
  closeButton.style('font-family', 'Gill Sans');
  closeButton.style('position', 'absolute');
  closeButton.style('top', '10px');
  closeButton.style('right', '14px');
  closeButton.style('color', 'white');
  closeButton.style('font-size', '2em');
  closeButton.style('cursor', 'pointer');

  // Close the modal when the close button is clicked
  closeButton.mouseClicked(() => {
    modal.remove();
  });
}

//Coded with the help of the p5.js library, w3school library and GitHub Copilot