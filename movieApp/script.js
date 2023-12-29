const container = document.querySelector(".container");
const inp = document.getElementById("search");
const select = document.getElementById("select");

select.addEventListener("change", () => {
  getMovies(inp.value);
});

inp.addEventListener("input", () => {
  getMovies(inp.value);
});

async function getMovies(query = "") {
  const res = await fetch(`http://localhost:8000/movies`);
  const movies = await res.json();
  let filterdMovies;
  if (+select.value) {
    filterdMovies = movies.filter((movie) =>
      movie.name.toLowerCase().startsWith(query.toLowerCase())
    );
  } else {
    filterdMovies = movies.filter((movie) =>
      movie.name.toLowerCase().includes(query.toLowerCase())
    );
  }
  if (filterdMovies.length) {
    rendMovies(filterdMovies);
  } else {
    container.innerHTML = `
    <div class="nomovie">
      There is no movie with the specified name
    </div>
  `;
  }
}

function rendMovies(movies) {
  container.innerHTML = "";
  movies.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML += `
        <div
        class="img"
        style="background-image: url('${movie.src}')"
        ></div>
        <div class="tit_card">
        <h6 class="title">${movie.name}</h6>
        <h6 class="rate ${movie.rate >= 5 ? "over" : ""}" >${movie.rate}</h6>
        </div>
        <div class="overview">
        <h4>overview</h4>
        <p class="content">${movie.overview}</p>
        </div>
        `;
    container.append(card);
  });
}

getMovies("");
