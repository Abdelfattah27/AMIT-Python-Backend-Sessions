# JavaScript Fundamentals Session 3

## Introduction to JavaScript

### Strict Mode in JavaScript

Strict mode is a way to opt in to a restricted version of JavaScript that disallows some error-prone features and throws more exceptions. It helps you write cleaner, more reliable code by catching common mistakes and preventing the use of potentially problematic features.

**Example**:

```javascript
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// Using reserved words as variables will cause an error in strict mode.
// const interface = 'Audio';
// const private = 534;
```

- To enable strict mode, you add the statement 'use strict'; at the beginning of your JavaScript file or within a function.
- In strict mode, attempting to use reserved words (like interface and private in the commented-out lines) as variable names will result in an error. These reserved words are protected, preventing accidental misuse.
  
**Benefits of strict mode:**

- Variables must be declared with var, let, or const.
- Assigning a value to an undeclared variable will throw an error.
- Deleting variables, functions, or function arguments is not allowed.
- Duplicates in object literals are not permitted.
- Octal literals (e.g., 0123) are disallowed.
- Assigning values to read-only properties and non-writable global properties will throw errors.


Strict mode is a helpful tool for writing more robust and maintainable JavaScript code by catching potential issues at an early stage.


### Introduction to Functions in JavaScript

Functions are fundamental building blocks in JavaScript that allow you to encapsulate a block of code and reuse it multiple times. They can take input values, perform specific tasks, and return a result.

**Example 1: Function Definition and Invocation**

```javascript
function logger() {
  console.log('My name is Abdelfattah');
}

// Calling / Running / Invoking the function
logger(); // Output: My name is Abdelfattah
logger(); // Output: My name is Abdelfattah
logger(); // Output: My name is Abdelfattah
```

In this example, `logger` is a simple function that logs a message to the console. When we call (invoke) the function, it executes the code inside.

**Example 2: Function with Parameters and Return Value**

```javascript
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); // Output: Juice with 5 apples and 0 oranges

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); // Output: Juice with 2 apples and 4 oranges
```

In this example, fruitProcessor is a function that takes two parameters (apples and oranges). It calculates and returns a juice message based on the input values. We call the function with different arguments to get different results.

**Example 3: Using Built-in Functions**

```javascript
const num = Number('23');
```

Built-in functions are provided by JavaScript itself. In this example, `Number` is a built-in function used to convert a string to a number. The function takes an argument ('23') and returns the number `23`.

Functions are essential for organizing and reusing code in JavaScript. They can take inputs, perform operations, and return results, making them versatile tools for programming.


### Function Declarations vs. Function Expressions

In JavaScript, there are two main ways to create functions: using function declarations and function expressions. Let's see the key differences between these two methods with examples.

**Function Declaration:**

```javascript
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}

const age1 = calcAge1(1991);
```
- Function declarations are defined with the `function` keyword and a function name.
- They are "hoisted," which means you can call the function before it's defined in the code.
- The function name (`calcAge1` in this case) can be used to call the function.

**Function Expression:**

```javascript
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
}

const age2 = calcAge2(1991);
```

- Function expressions create anonymous functions (functions without a name) and assign them to variables.
- They are not hoisted; you must define the function before calling it.
- The variable name (`calcAge2` in this case) is used to call the function.

Both function declarations and function expressions allow you to define reusable pieces of code, but they have different characteristics in terms of hoisting and syntax.

In the examples, `calcAge1` is a function declared with the function keyword, and `calcAge2` is a function expressed as an anonymous function assigned to a variable. Both functions calculate a person's age based on their birth year and return the result.

*You can use either approach based on your coding preferences and the requirements of your project.*

### Arrow Functions

Arrow functions are a concise way to write functions in JavaScript, especially when you have short, one-line functions. They provide a more compact syntax and automatically capture the surrounding context (the `this` keyword). Here are examples to illustrate how Arrow functions work:

**Example 1: Single-Parameter Arrow Function**

```javascript
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Abdelfattah')); 
console.log(yearsUntilRetirement(1980, 'hamdi'));

```

