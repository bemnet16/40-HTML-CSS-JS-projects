const boards = document.querySelectorAll(".board");
const img = document.querySelector("img");
let active_board = 0;

img.addEventListener("dragend", () => {
  boards[active_board].append(img);
  boards[active_board].classList.remove("hover");
});

boards.forEach((board, idx) => {
  board.addEventListener("dragenter", (e) => {
    e.preventDefault();
    active_board = idx;
    board.classList.add("hover");
    clearOthers(idx);
  });
});

clearOthers = (id) => {
  boards.forEach((board, idx) => {
    if (idx != id) {
      board.classList.remove("hover");
      board.innerHTML = "";
    }
  });
};
