const text = document.querySelector(".text");
const inp = document.querySelector("input");
const chars = text.innerText.split("");
let curChar = 0;
let speed = 1;
let inter = setInterval(1000);

setSpeed = (speed) => {
  clearInterval(inter);
  inter = setInterval(() => {
    text.innerHTML += `${chars[curChar++]}`;
    if (curChar == chars.length) {
      curChar = 0;
      text.innerHTML = "";
    }
  }, 300 / speed);
};

text.innerHTML = "";
setSpeed(speed);

inp.addEventListener("change", (e) => {
  speed = +e.target.value;
  setSpeed(speed);
});
