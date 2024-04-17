// custom cursor
// Coded using GitHub Copilot
// reference: https://codepen.io/emelyanova/details/BavZZYY
// Update the custom cursor's position whenever the mouse moves
document.addEventListener('mousemove', function(e) {
    let cursor = document.querySelector('.circle');
    // Subtract half the width and height of the cursor
    let left = e.clientX - (cursor.offsetWidth / 2) + 'px';
    let top = e.clientY - (cursor.offsetHeight / 2) + 'px';

    cursor.style.left = left;
    cursor.style.top = top;
});

// I was trying to make the custom cursor disappear when it hovers over the p5 page
// BUT since iframe is used, mouseover just won't disappear
var p5Page = document.querySelector('.p5PageContainer');
var circle = document.querySelector('.circle');

window.addEventListener('mouseover', function(e) {
    if (p5Page.contains(e.target)) {
        circle.style.opacity = '0';
    } else {
        circle.style.opacity = '1';
    }
});

// Function to play or pause the background music
function playAudio(){
    let audio = document.getElementById("landBGM");

    if(audio.paused){
        audio.play();
    } else {
        audio.pause();
    }
}

// Show "play music" and "pause music" when mouse hovers on the headphone icon
function changeText(){
    let playText = document.getElementById("playText");
    let pauseText = document.getElementById("pauseText");
    let newPlayText = document.getElementById("newPlayText");
    let newPauseText = document.getElementById("newPauseText");
    if(playText.style.opacity === "1"){
        playText.style.opacity = "0";
        pauseText.style.opacity = "0";
        newPauseText.style.opacity = "0";
        newPlayText.style.opacity = "1";
    } else {
        playText.style.opacity = "0";
        pauseText.style.opacity = "0";
        newPlayText.style.opacity = "0";
        newPauseText.style.opacity = "1";
    }
}

function hideText(){
    let audio = document.getElementById("landBGM");
    let playText = document.getElementById("playText");
    let pauseText = document.getElementById("pauseText");
    let newPlayText = document.getElementById("newPlayText");
    let newPauseText = document.getElementById("newPauseText");
    if(audio.paused){
        newPauseText.style.opacity = "0";
        newPlayText.style.opacity = "0";
        playText.style.opacity = "1";
        pauseText.style.opacity = "0";
    } else {
        newPlayText.style.opacity = "0";
        newPauseText.style.opacity = "0";
        playText.style.opacity = "0";
        pauseText.style.opacity = "1";
    }
}

function displayText(){
    let audio = document.getElementById("landBGM");
    let playText = document.getElementById("playText");
    let pauseText = document.getElementById("pauseText");
    let newPlayText = document.getElementById("newPlayText");
    let newPauseText = document.getElementById("newPauseText");
    if(audio.paused){
        playText.style.opacity = "1";
        pauseText.style.opacity = "0";
        newPlayText.style.opacity = "0";
        newPauseText.style.opacity = "0";
    } else {
        playText.style.opacity = "0";
        pauseText.style.opacity = "1";
        newPlayText.style.opacity = "0";
        newPauseText.style.opacity = "0";
    }
}

//Showing side menu when screen gets smaller
function showMenu(){
    let sideMenu = document.getElementById("sideMenu");

    if(sideMenu.style.opacity === "1"){
        sideMenu.style.opacity = "0";
    } else {
        sideMenu.style.opacity = "1";
    }
}

// The menu icon will change to a cross once clicked, and it will change back when click again
function animateMenuIcon(){
    let icon = document.getElementById("menuIcon");
    icon.classList.toggle("animate");
}




// NOT IN USE //////////////////////////////////////////////////////////////////

// // Below is to create the back to top function:
// window.onscroll = function(){
//     scroll();
// }

// // Function to show the "BACK TO TOP" button when user scroll down the screen
// function scroll() {
//     let toTop = document.getElementById("backToTop");

//     // To create a smooth transition by changing opacity (transition used in css)
//     // For most type of browsers, when scroll 500px, "BACK TO TOP" button appear
//     if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
//         toTop.style.opacity = "1"; // button appear
//         toTop.style.pointerEvents = "auto"; // to allow user click on the button
//     } else {
//         toTop.style.opacity = "0"; // button fade away
//         toTop.style.pointerEvents = "none"; // to avoid user click on the button
//     }
// }

// // Actual function to bring the screen back to top
// function backToTop() {
//     // smooth scroll to top
//     window.scrollTo({top: 0, behavior: 'smooth'});
// }

// // When click "ALL", "ALL" opacity 100%
// function filterAll(){
//     for (let imgW1 of document.getElementsByClassName("week1")){
//         imgW1.style.opacity = "1";
//     }
//     for (let imgW2 of document.getElementsByClassName("week2")){
//         imgW2.style.opacity = "1";
//     }
//     for (let imgW3 of document.getElementsByClassName("week3")){
//         imgW3.style.opacity = "1";
//     }
// }

// // When click "week1", only week1 opacity 100%
// function filterW1(){
//     for (let imgW1 of document.getElementsByClassName("week1")){
//         imgW1.style.opacity = "1";
//     }
//     for (let imgW2 of document.getElementsByClassName("week2")){
//         imgW2.style.opacity = "0.5";
//     }
//     for (let imgW3 of document.getElementsByClassName("week3")){
//         imgW3.style.opacity = "0.5";
//     }
// }

// // When click "week2", only week2 opacity 100%
// function filterW2(){
//     for (let imgW1 of document.getElementsByClassName("week1")){
//         imgW1.style.opacity = "0.5";
//     }
//     for (let imgW2 of document.getElementsByClassName("week2")){
//         imgW2.style.opacity = "1";
//     }
//     for (let imgW3 of document.getElementsByClassName("week3")){
//         imgW3.style.opacity = "0.5";
//     }
// }

// // When click "week3", only week3 opacity 100%
// function filterW3(){
//     for (let imgW1 of document.getElementsByClassName("week1")){
//         imgW1.style.opacity = "0.5";
//     }
//     for (let imgW2 of document.getElementsByClassName("week2")){
//         imgW2.style.opacity = "0.5";
//     }
//     for (let imgW3 of document.getElementsByClassName("week3")){
//         imgW3.style.opacity = "1";
//     }
// }
