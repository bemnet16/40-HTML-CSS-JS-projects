const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  const winHeight = (window.innerHeight / 7) * 5;
  cards.forEach((card) => {
    if (card.getBoundingClientRect().top < winHeight) {
      card.classList.add("show");
    } else {
      card.classList.remove("show");
    }
  });
});
