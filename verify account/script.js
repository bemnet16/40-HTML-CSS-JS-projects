const inps = document.querySelectorAll("input");

inps.forEach((inp) => {
  inp.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      inp.value = e.key;
      if (inp.nextElementSibling) {
        inp.nextElementSibling.focus();
        inp.nextElementSibling.value = "";
      }
    }
  });
});
