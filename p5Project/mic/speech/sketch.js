var speech;
var lang = 'en-US';
var speechRec;
var continuous = true;
var interim = true;
var runningText;
var buttons = ['enBtn', 'cnBtn', 'frBtn', 'jpBtn'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  speech = new p5.Speech(); 
  speechRec = new p5.SpeechRec(lang, gotSpeech);
  speechRec.start(continuous, interim);

  var buttonEN = createButton('English');
  buttonEN.mousePressed(function() {
    changeLanguage('en-US');
  });

  var buttonCN = createButton('Chinese Mandarin');
  buttonCN.mousePressed(function() {
    changeLanguage('zh-CN');
  });

  var buttonFR = createButton('French');
  buttonFR.mousePressed(function() {
    changeLanguage('fr-FR');
  });

  var buttonJP = createButton('Japanese');
  buttonJP.mousePressed(function() {
    changeLanguage('ja-JP');
  });

  buttonEN.id('enBtn');
  buttonFR.id('frBtn');
  buttonJP.id('jpBtn');
  buttonCN.id('cnBtn');

  buttonEN.addClass('langBtn');
  buttonCN.addClass('langBtn');
  buttonFR.addClass('langBtn');
  buttonJP.addClass('langBtn');

  buttons.forEach(buttonId => {
  let button = document.getElementById(buttonId);
  button.addEventListener('click', function() {
   
    buttons.forEach(id => {
      let btn = document.getElementById(id);
      btn.style.backgroundColor = 'initial';
      btn.style.border = 'none';
      btn.style.textShadow = 'none';
    });
    
    this.style.backgroundColor = 'rgba(0, 0, 0, 0.496)';
    this.style.border = '1px solid rgb(255, 255, 255)';
    this.style.textShadow = '10px 10px 10px rgba(255, 255, 255, 0.411)';
  });
});
}

function draw() {
  background(0);
  fill(255);
  textFont('Courier New');
  textSize(4 * windowWidth / 100);
  textAlign(CENTER, CENTER);
  text(runningText, width/2, height/2);
}

function gotSpeech() {
  if (speechRec.resultValue) {
    runningText = speechRec.resultString;
  }
}

function changeLanguage(newLang) {
  lang = newLang;
  speechRec = new p5.SpeechRec(lang, gotSpeech);
  speechRec.start(continuous, interim);
}

//Used p5.Speech library by R. Luke DuBois
//Coded while following the tutorial by Karen ann Donnachie: 
//https://github.com/karenanndonnachie/MESS_IS_MORE/blob/main/P5JS/CHAPTER_3_SOUND/Speech/Speech.js
//Also coded with the help of the p5.js reference and GitHub Copilot