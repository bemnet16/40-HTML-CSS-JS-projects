const inp = document.querySelector("input");
const val = document.querySelector(".val");

inp.addEventListener("input", () => {
  val.style.left = `${+inp.value * 3}px`;
  val.innerText = inp.value;
});
