const liked = document.querySelector(".like");
const img = document.querySelector(".img");
let count = 0;

img.addEventListener("dblclick", (e) => {
  liked.innerText = ++count;
  const o_top = e.target.offsetTop;
  const o_left = e.target.offsetLeft;
  const c_x = e.clientX;
  const c_y = e.clientY;
  const top = c_y - o_top;
  const left = c_x - o_left;
  showHeart(top, left);
});

showHeart = (top, left) => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "&#x2665;";
  heart.style.top = `${top}px`;
  heart.style.left = `${left}px`;
  img.append(heart);
  setTimeout(() => {
    heart.remove();
  }, 1000);
};