- This example demonstrates an Arrow function with multiple parameters, birthYeah and firstName.
- It calculates the years until retirement based on the birth year and creates a formatted string.
- The function is invoked with different values, and the results are logged to the console.

Arrow functions are especially useful for short, straightforward functions, and they offer a more concise alternative to traditional function declarations and expressions.


### Functions Calling Other Functions

In JavaScript, it's common to create functions that call or use other functions to perform specific tasks. This approach enhances code modularity and readability. Here's an example to illustrate how functions can call other functions:

```javascript
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  // Call the 'cutFruitPieces' function to calculate the number of fruit pieces.
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  // Use the calculated values to create a juice string.
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;

  // Return the juice string.
  return juice;
}

// Call the 'fruitProcessor' function with specific values for apples and oranges.
console.log(fruitProcessor(2, 3));
```


- In this example, there are two functions: cutFruitPieces and fruitProcessor.
- The cutFruitPieces function takes a single parameter, fruit, and calculates the number of fruit pieces by multiplying it by 4.
- The fruitProcessor function takes two parameters, apples and oranges, and uses the cutFruitPieces function to determine the number of apple and orange pieces.
- It then assembles a juice string using these values and returns the result.

When calling `fruitProcessor(2, 3)`, it calculates that 2 apples and 3 oranges yield 8 apple pieces and 12 orange pieces and creates a juice string accordingly. The result is displayed in the console.


```js
// Reviewing Functions
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1991, 'Abdelfattah'));
console.log(yearsUntilRetirement(1950, 'Hamada'));
```

### Coding Challenge #5

The Dolphins and the Koalas compete in a new gymnastics discipline. Each team competes 3 times, and the average of the 3 scores is calculated for each team. A team wins ONLY if it has at least DOUBLE the average score of the other team.

1. Create an arrow function 'calcAverage' that calculates the average of 3 scores.
2. Use the 'calcAverage' function to calculate the average score for both the Dolphins and the Koalas.
3. Create a function 'checkWinner' that takes the average scores of both teams ('avgDolphins' and 'avgKoalas') as parameters, and logs the winner to the console, along with the victory points, according to the rule mentioned in the problem statement. For example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both TEST DATA 1 and TEST DATA 2.
5. Ignore draws this time.

**TEST DATA 1**: Dolphins score 44, 23, and 71. Koalas score 65, 54, and 49.

**TEST DATA 2**: Dolphins score 85, 54, and 41. Koalas score 23, 34, and 27.

**HINTS**:
- To calculate the average of 3 values, add them together and divide by 3.
- To check if number A is at least double number B, check if A >= 2 * B. Apply this rule to the team's average scores.

**GOOD LUCK!** 🏆

```javascript
const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test Data 1
const scoreDolphins1 = calcAverage(44, 23, 71);
const scoreKoalas1 = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
};

checkWinner(scoreDolphins1, scoreKoalas1);

// Test Data 2
const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34, 27);

checkWinner(scoreDolphins2, scoreKoalas2);
```


### Introduction to Arrays in JavaScript

An array is a fundamental data structure in JavaScript that allows you to store multiple values in a single variable. Arrays are ordered lists, and each element in an array is associated with an index.

**Example:**

```javascript
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]); // Access the first element (index 0)
console.log(friends[2]); // Access the third element (index 2)

console.log(friends.length); // Get the length of the array
console.log(friends[friends.length - 1]); // Access the last element

friends[2] = 'Jay'; // Modify an element in the array
console.log(friends);

const firstName = 'Abdelfattah';
const Abdelfattah = [firstName, 'Kandil', 2037 - 1991, 'teacher', friends];
console.log(Abdelfattah);
console.log(Abdelfattah.length);
```

- In the example, we create an array named friends that contains the names of friends.
- Arrays are defined using square brackets [] and can contain elements of different data types.
- You can access array elements using square brackets and the element's index (0-based).
- The length property returns the number of elements in the array.
- You can modify elements in the array using their index.
- Arrays can store values of various types, including other arrays.

### Exercise  

```js
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

```

In the exercise, we use a function calcAge to calculate ages based on birth years stored in an array.
We access array elements, perform calculations, and store the results in a new array.

