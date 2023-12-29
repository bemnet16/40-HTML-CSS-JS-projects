const imgcon = document.querySelector(".imgcon");
const pre = document.querySelector("#prev");
const next = document.querySelector("#next");
let idx = 0;
let interval = setInterval(slide, 2000);

function slide() {
  idx++;
  change();
}

function change() {
  if (idx > 4) {
    idx = 0;
  } else if (idx < 0) {
    idx = 4;
  }
  imgcon.style.transform = `translateX(${idx * -480}px)`;
}

function reset() {
  clearInterval(interval);
  interval = setInterval(slide, 2000);
}

pre.addEventListener("click", () => {
  idx--;
  change();
  reset();
});

next.addEventListener("click", () => {
  idx++;
  change();
  reset();
});
