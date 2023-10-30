# JavaScript Fundamentals Session 1

## Introduction to JavaScript

In this session, we'll dive into the world of JavaScript, an essential programming language used for web development. JavaScript plays a pivotal role in adding interactivity, dynamism, and functionality to websites. Let's begin by exploring the fundamental concepts of this versatile language.

### The Genesis of JavaScript

JavaScript, often abbreviated as JS, was created by Brendan Eich while he was working at Netscape Communications Corporation. It was introduced in 1995 as part of Netscape Navigator 2.0, making it one of the earliest web technologies.

### Why JavaScript?

JavaScript's primary purpose is to enhance the user experience on the web. It allows developers to create interactive elements, validate user inputs, handle data, and manipulate web pages in real-time, among many other things. This makes it an indispensable tool in the web development toolkit.

### The Role of JavaScript in Modern Web Development

Fast forward to today, JavaScript has evolved into a full-fledged, high-level, and versatile language used not only in web browsers but also on servers (Node.js) and for various application development. It powers countless websites, from simple blogs to complex web applications and games.

## Hello World!

Now, let's get hands-on with JavaScript. We'll begin with the iconic "Hello World" program. This is the simplest way to understand how JavaScript interacts with a web page.

#### Using `console.log()`
In JavaScript, you can use the `console.log()` function to display text or data in the developer console of your web browser. This is a handy tool for debugging and testing your code.

```javascript
console.log("Hello, World!");
```

### A Brief Introduction to JavaScript

Before we proceed, it's essential to gain a broader understanding of JavaScript's characteristics:

- Interpreted Language: JavaScript is an interpreted language, meaning that the code is executed line by line by the browser. There's no need for compilation like in some other programming languages.

