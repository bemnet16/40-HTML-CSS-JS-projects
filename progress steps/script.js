const circs = document.querySelectorAll(".circ");
const lines = document.querySelectorAll(".line");
const pre = document.querySelector(".pre");
const next = document.querySelector(".next");

pre.addEventListener("click", () => {
  for (let i = 3; i >= 0; i--) {
    if (circs[i].classList.contains("active")) {
      circs[i].classList.remove("active");
      if (circs[i].nextElementSibling) {
        circs[i].nextElementSibling.classList.remove("active");
      }
      break;
    }
  }
  handleNxtBtn();
  handlePreBtn();
});

next.addEventListener("click", () => {
  for (let circ of circs) {
    if (!circ.classList.contains("active")) {
      circ.classList.add("active");
      if (circ.nextElementSibling) {
        circ.nextElementSibling.classList.add("active");
      }
      break;
    }
  }
  handleNxtBtn();
  handlePreBtn();
});

handleNxtBtn = () => {
  const bool = [...circs].every((circ) => circ.classList.contains("active"));
  if (bool) {
    next.classList.remove("active");
  } else {
    next.classList.add("active");
  }
};

handlePreBtn = () => {
  const bool = [...circs].some((circ) => circ.classList.contains("active"));
  if (!bool) {
    pre.classList.remove("active");
  } else {
    pre.classList.add("active");
  }
};
