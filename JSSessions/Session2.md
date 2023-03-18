# Intro to JS

JavaScript is a high-level, dynamic programming language that is used primarily in web development to add interactivity and dynamic functionality to web pages. JavaScript can be used to manipulate and interact with the Document Object Model (DOM) of a webpage, as well as the Browser Object Model (BOM) which provides access to browser features such as the user's location, history, and other browser settings.

With JavaScript, you can do a wide variety of things on a web page such as:

Dynamically updating content on a page without requiring a page reload
Validating user input in forms before submitting them to a server
Animating elements on a page
Implementing interactive features like sliders, accordions, and tabs
Creating complex and interactive user interfaces
Communicating with servers and APIs to retrieve and manipulate data
Adding interactivity to web-based games and applications.
JavaScript is a versatile language that can be used both on the client-side (in the browser) and server-side (with the help of Node.js). It has become an essential tool for modern web development and is widely used in building web applications, single-page applications, mobile applications, and even desktop applications.

## Intro to JS

### Variables

Variables
In JavaScript, you can declare variables using the var, let, or const keywords.
The var keyword is used to declare a variable with function scope, while let and const are used to declare variables with block scope.
Variables in JavaScript can hold various data types such as strings, numbers, booleans, and objects.
Example:

```javascript
var greeting = "Hello World"; // Declare a variable with the value "Hello World"
let number = 42; // Declare a variable with the value 42
const PI = 3.14; // Declare a constant with the value 3.14
```

var, let, and const are all used for declaring variables in JavaScript, but they have some key differences.

var was the only keyword used for declaring variables in JavaScript before ES6 (ECMAScript 2015) introduced let and const. Variables declared with var have function scope or global scope, depending on where they are declared. Function scope means that the variable is accessible anywhere within the function it was declared in, but not outside of it. Global scope means that the variable is accessible anywhere in the code.

For example:

```javascript
Copy code
function foo() {
  var x = 1;
  console.log(x); // Output: 1
}
console.log(x); // Output: ReferenceError: x is not defined
```

Here, x is declared with var inside the function foo(), so it has function scope and is only accessible within the function. If we try to access it outside of the function, we get a ReferenceError.

let and const, on the other hand, have block scope. Block scope means that the variable is accessible only within the block it was declared in (which is typically delimited by curly braces). In addition, variables declared with const cannot be reassigned, while variables declared with let can be reassigned.

```javascript
if (true) {
  let x = 1;
  const y = 2;
  console.log(x); // Output: 1
  console.log(y); // Output: 2
}
console.log(x); // Output: ReferenceError: x is not defined
console.log(y); // Output: ReferenceError: y is not defined
```

Here, x and y are declared with let and const inside the if block, so they have block scope and are only accessible within the block. If we try to access them outside of the block, we get a ReferenceError.

Also, notice that we can't reassign the value of y since it is declared with const, while we can reassign the value of x since it is declared with let.

So, in summary, var has function scope, while let and const have block scope. Additionally, variables declared with const cannot be reassigned, while variables declared with let can be reassigned.

#### Hoisting

Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their respective scopes during compilation or interpretation. This means that variables and functions can be used before they are declared in the code.

For example:

```javascript
console.log(x); // Output: undefined
var x = 1;
```

Here, x is declared with var after it is used, but the code still runs without throwing an error. This is because during hoisting, the declaration of x is moved to the top of the scope (in this case, the global scope), but the assignment (x = 1) remains in place.

However, variables declared with let and const are not hoisted in the same way as variables declared with var. Instead, they are hoisted to the top of the block they are declared in, but their values are not initialized until they are declared.

For example:

```javascript
console.log(x); // Output: ReferenceError: x is not defined
let x = 1;
```

Here, trying to access x before it is declared results in a ReferenceError.

So, while both let and var are hoisted, let variables are not initialized to undefined like var variables are. Instead, they are left in an uninitialized state until they are explicitly assigned a value.

