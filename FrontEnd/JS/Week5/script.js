

/* ******************************** */

//  navigate the dom

/* ******************************** */

/// nevigate up

// let ul = document.querySelector("ul")
// console.log(ul)
// console.log(ul.parentNode)
// console.log(ul.parentElement)
// console.log(ul.parentNode.parentNode)
// console.log(ul.parentElement.parentElement)


// /// navigate down

// console.log(ul.childNodes)
// console.log(ul.firstChild)
// console.log(ul.lastChild)

// console.log(ul.children)
// console.log(ul.childElementCount)
// console.log(ul.firstElementChild.style.backgroundColor = "black")
// console.log(ul.lastElementChild)


// sibling

// console.log(ul.previousSibling)
// console.log(ul.nextSibling)

// console.log(ul.previousElementSibling)
// console.log(ul.nextElementSibling)



/* ******************************** */
/// Event listener 
/* ******************************** */

// const box_2 = document.querySelector(".btn-2")

// function alertBtn() {
//     alert("hello World 2")
// }
// box_2.addEventListener("click" , alertBtn)

// const heading = document.querySelector("#main-heading")

// function changeBg () {
//     heading.style.backgroundColor = "black"
// }
// box_2.addEventListener("mouseover" , changeBg) 



//  Examples.md >>>> 






let arr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9]


// function filter (ele) {
//     return Boolean(ele %3 === 0)
// }

// function filterBasedOnEven(myarr , myFilter) {
//     // let resultArr = []
//     for (let ele of myarr) {
//         if (myFilter(ele)) {
//            console.log(ele)
//         }
//     }
//     // return resultArr
// }


// function filterBasedOnmultiple3(myarr) {
//     // let resultArr = []
//     for (let ele of myarr) {
//         if (ele%3 === 0 ) {
//             console.log(ele)
//         }
//     }
//     // return resultArr
// }

// let result = filterBasedOnEven(arr)
// let result2 = filterBasedOnmultiple3(arr)
// console.log(result)
// console.log(result2)

// console.log(filter(3))

// filterBasedOnEven(arr , (ele) => {
//     return ele%2 == 0
// })


// // Example 1: Logging each element in an array

// const fruits = ["apple", "banana", "orange", "grape"];

// fruits.forEach(function (fruit) {
//   console.log(fruit);
// });
// Output:
// apple
// banana
// orange
// grape


