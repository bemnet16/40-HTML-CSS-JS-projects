const inp = document.querySelector("input");
const userscon = document.querySelector(".users");

inp.addEventListener("input", (e) => {
  fetchUsers(e.target.value);
});

fetchUsers = async (name) => {
  const res = await fetch("http://localhost:8000/movies");
  let data = await res.json();
  if (name) {
    data = data.filter((da) =>
      da.name.toLowerCase().includes(name.toLowerCase())
    );
  }
  renderUsers(data);
};

fetchUsers();

renderUsers = (users) => {
  userscon.innerHTML = "";
  if (users.length) {
    users.forEach((user, idx) => {
      const userEl = document.createElement("div");
      userEl.classList.add("user");
      userEl.innerHTML = `
          <img src="${user.src}" alt="" />
          <h3 class="name">${user.name}</h3>
          <p class="overview">${user.overview.slice(0, 28)}</p>
          `;

      userscon.appendChild(userEl);
    });
  } else {
    userscon.innerHTML = `
          <h2>No Users!</h2>
      `;
  }
};
