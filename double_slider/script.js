const leftcon = document.querySelector(".leftcon");
const rightcon = document.querySelector(".rightcon");
const up = document.querySelector(".up");
const down = document.querySelector(".down");
let left = [];
let right = [];
let l_idx;
let r_idx = 0;

up.addEventListener("click", () => {
  handleIdxs("up");
  leftcon.style.top = `${l_idx * 100}vh`;
  rightcon.style.top = `${r_idx * 100}vh`;
});

down.addEventListener("click", () => {
  handleIdxs("down");
  leftcon.style.top = `${l_idx * 100}vh`;
  rightcon.style.top = `${r_idx * 100}vh`;
});

handleIdxs = (btn) => {
  const len = document.querySelectorAll(".left").length;
  if (btn === "up") {
    l_idx++;
    r_idx--;
  } else {
    l_idx--;
    r_idx++;
  }
  if (0 - l_idx >= len) {
    l_idx = 0;
  } else if (0 - l_idx < 0) {
    l_idx = -len + 1;
  }
  if (0 - r_idx >= len) {
    r_idx = 0;
  } else if (0 - r_idx < 0) {
    r_idx = -len + 1;
  }
};

ftch = async () => {
  const res = await fetch("http://localhost:8000/datas");
  const data = await res.json();
  l_idx = -data.length + 1;
  leftcon.style.top = `${100 * l_idx}vh`;
  data.forEach((da) => {
    left.push(da);
    right.unshift(da);
  });
  rend();
};

rend = () => {
  left.forEach((l) => {
    leftcon.innerHTML += `
    <div class="left" style="background-color: ${l.color}">
        <span class="title">${l.name}</span>
        <span class="info">${l.info}</span>
      </div>
    `;
  });
  right.forEach((r) => {
    rightcon.innerHTML += `
 <div style="background-image: url('${r.img}')"></div>
`;
  });
};

ftch();