It's generally considered good practice to always declare variables before using them, regardless of whether they are being hoisted or not, to avoid confusion and unintended behavior in your code.

#### Cons about using Var

1. Variable scope: As I mentioned earlier, variables declared with var have function scope or global scope, which can make it difficult to predict where a variable can be accessed and modified in your code. This can lead to bugs and unintended side effects.
2. Hoisting: var variables are hoisted to the top of the function or global scope, which can make it difficult to read and understand your code, especially if you have a lot of variables declared at the top of a function or in the global scope.
3. Redeclaration: Variables declared with var can be redeclared within the same scope without throwing an error, which can lead to unexpected behavior and bugs in your code.
4. Global namespace pollution: Since var variables are accessible in the global scope, using var to declare variables can lead to naming conflicts with other scripts or libraries that use the same variable names. This can cause bugs and unintended behavior.

## Data Types

In JavaScript, there are six primitive data types: string, number, boolean, null, undefined, and symbol. There is also one non-primitive data type: object. Here's a brief overview of how JavaScript deals with each of these data types:

String: Strings in JavaScript are used to represent text. They are created by enclosing a sequence of characters in single or double quotes. Strings can be concatenated using the + operator or template literals.

Number: Numbers in JavaScript are used to represent numeric values. They can be integers or floating-point values, and can be created using literal notation or by performing mathematical operations.

Boolean: Booleans in JavaScript are used to represent logical values. They can be either true or false, and are often used in conditional statements and boolean expressions.

Null: null in JavaScript represents a deliberate non-value or absence of a value. It is often used to initialize variables or indicate that a value does not exist.

Undefined: undefined in JavaScript represents a variable that has been declared but not yet assigned a value, or a property that does not exist.

Symbol: Symbols in JavaScript are used to create unique identifiers that can be used as property keys in objects. They are often used to avoid naming conflicts between properties.

Object: Objects in JavaScript are used to represent complex data structures. They can contain properties and methods, and can be created using object literal notation or by instantiating a constructor function.

JavaScript also provides type coercion, which is the automatic conversion of a value from one data type to another. For example, the + operator can be used to concatenate strings, but it can also be used to add numbers. If one of the operands is a string, JavaScript will convert the other operand to a string before concatenating them. This can sometimes lead to unexpected results and bugs in your code, so it's important to be aware of how type coercion works and use it carefully.

Examples :

1. String Example :

   ```javascript
   let firstName = "John";
   let lastName = "Doe";

   // Concatenating two strings
   let fullName = firstName + " " + lastName;

   console.log(fullName); // Output: John Doe
   ```

2. Number Example:

   ```javascript
   let num1 = 10;
   let num2 = 5.5;

   // Performing mathematical operations
   let result = num1 + num2;

   console.log(result); // Output: 15.5
   ```

3. Boolean Example:

   ```javascript
   let isRaining = true;

   if (isRaining) {
     console.log("Bring an umbrella!");
   } else {
     console.log("Leave the umbrella at home!");
   }
   ```

4. Null Example:

   ```javascript
   let myValue = null;

   console.log(myValue); // Output: null
   ```

5. Undefined Example:

   ```javascript
   let myVariable;

   console.log(myVariable); // Output: undefined
   ```

6. Symbol Example:

   ```javascript
   // Creating a new symbol
   let mySymbol = Symbol("mySymbol");

   // Using the symbol as a property key in an object
   let myObject = {
     [mySymbol]: "Hello world!",
   };

   console.log(myObject[mySymbol]); // Output: Hello world!
   ```

7. Object Example:

```javascript
// Creating an object using object literal notation
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["reading", "writing", "traveling"],
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
  },
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName()); // Output: John Doe
```

## Operators IN JS

operators are used to perform operations on values or variables. There are several types of operators, including:

1. Arithmetic operators: Used to perform basic mathematical operations like addition, subtraction, multiplication, division, and modulo.

