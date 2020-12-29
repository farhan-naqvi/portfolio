//Select element function
const selectElement = function (element){
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click',function(){
    body.classList.toggle('open');
});

document.getElementById("cta-btn").onclick = function () {
    location.href = "discover-our-story";
};

// Scroll reveal
window.sr = scrollReveal();

sr.reveal('.animate-left', {
    origin:'left',
    duration:1000,
    distance: '25rem',
    delay:300
});
sr.reveal('.animate-right', {
    origin:'right',
    duration:1000,
    distance: '25rem',
    delay:600
});
sr.reveal('.animate-top', {
    origin:'top',
    duration:1000,
    distance: '25rem',
    delay:600
});
sr.reveal('.animate-bottom', {
    origin:'bottom',
    duration:1000,
    distance: '25rem',
    delay:600
});

// function changeBg(){
//     const images = [
//         'url("")',
//         'url("")',
//         'url("")',
//         'url("")',
//     ]
//     const section = document.querySelector('hero')
//     const bg = images[Math.floor(Math.random()*
//         images.length)];
//         section.style.backgroundImage = bg;
// }
// setInterval(changeBg,2000)