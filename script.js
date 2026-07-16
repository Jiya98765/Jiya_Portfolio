// ===============================
// PORTFOLIO SCRIPT
// Author: Jiya Portfolio
// ===============================


// ===============================
// Typing Animation
// ===============================

const words = [
  "Aspiring Data Analyst",
  "SQL Developer",
  "Power BI Developer",
  "Python Enthusiast"
];

const typingText = document.querySelector(".typing");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if(!typingText) return;

    const currentWord = words[wordIndex];

    if(!deleting){

        typingText.textContent =
        currentWord.substring(0,charIndex+1);

        charIndex++;

        if(charIndex===currentWord.length){

            deleting=true;

            setTimeout(typeEffect,1200);

            return;

        }

    }

    else{

        typingText.textContent =
        currentWord.substring(0,charIndex-1);

        charIndex--;

        if(charIndex===0){

            deleting=false;

            wordIndex++;

            if(wordIndex>=words.length){

                wordIndex=0;

            }

        }

    }

    setTimeout(typeEffect,deleting?60:120);

}

typeEffect();


// ===============================
// Sticky Navbar
// ===============================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(!header) return;

    header.classList.toggle("sticky",window.scrollY>50);

});


// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


// ===============================
// Active Navbar
// ===============================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(window.scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// ===============================
// Scroll Reveal
// ===============================

const reveals=document.querySelectorAll(".reveal");

function revealSection(){

reveals.forEach(item=>{

const windowHeight=window.innerHeight;

const revealTop=item.getBoundingClientRect().top;

const revealPoint=120;

if(revealTop<windowHeight-revealPoint){

item.classList.add("active");

}

});

}

window.addEventListener("scroll",revealSection);

revealSection();


// ===============================
// Animated Counter
// ===============================

const counters=document.querySelectorAll(".counter");

const speed=200;

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.getAttribute("data-target");

let count=0;

const updateCounter=()=>{

const increment=Math.ceil(target/speed);

count+=increment;

if(count<target){

counter.innerText=count;

requestAnimationFrame(updateCounter);

}

else{

counter.innerText=target;

}

};

updateCounter();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


// ===============================
// Back To Top Button
// ===============================

const topBtn=document.querySelector(".top-btn");

window.addEventListener("scroll",()=>{

if(!topBtn) return;

if(window.scrollY>500){

topBtn.classList.add("show");

}

else{

topBtn.classList.remove("show");

}

});

if(topBtn){

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}


// ===============================
// Navbar Mobile Toggle
// ===============================

const menu=document.querySelector(".menu-btn");

const navbar=document.querySelector(".nav-links");

if(menu){

menu.addEventListener("click",()=>{

navbar.classList.toggle("open");

});

}


// ===============================
// Project Card Hover Effect
// ===============================

const cards=document.querySelectorAll(".project-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.setProperty("--x",x+"px");

card.style.setProperty("--y",y+"px");

});

});


// ===============================
// Page Loader
// ===============================

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.classList.add("hide");

}

});