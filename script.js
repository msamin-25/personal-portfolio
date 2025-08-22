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
      card.style.boxShadow = "0 0 20px rgba(0, 255, 204, 0.6)";
    }
  });
});
