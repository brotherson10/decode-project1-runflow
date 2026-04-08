const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav a");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});