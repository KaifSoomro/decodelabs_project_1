// nav

const mobileNavbar = document.getElementById("mobileNavbar");
const closeNavButton = document.getElementById("closeNav");
const openNavButton = document.querySelector(".mobile_menu");

// tabs

const tabCandidate = document.getElementById("tab-candidate");
const tabCompany = document.getElementById("tab-company");

// Navbar functions

openNavButton.addEventListener("click", () => {
    mobileNavbar.style.left = "0"
})

closeNavButton.addEventListener("click", () => {
    mobileNavbar.style.left = "-200%"
})

// tab functions

tabCompany.addEventListener("click", () => {
    tabCompany.classList.add("active")
    tabCandidate.classList.remove("active")
})

tabCandidate.addEventListener("click", () => {
    tabCandidate.classList.add("active");
    tabCompany.classList.remove("active");
})