# JavaScript Variable Scoping and Differences between `var`, `let`, and `const`

In JavaScript, you can declare variables using the `var`, `let`, and `const` keywords. Each has its own characteristics regarding scope, redeclaration, reassignment, and hoisting. Let's explore the differences using examples.

## `var` keyword

### Scope of variables declared with `var`

Variables declared with `var` can have either global or local scope. Global scope is for variables declared outside functions, while local scope is for variables declared inside functions.

#### Global Scope Example:

```javascript
var number = 50;

function print() {
  var square = number * number;
  console.log(square);
}

console.log(number); // 50
print(); // 2500
```
In this example, `number` has global scope and is accessible both inside and outside the `print` function.


Local Scope Example:
```javascript
function print() {
  var number = 50;
  var square = number * number;
  console.log(square);
}

print(); // 2500

console.log(number);
// ReferenceError: number is not defined
```
Here, number has local scope within the print function and cannot be accessed outside it.

## Redeclaration and reassignment with var

Variables declared with var can be redeclared and reassigned.

Redeclaration Example:

```javascript
var number = 50;
console.log(number); // 50

var number = 100;
console.log(number); // 100
```

### Variables declared with var can be redeclared without any issues.

#### Reassignment Example:
```javascript
var number = 50;
console.log(number); // 50

number = 100;
console.log(number); // 100

number = 200;
console.log(number); // 200
```


`var` allows reassignment of values without redeclaring the variable.

### Hoisting with var

Variables declared with var are hoisted to the top of their scope, and they are initialized with a default value of undefined.

```javascript
console.log(number); // undefined

var number = 50;

console.log(number); // 50
```

Here, the number variable is hoisted to the top, and its value is undefined until the line where it is declared with an initial value gets executed.

## let keyword

Scope of variables declared with let
Variables declared with let can have global, local, or block scope.

### Block Scope Example:
```javascript
let number = 50;

function print() {
  let square = number * number;

  if (number < 60) {
    var largerNumber = 80;
    let anotherLargerNumber = 100;
    console.log(square);
  }

  console.log(largerNumber); // 80
  console.log(anotherLargerNumber);
  // ReferenceError: anotherLargerNumber is not defined
}
print();
```
Here, number has global scope, square has local scope within the print function, and anotherLargerNumber has block scope within the if statement.

### Redeclaration and reassignment with let

Variables declared with let cannot be redeclared, but they can be reassigned.

Reassignment Example:
```js
let number = 50;
console.log(number); // 50

number = 100;
console.log(number); // 100

```

Variables declared with let can be reassigned to new values.

### Redeclaration Error:
```javascript
let number = 50;

let number = 100;
// SyntaxError: Identifier 'number' has already been declared
```
Attempting to redeclare a variable with let results in a syntax error.

### Hoisting with let
Variables declared with let are hoisted to the top of their scope, but their hoisting is different from var. They are hoisted without a default initialization, and accessing them before the line of declaration results in a "Cannot access variable before initialization" error.

```javascript
console.log(number);
// ReferenceError: Cannot access 'number' before initialization

let number = 50;
```
## const keyword

Scope of variables declared with const
Variables declared with const are similar to let regarding scope; they can have global, local, or block scope.

Example:
```javascript
const number = 50;

function print() {
  const square = number * number;

  if (number < 60) {
    var largerNumber = 80;
    const anotherLargerNumber = 100;
    console.log(square);
  }

  console.log(largerNumber); // 80
  console.log(anotherLargerNumber);
  // ReferenceError: anotherLargerNumber is not defined
}

print();
```
Here, number has global scope, square has local scope within the print function, and anotherLargerNumber has block scope within the if statement.

### Redeclaration and reassignment with const
Variables declared with const cannot be redeclared or reassigned.

Example:
```javascript
const number = 50;

const number = 100;
// SyntaxError: Identifier 'number' has already been declared

number = 100;
// TypeError: Assignment to constant variable
```
Attempting to redeclare or reassign a variable declared with const results in a syntax error or type error, respectively.

### Hoisting with const

