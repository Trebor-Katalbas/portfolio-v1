// Scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements1 = document.querySelectorAll('.item');
const hiddenElements2 = document.querySelectorAll('nav ul li');
const hiddenElements3 = document.querySelectorAll('.logo');
const hiddenElements4 = document.querySelectorAll('h2');
const hiddenElements5 = document.querySelectorAll('h3');
const hiddenElements6 = document.querySelectorAll('.pic');
const hiddenElements7 = document.querySelectorAll('.line');
const hiddenElements8 = document.querySelectorAll('.wtxt');
const hiddenElements9 = document.querySelectorAll('.linef');
const hiddenElements10 = document.querySelectorAll('.p-logo');
const hiddenElements11 = document.querySelectorAll('.content');
hiddenElements1.forEach((el) => observer.observe(el));
hiddenElements2.forEach((el) => observer.observe(el));
hiddenElements3.forEach((el) => observer.observe(el));
hiddenElements4.forEach((el) => observer.observe(el));
hiddenElements5.forEach((el) => observer.observe(el));
hiddenElements6.forEach((el) => observer.observe(el));
hiddenElements7.forEach((el) => observer.observe(el));
hiddenElements8.forEach((el) => observer.observe(el));
hiddenElements9.forEach((el) => observer.observe(el));
hiddenElements10.forEach((el) => observer.observe(el));
hiddenElements11.forEach((el) => observer.observe(el));

// Glitch effect 
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

document.querySelector('h1').onmouseover = event =>{
    let iter = 0;
    let index = 0;
    
    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("").map((letter, index) => {
            if(index < iter){
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)]
            })
            .join("");
        
        if (iter >= event.target.dataset.value.length){
            clearInterval(interval);
        }
        iter += 1 / 3;
    }, 30);
}
document.querySelector('h2').onmouseover = event =>{
    let iter = 0;
    let index = 0;
    
    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("").map((letter, index) => {
            if(index < iter){
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)]
            })
            .join("");
        
        if (iter >= event.target.dataset.value.length){
            clearInterval(interval);
        }
        iter += 1 / 3;
    }, 30);
}
document.querySelector('h3').onmouseover = event =>{
    let iter = 0;
    let index = 0;
    
    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("").map((letter, index) => {
            if(index < iter){
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)]
            })
            .join("");
        
        if (iter >= event.target.dataset.value.length){
            clearInterval(interval);
        }
        iter += 1 / 3;
    }, 30);
}

// Blob animation
const blob = document.getElementById("blob");

document.body.onpointermove = event =>{
    const {clientX, clientY} = event;
    
    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, {duration: 6000, fill: "forwards"});
}

// Span animation
let index1 = 0,
    interval1 = 1000;

const rand = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
    star.style.setProperty("--star-left", `${rand(-10 , 100)}%`);
    star.style.setProperty("--star-top", `${rand(-40 , 80)}%`);

    star.style.animation = "none";
    star.offsetHeight;
    star.style.animation = "";
}

for(const star of document.getElementsByClassName("magic-logo")) {
    setTimeout(() => {
        animate(star);
    
        setInterval(() => animate(star), 1200);
    }, index1++ * (interval1 / 3))
}

// image tilt animation
VanillaTilt.init(document.querySelector(".logo2"), {
		max: 1000,
		speed: 200
	});

// Lazy loading
window.addEventListener('load', function(){
    const script = document.createElement("script");
    script.src = "script.js";
    document.body.appendChild(script);
});
