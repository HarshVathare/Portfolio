const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  menuBtn.innerHTML = navLinks.classList.contains("active")
    ? '<i class="fas fa-xmark"></i>'
    : '<i class="fas fa-bars"></i>';
});

navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

/* Typing Animation */

const roles = [
  "Java Backend Developer",
  "Spring Boot Developer",
  "Software Developer",
  "Full Stack Developer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.querySelector(".typing");

function typeEffect(){

  const currentRole = roles[roleIndex];

  if(isDeleting){
    typingElement.textContent =
      currentRole.substring(0,charIndex--);
  }else{
    typingElement.textContent =
      currentRole.substring(0,charIndex++);
  }

  let speed = isDeleting ? 60 : 120;

  if(!isDeleting && charIndex === currentRole.length){
    speed = 1500;
    isDeleting = true;
  }

  if(isDeleting && charIndex === 0){
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(typeEffect,speed);
}

typeEffect();

 