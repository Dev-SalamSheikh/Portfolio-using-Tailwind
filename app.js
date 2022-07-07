const hamburgerMenu = document.querySelector("#hamburger");
const Menu = document.querySelector("#menu");
const Moon = document.querySelector("#moon");
const Body = document.querySelector("body");

hamburgerMenu.addEventListener("click", () => {
  Menu.classList.toggle("hidden");
  hamburgerMenu.classList.toggle("bg-white");
});

Moon.addEventListener("click", () => {
  Body.classList.toggle("dark");
});