// // Example 2: Modifying the original array

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function (number, index, array) {
//   array[index] = number * 2;
// });
// console.log(numbers); // Output: [2, 4, 6, 8, 10]


// // Example 3: Summing up values in an array
// const numbers = [1, 2, 3, 4, 5];

// let sum = 0;

// numbers.forEach(function (number) {
//   sum += number;
// });

// console.log(sum); // Output: 15


// //Example 4: Updating properties in an array of objects

// const students = [
//   { name: "Alice", grade: 80 },
//   { name: "Bob", grade: 92 },
//   { name: "Charlie", grade: 75 },
// ];

// students.forEach(function (student) {
//   student.grade += 5;
// });

// console.log(students);
// Output:
// [
//   { name: "Alice", grade: 85 },
//   { name: "Bob", grade: 97 },
//   { name: "Charlie", grade: 80 }
// ]


// // Example 5: Using arrow function syntax

// const colors = ["red", "green", "blue"];

// colors.forEach(color => console.log(color));
// // Output:
// // red
// // green
// // blue


// // map

// Example 1: Doubling each number in an array

// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map(function (number) {
//   return number * 2;
// });

// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


// // Example 2: Converting Fahrenheit temperatures to Celsius

// const fahrenheitTemps = [32, 68, 104, 122];
// const celsiusTemps = fahrenheitTemps.map(function (fahrenheit) {
//   return (fahrenheit - 32) * (5 / 9);
// });
// console.log(celsiusTemps); // Output: [0, 20, 40, 50]


// // Example 3: Extracting names from an array of objects

// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 22 },
// ];

// const names = people.map(function (person) {
//   return person.name;
// });

// console.log(names); // Output: ["Alice", "Bob", "Charlie"]

// // Example 4: Generating a list of squares

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(function (number) {
//   return number ** 2;
// });
// console.log(squares); // Output: [1, 4, 9, 16, 25]


// // Example 5: Capitalizing the first letter of each word in a sentence

// const sentence = "hello world, how are you?";

// const capitalizedWords = sentence.split(" ").map(function (word) {
//   return word.charAt(0).toUpperCase() + word.slice(1);
// });

// console.log(capitalizedWords.join(" "));
// Output: "Hello World, How Are You?"



// filter 

// // Example 1: Filtering even numbers

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter(function (number) {
//   return number % 2 === 0;
// });

// console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
// Example 2: Filtering names with a certain length

// const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

// const shortNames = names.filter(function (name) {
//   return name.length <= 4;
// });
// console.log(shortNames); // Output: ["Bob", "Eve"]


// Example 3: Filtering objects based on a property

// const students = [
//   { name: "Alice", grade: 80 },
//   { name: "Bob", grade: 92 },
//   { name: "Charlie", grade: 75 },
//   { name: "David", grade: 88 },
// ];

// const highGrades = students.filter(function (student) {
//   return student.grade >= 90;
// });

// console.log(highGrades);
// Output: [{ name: "Bob", grade: 92 }]


// // Example 4: Filtering unique values in an array

// const numbers = [1, 2, 2, 3, 4, 4, 5];

// const uniqueNumbers = numbers.filter(function (value, index, self) {
//   return self.indexOf(value) === index;
// });
// console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]



// // Example 5: Filtering based on a custom condition

// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 22 },
//   { name: "David", age: 35 },
// ];

// const adults = people.filter(function (person) {
//   return person.age >= 30;
// });

// console.log(adults);


// // // Some


// // Example 1: Checking if any element is greater than 10

// const numbers = [5, 8, 12, 3, 6];

// const hasGreaterThanTen = numbers.some(function (number) {
//   return number > 10;
// });

// console.log(hasGreaterThanTen); // Output: true


// Example 2: Checking if any string has more than 5 characters

// const words = ["apple", "banana", "grape", "kiwi"];

// const hasLongWord = words.some(function (word) {
//   return word.length > 5;
// });
// console.log(hasLongWord); // Output: true


// // Example 3: Checking if any student has passed the exam
// const students = [
//   { name: "Alice", score: 85 },
//   { name: "Bob", score: 92 },
//   { name: "Charlie", score: 78 },
// ];

// const hasPassed = students.some(function (student) {
//   return student.score >= 90;
// });

// console.log(hasPassed); // Output: true


// Example 4: Checking if any element is even
// const numbers = [3, 7, 5, 2, 9];

// const hasEvenNumber = numbers.some(function (number) {
//   return number % 2 === 0;
// });
// console.log(hasEvenNumber); // Output: true


// Every 

// // Example 1: Checking if all numbers are greater than 0

const numbers = [5, 8, 12, 3, 6];

// const allGreaterThanZero = numbers.every(function (number) {
//   return number > 0;
// });

// console.log(allGreaterThanZero); // Output: true


// Example 2: Checking if all strings have more than 3 characters

// const words = ["apple", "banana", "grape", "kiwi"];

// const allLongWords = words.every(function (word) {
//   return word.length > 3;
// });

// console.log(allLongWords); // Output: true


// // Example 3: Checking if all students have passed the exam

// const students = [
//   { name: "Alice", score: 85 },
//   { name: "Bob", score: 92 },
//   { name: "Charlie", score: 78 },
// ];

// const allPassed = students.every(function (student) {
//   return student.score >= 70;
// });

// console.log(allPassed); // Output: true


// // Example 4: Checking if all elements are even

// const numbers = [4, 8, 2, 6, 10];

// const allEvenNumbers = numbers.every(function (number) {
//   return number % 2 === 0;
// });

// console.log(allEvenNumbers); // Output: true