```javascript
let x = 10;
let y = 3;

console.log(x + y); // Output: 13
console.log(x - y); // Output: 7
console.log(x * y); // Output: 30
console.log(x / y); // Output: 3.33333
console.log(x % y); // Output: 1
```

2. Assignment operators: Used to assign values to variables, and also perform arithmetic operations in the same statement.

```javascript
let x = 10;

x += 5; // Equivalent to x = x + 5
console.log(x); // Output: 15

x -= 3; // Equivalent to x = x - 3
console.log(x); // Output: 12

x *= 2; // Equivalent to x = x * 2
console.log(x); // Output: 24

x /= 4; // Equivalent to x = x / 4
console.log(x); // Output: 6

x %= 2; // Equivalent to x = x % 2
console.log(x); // Output: 0
```

3. Comparison operators: Used to compare two values and return a Boolean value indicating whether the comparison is true or false.

```javascript
let x = 10;
let y = 5;

console.log(x > y); // Output: true
console.log(x < y); // Output: false
console.log(x >= y); // Output: true
console.log(x <= y); // Output: false
console.log(x == y); // Output: false
console.log(x != y); // Output: true
```

4. Logical operators: Used to combine two or more Boolean expressions and return a Boolean value.

```javascript
let x = 10;
let y = 5;

console.log(x > 5 && y < 10); // Output: true (both expressions are true)
console.log(x > 5 || y > 10); // Output: true (at least one expression is true)
console.log(!(x > y)); // Output: false (the expression inside the parentheses is true)
```

5. Unary operators: Used to perform operations on a single operand.

```javascript
let x = 10;

console.log(-x); // Output: -10 (negation)
console.log(+x); // Output: 10 (unary plus)
console.log(++x); // Output: 11 (increment)
console.log(--x); // Output: 10 (decrement)
console.log(typeof x); // Output: "number" (typeof operator)
```

6. Conditional (ternary) operator: Used to assign a value to a variable based on a condition.

```javascript
let age = 18;
let message = age >= 18 ? "You are an adult" : "You are not an adult";
console.log(message); // Output: "You are an adult"
```

### == and ===

In JavaScript, there are two types of equality operators: == (loose or abstract equality) and === (strict equality).

The == operator compares values for equality after doing type coercion if necessary, which means that it will attempt to convert the operands to the same type before making the comparison. For example:

```javascript
console.log(5 == "5"); // Output: true (the string "5" is converted to the number 5)
console.log(true == 1); // Output: true (the boolean value true is converted to the number 1)
console.log(null == undefined); // Output: true (both null and undefined are considered "falsy" values)
```

On the other hand, the === operator compares values for equality without doing type coercion, which means that it will only return true if the operands are of the same type and have the same value. For example:

```javascript
console.log(5 === "5"); // Output: false (the string "5" is not converted to a number)
console.log(true === 1); // Output: false (boolean and number are different types)
console.log(null === undefined); // Output: false (null and undefined are different types)
```

Therefore, the main difference between == and === is that == allows for type coercion, while === does not. In general, it is recommended to use the strict equality operator === to avoid unexpected type coercion and ensure that your comparisons are accurate.

### Short Circuit IN JS

In JavaScript, short-circuit evaluation is a feature of logical operators (&& and ||) that allows for more efficient and concise code. Short-circuit evaluation refers to the behavior where the second operand of a logical operator is evaluated only if necessary.

Here are the rules for short-circuit evaluation in JavaScript:

For the && operator, if the first operand is false, the second operand is not evaluated because the overall expression will always be false.
For the || operator, if the first operand is true, the second operand is not evaluated because the overall expression will always be true.
Here are some examples that demonstrate short-circuit evaluation:

```javascript
// Using && operator
const a = false;
const b = true;

console.log(a && b); // Output: false (the second operand is not evaluated)

// Using || operator
const x = true;
const y = "hello";

console.log(x || y); // Output: true (the second operand is not evaluated)
```

