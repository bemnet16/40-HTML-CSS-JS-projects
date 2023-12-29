const faqs = document.querySelectorAll(".faq");
const ans = document.querySelectorAll(".ans");
const btns = document.querySelectorAll("button");
const backs = document.querySelectorAll(".back");

btns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    btn.innerText = btn.innerText == "L" ? "X" : "L";
    faqs[idx].classList.toggle("show");
    ans[idx].classList.toggle("show");
    backs[idx].classList.toggle("show");
    closeOthers(idx);
  });
});

closeOthers = (idx) => {
  btns.forEach((bt, id) => {
    if (id !== idx) {
      bt.innerText = "L";
      faqs[id].classList.remove("show");
      ans[id].classList.remove("show");
      backs[id].classList.remove("show");
    }
  });
};
