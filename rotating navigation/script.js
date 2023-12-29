const nav = document.querySelector(".nav");
const con = document.querySelector(".con");
const search = document.querySelector(".seabtn");
const inp = document.querySelector(".inp");

nav.addEventListener("click", () => {
  nav.innerText = nav.innerText == "=" ? "X" : "=";
  if (nav.innerText == "=") {
    con.classList.remove("rot");
  } else {
    con.classList.add("rot");
  }
});

search.addEventListener("mousemove", () => {
  inp.classList.add("dis");
});
inp.addEventListener("mouseout", () => {
  inp.classList.remove("dis");
});
