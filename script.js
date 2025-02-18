document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".title");

    // Set initial state for animation
    title.style.opacity = "0";
    title.style.transform = "translateY(-20px)";

    // Smooth transition using requestAnimationFrame
    requestAnimationFrame(() => {
        setTimeout(() => {
            title.style.transition = "opacity 1s ease, transform 1s ease";
            title.style.opacity = "1";
            title.style.transform = "translateY(0)";
        }, 500);
    });
});

// Star Button Click Animation
const starButton = document.querySelector(".star-btn");

starButton.addEventListener("click", () => {
    starButton.classList.add("pulse-click");
    setTimeout(() => {
        starButton.classList.remove("pulse-click");
    }, 500);
});
