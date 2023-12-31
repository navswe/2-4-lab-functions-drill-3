// ***** Do not edit the code below *****
// Please refer to this array to solve problems 1 and 2
let numbers = [40, 68, 14, 90, 49];
// ***** Do not edit the code above *****

////////// PROBLEM 1 //////////

/* 
    Use forEach method to loop though all the elements in the 'numbers' array above, and divide each element (number) by 2. Print the result in console.
*/

// CODE HERE

// forEach() loops through an arraym and "for each" element, executes specified functionality.

// without arrow function:
numbers.forEach(function (element) {
  console.log(element / 2);
});

// with arrow function:
numbers.forEach((element) => console.log(element / 2));

// test cases: 20, 34, 7, 45, 24.5

////////// PROBLEM 2 //////////

/* 
    Use a built-in Javascript method that will loop through the 'numbers' array above, divide each number by 2, and then return a NEW ARRAY.

    HINT: .forEach() vs .map() ---- which one does return a new array?

    NOTE: make sure you save the code in a variable, then console.log the variable to see the new array.
*/

// CODE HERE

// map() will return a new array without modifying the original array.
// map() with arrow function:
const divideBy2 = numbers.map((num) => num / 2);

// test case:
// console.log(divideBy2); // [ 20, 34, 7, 45, 24.5 ]

////////// PROBLEM 3 //////////

// ***** Do not edit the code below *****
let cities = [
  "Tokyo",
  "Jakarta",
  "Miami",
  "Taipei",
  "Honolulu",
  "Vienna",
  "Istanbul",
  "Mumbai",
  "Bangkok",
  "Shanghai",
  "Hanoi",
];
// ***** Do not edit the code above *****

/* 
    Use the filter method on 'cities' array to return a new array of city/cities that end(s) with letter "i."

    Make sure you save the code in a variable. Then, console.log the variable to see the new array.
*/

// CODE HERE

// filter() for city in which the last letter (at index of element.length -1) is equal to 'i'
const citiesEndsWithi = cities.filter(
  (element) => element[element.length - 1] === "i"
);

// test case:
// console.log(citiesEndsWithi); // [ 'Miami', 'Taipei', 'Mumbai', 'Shanghai', 'Hanoi' ]

////////// PROBLEM 4 //////////

// ***** Do not edit the code below *****
let fruits = [
  {
    name: "banana",
    color: "yellow",
    price: 5,
  },
  {
    name: "orange",
    color: "orange",
    price: 4,
  },
  {
    name: "grape",
    color: "green",
    price: 5,
  },
  {
    name: "apple",
    color: "red",
    price: 3,
  },
];
// ***** Do not edit the code above *****

/* 
    Using forEach method, identify each element of the 'fruits' array above if it's an apple or orange by its color. If the color is red, print "The fruit with index [THE ELEMENT'S INDEX] is an apple." If the color is orange, print "The fruit with index [THE ELEMENT INDEX] is an orange." If the color is not red or apple, print "The fruit with index [THE ELEMENT'S INDEX] is neither apple or orange."

    Note: do a google search on how to find an element's index of an array in Javascript. There is a built-in Javascript method that would help you find an index of an element in an array.
*/

// CODE HERE

// forEach() without arrow function:

const findAppleOrOrange = fruits.forEach(function (element) {
  if (element.color === "red") {
    console.log(`The fruit with index ${fruits.indexOf(element)} is an apple.`);
  } else if (element.color === "orange") {
    console.log(
      `The fruit with index ${fruits.indexOf(element)} is an orange.`
    );
  } else {
    console.log(
      `The fruit with index ${fruits.indexOf(
        element
      )} is neither apple or orange.`
    );
  }
});

/* 
    Run the code in node to see the result. Then, copy and paste the result below.

    NOTE: the result should look like this:
    The fruit with index 0 is neither apple or orange
    The fruit with index 1 is an orange
    The fruit with index 2 is neither apple or orange
    The fruit with index 3 is an apple 
    
*/

// COPY AND PASTE THE RESULT FROM YOUR CONSOLE (NODE CONSOLE IS YOUR TERMINAL) HERE (AS A MULTI LINES COMMENT)
// My result:
// The fruit with index 0 is neither apple or orange.
// The fruit with index 1 is an orange.
// The fruit with index 2 is neither apple or orange.
// The fruit with index 3 is an apple.

////////// PROBLEM 5 //////////

// ***** Do not edit the code below *****
let foods = [
  {
    name: "chow mein",
    price: 8,
    tags: ["noodle"],
  },
  {
    name: "chicken katsu rice",
    price: 14,
    tags: ["rice", "meat"],
  },
  {
    name: "beef pho",
    price: 10,
    tags: ["noodle", "meat", "soup"],
  },
  {
    name: "pancake",
    price: 7,
    tags: ["breakfast", "carbs"],
  },
  {
    name: "chicken curry rice",
    price: 12,
    tags: ["meat", "rice"],
  },
  {
    name: "kalua pork rice",
    price: 10,
    tags: ["meat", "rice"],
  },
];
// ***** Do not edit the code above *****

/* 
    Count the total price of foods that have "rice" tag. Please type the result too.
*/

// Chaining Methods: use filter() to select only the food with "rice" tag and use reduce() to find the total price (one value).

// CODE HERE
const totalRiceTagPrice = foods
  // use filter() to find elements with tags that includes 'rice'
  .filter((itemInFoods) => itemInFoods.tags.includes("rice"))
  // use reduce() to find the total price
  .reduce((accumulator, itemInFoods) => accumulator + itemInFoods.price, 0);

// THE TOTAL
console.log(totalRiceTagPrice); // 36
