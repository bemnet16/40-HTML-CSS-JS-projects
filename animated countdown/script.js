const spans = document.querySelectorAll("span");
const con = document.querySelector(".con");
const go = document.querySelector(".go");
const replay = document.querySelector("button");
let idx = 0;

replay.addEventListener("click", () => {
  con.classList.toggle("active");
  go.classList.toggle("active");
  animate();
});

function animate() {
  let inter = setInterval(() => {
    if (spans[idx - 1]) {
      spans[idx - 1].classList.remove("active");
    }
    if (spans[idx]) {
      spans[idx++].classList.add("active");
    }
  }, 800);

  setTimeout(() => {
    clearInterval(inter);
    idx = 0;
    con.classList.toggle("active");
    go.classList.toggle("active");
  }, 4100);
}
