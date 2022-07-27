const burger = document.querySelector(".menu-navbar__burger");
const navbar = document.querySelector(".header__menu-navbar");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navbar.classList.toggle("active");
})

document.querySelectorAll(".menu__link").forEach(n => n.addEventListener("click", () => {
    burger.classList.remove("active");
    navbar.classList.remove("active");
}))