### Basic Array Operations (Methods) in JavaScript

Arrays come with a set of built-in methods that allow you to perform various operations on array elements. Here's how you can use some of these methods:

**Example:**

```javascript
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements to the end of the array
const newLength = friends.push('Jay');
console.log(friends); // ['Michael', 'Steven', 'Peter', 'Jay']
console.log(newLength); // 4

// Add elements to the beginning of the array
friends.unshift('John');
console.log(friends); // ['John', 'Michael', 'Steven', 'Peter', 'Jay']

// Remove the last element
const popped = friends.pop();
console.log(popped); // 'Jay'
console.log(friends); // ['John', 'Michael', 'Steven', 'Peter']

// Remove the first element
friends.shift();
console.log(friends); // ['Michael', 'Steven', 'Peter']

// Find the index of an element
console.log(friends.indexOf('Steven')); // 1
console.log(friends.indexOf('hamdi')); // -1 (not found)

// Check if an element exists in the array
console.log(friends.includes('Steven')); // true
console.log(friends.includes('hamdi')); // false
console.log(friends.includes(23)); // false

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
```

- `push` adds an element to the end of the array and returns the new length.
- `unshift` adds an element to the beginning of the array and returns the new length.
- `pop` removes the last element from the array and returns the removed element.
- `shift` removes the first element from the array.
- `indexOf` finds the index of a specified element in the array. If not found, it returns -1.
- `includes` checks if an element exists in the array and returns a boolean.



### Coding Challenge #2

Steven is building his tip calculator based on specific rules. Calculate tips for bills according to the following criteria: tip 15% of the bill if it falls between 50 and 300, otherwise tip 20%.

**Task 1**:
1. Write a function `calcTip` that takes any bill value as input and returns the corresponding tip. Use the function type you prefer. Test the function using a bill value of 100.

**Task 2**:
2. Create an array `bills` containing the following test data: 125, 555, and 44.

**Task 3**:
3. Create an array `tips` containing the tip values for each bill, calculated using the function created in Task 1.

**Task 4** (Bonus):
4. Create an array `totals` containing the total values, i.e., the bill amount plus the tip amount.

**Test Data**: 125, 555, 44

**Hints**:

- Use arrays to store the bill values and calculated tips.
- You can call the `calcTip` function directly within the array definition to calculate the tip values.

**Good Luck!** 🍽️

```javascript
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
```


- The `calcTip` function calculates the tip based on the rules.
- An array `bills` stores the test data.
- Another array `tips` contains the tip values calculated for each bill.
- The `totals` array combines the bill amounts and tip values.



## Introduction to Objects in JavaScript

In JavaScript, objects are fundamental data structures that allow you to store and manage complex data. Unlike arrays that use numerical indexes to access their elements, objects use keys, also known as properties, to access their values. Objects are often used to represent real-world entities, and they can contain various data types and even other objects.

### Creating an Object

You can create an object by enclosing key-value pairs in curly braces {}. Each key-value pair consists of a property name and its associated value. Here's an example of creating an object representing a person named Jonas:

```javascript
const abdelfattahArray = [
  'abdelfattah',
  'hamdi',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const abdelfattah = {
  firstName: 'abdelfattah',
  lastName: 'hamdi',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};


```
In this object:

- `firstName`, `lastName`, `age`, and `job` are properties (keys).
- 'abdelfattah', 'hamdi', 2037 - 1991, and 'teacher' are the associated values.
- friends is a property with an array as its value.


## Dot vs. Bracket Notation in JavaScript Objects

In JavaScript, objects are used to store and manage data, and they allow you to access and manipulate the data using both dot notation and bracket notation. Both notations are used to access object properties, but they have some key differences.

### Dot Notation

Dot notation is a concise and commonly used way to access object properties. It is based on the following syntax:

```javascript
objectName.propertyName
```

Here's an example using an object named abdelfattah:

```javascript
const abdelfattah = {
  firstName: 'Abdelfattah',
  lastName: 'Hamdi',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};

console.log(abdelfattah.lastName); // Outputs 'Hamdi'
```
With dot notation, you directly specify the property name as a literal identifier.

### Bracket Notation

