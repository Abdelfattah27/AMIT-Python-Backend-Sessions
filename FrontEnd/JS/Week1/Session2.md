# JavaScript Fundamentals Session 2


## Type Conversion and Coercion

In JavaScript, type conversion and coercion are processes that involve changing the data type of a value or allowing JavaScript to implicitly convert data types in certain situations.

### Type Conversion

Type conversion is the explicit conversion of one data type to another. JavaScript provides functions like `Number()`, `String()`, and `Boolean()` to convert values to specific data types.

**Example 1: Converting a String to a Number**

```javascript
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
```
- We use the `Number()` function to convert a string representing a year to a number.
- `Number(inputYear)` converts '1991' to the number 1991.
- We can perform mathematical operations with the converted number.


**Example 2: Converting Non-Numeric Strings**

```javascript
console.log(Number('Abdelfattah'));
console.log(typeof NaN);
```

- Attempting to convert a non-numeric string to a number results in NaN (Not-a-Number).
- `typeof NaN` returns 'number', which is often considered a quirk in JavaScript.
Example 3: Converting to a String

```javascript
console.log(String(23), 23);
```
- We use the `String()` function to explicitly convert the number 23 to a string.
- `String(23)` converts the number 23 to the string '23'.


## Type Coercion in JavaScript

Type coercion is the process by which JavaScript automatically converts data types during certain operations. It helps JavaScript make sense of expressions involving different data types by implicitly converting values to a common type.

### Example 1: Concatenation with Type Coercion

```javascript
console.log('I am ' + 23 + ' years old');
```
- In this example, we are concatenating strings and a number.
- JavaScript automatically converts the number 23 to a string, resulting in the string 'I am 23 years old'.


### Example 2: Mathematical Operations
```javascript
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' > '18');
```

- JavaScript attempts to perform mathematical operations with strings that contain numeric values.
- It converts the strings '23', '10', '3', and '2' to numbers for subtraction and division.
- In the comparison, it compares the numerical values, so '23' is greater than '18'.

### Example 3: Implicit Conversion in Assignment
```javascript
let n = '1' + 1; // '11'
n = n - 1;
console.log(n);
```

- In the first line, JavaScript concatenates '1' and 1, resulting in the string '11'.
- In the next line, it subtracts 1 from '11', resulting in the number 10.
- JavaScript automatically converts the string to a number for the subtraction operation.

While type coercion can be convenient, it can also lead to unexpected behavior if you're not aware of it. It's crucial to understand how JavaScript handles type conversion to write reliable code. In some cases, you might want to use explicit type conversion functions like `Number()`, `String()`, or `Boolean()` to ensure predictable results.


### Truthy and Falsy Values in JavaScript

In JavaScript, every value is inherently considered truthy or falsy in a Boolean context. Understanding truthy and falsy values is essential when working with conditions and logical expressions.

#### Truthy Values

Truthy values are values that are considered "true" when evaluated in a Boolean context. In JavaScript, several values are considered truthy:

- Numbers other than 0
- Non-empty strings
- Objects (including empty objects)
- Arrays (including empty arrays)
- Functions
- The special value `true`

**Example 1: Evaluating Truthy Values**

```javascript
console.log(Boolean('Abdelfattah')); // true
console.log(Boolean({})); // true
```

In these examples, both the non-empty string and the empty object are considered truthy when converted to a Boolean.

**Example 2: Conditional Statements**
```js
const money = 100;
if (money) {
  console.log("Don't spend it all ");
} else {
  console.log('You should get a job!');
}

```

In this code, the condition `if (money)` is true because `money` has a value, and it is greater than 0. Therefore, the message "Don't spend it all " is printed.

**Falsy Values**

**Falsy values** : are values that are considered "false" when evaluated in a Boolean context. In JavaScript, several values are considered falsy:

- The number 0
- An empty string ('')
- `undefined`
- `null`
- `NaN`
- The special value false

**Example 3: Evaluating Falsy Values**

```javascript
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
```

In these examples, the number 0 and the undefined value are considered falsy when converted to a Boolean.

**Example 4: Conditional Statements**

```javascript
let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}
```

In this code, the condition if (height) is false because height is equal to 0, which is a falsy value. Therefore, the message "Height is UNDEFINED" is printed.


### Equality Operators in JavaScript: `==` vs. `===`

In JavaScript, equality operators are used to compare values for equality. There are two main equality operators: `==` (loose equality) and `===` (strict equality).

#### Loose Equality (`==`)

The `==` operator checks if two values are equal, but it performs type coercion, which means it can convert values to a common type before making the comparison. This can sometimes lead to unexpected results.

**Example 1: Loose Equality (`==`)**

