const comments = [
  {
    comment:
      "alksjf lksja lakjsdfalkj a lakjdf lakjf lakj alkdjf alkdjflak jalkdj alkdj laksdj lakdjfalkdjf lakjdf lakjf lakdjf lakjf lakj fldkj alkdjf akdj aldkjf",
    name: "the second one",
    job: "second job",
  },
  {
    comment:
      "alksjf lksja lakjsdfalkj a lakjdf lakjf lakj alkdjf alkdjflak jalkdj alkdj laksdj lakdjfalkdjf lakjdf lakjf lakdjf lakjf lakj fldkj alkdjf akdj aldkjf",
    name: "the third one",
    job: " job 3",
  },
  {
    comment:
      "alksjf lksja lakjsdfalkj a lakjdf lakjf lakj alkdjf alkdjflak jalkdj alkdj laksdj lakdjfalkdjf alskjdflkj alkdjf lakdjfl kajdlfj lakdjf lakdjf lakdjf lakjdf lakjdf lajksd flkjsldf jsldjkf lsdjk laldkfj lakdjf lj lakjdf lakjf lakdjf lakjf lakj fldkj alkdjf akdj aldkjf",
    name: "the fourth ",
    job: " job fourth",
  },
  {
    comment:
      "alksjf lksja lakjsdfalkj a lakjdf lakjf lakj alkdjf alkdjflak jalkdj alkdj laksdj lakdjfalkdjf lakjdf lakjf lakdjf lakjf lakj fldkj alkdjf akdj aldkjf",
    name: "the fifth one",
    job: "job 5",
  },
];

const con = document.querySelector(".container");
let curIdx = 0;

const inter = setInterval(() => {
  if (!comments[curIdx]) curIdx = 0;
  con.innerHTML = `
     <div class="timer"></div>
      <p class="comment">${comments[curIdx].comment}</p>
      <div class="user">
        <img src="../expandig cards/assets/deset.jpg" alt="" />
        <h4 class="name">${comments[curIdx].name}</h4>
        <h5 class="job">${comments[curIdx++].job}</h5>
      </div>
    `;
}, 5000);
