const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
}
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}
