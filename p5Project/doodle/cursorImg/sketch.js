var myCat, egg, clearButton;

function preload(){
  myCat = loadImage("myCat.jpg");
  egg = loadImage("egg.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('black');
}

function draw() {

  if (mouseIsPressed){
    image(myCat, mouseX - myCat.width/16, mouseY - myCat.height/16, myCat.width/8, myCat.height/8);
  } else {
    filter(POSTERIZE, 16);
    image(egg, mouseX - egg.width/12, mouseY - egg.height/12, egg.width/6, egg.height/6);
  }
}

function clearCanvas() {
  background('black');
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

  let text = createDiv('Move your mouse around the canvas to draw with the egg image. Press the mouse to draw with the cat image.');
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