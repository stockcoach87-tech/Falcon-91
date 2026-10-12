
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