Bracket notation allows you to access object properties using a string enclosed in square brackets. It's a more versatile way to access properties and is commonly used when you need to compute property names or work with dynamic data.

Here's the same `abdelfattah` object accessed using bracket notation:

```js
console.log(abdelfattah['lastName']); // Outputs 'Hamdi'
```

**Bracket notation is particularly useful when:**

Property names are stored in variables, as shown in the following example:
```js
const nameKey = 'Name';
console.log(abdelfattah['first' + nameKey]); // Outputs 'Abdelfattah'
```

You want to prompt the user for the property to access dynamically:

```javascript
const interestedIn = prompt('What do you want to know about Abdelfattah? Choose between firstName, lastName, age, job, and friends');

if (abdelfattah[interestedIn]) {
  console.log(abdelfattah[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}
```

### Adding and Modifying Properties

Both notations can be used to add new properties or modify existing ones. For example:

```javascript
abdelfattah.location = 'Portugal'; // Using dot notation
abdelfattah['twitter'] = '@abdelfattahschmedtman'; // Using bracket notation
```

These lines add the location and twitter properties to the abdelfattah object.

### Challenge 
```js
// "abdelfattah has 3 friends, and his best friend is called Michael"
console.log(`${abdelfattah.firstName} has ${abdelfattah.friends.length} friends, and his best friend is called ${abdelfattah.friends[0]}`);

```

## Object Methods in JavaScript

In JavaScript, objects can contain functions, which are called object methods. These methods allow you to perform actions or calculations based on the object's data. Object methods are defined within the object and can access the object's properties using the `this` keyword.

Let's explore object methods using an example with an object named `abdelfattah`:

```javascript
const abdelfattah = {
  firstName: 'Abdelfattah',
  lastName: 'Hamdi',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${abdelfattah.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};
```
In this example, `abdelfattah` is an object with properties like `firstName`, `lastName`, `birthYear`, `job`, and methods like `calcAge` and `getSummary`.


**Using Object Methods**
-------------------

- **Method Definition**: Object methods are defined using the property name followed by a function. In this case, `calcAge` and `getSummary` are methods of the `abdelfattah` object.

- **`this` Keyword**: Inside object methods, you can use the `this` keyword to refer to the object itself. This allows you to access object properties from within the method. For example, `this.birthYear` accesses the `birthYear` property.

- **Calling Object Methods**: You can call object methods using dot notation. For example, `abdelfattah.calcAge()` calls the `calcAge` method and calculates `abdelfattah`'s age, which is then stored in the object's `age` property.

- **Method Interactions**: Object methods can interact with each other. The `getSummary` method, for instance, calls `this.calcAge()` to get the age and then constructs a summary string based on the object's data.

**Example Usage**
You can use object methods as follows:

```javascript
console.log(abdelfattah.calcAge()); // Calculates and returns the age
console.log(abdelfattah.age); // Accesses the age property
console.log(abdelfattah.getSummary()); // Constructs and returns a summary string
```

### Challenge
```js
// "abdelfattah is a 46-year old teacher, and he has a driver's license"
console.log(abdelfattah.getSummary());
```

## Coding Challenge #6

Mark and John are comparing their BMIs! This time, let's use objects to implement the calculations. Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meters)

**Task:**

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith).
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value in a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

**Test Data:**

- Mark's weight is 78 kg and he is 1.69 m tall.
- John's weight is 92 kg and he is 1.95 m tall.

**Good Luck!** 🏋️‍♂️

### Solution 


```js
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
} else if (john.bmi > mark.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else {
  console.log(`Both ${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi}).`);
}

```


## Iteration: The for Loop

The `for` loop is a fundamental construct in programming that allows you to repeat a block of code a specified number of times. It's often used for tasks that require repetitive operations, such as processing arrays, counting, or performing tasks with known iterations.

In this example, you can see how a simple for loop is used to simulate repetitions of a weightlifting exercise:



```javascript

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');


for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
```

In this code:

The loop starts with `let rep = 1`, meaning we initialize a variable `rep` to `1`.
The condition `rep <= 30` specifies that the loop will continue executing as long as the variable `rep` is less than or equal to 30.
The `rep++` is the increment statement that increases the value of `rep` by 1 in each iteration.

