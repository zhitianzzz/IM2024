var capture;
var isPlaying = true;
var buffer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#222');
  imageMode(CENTER);
  
  capture = createCapture(VIDEO);
  capture.hide();
  frameRate(20);

  buffer = createGraphics(windowWidth, windowHeight);
  buffer.background('#222');
}

function draw() {
  background('#222');
  if (isPlaying) {
    buffer.background('#222');
    for (let i = 0; i < 13; i++) {
      let x = random(width);
      let y = random(height);
      image(capture, x, y, windowWidth/4, windowHeight/4);
    }
    image(capture, windowWidth/2, windowHeight/2, windowWidth/2, windowHeight/2);
  } else {
    image(buffer, windowWidth/2, windowHeight/2);
  }
}

function toggleVideo() {
  if (isPlaying) {
    capture.pause();
    buffer.image(capture, 0, 0, windowWidth, windowHeight);
    buffer.filter(THRESHOLD);
    isPlaying = false;
  } else {
    capture.loop();
    isPlaying = true;
  }
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

  let text = createDiv('Click on the CHEESE:D button to take a photo of yourself. Click it again to prepare for the next photo. You will get a photo with a filter. What is the filter this time?');
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