var speech;
var voices = ['Marie', 'Alice', 'Aaron', 'Karen', 'Kyoko'];
var speekText = ['Bonjour, je mappelle Marie. Enchanté de faire votre connaissance.', 'Ciao, sono Alice. Piacere di conoscerti.', 
'Hello. I am Aaron. Nice to meet you.', 'Hello. I am Karen. Nice to meet you.', 'こんにちは。京子です。 はじめまして。'];
var voiceIndex = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  cursor(HAND);
  speech = new p5.Speech(); 
}

function mousePressed() {
  background(random(255), random(255), random(255));

  for(let i = 0; i < voices.length; i++) {
    if(i == voiceIndex) {
      speech.setVoice(voices[i]);
      speech.speak(speekText[i]); 
      break;
    }
  }

  voiceIndex++;
  if (voiceIndex >= voices.length) {
    voiceIndex = 0;
  }
}

function draw() {
}

//Used p5.Speech library by R. Luke DuBois
//Also coded with the help of the p5.js reference and GitHub Copilot