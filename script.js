(function () {
    const savedTheme = localStorage.getItem("sukhoi-studio-theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
})();

document.addEventListener("DOMContentLoaded", () => {
    if (typeof AOS !== "undefined" && AOS !== null) {
        AOS.init({
            once: true,
            duration: 800
        });
    } else {
        console.warn("AOS library reference absent or offline. Transition rendering deactivated.");
    }

    const themeToggleButton = document.getElementById("theme-toggle");

    if (themeToggleButton) {
        themeToggleButton.addEventListener("click", () => {
            const activeTheme = document.documentElement.getAttribute("data-theme") || "light";
            const targetTheme = activeTheme === "dark" ? "light" : "dark";

            document.documentElement.setAttribute("data-theme", targetTheme);
            localStorage.setItem("sukhoi-studio-theme", targetTheme);
        });
    }
});