- Client-Side Scripting: JavaScript primarily runs on the client-side (in the user's browser), making it an integral part of front-end web development.

- High-Level Language: It's a high-level language, providing developers with abstractions that make coding easier and more human-readable.

- Weakly Typed: JavaScript is a weakly typed language, which means that variable types can change dynamically.


### Linking a JavaScript File

In practical web development, JavaScript code is typically written in separate files and then linked to an HTML document. This separation keeps your code organized and maintainable.

Including External JavaScript Files
To link an external JavaScript file to your HTML document, you can use the <script> tag. For example:

```html
<script src="script.js"></script>
```

This includes the script.js file in your HTML document. Any JavaScript code in script.js will be executed when the HTML page loads.

### Values and Variables

JavaScript deals with data in the form of values, which can be stored in variables. Let's explore these fundamental concepts:
```js
console.log("Abdelfattah");
console.log(23);

let firstName = "Hamdi";

console.log(firstName);
console.log(firstName);
console.log(firstName);
```

### Variable Naming Conventions in JavaScript

In JavaScript, variable names follow specific conventions to maintain consistency and make your code more readable. Here are some key points to consider:

1. **Case Sensitivity**: JavaScript is case-sensitive, so `myVariable` and `myvariable` are treated as different variables.

2. **Use Descriptive Names**: Variable names should be descriptive and reflect the purpose or content of the variable. This makes your code more self-explanatory. 

    - `let abdelfattah_hamdi = "JM";`:
      - This variable name, `abdelfattah_hamdi`, is descriptive and provides information about the name it represents.

3. **Camel Case**: A common convention in JavaScript is to use camel case for variable names. Camel case means starting with a lowercase letter and capitalizing the first letter of each subsequent word.

    - `let myFirstJob = "Coder";`:
      - In this example, `myFirstJob` uses camel case, making it easy to read and understand.

4. **Avoid Special Characters**: While you can use special characters like `$` and `_` in variable names, it's recommended to use them sparingly and only when they add clarity to the variable's purpose.

    - `let $function = 27;`:
      - Using `$` in variable names can be acceptable, but it should still have a meaningful purpose.

5. **Avoid Reserved Keywords**: You cannot use reserved keywords as variable names. Keywords like `function`, `let`, `const`, or `var` are off-limits.

    - `let function = 27;`:
      - This code would result in an error because `function` is a reserved keyword.

6. **Constants**: Constants are often named using uppercase letters with underscores to differentiate them from regular variables.

    - `let PI = 3.1415;`:
      - The variable `PI` is in all caps, indicating that it's a constant.

7. **Good Variable Names Enhance Readability**:
   - `let myCurrentJob = "Teacher";`:
      - Using meaningful names, such as `myCurrentJob`, helps other developers understand the variable's purpose without needing additional comments.

8. **Use Variables to Store Values**: Variables should be used to store values that you plan to reuse or modify. 

    - `let job1 = "programmer";`:
      - Using variables like `job1` for storing values is a common practice. 

9. **Avoid Ambiguous Names**:
    - Variable names should be clear and not ambiguous. Names like `temp` or `data` can be unclear and should be used sparingly.

Now, let's consider the example you provided:

```javascript
let abdelfattah_hamdi = "JM";
let $function = 27;

let person = "Abdelfattah";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
```

### Data Types in JavaScript

JavaScript is a dynamically typed language, which means that variables can hold different types of data. Here are some of the common data types in JavaScript:

1. **Boolean**: Represents a binary value, either `true` or `false`. 

    ```javascript
    let javascriptIsFun = true;
    console.log(javascriptIsFun); // Outputs: true
    console.log(typeof javascriptIsFun); // Outputs: boolean
    ```

2. **String**: Represents text data enclosed in single or double quotes. 

    ```javascript
    javascriptIsFun = 'YES!';
    console.log(typeof javascriptIsFun); // Outputs: string
    ```

3. **Undefined**: A variable that has been declared but not assigned a value is of type `undefined`.

    ```javascript
    let year;
    console.log(year); // Outputs: undefined
    console.log(typeof year); // Outputs: undefined
    ```

4. **Number**: Represents numeric values, both integers and floating-point numbers.

    ```javascript
    year = 1991;
    console.log(typeof year); // Outputs: number
    ```

5. **Null**: Represents the intentional absence of any object value.

    ```javascript
    console.log(typeof null); // Outputs: object
    ```

It's important to note that JavaScript's `typeof` operator is used to determine the data type of a variable or a value. However, there is a quirk in JavaScript – `typeof null` returns 'object,' which is a historical artifact. It is not a true representation of the null data type. 


### Declaring Variables in JavaScript

In JavaScript, you can declare variables using different keywords. Here's how to declare variables using `let`, `const`, and `var`:

1. **Using `let`**:
   - You can declare a variable using the `let` keyword.
   - Variables declared with `let` are mutable, which means you can change their values after declaration.

    ```javascript
    let age = 30;
    age = 31; // You can change the value of 'age' later.
    ```

2. **Using `const`**:
   - Variables declared with `const` are used for values that should not change after assignment.
   - You must assign a value when declaring a `const` variable.

    ```javascript
    const birthYear = 1991;
    // birthYear = 1990; // You can't reassign 'birthYear.'
    // const job; // You can't declare a 'const' variable without assigning a value.
    ```

3. **Using `var`**:
   - In older versions of JavaScript, you could declare variables using `var`. However, it's generally recommended to use `let` or `const` for better scoping.

    ```javascript
    var job = 'programmer';
    job = 'teacher'; // You can change the value of 'job' later.
    ```

4. **Implicit Global Variables**:
   - Be cautious when not using any keyword like `let`, `const`, or `var` when declaring a variable. This will create an implicit global variable.

    ```javascript
    lastName = 'Kandil'; // This implicitly creates a global variable 'lastName.'
    console.log(lastName); // Outputs: Kandil
    ```

It's essential to choose the appropriate keyword (`let`, `const`, or `var`) based on whether you need a mutable or immutable variable and the scope in which you want to use the variable. The choice between them is often dependent on the specific requirements of your code.

### Basic Operators in JavaScript

#### Math Operators

In JavaScript, you can use various operators to perform mathematical operations. Here are some common math operators:

- **Addition `+`**: Adds two values together.

```javascript
  const now = 2037;
  const ageAbdelfattah = now - 1991;
  const ageSarah = now - 2018;
  console.log(ageAbdelfattah + ageSarah); // Outputs the sum of ages

```


- `Subtraction` -: Subtracts one value from another.
- `Multiplication` *: Multiplies two values.

- `Division` /: Divides one value by another.
- `Exponentiation` **: Raises one value to the power of another.
    ```js
    console.log(ageAbdelfattah * 2, ageAbdelfattah / 10, 2 ** 3);
    // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

    ```
- `Concatenation` + (String Operator): You can also use the + operator for string concatenation, which joins two strings together.
  ```js
    const firstName = 'Abdelfattah';
    const lastName = 'Kandil';
    console.log(firstName + ' ' + lastName); // Concatenates the first and last name.
  ```


#### Assignment Operators

JavaScript also provides assignment operators to update the value of a variable:

- **+=**: Adds the right operand to the left operand and assigns the result to the left operand.

- **\*=:** Multiplies the right operand by the left operand and assigns the result to the left operand.

- **++**: Increments the variable by 1.

- **--**: Decrements the variable by 1.

```js
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x); // Outputs the final value of 'x'

```

#### Comparison Operators

Comparison operators are used to compare values and return a Boolean result (true or false).

- `>`, `<`, `>=`, `<=` : Compare two values and return true if the condition is met; otherwise, return false.
  ```js
    console.log(ageAbdelfattah > ageSarah); // Checks if Abdelfattah is older than Sarah
    console.log(ageSarah >= 18); // Checks if Sarah is 18 or older
  ```

- `==` and `===`: Check for equality. `==` performs type coercion, while `===` checks for strict equality (same value and same data type).

- You can also use comparison operators to create Boolean variables.
    ```js
    const isFullAge = ageSarah >= 18;
    // The isFullAge variable will be true if Sarah is 18 or older.

    ```


### Operator Precedence in JavaScript

Operator precedence determines the order in which JavaScript evaluates expressions involving multiple operators. JavaScript follows a specific set of rules to decide the order in which operators are applied.

Here are some examples that demonstrate operator precedence:

1. **Math Operators and Comparison Operators**:
   - In JavaScript, math operators like subtraction (`-`) and comparison operators like greater than (`>`) have specific precedence rules. In the example below, the subtraction operators are evaluated first, followed by the greater than comparison.

   ```javascript
   const now = 2037;
   const ageAbdelfattah = now - 1991;
   const ageSarah = now - 2018;
   console.log(now - 1991 > now - 2018); // Outputs: true (ageAbdelfattah > ageSarah)
    ```
2. **Chained Assignments**:

   - When you have chained assignments, JavaScript evaluates them from right to left. In this example, `25 - 10 - 5` is first evaluated, and then the result is assigned to both x and y.
    ```javascript
    let x, y;
    x = y = 25 - 10 - 5; // x = y = 10, so x and y both equal 10
    console.log(x, y); // Outputs: 10 10
    ```

3. **Grouping with Parentheses**:

    You can control the order of evaluation by using parentheses. Expressions inside parentheses are evaluated first. In the example below, the average age is calculated first, and then the individual ages are logged.
    ```javascript
    const averageAge = (ageAbdelfattah + ageSarah) / 2;
    console.log(ageAbdelfattah, ageSarah, averageAge);
    ```
    Here, the expression `(ageAbdelfattah + ageSarah)` is evaluated first, and the result is then divided by 2 to calculate the average age.
```js
// Example 


let x = 10;
let y = 5;

let result = (x + y) * 2 - 4 / 2 + (x - y) ** 2;
console.log(result);

```

In this example, we have multiple operators, and it's essential to understand how JavaScript's operator precedence works:

- The addition operator `+` has a higher precedence than the multiplication `*` and division `/` operators. So, `(x + y)` is evaluated first, resulting in 15.

- The subtraction operator `-` also has a higher precedence than multiplication and division. So, `(x + y) * 2 - 4` is evaluated next, resulting in `26`.

- The exponentiation operator `**` has a higher precedence than the addition and subtraction operators. So, `(x - y) ** 2` is evaluated, resulting in `25`.

- Finally, the addition and subtraction are performed from left to right, giving us `26 + 25`, resulting in the final value of **`51`**.


### Coding Challenge 

**Problem**:

Abdelfattah and Hamada are eager to compare their running performance. They have recorded their running times for a 5-kilometer race and their average speeds in meters per second. They need your help to determine who ran faster and by how much.

1. Store Eva's and James's running times in seconds and their average speeds in meters per second in variables.
2. Calculate the distance (in meters) each of them ran by dividing the time by the average speed.
3. Create a boolean variable 'evaFaster' to determine whether Eva ran faster than James.
4. Calculate how much further (in meters) Eva ran compared to James.

**Test Data 1**:
- Eva completed the race in 900 seconds with an average speed of 4 m/s.
- James completed the race in 850 seconds with an average speed of 4.2 m/s.

**Expected Output**:
- Eva ran 3600 meters, James ran 3570 meters.
- Did Eva run faster than James? false
- Eva ran 30 meters further than James.

**Test Data 2**:
- Eva completed the race in 820 seconds with an average speed of 5.2 m/s.
- James completed the race in 780 seconds with an average speed of 5 m/s.

**Expected Output**:
- Eva ran 4264 meters, James ran 3900 meters.
- Did Eva run faster than James? true
- Eva ran 364 meters further than James.

**Note**: You can assume that all data provided is valid and that the calculation of distances does not need to be exact.

**Have fun with the challenge!** 🏃‍♀️🏃‍♂️



### Coding Challenge Solution

**Test Data 1**:

- Eva completed the race in 900 seconds with an average speed of 4 m/s.
- James completed the race in 850 seconds with an average speed of 4.2 m/s.

**Step 1**: Store Eva's and James's running times and average speeds in variables.

```javascript
const evaTime = 900; // Eva's time in seconds
const evaSpeed = 4; // Eva's average speed in m/s

const jamesTime = 850; // James's time in seconds
const jamesSpeed = 4.2; // James's average speed in m/s
```


**Step 2**: Calculate the distance each of them ran by dividing the time by the average speed. Distance (in meters) = Time (in seconds) * Average Speed (in m/s).

```javascript
const evaDistance = evaTime * evaSpeed;
const jamesDistance = jamesTime * jamesSpeed;
```

Eva's distance: 900 seconds * 4 m/s = 3600 meters
James's distance: 850 seconds * 4.2 m/s = 3570 meters

**Step 3**: Create a boolean variable 'evaFaster' to determine whether Eva ran faster than James. Compare their average speeds.

```javascript
const evaFaster = evaSpeed > jamesSpeed;
```

Eva's average speed: 4 m/s
James's average speed: 4.2 m/s
Did Eva run faster than James? false

- **Step 4**: Calculate how much further (in meters) Eva ran compared to James.

```javascript
const differenceInDistance = evaDistance - jamesDistance;
```

Eva ran 3600 meters, James ran 3570 meters.
Eva ran 30 meters further than James.


### Strings and Template Literals in JavaScript

#### Strings

In JavaScript, a string is a sequence of characters enclosed in either single ('') or double ("") quotes. Strings are used to represent text data.

```javascript
const firstName = 'Abdelfattah';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;
```

Here, we have defined variables for a first name, job, birth year, and a future year.

Concatenation
You can concatenate strings using the + operator. For example:

```js
const Abdelfattah = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(Abdelfattah);

```

This code uses concatenation to create a string that provides information about a person.

Template Literals
JavaScript introduced template literals, enclosed in backticks (\`\`), which allow for easy string interpolation. With template literals, you can embed variables and expressions directly within the string using `${}`:
```js
const AbdelfattahNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(AbdelfattahNew);

```

Template literals provide a more concise and readable way to create strings with variable values and expressions.

Multiline Strings
With template literals, you can create multiline strings more elegantly:

```js
console.log(`String
multiple
lines`);

```

This code will output a string with multiple lines without the need for explicit line breaks.

Escaping Characters
You can use the escape character `\` to include special characters within strings:

```js
console.log('String with \n\
multiple \n\
lines');
```

In this example, `\n` represents a line break.

Remember that template literals offer a more straightforward way to work with multiline strings.

Regular Strings
If you use single or double quotes for strings, you can still create regular strings in JavaScript:

```javascript
console.log('Just a regular string...');
// This creates a basic string with no interpolation.
```

### Taking Decisions: `if` / `else` Statements

In JavaScript, `if` and `else` statements allow you to make decisions in your code based on certain conditions. These statements help control the flow of your program.

**Example 1: Driving License Eligibility**

Consider a scenario where we want to determine if Sarah is old enough to obtain a driving license.

```javascript
const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}
```

- We use an `if` statement to check if `age` is greater than or equal to 18.
- If the condition is true, it prints a message indicating that Sarah can get a driving license.
- If the condition is false, it calculates the number of years left until she turns 18 and prints a message.

**Example 2: Determining the Century**

Here, we determine the century based on the birth year.

```javascript
const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century)
```


- We use an `if / else` statement to check if birthYear is less than or equal to 2000.
- If the condition is true, it sets `century` to 20.
- If the condition is false, it sets `century` to 21.
- It then prints the determined century.


`if` and `else` statements allow you to create conditional logic in your code, enabling different actions to be taken based on whether a condition is met. They are fundamental for building more complex and interactive applications by controlling program flow.



### Coding Challenge 2: Running Performance Comparison

**Problem**:

Abdelfattah and Hamada are eager to compare their running performance. They have recorded their running times for a 5-kilometer race and their average speeds in meters per second. They need your help to determine who ran faster and by how much.

1. Store Abdelfattah's and Hamada's running times in seconds and their average speeds in meters per second in variables.

2. Calculate the distance (in meters) each of them ran by dividing the time by the average speed.

3. Create a boolean variable 'abdelfattahFaster' to determine whether Abdelfattah ran faster than Hamada.

4. Calculate how much further (in meters) Abdelfattah ran compared to Hamada.

5. Use conditional statements (`if` / `else`) to determine and print a message about who ran faster or if they ran at the same speed.

**Test Data 1**:
- Abdelfattah completed the race in 900 seconds with an average speed of 4 m/s.
- Hamada completed the race in 850 seconds with an average speed of 4.2 m/s.

**Expected Output**:
- Abdelfattah ran 3600 meters, Hamada ran 3570 meters.
- Did Abdelfattah run faster than Hamada? No, Hamada ran faster.
- Hamada ran 30 meters further than Abdelfattah.

**Test Data 2**:
- Abdelfattah completed the race in 820 seconds with an average speed of 5.2 m/s.
- Hamada completed the race in 780 seconds with an average speed of 5 m/s.

**Expected Output**:
- Abdelfattah ran 4264 meters, Hamada ran 3900 meters.
- Did Abdelfattah run faster than Hamada? Yes, Abdelfattah ran faster.
- Abdelfattah ran 364 meters further than Hamada.

**Note**: You can assume that all data provided is valid and that the calculation of distances does not need to be exact.

**Challenge Yourself!** 🏃‍♂️🏃‍♂️


## Tasks 

### Intro to JS

1. Create an HTML file with an embedded JavaScript script. Use the `console.log` function to print "Hello, JavaScript!" in the browser console.

### Hello World!

2. Write a JavaScript program that displays "Hello, World!" in an alert dialog box when a button is clicked on an HTML page.

### A Brief Introduction to JavaScript

3. Explain in a code comment the difference between JavaScript and Java.

### Linking a JavaScript File

4. Create an external JavaScript file and link it to an HTML page. In the JavaScript file, define a function that changes the background color of the HTML page when called from a button click event.

### Values and Variables

5. Declare a variable to store your name and another variable to store your age. Print both variables in the console.

### Data Types

6. Create variables of different data types (string, number, boolean, null, undefined) and log their types in the console.

### `let`, `const`, and `var`

7. Declare a variable using `let`, and then try reassigning its value. Repeat the same with `const` and `var`. Observe the differences and behaviors.

### Basic Operators

8. Write a program that calculates the area of a rectangle. Ask the user for the length and width as input and display the result.

### Operator Precedence

9. Write a program that uses different mathematical operators (+, -, *, /, %) to calculate and display the result of an arithmetic expression.

### Strings and Template Literals

10. Create a template literal that combines your first name, last name, and age and displays it in the console.

### Taking Decisions: `if` / `else` Statements

11. Write a program that prompts the user for their age and determines whether they are old enough to vote. Display an appropriate message using `if` and `else` statements.