One common use case for short-circuit evaluation is to provide a default value for a variable.
For example:

```javascript
const myVar = someValue || defaultValue;
```

In the above code, if someValue is truthy, then myVar will be set to its value. Otherwise, defaultValue will be used.

Another use case for short-circuit evaluation is to avoid errors when working with optional properties or functions. For example:

```javascript
const myObj = { prop1: "hello" };

console.log(myObj.prop1); // Output: "hello"
console.log(myObj.prop2 || "default value"); // Output: "default value" (prop2 is undefined)
```

In the above code, the || operator is used to provide a default value for myObj.prop2 if it is undefined or falsy.

### Truthy values and falsy values

In JavaScript, a value is considered "truthy" if it is considered true when encountered in a boolean context. Similarly, a value is considered "falsy" if it is considered false when encountered in a boolean context. Here are the values that are considered falsy in JavaScript:

- false
- null
- undefined
- 0
- -0
- NaN
- '' (an empty string)

All other values are considered truthy, including:

- Any non-empty string ('hello', '0', 'false', - etc.)
- Any number other than 0 (1, -1, 10.5, etc.)
- Any object or array (even if empty)
- Any function

Here are some examples that demonstrate truthy and falsy values in JavaScript:

```javascript
if ("hello") {
  console.log("This will be printed."); // Output: This will be printed.
}

if (null || undefined) {
  console.log("This will not be printed.");
}

if (0) {
  console.log("This will not be printed.");
}

if ({}) {
  console.log("This will be printed."); // Output: This will be printed.
}
```

Truthy and falsy values are important to keep in mind when working with conditional statements, such as if statements and ternary operators. For example:

```javascript
const myVar = null;

if (myVar) {
  console.log("This will not be printed.");
} else {
  console.log("This will be printed."); // Output: This will be printed.
}

const myOtherVar = myVar || "default value";

console.log(myOtherVar); // Output: "default value"
```

In the above code, myVar is falsy, so the else block is executed. The || operator is then used to provide a default value for myOtherVar because myVar is falsy.

## Control Structure

In JavaScript, control structures are used to control the flow of execution in a program. The three main control structures are if statements, for loops, and switch statements.

### If Statements

An if statement is used to execute code conditionally based on a boolean expression. Here's the basic syntax of an if statement in JavaScript:

```javascript
if (condition) {
  // code to be executed if condition is true
} else {
  // code to be executed if condition is false
}
```

Here's an example:

```javascript
const num = 10;

if (num > 0) {
  console.log("The number is positive.");
} else if (num < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}
```

In the above code, the if statement checks whether num is greater than 0. If it is, the message "The number is positive." is printed to the console. If it's not, the else if statement checks whether num is less than 0. If it is, the message "The number is negative." is printed to the console. If neither of these conditions is true, the else block is executed and the message "The number is zero." is printed to the console.

### For Loops

A for loop is used to execute code repeatedly for a specified number of times. Here's the basic syntax of a for loop in JavaScript:

```javascript
for (let i = 0; i < count; i++) {
  // code to be executed
}
```

Here's an example:

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

In the above code, the for loop iterates 5 times and logs the value of i to the console on each iteration.

### Switch Statements

A switch statement is used to execute different blocks of code depending on the value of a variable. Here's the basic syntax of a switch statement in JavaScript:

```javascript
switch (expression) {
  case value1:
    // code to be executed if expression is equal to value1
    break;
  case value2:
    // code to be executed if expression is equal to value2
    break;
  // ...
  default:
    // code to be executed if expression doesn't match any of the cases
    break;
}
```

Here's an example:

```javascript
const dayOfWeek = "Monday";

switch (dayOfWeek) {
  case "Monday":
    console.log("It's Monday.");
    break;
  case "Tuesday":
    console.log("It's Tuesday.");
    break;
  case "Wednesday":
  case "Thursday":
    console.log("It's midweek.");
    break;
  case "Friday":
    console.log("It's Friday.");
    break;
  default:
    console.log("It's the weekend.");
    break;
}
```

