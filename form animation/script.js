const inps = document.querySelectorAll(".inp");

inps.forEach((inp) => {
  inp.addEventListener("mouseover", () => {
    inp.querySelector(".label").classList.add("wave");
  });
});
inps.forEach((inp) => {
  inp.addEventListener("mouseout", () => {
    if (!inp.querySelector("input").value) {
      inp.querySelector(".label").classList.remove("wave");
    }
  });
});

// const labels = document.querySelectorAll(".label");

// labels.forEach((label) => {
//   label.innerHTML = label.innerText
//     .split("")
//     .map(
//       (letter, idx) => `
//   <span style="transition-delay:${idx * 50} ;">${letter}</span>
//   `
//     )
//     .join("");

//   console.log(label.innerText);
// });
