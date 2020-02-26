// IMPLICIT CONVERSION
// || means OR
// If first EXPRESSION is 'truthy', then we don't EVALUATE the right hand-side.

// 'name' will be a STRING, but it might be blank
let name = prompt("What is your name?");

// If 'name' is blank, then '!' will convert to a Boolean (NOT FALSE)
// If 'name' is not blank, then '!' will convert to a BOOLEAN (NOT TRUE)
while (!name) {
  // while(name === "")
  name = prompt("What is your name?");
}

console.log(name);
