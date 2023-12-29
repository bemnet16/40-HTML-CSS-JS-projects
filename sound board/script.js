const audios = document.querySelectorAll("audio");
const boxs = document.querySelectorAll(".box");
const img = document.querySelector(".img");
const imgs = [
  "Kirar.jpg",
  "Kebeo.png",
  "Masinko.png",
  "Trunba.jpg",
  "Enzira.jpg",
  "Washint.jpg",
];

boxs.forEach((box, idx) => {
  box.addEventListener("click", () => {
    stopSounds();
    audios[idx].play();
    img.style.backgroundImage = `url(${imgs[idx]})`;
  });
});

function stopSounds() {
  audios.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
}
