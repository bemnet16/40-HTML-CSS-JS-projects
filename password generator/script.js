const form = document.querySelector("form");
const copy = document.querySelector(".copy");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const len = +e.target.length.value;
  const upper = e.target.upper.checked;
  const lower = e.target.lower.checked;
  const num = e.target.num.checked;
  const symbol = e.target.symbol.checked;
  form.password.value = handleSubmit(len, upper, lower, num, symbol);
});

copy.addEventListener("click", (e) => {
  const textarea = document.createElement("textarea");
  const password = form.password.value;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard!");
});

handleSubmit = (len, isUpper, isLower, isNum, isSymbol) => {
  let div =
    (isUpper ? 1 : 0) +
    (isLower ? 1 : 0) +
    (isNum ? 1 : 0) +
    (isSymbol ? 1 : 0);
  let num_pass = parseInt(len / div);
  let num_remin = len % div;
  let generatedPassword = "";

  if (isUpper) {
    for (let i = 0 - +`${--num_remin > -1 ? 1 : 0}`; i < num_pass; i++) {
      const randChar = Math.floor(Math.random() * 26) + 65;
      generatedPassword += String.fromCharCode(randChar);
    }
  }
  if (isLower) {
    for (let i = 0 - +`${--num_remin > -1 ? 1 : 0}`; i < num_pass; i++) {
      const randChar = Math.floor(Math.random() * 26) + 97;
      generatedPassword += String.fromCharCode(randChar);
    }
  }
  if (isNum) {
    for (let i = 0 - +`${--num_remin > -1 ? 1 : 0}`; i < num_pass; i++) {
      const randChar = Math.floor(Math.random() * 10) + 48;
      generatedPassword += String.fromCharCode(randChar);
    }
  }
  if (isSymbol) {
    for (let i = 0 - +`${--num_remin > -1 ? 1 : 0}`; i < num_pass; i++) {
      const randChar = Math.floor(Math.random() * 15) + 32;
      generatedPassword += String.fromCharCode(randChar);
    }
  }

  return shuflPassword(generatedPassword);
};

shuflPassword = (password) => {
  let pass_char = password.split("");
  for (let i = 0; i < pass_char.length; i++) {
    const rand_one = Math.floor(Math.random() * pass_char.length);
    const rand_two = Math.floor(Math.random() * pass_char.length);
    let temp = pass_char[rand_one];
    pass_char[rand_one] = pass_char[rand_two];
    pass_char[rand_two] = temp;
  }
  return pass_char.join("");
};
