const mobileNavbar = document.getElementById("mobileNavbar");
const closeNavButton = document.getElementById("closeNav");
const openNavButton = document.querySelector(".mobile_menu");

openNavButton.addEventListener("click", () => {
    mobileNavbar.style.left = "0"
})

closeNavButton.addEventListener("click", () => {
    mobileNavbar.style.left = "-200%"
})
