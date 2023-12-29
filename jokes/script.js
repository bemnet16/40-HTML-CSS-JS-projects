const getAnotherJoke = document.querySelector("button");
const joke = document.querySelector(".joke");
let jokes;
let pointer = 1;

async function getJoke(idx) {
  const res = await fetch(`http://localhost:8000/jokes/${idx}`);
  jokes = await res.json();
  joke.innerText = jokes["joke"];
  console.log(jokes["id"]);
}

getJoke(1);

getAnotherJoke.addEventListener("click", () => {
  pointer = (pointer % 10) + 1;
  getJoke(pointer);
});

// THESE are not included in the functionality of this practice

addJoke = async (txt) => {
  const body = { joke: txt };
  const response = await fetch("http://localhost:8000/jokes", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then((res) => res.json());
};

deleteJoke = async (idx) => {
  const response = await fetch(`http://localhost:8000/jokes/${idx}`, {
    method: "delete",
    headers: { "Content-Type": "applicatiion/json" },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};
