document.addEventListener("DOMContentLoaded", function () {
    // Animation des barres de compétence
    let progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach((bar) => {
        let width = bar.style.width;
        bar.style.width = "0"; // Reset pour l'animation
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });

    // Mode sombre / clair
    let toggleThemeBtn = document.createElement("button");
    toggleThemeBtn.textContent = "Mode Sombre 🌙";
    toggleThemeBtn.className = "btn btn-warning mt-3";
    document.body.appendChild(toggleThemeBtn);

    toggleThemeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            toggleThemeBtn.textContent = "Mode Clair ☀️";
        } else {
            toggleThemeBtn.textContent = "Mode Sombre 🌙";
        }
    });
});

