function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#fad6cf');
  stroke(0,0,0,0);
  // hair
  fill('#36200e');
  circle(windowWidth/2, windowHeight/2, 480);
  circle((windowWidth/2)-180, (windowHeight/2)-180, 180);
  circle((windowWidth/2)+180, (windowHeight/2)-180, 180);
  circle(windowWidth/2, windowHeight/2, 380);
  //face
    //forehead
  fill('#fae4ca');
  rect((windowWidth/2)-125, (windowHeight/2)-100, 135, 100, 0, 0, 0, 0);
  triangle((windowWidth/2)-125, (windowHeight/2)-100, (windowWidth/2)-115, 
  windowHeight/2, (windowWidth/2)-180, windowHeight/2);
  rect(windowWidth/2, (windowHeight/2)-100, 125, 100, 0, 0, 0, 0);
  triangle((windowWidth/2)+125, (windowHeight/2)-100, (windowWidth/2)+115, 
  windowHeight/2, (windowWidth/2)+180, windowHeight/2);
    //cheek
  rect(windowWidth/2, windowHeight/2, 180, 270, 0, 0, 90, 0);
  rect((windowWidth/2)-180, windowHeight/2, 185, 270, 0, 0, 0, 90);
  fill('#fad6cf');
  triangle((windowWidth/2)-300, (windowHeight/2)+100, (windowWidth/2)-200, 
  (windowHeight/2)+310, (windowWidth/2), (windowHeight/2)+310);
  triangle((windowWidth/2)-200, (windowHeight/2)+100, (windowWidth/2)-100, 
  (windowHeight/2)+310, (windowWidth/2)-200, (windowHeight/2)+310);
  triangle((windowWidth/2)+300, (windowHeight/2)+100, (windowWidth/2)+200, 
  (windowHeight/2)+310, (windowWidth/2), (windowHeight/2)+310);
  triangle((windowWidth/2)+200, (windowHeight/2)+100, (windowWidth/2)+100, 
  (windowHeight/2)+310, (windowWidth/2)+200, (windowHeight/2)+310);
  //ear
  fill('#fae4ca');
  circle((windowWidth/2)-180, (windowHeight/2)+40, 80);
  circle((windowWidth/2)+180, (windowHeight/2)+40, 80);
  //eyebrows
  stroke(51, 26, 0);
  strokeWeight(5);
  noFill();
  arc((windowWidth/2)-80, (windowHeight/2)-10, 100, 25, PI, TWO_PI, OPEN);
  arc((windowWidth/2)+80, (windowHeight/2)-10, 100, 25, PI, TWO_PI, OPEN);
  //eyes
  strokeWeight(2)
  fill('#5c390c');
  circle((windowWidth/2)-80, (windowHeight/2)+40, 40);
  circle((windowWidth/2)+80, (windowHeight/2)+40, 40);
  fill('#0a0a0a');
  noStroke();
  circle((windowWidth/2)-80, (windowHeight/2)+40, 20);
  circle((windowWidth/2)+80, (windowHeight/2)+40, 20);
  fill(255);
  ellipse((windowWidth/2)-90, (windowHeight/2)+40, 10, 16);
  ellipse((windowWidth/2)+70, (windowHeight/2)+40, 10, 16);
  //nose
  fill('#f7c9a3');
  circle(windowWidth/2, (windowHeight/2)+100, 15);
  //mouth
  fill(255, 102, 102);
  arc(windowWidth/2, (windowHeight/2)+160, 80, 60, 0, PI);
  //cheek
  fill('#ffd0c9');
  ellipse((windowWidth/2)-120, (windowHeight/2)+80, 45, 20);
  ellipse((windowWidth/2)+120, (windowHeight/2)+80, 45, 20);
}
