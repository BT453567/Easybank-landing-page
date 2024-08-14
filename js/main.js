const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const body = document.querySelector(".body");
const overlay = document.querySelector(".overlay");

navToggle.addEventListener("click", () => {
    
    menuOpen = navToggle.getAttribute("aria-expanded");

    if (menuOpen === "false") {
        overlay.classList.add("show-overlay");
        nav.classList.add("mobile-menu-visible");
        navToggle.setAttribute("aria-expanded", true);
        body.classList.add("overflow-hidden");
    } else {
        overlay.classList.remove("show-overlay");
        nav.classList.remove("mobile-menu-visible");
        navToggle.setAttribute("aria-expanded", false);
        body.classList.remove("overflow-hidden");
    }
});

