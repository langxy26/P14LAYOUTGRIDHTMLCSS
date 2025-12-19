const toggle = document.getElementById("darkToggle");
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

// Dark Mode (smooth)
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Hamburger Menu
hamburger.addEventListener("click", () => {
    navList.classList.toggle("show");
});
