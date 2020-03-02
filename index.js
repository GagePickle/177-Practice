const myArray = ["String", 23, "Another String", true, false];

/**
 * The LENGTH of a ARRAY is always 1 more than the highest index
 */

console.log(myArray[1]); // 23
console.log(myArray.length); // 5

console.log(myArray[99]); // undefined
myArray[1] = 177; // You can mutate elements of the array
myArray[1000] = "James";
console.log(myArray[1000]); // James
console.log(myArray.length); // 1001
console.log(myArray[888]); // undefined

const data = [
  { name: "Gage", hobbies: ["eating", "Video games"] },
  { name: "Dave" },
  { name: "Jeff" }
];

console.log(data[0].hobbies[1]);

// Iterate over data and log every name

for (let i = 0; i < data.length - 1; i++) {
  console.log(data[i].name);
}
