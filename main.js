// Animate skill bars on load
document.querySelectorAll(".skill-bar span").forEach(bar => {
  const width = bar.style.width;
  bar.style.width = "0";
  setTimeout(() => {
    bar.style.width = width;
  }, 300);
});
// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}
// Mobile navigation toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }
});
