var storageData = [95, 128, 128, 250, 9, 15];
var colors = ["#63B0F2", "#A0F266", "#FFD700", "#9400D3", "#FF6EC7", "#63F2F2"];
var storageName = ["iPhone Used Data: 95GB", "iPhone Storage Data: 128GB", "Macbook Used Data: 128GB", 
"Macbook Storage Data: 250GB", "Google Drive Used Data: 9GB", "Google Drive Storage Data: 15GB"];
var total;


function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  noStroke();
}

function draw() {
  background(0);
   let lastPiece = 0;
   
   total = getTotal();

   // calculate the center point for the group
   let centerX = width / 2;
   let centerY = height / 2;

   for (let i = 0; i < storageData.length; i++) {

    let color = colors[i % colors.length];
    fill(color);
    let piece = map(storageData[i], 0, total, 0, TWO_PI);

    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color;
    
    arc(centerX + 200, centerY, 400, 400, lastPiece, lastPiece + piece);

    // draw squares with the same color as the pie slice, to the left of the storageNames
    rect(centerX - 370, centerY - 123.5 + i * 50, 18, 18);

    // draw the storageNames
    fill("#63F2F2");
    textSize(16);
    textFont('Courier New');
    text(storageName[i], centerX - 340, centerY - 110  + i * 50);

    lastPiece += piece;
  }
}

function getTotal(){
  total = 0;

  for (let i = 0; i < storageData.length; i++) {
    total += storageData[i];
  }
  return total;
}

function drawLabel (){
 for(let i = 0; i < storageData.length; i++) {
    fill(0);
    textSize(24);
    text(storageNames[i], 100 + i * 100, 300);
  }
}

// IN THE DRAW FUNCTION
//   for(let i = 0; i < storageData.length; i++) {
//     let randomColor = color(random(255), random(255), random(255));
//     // fill(randomColor);
//     fill(colors[i]);
    
//     circle(100 + i * 100, 300, storageData[i] * 2);
//     // fill(0);
//     // text(storageData[i], 100 + i * 100, 300);
//   }
//   drawLabel();

// Coded follow the instructions in class
// Also with the help of GitHub Copilot