document.addEventListener("DOMContentLoaded", () => {

  /* ================= MOBILE NAVIGATION ================= */
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  /* ================= SKILL BAR ANIMATION ================= */
  const skillBars = document.querySelectorAll(".skill-bar span");

  if (skillBars.length > 0) {
    skillBars.forEach(bar => {
      const targetWidth = bar.style.width;
      bar.style.width = "0";

      setTimeout(() => {
        bar.style.width = targetWidth;
      }, 300);
    });
  }

});
