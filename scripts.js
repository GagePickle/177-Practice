const user = {
  isHungry: false
};

// The result of 'confirm' (true or false) is assigned as the VALUE
// associated with the KEY inside of 'user'
// We will MUTATE the OBJECT based on 'confirm'
user.isHappy = confirm("Are you happy?");
user.isHungry = confirm("Are you hungry?");

console.log(user);