In the above code, the switch statement checks the value of dayOfWeek and executes the corresponding block of code. If dayOfWeek is "Monday", the message "It's Monday." is printed to the console. If it's "Tuesday", the message "It's Tuesday." is printed to the console, and so on. If dayOfWeek doesn't match any of the cases, the default block is executed and the message "It's the weekend." is printed to the console.

## Functions and Arrays

### Functions

There are three ways to declare functions in JavaScript: function declaration, function expression, and arrow function.

Function Declaration
A function declaration is a statement that declares a function with a specified name, parameters, and function body. Here's an example:

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}
```

You can call this function by using its name and passing the necessary arguments:

```javascript
greet("John"); // Output: "Hello, John!"
```

One important characteristic of function declarations is that they are hoisted to the top of their scope. This means that you can call a function before it's declared, and it will still work:

```javascript
greet("John"); // Output: "Hello, John!"

function greet(name) {
  console.log(`Hello, ${name}!`);
}
```

Function Expression
A function expression is a way to define a function as a value assigned to a variable. Here's an example:

```javascript
const greet = function (name) {
  console.log(`Hello, ${name}!`);
};
```

You can call this function by using the variable name and passing the necessary arguments:

```javascript
greet("John"); // Output: "Hello, John!"
```

One important characteristic of function expressions is that they are not hoisted to the top of their scope. This means that you must define a function expression before you can call it:

```javascript
greet("John"); // Output: Uncaught ReferenceError: greet is not defined

const greet = function (name) {
  console.log(`Hello, ${name}!`);
};
```

Arrow Function
An arrow function is a shorthand syntax for defining a function expression. Here's an example:

```javascript
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};
```

You can call this function by using the variable name and passing the necessary arguments:

```javascript
greet("John"); // Output: "Hello, John!"
```

Arrow functions have a few differences from regular function expressions. One difference is that they have a shorter syntax. Another difference is that they don't have their own this value, which means that they use the this value of the surrounding context:

```javascript
const person = {
  name: "John",
  greet: function () {
    setTimeout(() => {
      console.log(`Hello, ${this.name}!`);
    }, 1000);
  },
};

person.greet(); // Output: "Hello, John!"
```

In the above code, the greet method of the person object uses an arrow function as the callback function for setTimeout. Because arrow functions don't have their own this value, the this value of the surrounding context (person) is used instead. This means that the arrow function can access the name property of the person object.

#### Higher Order Functions

In JavaScript, functions can also be passed as arguments to other functions, or returned as values from functions. Functions that take other functions as arguments, or return functions as values, are called higher order functions. Here's an example of a higher order function:

```javascript
function calculate(num1, num2, operation) {
  return operation(num1, num2);
}

function addNumbers(num1, num2) {
  return num1 + num2;
}

const result = calculate(2, 3, addNumbers);
console.log(result); // Output: 5
```

In the above code, the calculate function takes two numbers and a function as arguments. It then calls the function with the two numbers as arguments, and returns the result. The addNumbers function is passed as the third argument to calculate, and so it's called with the values 2 and 3. The sum of 2 and 3 is returned, which is 5. This value is then assigned to the result variable and printed to the console.

### Arrays

In JavaScript, an array is a collection of values, which can be of any data type. You can add, remove, and modify values in an array using various array functions and methods.

#### Creating Arrays

You can create an array in JavaScript by enclosing a comma-separated list of values inside square brackets []. Here's an example:

```javascript
const fruits = ["apple", "banana", "orange"];
```

Accessing Array Elements
You can access the elements of an array using the square bracket notation [index], where index is the zero-based index of the element you want to access. Here's an example:

```javascript
console.log(fruits[0]); // Output: "apple"
```

#### Arrays Functions

```javascript
const fruits = ["apple", "banana", "orange", "kiwi"];

