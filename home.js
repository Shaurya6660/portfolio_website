
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");
if (menuButton && navigation) {
  menuButton.addEventListener("click", function () {
    navigation.classList.toggle("open");
    const menuIsOpen = navigation.classList.contains("open");
    menuButton.setAttribute("aria-expanded", menuIsOpen);
  });
  const navigationLinks = navigation.querySelectorAll("a");
  navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}
const yearElement = document.querySelector("#year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
