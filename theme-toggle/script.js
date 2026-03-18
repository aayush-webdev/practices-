const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
const body = document.body;
const btn = document.querySelector("button");

function applyTheme(theme) {
    body.classList.toggle("dark", theme === "dark");
    body.classList.toggle("light", theme === "light");
}

function getInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;

    return mediaQuery.matches ? "dark" : "light";
}
applyTheme(getInitialTheme());


btn.addEventListener("click", () => {
    const newTheme = body.classList.contains("dark") ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
});

mediaQuery.addEventListener("change", () => {
    if (!localStorage.getItem("theme")) {
        applyTheme(mediaQuery.matches ? "dark" : "light");
    }
});