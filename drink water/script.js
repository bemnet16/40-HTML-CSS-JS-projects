const bigglass = document.querySelector(".bigglass");
const emptyPart = document.querySelector(".empty");
const filledPart = document.querySelector(".filled");
const glasses = document.querySelectorAll(".glass");
const ml = 25;

glasses.forEach((glass, index) => {
  glass.addEventListener("click", () => {
    if (
      glass.classList.contains("fill") &&
      (!glasses[index + 1] || !glasses[index + 1].classList.contains("fill"))
    ) {
      idx = index - 1;
    } else {
      idx = index;
    }
    fillGlass(idx);
    emptyPart.querySelector("h3").innerText = `${
      (200 - ml * (idx + 1)) / 100
    }L`;
    filledPart.innerText = `${(ml * (idx + 1)) / 2}%`;
    emptyPart.style.height = `${100 - (ml * (idx + 1)) / 2}%`;
    filledPart.style.height = `${(ml * (idx + 1)) / 2}%`;
  });
});

fillGlass = (id) => {
  glasses.forEach((glass, idx) => {
    if (idx <= id) {
      glass.classList.add("fill");
    } else {
      glass.classList.remove("fill");
    }
  });
};
