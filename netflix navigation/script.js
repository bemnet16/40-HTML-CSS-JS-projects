const navbg = document.querySelectorAll(".navbg");
const showbtn = document.querySelector(".show");
const closebtn = document.querySelector(".close");

showbtn.addEventListener("click", (e) => {
  for (let i = 0; i <= 2; i++) {
    navbg[i].style.transitionDelay = `${0.15 * i}s`;
    navbg[i].classList.add("dis");
  }
});

closebtn.addEventListener("click", (e) => {
  for (let i = 2; i >= 0; i--) {
    navbg[i].style.transitionDelay = `${0.15 * (2 - i)}s`;
    navbg[i].classList.remove("dis");
  }
});
