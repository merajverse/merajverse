// Get the mobile menu button and navigation links
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

// Open and close the mobile navigation menu
menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close the mobile menu after clicking a navigation link
const navigationLinks = navLinks.querySelectorAll("a");

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Automatically display the current year in the footer
const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();