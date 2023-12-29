const feedbackcon = document.querySelector(".feedback");
const thankscon = document.querySelector(".thanks");
const review = document.getElementById("review");
const form = document.querySelector("form");
const btn = document.querySelector("button");

form.addEventListener("change", (e) => {
  feedbackcon.querySelectorAll("label").forEach((lab) => {
    lab.classList.remove("active");
  });
  e.target.parentElement.classList.add("active");
  review.innerText = e.target.value;
});

btn.addEventListener("click", (e) => {
  if (!form.feedback.value) {
    alert("Please choose on feedback");
  } else {
    feedbackcon.classList.add("hidden");
    thankscon.classList.remove("hidden");
  }
});
