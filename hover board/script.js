const boardCon = document.querySelector(".board-con");
for (let i = 0; i < 500; i++) {
  boardCon.innerHTML += `<div class="board"></div>`;
}

const boards = document.querySelectorAll(".board");

boards.forEach((board, idx) => {
  board.addEventListener("mouseover", () => {
    const color = `rgb(${getRandom()},${getRandom()},${getRandom()})`;
    board.style.transition = " 0s linear";
    board.style.backgroundColor = color;
    board.style.boxShadow = `0px 0px 2px ${color},0px 0px 8px ${color}`;
  });

  board.addEventListener("mouseout", () => {
    board.style.transition = " 1s linear";
    board.style.backgroundColor = "rgba(100, 100, 100, 0.2)";
    board.style.boxShadow = "none";
  });
});

function getRandom() {
  const rand = Math.floor(Math.random() * 255);
  return rand;
}
