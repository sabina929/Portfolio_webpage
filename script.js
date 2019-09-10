const wrapper = document.querySelector('.wrapper');
const navbar = document.querySelector('nav');
const welcomeSection = document.querySelector('#welcome-section');
const projectsSection = document.querySelector('#projects');
const contactSection = document.querySelector('#contact');

const behanceIcon = document.querySelector('.behance');
const linkedinIcon = document.querySelector('.linkedin');
const githubIcon = document.querySelector('.github');
const mailIcon = document.querySelector('.mail');

function init() {
  setTimeout(() => {
    wrapper.style.display = 'none';
    wrapper.style.opacity = 0;

    navbar.style.display = 'block';
    setTimeout(() => (navbar.style.opacity = 1), 50);
    
    welcomeSection.style.display = 'block';
    setTimeout(() => (welcomeSection.style.opacity = 1), 50);
    
    projectsSection.style.display = 'block';
    setTimeout(() => (projectsSection.style.opacity = 1), 50);
    
    contactSection.style.display = 'block';
    setTimeout(() => (contactSection.style.opacity = 1), 50);
  
    // MOUSEMOVE EVENT
    
    window.addEventListener("mousemove", animate);

 function animate(event) {
     var x = event.clientX;
     var y = event.clientY;
//      var x = event.pageX;
//      var y = event.pageY;
     var randomNum, randomColor, size, el;
     var randomColorAlpha = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ", 0.2)";
     randomColor = "#" + Math.random().toString(16).slice(-6);;

     size = Math.random() * 19;
     randomNum = Math.random() * 30;
     el = document.createElement("div");

     document.body.appendChild(el);
     el.classList.add("shape");
     el.setAttribute("style", "z-index:99999;position:absolute;background:" + randomColor + ";width:" + size +
         "px;height:" + size + "px;left:" +
         x + "px;top:" +
         y + "px;box-shadow:0 0 30px " + randomColorAlpha + ";border-radius:" + Math.random() * 100 + "%;transform:rotate(" + Math.random() * 180 +
         "deg) scale(" + Math.random() * 2 + ") translate(" + randomNum + "px)");


     if (document.getElementsByClassName("shape")) {
         var frames, frameCount, i, interval;
         frames = document.getElementsByClassName("shape");
         frameCount = frames.length;
         i = 0;
         interval = setInterval(function () {
             if (frameCount > 30) {
                 document.getElementById("load").removeChild(frames[i]);
                 clearInterval(interval);
                 // console.clear();
             }
         })
     }
 }
    
  }, 5000);
}

init();

 // HOVER OVER ICONS

behanceIcon.addEventListener('mouseover', changeBehanceColorToGreen);
linkedinIcon.addEventListener('mouseover', changeLinkedinColorToGreen);
githubIcon.addEventListener('mouseover', changeGithubColorToGreen);
mailIcon.addEventListener('mouseover', changeMailColorToGreen);

behanceIcon.addEventListener('mouseout', changeBehanceColorToBack);
linkedinIcon.addEventListener('mouseout', changeLinkedinColorToBack);
githubIcon.addEventListener('mouseout', changeGithubColorToBack);
mailIcon.addEventListener('mouseout', changeMailColorToBack);

function changeBehanceColorToGreen() {
  behanceIcon.src = './images/icon-green-02.png';
}

function changeLinkedinColorToGreen() {
  linkedinIcon.src = './images/icon-green-03.png';
}

function changeGithubColorToGreen() {
  githubIcon.src = './images/icon-green-01.png';
}

function changeMailColorToGreen() {
  mailIcon.src = './images/icon-green-04.png';
}

function changeBehanceColorToBack() {
  behanceIcon.src = './images/icon-02.png';
}

function changeLinkedinColorToBack() {
  linkedinIcon.src = './images/icon-03.png';
}

function changeGithubColorToBack() {
  githubIcon.src = './images/icon-01.png';
}

function changeMailColorToBack() {
  mailIcon.src = './images/icon-04.png';
}
