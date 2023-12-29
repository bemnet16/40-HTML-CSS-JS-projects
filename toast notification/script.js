const btn = document.querySelector("button");
const notifications = document.querySelector(".notification");
const classes = ["info", "error", "success"];
const messages = ["one", "two", "three", "four"];

btn.addEventListener("click", () => showNoti());

showNoti = () => {
  const notif = document.createElement("div");
  const randClass = Math.floor(Math.random() * 3);
  notif.classList.add(`${classes[randClass]}`);
  const randMes = Math.floor(Math.random() * 4);
  notif.innerHTML = `message ${messages[randMes]}`;
  notifications.append(notif);
  setTimeout(() => {
    notif.remove();
  }, 2000);
};
