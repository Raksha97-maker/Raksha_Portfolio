const btn = document.getElementById("ab-btn");
btn.addEventListener("click", function(){
    window.location.href="#more-about";
})
// JS FOR SCROLL-UP
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
// Nav hamburgerburger selections

const check=document.getElementById("check");
check.addEventListener("click",function(){
    window.location.href="https://flourishing-cucurucho-4763d6.netlify.app/index.html" 
})

const check1=document.getElementById("check1");
check1.addEventListener("click",function(){
    window.location.href="https://649ed83dad3e52109665e5f9--moonlit-kitsune-a613b0.netlify.app/"
})

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });

const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);