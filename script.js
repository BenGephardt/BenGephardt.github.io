// --- THEME AND SMALL UTILITIES ---

(function () {
  const root = document.documentElement;
  const themeToggle = document.querySelector(".theme-toggle");
  const themeToggleLabel = document.querySelector(".theme-toggle-label");
  const YEAR_SPAN_ID = "year";
  const STORAGE_KEY = "benjamin-portfolio-theme";

  // Initialize year in footer
  const yearSpan = document.getElementById(YEAR_SPAN_ID);
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Guard: Stop theme logic if toggle elements don't exist on this specific page
  if (!root || !themeToggle || !themeToggleLabel) return;

  // Determine preferred theme
  const storedTheme = window.localStorage.getItem(STORAGE_KEY);
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const initialTheme =
    storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : prefersDark
        ? "dark"
        : "light";

  applyTheme(initialTheme, false);

  // Attach listeners
  themeToggle.addEventListener("click", () => {
    const current =
      root.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next, true);
  });

  // Allow keyboard activation via Space / Enter explicitly for better accessibility
  themeToggle.addEventListener("keydown", (event) => {
    if (
      event.key === " " ||
      event.key === "Spacebar" ||
      event.key === "Enter"
    ) {
      event.preventDefault();
      themeToggle.click();
    }
  });
  
  // Core function to apply theme and optionally persist choice
  function applyTheme(theme, persist) {
    const isDark = theme === "dark";
    root.setAttribute("data-theme", isDark ? "dark" : "light");
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggleLabel.textContent = isDark ? "Dark" : "Light";

    if (persist) {
      try {
        window.localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
      } catch (_) {
        // Fail silently; theme will work for current session but won't be remembered
      }
    }
  }
})();
