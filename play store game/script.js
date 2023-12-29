const board = document.querySelector(".board");
const container = document.querySelector(".container");
const ball = document.querySelector(".ball");
let fromTop = 0;
let isPlay = false;

ball.addEventListener("mousedown", (e) => {
  isPlay = true;
});

ball.addEventListener("mouseup", (e) => {
  isPlay = false;
});

board.addEventListener("mousemove", (e) => {
  if (isPlay) {
    ball.style.left = `${e.offsetX}px`;
  }
});

const Run = () => {
  const interval = setInterval(() => {
    SetObs();
    container.style.top = `-${fromTop++ * 350}px`;
  }, 1000);
};

Run();

const SetObs = () => {
  const con = document.createElement("div");
  con.classList.add("con");

  const obs = document.createElement("div");
  obs.classList.add("obs");

  const widRand = Math.floor(Math.random() * 100 + 50);
  obs.style.width = `${widRand}px`;

  const lefRand = Math.floor(Math.random() * (300 - widRand));
  obs.style.left = `${lefRand}px`;

  con.appendChild(obs);
  container.appendChild(con);
};
