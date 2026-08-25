window.addEventListener("scroll", () => {

const nav = document.querySelector(".navbar");

if(window.scrollY > 40){

nav.style.padding="18px 10%";

}

else{

nav.style.padding="30px 10%";

}

});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 40){

navbar.style.padding="18px 10%";

}

else{

navbar.style.padding="30px 10%";

}

});

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".service-card,.portfolio-card,.number").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

/*============================
MOBILE MENU
============================*/

const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

}


/*============================
SMOOTH SCROLL
============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({

behavior:"smooth"

});

});

});


/*============================
HEADER BACKGROUND
============================*/

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>60){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});


/*============================
COUNTER
============================*/

const counters=document.querySelectorAll(".counter");

const speed=200;

const runCounter=()=>{

counters.forEach(counter=>{

const target=+counter.dataset.target;

const count=+counter.innerText;

const increment=target/speed;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(runCounter,15);

}else{

counter.innerText=target;

}

});

};

runCounter();


/*============================
PORTFOLIO FILTER
============================*/

const buttons=document.querySelectorAll(".filter-btn");
const cards=document.querySelectorAll(".portfolio-card");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

buttons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const filter=button.dataset.filter;

cards.forEach(card=>{

if(filter==="all"){

card.style.display="block";

}else{

card.style.display=

card.dataset.category===filter

? "block"

: "none";

}

});

});

});


/*============================
TESTIMONIAL SLIDER
============================*/

const testimonials=document.querySelectorAll(".testimonial");

let current=0;

function changeTestimonial(){

testimonials.forEach(t=>t.classList.remove("active"));

current++;

if(current>=testimonials.length){

current=0;

}

testimonials[current].classList.add("active");

}

setInterval(changeTestimonial,4500);


/*============================
SCROLL REVEAL
============================*/

const revealItems=document.querySelectorAll(

".section-title,.service-card,.portfolio-card,.stat"

);

const observer=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:0.2

}

);

revealItems.forEach(item=>{

observer.observe(item);

});


/*============================
CONTACT FORM
============================*/

const form=document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been received.");

form.reset();

});

}