```javascript
const age = '18';

if (age == 18) {
  console.log('You just became an adult :D (loose)');
}
```

- In this example, the `==` operator compares the string `'18'` with the number `18`. It performs type coercion to compare them, so the condition is true
  
**Strict Equality (===)**
The === operator checks if two values are equal without performing type coercion. It requires both the value and the type to be the same for the comparison to be true. This is considered a safer and more predictable way to check for equality.

**Example 2: Strict Equality (===)**

```javascript
const age = '18';

if (age === 18) {
  console.log('You just became an adult :D (strict)');
}
```

- In this example, the `===` operator compares the string '18' with the number `18`. Because it doesn't perform type coercion, the condition is false.


**Example 3: Conditional Statements**
```javascript
const favourite = Number(prompt("What's your favourite number?"));

if (favourite === 23) {
  console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
  console.log('7 is also a cool number');
} else if (favourite === 9) {
  console.log('9 is also a cool number');
} else {
  console.log('Number is not 23 or 7 or 9');
}
```

- In this code, we use the `===` operator to compare the value of favourite with different numbers.
- If favourite is strictly equal to one of these numbers, the corresponding message is printed.

**Example 4: Inequality (!==)**

```javascript
if (favourite !== 23) {
  console.log('Why not 23?');
}
```
- The `!==` operator checks if `favourite` is not strictly equal to 23. If it's not 23, the message is printed.

Using the strict equality operator (===) is often recommended because it avoids unexpected type coercion. It's important to choose the appropriate operator based on your intended comparison.


### Logical Operators in JavaScript

Logical operators in JavaScript allow you to combine and manipulate Boolean values (true or false) to make decisions or perform specific actions.

#### `&&` (Logical AND)

The `&&` operator returns `true` if both operands are `true`. It is often used to ensure that multiple conditions must be met for an action to be taken.

**Example 1: Logical AND (`&&`)**

```javascript
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision); // true
```

- In this example, the `&&` operator checks if both `hasDriversLicense` and hasGoodVision are `true`. Since both conditions are met, the result is `true`.
`||` (Logical OR)
The `||` operator returns `true` if at least one of the operands is `true`. It is used when one of several conditions needs to be satisfied for an action to be taken.


**Example 2: Logical OR (||)**
```javascript
console.log(hasDriversLicense || hasGoodVision); // true
```

The `||` operator checks if either `hasDriversLicense` or `hasGoodVision` is true. Since both are `true`, the result is `true`.



**! (Logical NOT)**

The `!` operator negates a Boolean value. It returns true if the operand is false and vice versa. It's often used to invert conditions.

**Example 3: Logical NOT (!)**

```javascript
console.log(!hasDriversLicense); // false
```

The `!` operator negates the value of `hasDriversLicense`, which is `true`, resulting in `false`.

**Example 4: Conditional Statements**
```javascript
const isTired = false;

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}
```

- In this code, we use logical operators to determine if Sarah is able to drive.
- The `&&` operator ensures that she has a driver's license, good vision, and is not tired to drive safely.

Logical operators are essential for building complex decision-making logic in your JavaScript code. They allow you to combine conditions and make choices based on multiple criteria.

### Coding Challenge: Gymnastics Competition

**Problem Statement**:

There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the trophy!

1. Calculate the average score for each team, using the test data below.
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (a draw means they have the same average score).

3. **Bonus 1**: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team and a score of at least 100 points. Use a logical operator to test for the minimum score, along with multiple else-if blocks.

4. **Bonus 2**: The minimum score requirement also applies to a draw. A draw only happens when both teams have the same score and both have a score greater than or equal to 100 points. Otherwise, no team wins the trophy.

**Test Data**:

```javascript
// Test Data 1
Dolphins score 96, 108, and 89. Koalas score 88, 91, and 110.

// Test Data Bonus 1
Dolphins score 97, 112, and 80. Koalas score 109, 95, and 50.

// Test Data Bonus 2
Dolphins score 97, 112, and 101. Koalas score 109, 95, and 106.
```


## Solution

```js
// Test Data 1
const dolphinsAverage = (96 + 108 + 89) / 3;
const koalasAverage = (88 + 91 + 110) / 3;

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log('Dolphins win the trophy 🏆');
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
  console.log('Koalas win the trophy 🏆');
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log 'No one wins the trophy 😭');
}
```


This code calculates the average scores for Dolphins and Koalas and determines the winner based on different conditions, including minimum score requirements. The results are printed to the console.


### The `switch` Statement in JavaScript

The `switch` statement in JavaScript is a conditional statement used to perform different actions based on different conditions. It's an alternative to a series of `if-else` statements and is particularly useful when there are multiple conditions to consider.

**Example:**

```javascript
const day = 'friday';

switch (day) {
  case 'monday':
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}
```

