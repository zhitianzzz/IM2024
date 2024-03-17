const img = document.querySelector("img");
img.setAttribute("draggable", false);

// Function to play or pause the background music
function playAudio(){
    let audio = document.getElementById("music");

    if(audio.paused){
        audio.play();
    } else {
        audio.pause();
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

// Below is to create the back to top function:
window.onscroll = function(){
    scroll();
}

// Function to show the "BACK TO TOP" button when user scroll down the screen
function scroll() {
    let toTop = document.getElementById("backToTop");

    // To create a smooth transition by changing opacity (transition used in css)
    // For most type of browsers, when scroll 500px, "BACK TO TOP" button appear
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        toTop.style.opacity = "1"; // button appear
        toTop.style.pointerEvents = "auto"; // to allow user click on the button
    } else {
        toTop.style.opacity = "0"; // button fade away
        toTop.style.pointerEvents = "none"; // to avoid user click on the button
    }
}

// Actual function to bring the screen back to top
function backToTop() {
    // smooth scroll to top
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// When click "ALL", "ALL" opacity 100%
function filterAll(){
    for (let imgW1 of document.getElementsByClassName("week1")){
        imgW1.style.opacity = "1";
    }
    for (let imgW2 of document.getElementsByClassName("week2")){
        imgW2.style.opacity = "1";
    }
    for (let imgW3 of document.getElementsByClassName("week3")){
        imgW3.style.opacity = "1";
    }
}

// When click "week1", only week1 opacity 100%
function filterW1(){
    for (let imgW1 of document.getElementsByClassName("week1")){
        imgW1.style.opacity = "1";
    }
    for (let imgW2 of document.getElementsByClassName("week2")){
        imgW2.style.opacity = "0.5";
    }
    for (let imgW3 of document.getElementsByClassName("week3")){
        imgW3.style.opacity = "0.5";
    }
}

// When click "week2", only week2 opacity 100%
function filterW2(){
    for (let imgW1 of document.getElementsByClassName("week1")){
        imgW1.style.opacity = "0.5";
    }
    for (let imgW2 of document.getElementsByClassName("week2")){
        imgW2.style.opacity = "1";
    }
    for (let imgW3 of document.getElementsByClassName("week3")){
        imgW3.style.opacity = "0.5";
    }
}

// When click "week3", only week3 opacity 100%
function filterW3(){
    for (let imgW1 of document.getElementsByClassName("week1")){
        imgW1.style.opacity = "0.5";
    }
    for (let imgW2 of document.getElementsByClassName("week2")){
        imgW2.style.opacity = "0.5";
    }
    for (let imgW3 of document.getElementsByClassName("week3")){
        imgW3.style.opacity = "1";
    }
}