Variables declared with const, like let, are hoisted to the top of their scope, without a default initialization.

```js
console.log(number);
// ReferenceError: Cannot access 'number' before initialization

const number = 50;

```

you can reFerence to this articles [Variable Scoping](https://www.freecodecamp.org/news/scope-and-closures-in-javascript/) , [Var,Let,Const](https://www.freecodecamp.org/news/differences-between-var-let-const-javascript/) 



# JavaScript String Methods and Manipulation

In JavaScript, strings are a fundamental data type, and there are various methods available to manipulate and work with them effectively. Let's explore some commonly used string methods:

## Split and Join

### `split(separator)`

The `split` method is used to divide a string into an array of substrings based on a specified separator.

```javascript
console.log('a+very+nice+string'.split('+'));
// Output: [ 'a', 'very', 'nice', 'string' ]

console.log('Jonas Schmedtmann'.split(' '));
// Output: [ 'Jonas', 'Schmedtmann' ]
```


### `join(separator)`

The `join` method is used to concatenate elements of an array into a string, with an optional separator.

```javascript
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);
// Output: 'Mr. Jonas SCHMEDTMANN'
```

### `Capitalization`

`toUpperCase()` and `toLowerCase()`
These methods convert a string to uppercase or lowercase, respectively.

```javascript
const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
// Output: 'tap air portugal'

console.log(airline.toUpperCase());
// Output: 'TAP AIR PORTUGAL'
```
### Custom Capitalization
A function to capitalize the first letter of each word in a string.

```javascript
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = names.map(n => n[0].toUpperCase() + n.slice(1));
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
// Output: 'Jessica Ann Smith Davis'

capitalizeName('jonas schmedtmann');
// Output: 'Jonas Schmedtmann'
```

### Padding
`padStart(targetLength, padString)` and `padEnd(targetLength, padString)`
These methods pad a string with a specified character until it reaches the desired length.

```javascript
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
// Output: '++++Go to gate 23!++++++++++'
```
### Replacing

#### `replace(searchValue, replaceValue)` and Regular Expression
These methods replace occurrences of a specified value with another value.

```javascript
const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
// Output: 'All passengers come to boarding gate 23. Boarding gate 23!'

console.log(announcement.replace(/door/g, 'gate'));
// Output: 'All passengers come to boarding gate 23. Boarding gate 23!'
```

### Other String Methods

#### `includes(substring)`
Checks if a string contains the specified substring.

```javascript
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
// Output: true

console.log(plane.includes('Boeing'));
// Output: false
```
#### `startsWith(prefix) and endsWith(suffix)`

Checks if a string starts or ends with the specified prefix or suffix.

```javascript
if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}
// Output: 'Part of the NEW Airbus family'
```
#### `repeat(count)`

Repeats a string a specified number of times.

```javascript
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));
// Output: 'Bad weather... All Departures Delayed... Bad weather... All Departures Delayed... Bad weather... All Departures Delayed... Bad weather... All Departures Delayed... Bad weather... All Departures Delayed... '
```
#### `indexOf(substring)` and `lastIndexOf(substring)`

Returns the index of the first or last occurrence of a specified substring.

```javascript
console.log(airline.indexOf('r'));
// Output: 2

console.log(airline.lastIndexOf('r'));
// Output: 15
```
#### `slice(start, end)`

Extracts a portion of a string.

```javascript
console.log(airline.slice(4));
// Output: 'Air Portugal'

console.log(airline.slice(4, 7));
// Output: 'Air'
```
#### `length`

Returns the length of a string.

```javascript
console.log(airline.length);
// Output: 16
```
#### `trim()`

Removes leading and trailing whitespaces from a string.

```javascript
const loginEmail = '  Hello@Jonas.Io \n';
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
// Output: 'hello@jonas.io'
```

### Practice Exercise

A function to check if baggage items include restricted items.

```javascript
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
// Output: 'You are NOT allowed on board'

checkBaggage('Socks and camera');
// Output: 'Welcome aboard!'

checkBaggage('Got some snacks and a gun for protection');

```