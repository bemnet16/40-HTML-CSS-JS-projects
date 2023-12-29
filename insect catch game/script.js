const state1 = document.querySelector(".stateone");
const state2 = document.querySelector(".statetwo");
const gamestate = document.querySelector(".game");
const playbtn = state1.querySelector("button");
const choices = state2.querySelectorAll(".choice");
const time = gamestate.querySelector(".time");
const score = gamestate.querySelector(".score");
let scoreval = 0;
let timeval = 0;
let insect_img;
let num_insect = 1;

playbtn.addEventListener("click", () => {
  state1.classList.add("hidden");
  state2.classList.remove("hidden");
});

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    insect_img = choice.querySelector("img").getAttribute("src");
    state2.classList.add("hidden");
    gamestate.classList.remove("hidden");
    setInterval(() => handleTimer(), 1000);
    rendGame();
    num_insect++;
  });
});

function rendGame() {
  for (let i = 0; i < num_insect; i++) {
    const insect = document.createElement("div");
    const img = document.createElement("img");
    img.src = insect_img;
    img.style.transform = `rotate(${Math.random() * 360}deg)`;
    insect.classList.add("insect");
    insect.appendChild(img);
    insect.style.left = `${getRandL()}px`;
    insect.style.top = `${getRandT()}px`;

    insect.addEventListener("click", () => {
      handleScore();
      insect.remove();
      rendGame();
    });
    gamestate.appendChild(insect);
  }
}

function getRandL() {
  const width = window.innerWidth - 30;
  const randLeft = Math.floor(Math.random() * width);
  return randLeft;
}
function getRandT() {
  const height = window.innerHeight - 30;
  const randTop = Math.floor(Math.random() * height);
  return randTop;
}

handleScore = () => {
  score.innerText = ++scoreval;
};

handleTimer = () => {
  timeval++;
  time.innerText = `${
    parseInt(timeval / 59) <= 9
      ? `0${parseInt(timeval / 59)}`
      : `${parseInt(timeval / 59)}`
  }:${
    timeval % 59 <= 9
      ? `0${parseInt(timeval % 59)}`
      : `${parseInt(timeval % 59)}`
  }`;
};
