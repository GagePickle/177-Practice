const uname = document.querySelector("#username");
const email = document.querySelector("#email");
const pword = document.querySelector("#password");

uname.addEventListener("focus", () => {
  console.log("Username goes here!");
});

email.addEventListener("blur", () => {
  console.log("You left the email input");
});

pword.addEventListener("keydown", () => {
  console.log("Entering password!");
});

document.querySelector("form").addEventListener("submit", e => {
  // Prevent the 'default behavior' 'browser submission.'
  e.preventDefault();

  document.querySelector(
    "p"
  ).textContent = `Username is ${uname.value} - Email is ${email.value} - Password is ${pword.value}`;
});
