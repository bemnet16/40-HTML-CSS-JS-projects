const textCon = document.querySelector(".type-text");
let letters;
let letterIdx = 0;
let isWrite = true;

const rendLtrs = () => {
  const txts = textCon.innerText.split("");
  textCon.innerHTML = "";
  txts.forEach((txt, idx) => {
    const span = document.createElement("span");
    span.classList.add("letter");
    span.innerHTML = txt;
    textCon.appendChild(span);
  });
  textCon.querySelector("span").classList.add("current");
  letters = textCon.querySelectorAll(".letter");
};

rendLtrs();

document.addEventListener("keyup", (e) => {
  isWrite = false;
  if (e.key === "Backspace") {
    letters[letterIdx].classList.remove("current");
    letterIdx--;
    letters[letterIdx].classList.remove("wrong");
    letters[letterIdx].classList.remove("correct");
    letters[letterIdx].classList.add("current");
  }
});
document.addEventListener("keydown", (e) => {
  isWrite = true;
});

document.addEventListener("keypress", (e) => {
  if (isWrite) {
    const ltr = letters[letterIdx++];
    if (e.key === ltr.innerHTML) {
      ltr.classList.add("correct");
    } else {
      ltr.classList.add("wrong");
    }
    ltr.classList.remove("current");
    ltr.nextElementSibling.classList.add("current");
  }
});
