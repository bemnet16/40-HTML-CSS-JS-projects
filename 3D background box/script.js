const boxes = document.querySelectorAll(".box");
const btn = document.querySelector("button");
const boxcon = document.querySelector(".boxes");

boxes.forEach((box, idx) => {
  box.style.backgroundPosition = `${-(idx % 4) * 100}px ${
    -getNum(idx) * 100
  }px`;
});

function getNum(num) {
  if (num >= 0 && num <= 3) {
    return 0;
  } else if (num >= 4 && num <= 7) {
    return 1;
  } else if (num >= 8 && num <= 11) {
    return 2;
  } else if (num >= 12 && num <= 15) {
    return 3;
  }
}

btn.addEventListener("click", () => {
  boxcon.classList.toggle("right");
  boxcon.classList.toggle("left");
});