// length - returns the length of an array
console.log(fruits.length); // Output: 4

// push - adds one or more elements to the end of an array and returns the new length
fruits.push("pear");
console.log(fruits); // Output: ["apple", "banana", "orange", "kiwi", "pear"]

// pop - removes the last element from an array and returns it
const lastFruit = fruits.pop();
console.log(lastFruit); // Output: "pear"
console.log(fruits); // Output: ["apple", "banana", "orange", "kiwi"]

// shift - removes the first element from an array and returns it
const firstFruit = fruits.shift();
console.log(firstFruit); // Output: "apple"
console.log(fruits); // Output: ["banana", "orange", "kiwi"]

// unshift - adds one or more elements to the beginning of an array and returns the new length
fruits.unshift("mango", "grape");
console.log(fruits); // Output: ["mango", "grape", "banana", "orange", "kiwi"]

// slice - returns a new array with a portion of the original array
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ["grape", "banana"]
console.log(fruits); // Output: ["mango", "grape", "banana", "orange", "kiwi"]

// splice - adds or removes elements from an array
fruits.splice(2, 0, "lemon", "pineapple");
console.log(fruits); // Output: ["mango", "grape", "lemon", "pineapple", "banana", "orange", "kiwi"]

// reverse - reverses the order of elements in an array
fruits.reverse();
console.log(fruits); // Output: ["kiwi", "orange", "banana", "pineapple", "lemon", "grape", "mango"]

// sort - sorts the elements of an array in ascending or descending order
fruits.sort();
console.log(fruits); // Output: ["banana", "grape", "kiwi", "lemon", "mango", "orange", "pineapple"]
```

## Strings IN JS

```javascript
// Creating Strings
const str1 = "hello";
const str2 = "world";
const str3 = `hello world`;

// String Length
console.log(str1.length); // Output: 5

// Accessing Characters
console.log(str1[0]); // Output: 'h'
console.log(str1[3]); // Output: 'l'

// toUpperCase() Method
const str4 = "hello";
const upperStr = str4.toUpperCase();
console.log(upperStr); // Output: 'HELLO'

// toLowerCase() Method
const str5 = "HELLO";
const lowerStr = str5.toLowerCase();
console.log(lowerStr); // Output: 'hello'

// trim() Method
const str6 = "  hello world  ";
const trimmedStr = str6.trim();
console.log(trimmedStr); // Output: 'hello world'

// slice() Method
const str7 = "hello world";
const slicedStr = str7.slice(0, 5);
console.log(slicedStr); // Output: 'hello'

// split() Method
const str8 = "hello,world";
const arr = str8.split(",");
console.log(arr); // Output: ['hello', 'world']

// replace() Method
const str9 = "hello world";
const replacedStr = str9.replace("world", "javascript");
console.log(replacedStr); // Output: 'hello javascript'
// indexOf() Method
const str10 = "hello world";
const index = str10.indexOf("world");
console.log(index); // Output: 6

// lastIndexOf() Method
const str11 = "hello world";
const lastIndex = str11.lastIndexOf("l");
console.log(lastIndex); // Output: 9

// charAt() Method
const str12 = "hello";
const char = str12.charAt(1);
console.log(char); // Output: 'e'

// includes() Method
const str13 = "hello world";
const isIncluded = str13.includes("world");
console.log(isIncluded); // Output: true

// startsWith() Method
const str14 = "hello world";
const startsWith = str14.startsWith("hello");
console.log(startsWith); // Output: true

// endsWith() Method
const str15 = "hello world";
const endsWith = str15.endsWith("world");
console.log(endsWith); // Output: true

// repeat() Method
const str16 = "hello";
const repeatedStr = str16.repeat(3);
console.log(repeatedStr); // Output: 'hellohellohello'

