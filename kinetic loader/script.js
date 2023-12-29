const first = document.querySelector(".first");
const second = document.querySelector(".second");
let rot_angle = -45;

let interval = setInterval(() => {
  rot_angle += 180;
  rotateLoader();
}, 1000);

rotateLoader = () => {
  sec_loader();
  setTimeout(() => {
    fir_loader();
  }, 500);
};

sec_loader = () => {
  second.style.transform = `translate(50%) rotate(${rot_angle}deg)`;
};

fir_loader = () => {
  first.style.transform = `translate(-50%) rotate(${rot_angle}deg)`;
};
