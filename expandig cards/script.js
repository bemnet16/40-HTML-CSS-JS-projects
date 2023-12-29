panel = document.querySelectorAll(".panel");
container = document.querySelector(".container");

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("panel")) {
    panel.forEach((pan) => {
      if (pan.classList.contains("active")) {
        pan.classList.remove("active");
      }
    });
    e.target.classList.add("active");
  }
});