As a result, the code within the loop, which logs lifting weights repetitions, runs 30 times. You can adjust the loop to execute a different number of repetitions by modifying the loop's initialization, condition, and increment.


## Looping Arrays, Breaking, and Continuing

In programming, you often need to process the elements of an array. You can use a `for` loop to iterate through an array and perform operations on its elements. Additionally, you can use the `break` and `continue` statements to control the flow of the loop based on specific conditions.

Let's illustrate these concepts with an example using the `abdelfattah` array:

```javascript
const abdelfattah = [
  'abdelfattah',
  'hamdi',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

const types = [];

for (let i = 0; i < abdelfattah.length; i++) {
  // Reading from abdelfattah array
  console.log(abdelfattah[i], typeof abdelfattah[i]);

  // Filling types array
  types.push(typeof abdelfattah[i]);
}

console.log(types);
```
In this code:

- We use a `for` loop to iterate through the `abdelfattah` array.
- We read and log each element along with its data type (`typeof`).
- We populate the `types` array with the data types of the elements in `abdelfattah`.

**Now, let's see how to use continue and break:**

```javascript
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < abdelfattah.length; i++) {
  if (typeof abdelfattah[i] !== 'string') continue;

  console.log(abdelfattah[i], typeof abdelfattah[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < abdelfattah.length; i++) {
  if (typeof abdelfattah[i] === 'number') break;

  console.log(abdelfattah[i], typeof abdelfattah[i]);
}
```

- The `continue` statement skips an iteration when the element is not a string, allowing you to filter and process only string elements.
- The `break` statement stops the loop when it encounters a number, exiting the loop before processing the remaining elements.


## Looping Backwards and Loops in Loops

In JavaScript, you can loop through arrays in reverse order and create nested loops for more complex iterations.

### Looping Backwards

To loop through an array in reverse order, you can use a `for` loop with the loop variable starting from the last index down to the first index. This allows you to access array elements from the last to the first.

Example:

```javascript
const abdelfattah = [
  'abdelfattah',
  'hamdi',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

for (let i = abdelfattah.length - 1; i >= 0; i--) {
  console.log(i, abdelfattah[i]);
}
```
In this example, the loop iterates through the `abdelfattah` array in reverse order, starting from the last element and moving towards the first.


**Loops in Loops (Nested Loops)**

Nested loops are used when you need to perform iterations within iterations. You can create a loop inside another loop, allowing you to perform more complex operations. This is especially useful for tasks like creating patterns, working with multi-dimensional arrays, or handling grid-based data.

Example:
```js 
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}
```
In this example, there are two nested `for` loops. The outer loop iterates through different exercises, and for each exercise, the inner loop iterates through repetitions of lifting weights. This allows you to structure and log the exercise repetitions in a more organized manner.

## while Loop 

The `while` loop is another way to perform repetitive tasks in JavaScript. It continues executing a block of code as long as a specified condition is true.

Here's the code you provided with explanations:

```javascript
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
```

This `for` loop performs a specific task (logging repetitions of lifting weights) a set number of times.

Now, here's the equivalent code using a while loop:
```js
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

```

n this `while` loop, we start with an initial value for `rep` and then use the `while` keyword to specify the condition `rep <= 10`. The code block inside the loop runs as long as the condition is `true`. After each iteration, we increment rep to avoid an infinite loop.

Lastly, you have a while loop that simulates rolling a dice and continues until a 6 is rolled:
```js
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}

```


**Coding Challenge #5**

Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values.
2. Create empty arrays for the tips and the totals ('tips' and 'totals').
3. Use the 'calcTip' function we wrote before to calculate tips and total values (bill + tip) for every bill value in the 'bills' array. Use a for loop to perform the 10 calculations!

**TEST DATA:** 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

*HINT:* Call `calcTip` in the loop and use the `push` method to add values to the 'tips' and 'totals' arrays.

4. **BONUS:** Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:

    4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together.

    4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

    4.3. Call the function with the 'totals' array.

**GOOD LUCK** 🍀

```javascript
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
```
