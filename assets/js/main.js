const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("theme-light");
  body.classList.toggle("theme-dark");

  if (body.classList.contains("theme-dark")) {
    themeToggle.textContent = "☼";
  } else {
    themeToggle.textContent = "☽";
  }
});