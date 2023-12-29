const body = document.querySelector("body");
const mode = document.querySelector(".mode");
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const time = document.querySelector(".time");
const day = document.querySelector(".day");

const days = [
  "SUNDAY",
  "MONDAY",
  "TUSDAY",
  "WEDNSDAY",
  "THURSDAY",
  "FRIYDAY",
  "SATERDAY",
];

const months = [
  "JANU",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
];

mode.addEventListener("click", () => {
  body.classList.toggle("night");
  mode.classList.toggle("night");
  hourEl.classList.toggle("night");
  minuteEl.classList.toggle("night");
  mode.innerText = mode.innerText == "Dark Mode" ? "Light Mode" : "Dark Mode";
});

const interval = setInterval(() => {
  rotate();
}, 1000);

rotate = () => {
  const date = new Date();
  const hour = date.getHours() % 12;
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const ampm = date.getHours() >= 12 ? "AM" : "PM";
  hourEl.style.transform = `rotate(${hour * 30}deg)`;
  minuteEl.style.transform = `rotate(${min * 6}deg)`;
  secondEl.style.transform = `rotate(${sec * 6}deg)`;
  time.innerText = setTimes(hour, min, sec, ampm);
  day.innerText = setDays(date.getDay(), date.getMonth());
};

setTimes = (hour, min, sec, ampm) => {
  return `${hour <= 9 ? "0" + hour : hour} : ${min <= 9 ? "0" + min : min} : ${
    sec <= 9 ? "0" + sec : sec
  } ${ampm}`;
};

setDays = (day, month) => {
  return `${days[day]}, ${months[month]}`;
};
