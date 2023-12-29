const form = document.querySelector("form");
const body = document.querySelector("body");
const userCard = document.querySelector(".card");
let URL = ""; // github url

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getGithubUser(form.search.value);
  form.search.value = "";
  userCard.style.display = "flex";
});

getGithubUser = async (name) => {
  const res = await fetch(URL + name);
  const user = await res.json();
  rend(user[0]);
};

rend = (user) => {
  if (user) {
    userCard.innerHTML = `
        <img src="../expandig cards/${user.img}" alt="" />
        <div class="info">
        <div class="name">${user.name}</div>
        <div class="status">${user.info}</div>
        <div class="follow">
          <div class="followers"><span>${user.follower}</span> followers</div>
          <div class="following"><span>${user.following}</span> following</div>
          <div class="repo"><span>${+user.publicrepo}</span> repos</div>
          </div>
          <div class="recent">
         ${getRepos(user.name).map((repo) => {
           return `<div>${repo}</div>`;
         })}       
          </div>
          </div>`;
  } else {
    userCard.innerHTML = `<div 
      style='display:flex;
       justify-content: center;
       align-items: center; 
       text-align:center; 
       min-height: 150px; 
       width:100%;
       font-size: 26px'
       >No profile with this username!</div>`;
  }
};

getRepos = async (name) => {
  const res = await fetch(URL + name + "/repos");
  const userRepos = await res.json();
  return userRepos;
};
