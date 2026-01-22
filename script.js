// Menu hamburger
const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("menuList");

toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
});

// GSAP animacje sekcji
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".section").forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 40,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: "top 80%"
        }
    });
});
