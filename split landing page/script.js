const imgcons = document.querySelectorAll(".imgcon");

imgcons.forEach((imgcon, index) => {
  imgcon.addEventListener("mouseenter", () => {
    if (!imgcon.classList.contains("expand")) {
      imgcon.classList.add("expand");
      imgcons[(index + 1) % 2].classList.remove("expand");
    }
  });
});
