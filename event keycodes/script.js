const container = document.querySelector(".container");
const codes = document.querySelectorAll(".codes");
const events = ["key", "keyCode", "code"];

document.addEventListener("keydown", (e) => {
  container.style.display = "none";
  codes.forEach((code, idx) => {
    code.style.display = "flex";
    code.querySelector("h2").innerText = e[events[idx]];
  });
});
