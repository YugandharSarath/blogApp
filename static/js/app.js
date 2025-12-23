const mode = localStorage.getItem("mode") || "";
const toggle = document.querySelector(".toggle");
const body = document.querySelector("body");

document.body.className = mode;

toggle.addEventListener("click", ()=>{
  localStorage.setItem("mode", mode === "light" ? "" : "light")
  body.classList.toggle("light")
})

const copyButtons = document.querySelectorAll(".copyLink");

copyButtons.forEach(button => {
  button.addEventListener("click", () => {
    const url = button.getAttribute("data-url");
    const absoluteUrl = window.location.origin + url;
    
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
