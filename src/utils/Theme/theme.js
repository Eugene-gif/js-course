export function setupTheme() {
  const theme = {
    btn: document.querySelector("._theme-btn"),
    icon: {
      sun: document.querySelector(".icon.--sun"),
      moon: document.querySelector(".icon.--moon"),
    },
    currentTheme: localStorage.getItem("theme"),
    currentIcon: localStorage.getItem("icon"),
    action: () => {
      if (theme.currentTheme === "dark") {
        document.body.classList.add("dark-theme");
        document.body.classList.remove("light-theme");
        theme.icon.moon.style.display = 'none';
        theme.icon.sun.style.display = 'block';
      } else {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        theme.icon.moon.style.display = 'block';
        theme.icon.sun.style.display = 'none';
      }

      theme.btn.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
        if (document.body.classList.contains("dark-theme")) {
          theme.currentTheme = "dark";
          theme.icon.moon.style.display = 'none';
          theme.icon.sun.style.display = 'block';
        } else {
          theme.currentTheme = "light";
          theme.icon.sun.style.display = 'none';
          theme.icon.moon.style.display = 'block';
        }

        localStorage.setItem("theme", theme.currentTheme);
      });

      document.body.style.display = "block";
    }
  }
  theme.action();
}