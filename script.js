// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Glow effect on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".project-card").forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.style.boxShadow = "0 0 20px rgba(36, 55, 51, 0.6)";
    }
  });
});


const roles = ["a Web Developer", "a Software Developer", "a Mathie"];
let roleIndex = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenRoles = 1200; // pause before switching

function typeEffect() {
  const typingElement = document.getElementById("typing-text");

  if (!isDeleting && charIndex <= roles[roleIndex].length) {
    // typing
    currentRole = roles[roleIndex].substring(0, charIndex++);
    typingElement.textContent = "I am " + currentRole;
    setTimeout(typeEffect, typingSpeed);
  } else if (isDeleting && charIndex >= 0) {
    // deleting
    currentRole = roles[roleIndex].substring(0, charIndex--);
    typingElement.textContent = "I am " + currentRole;
    setTimeout(typeEffect, deletingSpeed);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typeEffect, delayBetweenRoles);
    } else {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeEffect, typingSpeed);
    }
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);