// concat() Method
const str17 = "hello";
const str18 = "world";
const concatenatedStr = str17.concat(" ", str18);
console.log(concatenatedStr); // Output: 'hello world'
```

## DOM

The Document Object Model (DOM) is a programming interface for web documents that allows JavaScript to manipulate the HTML and CSS elements on a web page. The DOM model represents the page as a tree of objects, where each object represents a node in the document. Using the DOM, you can add, delete, and modify HTML elements and attributes, as well as manipulate CSS styles.
Here is an example of using the DOM to manipulate the text of an HTML element:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>DOM Example</title>
  </head>
  <body>
    <p id="demo">Hello, world!</p>

    <script>
      // Get the element with ID "demo"
      const element = document.getElementById("demo");

      // Change the text of the element
      element.innerHTML = "Hello, JavaScript!";
    </script>
  </body>
</html>
```

In this example, we use the getElementById method to retrieve the HTML element with the ID "demo" and store it in a variable called element. We then use the innerHTML property to change the text of the element to "Hello, JavaScript!".

Here are some other common methods and properties of the DOM:

- getElementById(id): Returns the element with the specified ID.
- getElementsByClassName(class): Returns an array-like object of all elements with the specified class.
- getElementsByTagName(tag): Returns an array-like object of all elements with the specified tag name.
- createElement(tag): Creates a new element with the specified tag name.
- appendChild(node): Adds a new child node to the end of the specified parent node.
- removeChild(node): Removes a child node from the specified parent node.
- setAttribute(attr, value): Sets the value of the specified attribute for an element.
- getAttribute(attr): Returns the value of the specified attribute for an element.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>DOM Example</title>
    <style>
      .red {
        color: red;
      }
    </style>
  </head>
  <body>
    <button onclick="addParagraph()">Add Paragraph</button>

    <script>
      // Function to add a new paragraph element
      function addParagraph() {
        // Create a new paragraph element
        const p = document.createElement("p");

        // Set the text of the paragraph element
        p.innerHTML = "This is a new paragraph.";

        // Add the "red" class to the paragraph element
        p.setAttribute("class", "red");

        // Get the body element
        const body = document.getElementsByTagName("body")[0];

        // Add the new paragraph element to the body element
        body.appendChild(p);
      }
    </script>
  </body>
</html>
```

Sure, here are some of the most commonly used DOM functions in JavaScript:

getElementById(): This method returns the element that has the specified ID.
Example:

```javascript
let myElement = document.getElementById("myId");
```

getElementsByClassName(): This method returns a collection of all elements in the document with the specified class name.
Example:

```javascript
let myElements = document.getElementsByClassName("myClass");
```

getElementsByTagName(): This method returns a collection of all elements in the document with the specified tag name.
Example:

```javascript
let myElements = document.getElementsByTagName("div");
```

querySelector(): This method returns the first element that matches a specified CSS selector.
Example:

```javascript
let myElement = document.querySelector("#myId .myClass");
```

querySelectorAll(): This method returns a list of all elements that match a specified CSS selector.
Example:

```javascript
let myElements = document.querySelectorAll("div.myClass");
```

createElement(): This method creates an HTML element with the specified tag name.
Example:

```javascript
let newElement = document.createElement("div");
```

appendChild(): This method adds a new child element to the end of a specified parent element.
Example:

```javascript
let parentElement = document.getElementById("myParent");
parentElement.appendChild(newElement);
```

removeChild(): This method removes a child element from a specified parent element.
Example:

```javascript
let parentElement = document.getElementById("myParent");
let childElement = document.getElementById("myChild");
```

parentElement.removeChild(childElement);
setAttribute(): This method sets the value of a specified attribute on an element.
Example:

```javascript
let myElement = document.getElementById("myId");
myElement.setAttribute("class", "myClass");
```

getAttribute(): This method returns the value of a specified attribute on an element.
Example:

```javascript
let myElement = document.getElementById("myId");
let myAttribute = myElement.getAttribute("class");
```