- In this example, the `switch` statement checks the value of the `day` variable.
- Depending on the value of `day`, it executes the code block associated with the corresponding case label.
- The break statement is used to exit the `switch` statement once a condition is met.

**Alternative Approach Using if-else Statements:**

```javascript
if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}
```
- This alternative approach achieves the same result as the `switch` statement, but it involves multiple if-else statements.
- The `switch` statement is often preferred when there are multiple cases to consider, as it can make the code more readable and maintainable.


### Statements and Expressions in JavaScript

In JavaScript, there are two fundamental concepts: **statements** and **expressions**. They serve different purposes in the language.

#### Statements

A **statement** is a piece of code that performs a specific action. It often ends with a semicolon `;`. Statements do not produce a value by themselves. They are typically used to perform tasks or control the flow of the program.

**Example of a Statement:**

```javascript
if (23 > 10) {
  const str = '23 is bigger';
}
```

The `if` statement is a control statement that performs an action based on a condition. In this case, it assigns the string `'23 is bigger'` to the variable `str` `if` the condition 23 > 10 is `true`.


**Expressions**

An **expression** is a piece of code that produces a value. Expressions can be simple or complex and can often be used within statements. They can be standalone or embedded within other expressions.

#### Examples of Expressions:

```javascript
3 + 4 // Produces the value 7
1991 // Produces the value 1991
true && false && !false // Produces the value false
`I'm ${2037 - 1991} years old ${me}` // Produces a string value
```


In these examples, mathematical operations, values, and string interpolation are expressions that produce values.

It's important to note that not all statements contain expressions, but many statements do include expressions to calculate values or make decisions.



### The Conditional (Ternary) Operator in JavaScript

The conditional operator, often referred to as the "ternary operator," is a concise way to write conditional statements in JavaScript. It allows you to express a simple if-else statement in a single line of code.

**Example:**

```javascript
const age = 23;

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);
```

In this example, the conditional operator `age >= 18 ? 'wine 🍷' : 'water 💧'` checks if the age variable is greater than or equal to 18.


If the condition is true, it evaluates to `'wine 🍷'`, and if it's false, it evaluates to `'water 💧'`. The result is assigned to the drink variable.

This code is equivalent to the longer `if-else` statement:

```js

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

```

You can also use the conditional operator within template literals for more concise and readable code:

```javascript
console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
```

The conditional operator is a handy tool for simplifying conditional statements and making your code more compact and expressive.


### Coding Challenge: Tip Calculator

**Problem Statement**:

Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅. (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'.

**Test Data**:

- Test for bill values 275, 40, and 430.

**HINT**:

- To calculate 20% of a value, simply multiply it by 20/100 = 0.2.
- Value X is between 50 and 300 if it's `>= 50 && <= 300` 😉

**Solution**:

```javascript
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

```


## Tasks

### Basic If Statement:

Write a JavaScript program that checks if a given number is even. If it is, log "The number is even" to the console; otherwise, log "The number is odd."

### If-Else Statement:

Create a program that takes a user's age as input and determines whether they are eligible to vote. If the age is 18 or above, log "You are eligible to vote," otherwise, log "You are not eligible to vote."

### Nested If-Else:

Write a script that asks the user for two numbers and checks if the first number is divisible by the second number. If it is, display "Number 1 is divisible by Number 2," otherwise, display "Number 1 is not divisible by Number 2."

<!-- ### Ternary Operator for Minimum Value:

Given two numbers, use the ternary operator to find and display the smaller of the two numbers.
 -->

### Grade Calculator:

Create a program that calculates a student's letter grade based on their numeric grade. Use if-else statements to assign grades such as 'A', 'B', 'C', 'D', or 'F' based on the numeric input.

<!--
### Ternary Operator for Age Group:

Ask the user for their age and use the ternary operator to categorize them into "Child" (0-12), "Teen" (13-19), "Adult" (20-59), or "Senior" (60 and above). 
-->

<!-- 
### Password Strength Checker:

Write a function that checks the strength of a user's password. Use if statements to classify passwords as "Weak," "Medium," or "Strong" based on their complexity (e.g., length, presence of special characters, numbers, and uppercase letters). 
-->

### Traffic Light Simulation:

Simulate a traffic light using JavaScript. Use if-else statements to control the state of the traffic light and display "Red," "Yellow," or "Green" based on the current state.

### User Authentication:

Implement a simple user authentication system where the user provides a username and password. Use if-else statements to check if the provided credentials match a predefined set of values and log "Access Granted" or "Access Denied" accordingly.

### Product Discount Calculator:

Create a program that calculates the final price of a product after applying a discount. Use if-else statements to check the discount amount based on the original price and the customer's membership status.

