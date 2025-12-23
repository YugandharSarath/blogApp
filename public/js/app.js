const initialMode = localStorage.getItem("mode") || "";
const toggles = document.querySelectorAll(".toggle");
const body = document.querySelector("body");
const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobileMenu");

document.body.className = initialMode;

function toggleTheme() {
  const currentMode = body.classList.contains("light") ? "light" : "";
  const newMode = currentMode === "light" ? "" : "light";
  localStorage.setItem("mode", newMode);
  body.classList.toggle("light");
}

toggles.forEach(toggle => {
  toggle.addEventListener("click", toggleTheme);
});

if (burger) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });
}

const copyButtons = document.querySelectorAll(".copyLink");

copyButtons.forEach(button => {
  button.addEventListener("click", () => {
    const url = button.getAttribute("data-url");
    const absoluteUrl = url.startsWith("http") ? url : window.location.origin + url;

    navigator.clipboard.writeText(absoluteUrl).then(() => {
      const originalHtml = button.innerHTML;
      button.innerHTML = '<span style="font-size: 12px; color: #10b981;">Copied!</span>';
      setTimeout(() => {
        button.innerHTML = originalHtml;
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
      alert("Failed to copy link.");
    });
  });
});
