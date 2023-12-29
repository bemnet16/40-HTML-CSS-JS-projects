const checkboxes = document.querySelectorAll(".checkbox");

checkboxes.forEach((checkbox, idx) => {
  checkbox.addEventListener("click", (e) => {
    checkbox.classList.toggle("checked");
    checkbox.firstElementChild.classList.toggle("checked");
    checkAll(idx);
  });
});

checkAll = (idx) => {
  let isAllChecked = true;
  checkboxes.forEach((checkbox) => {
    if (!checkbox.classList.contains("checked")) {
      isAllChecked = false;
    }
  });

  if (isAllChecked) {
    checkboxes[(idx + 1) % checkboxes.length].classList.toggle("checked");
    checkboxes[
      (idx + 1) % checkboxes.length
    ].firstElementChild.classList.toggle("checked");
    checkAll(idx);
  }
};
