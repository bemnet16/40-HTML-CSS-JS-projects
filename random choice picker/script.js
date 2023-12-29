const txts = document.getElementById("txts");
const btnsContainer = document.querySelector(".btns");

// My own way

txts.focus();
txts.addEventListener("keyup", (e) => {
  renderChoice(e.target.value.trim().split(" "));
  if (e.key == "Enter") {
    txts.value = "";
    blinkBtns();
  }
});

renderChoice = (choices) => {
  btnsContainer.innerHTML = "";
  choices.forEach((choice) => {
    if (choice.length) {
      btnsContainer.innerHTML += `
      <button class="btn">${choice}</button>
      `;
    }
  });
};

blinkBtns = () => {
  const temp = setInterval(() => {
    const btns = document.querySelectorAll("button");
    const curBtn = Math.floor(Math.random() * btns.length);
    btns.forEach((btn, idx) => {
      if (idx == curBtn) {
        btn.classList.add("show");
      }
    });
    clearOthers(btns, curBtn);
  }, 100);

  setTimeout(() => {
    clearInterval(temp);
  }, 3000);
};

clearOthers = (btns, curBtn) => {
  btns.forEach((btn, idx) => {
    if (idx != curBtn) {
      btn.classList.remove("show");
    }
  });
};

// Other way

// txts.addEventListener("keyup", (e) => {
//   renderChoice(e.target.value.trim().split(" "));
//   if (e.key == "Enter") {
//     e.target.value = "";
//     const interval = setInterval(() => {
//       let btn = getRandBtn();
//       showBtn(btn);
//       setTimeout(() => {
//         unShowBtn(btn);
//       }, 100);
//     }, 100);
//     setTimeout(() => {
//       clearInterval(interval);
//       showBtn(getRandBtn());
//     }, 3000);
//   }
// });

// renderChoice = (choices) => {
//   btnsContainer.innerHTML = "";
//   choices.forEach((choice) => {
//     if (choice.length) {
//       btnsContainer.innerHTML += `
//       <button class="btn">${choice}</button>
//       `;
//     }
//   });
// };
// getRandBtn = () => {
//   const btns = document.querySelectorAll("button");
//   return btns[Math.floor(Math.random() * btns.length)];
// };

// showBtn = (btn) => {
//   btn.classList.add("show");
// };

// unShowBtn = (btn) => {
//   btn.classList.remove("show");
// };
