# React

## sync in js

```javascript
//sync code

function saySomething() {
  console.log("you are in say something function");
  console.log("hello");
}

console.log("start");
saySomething();
console.log("End");

//Async code

console.log("start");

setTimeout(() => {
  console.log("you are in set time out");
}, 2000);

console.log("End");

/////////////////////////

console.log("start");

function loginUser(email, password) {
  setTimeout(() => {
    return { userInfo: email };
  }, 1500);
}

const user = loginUser("ahmed@yahoo.com", 12344);

console.log(user);

console.log("finish");

/////////////////////////

console.log("start");

function loginUser(email, password, callback) {
  setTimeout(() => {
    callback({ userInfo: email });
  }, 1500);
}

loginUser("ahmed@yahoo.com", 12344, (user) => {
  console.log(user);
});
```

## fetch data

```html
<button id="btn">Load posts</button>
    <p id="loading" style="display: none">Loading ....</p>
    <table class="table table-striped" id="table">
        <thead>
          <th>
            <tr>
              <td>id</td>
              <td>user Id</td>
              <td>title</td>
            </tr>
          </th>
      </header>
      <tbody id="tableBody"></tbody>
    </table>
    <script>
          const drawData = (data) => {
          const table = document.querySelector("#tableBody");
          console.log(table);
          for (let i = 0; i < data.length; i++) {
            console.log(data[i].id);
            const row = document.createElement("tr");
            row.innerHTML = `
            <td>${data[i].id}</td>
            <td>${data[i].userId}</td>
            <td>${data[i].title}</td>
          `;
            table.appendChild(row);
          }
        };
        const fetchData = async () => {
          const loading = document.getElementById("loading");
          loading.style.display = "block";
          const data = await fetch("https://jsonplaceholder.typicode.com/postsss")
            .then((x) => x.json())
            .catch((error) => console.log(error));
          drawData(data);
          loading.style.display = "none";
        };
        const btn = document.getElementById("btn");
        btn.addEventListener("click", fetchData);

    </script>
```

## Basic thing before React

### this

In JavaScript, the "this" keyword refers to the current object that the code is executing within. It allows functions to have access to the properties and methods of the object that they are a part of, and it can be used to make code more dynamic and reusable.

Here are two examples of how you can use "this" in JavaScript functions:

Example 1: Using "this" to access object properties

```javascript
const person = {
  name: "John",
  age: 30,
  sayName: function () {
    console.log("My name is " + this.name);
  },
};

person.sayName(); // Output: "My name is John"

// 2
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    console.log("My name is " + this.name);
  }

  sayAge() {
    console.log("I am " + this.age + " years old");
  }
}

const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);

person1.sayName(); // Output: "My name is John"
person1.sayAge(); // Output: "I am 30 years old"

person2.sayName(); // Output: "My name is Jane"
person2.sayAge(); // Output: "I am 25 years old"
```

### inheritance in js

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex");
dog.speak(); // Output: "Rex barks."
```

### map

In JavaScript, the map() function is used to transform an array by applying a function to each element of the array. The map() function returns a new array that contains the transformed elements, leaving the original array unchanged.

The callback function that is passed to map() takes three parameters:

```javascript
arr.map(callback(currentValue, index, array));
```

currentValue - this is the current element being processed in the array.
index (optional) - this is the index of the current element being processed in the array.
array (optional) - this is the original array that map() was called upon.

```javascript
// 1
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(function (num) {
  return num * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// 2

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 40 },
];

const names = users.map(function (user) {
  return user.name;
});

console.log(names); // Output: ['John', 'Jane', 'Bob']
```

### filter

In JavaScript, the filter() function is a built-in method that allows you to iterate over an array and filter out elements based on a condition that you define. The filter() function returns a new array that only contains the elements that passed the condition.

```javascript
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]
```

### reduce

In JavaScript, the reduce() function is a built-in method that allows you to iterate over an array and reduce the array to a single value based on an accumulator function that you define. The reduce() function applies this function to each element of the array, and returns a single value that is the result of the reduction.

```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function (acc, num) {
  return acc + num;
});

console.log(sum); // Output: 15

// 2

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function (acc, num) {
  return acc + num;
}, 0);

console.log(sum); // Output: 15
```

### object literals

In JavaScript, an object literal is a way of creating an object by directly specifying its properties and values within curly braces { }.

Here's an example:

```javascript
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log(person.name); // Output: John
console.log(person.age); // Output: 30
console.log(person.city); // Output: New York

// 2
const user = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
  },
  hobbies: ["reading", "traveling", "photography"],
};

console.log(user.address.city); // Output: New York
console.log(user.hobbies[1]); // Output: traveling
```

### template literals

Template literals is a new way of defining strings in JavaScript that allows you to easily embed variables or expressions into a string. Template literals are defined using backticks (`) instead of single or double quotes.

Here's an example:

```javascript
const name = "John";
const age = 30;

const message = `My name is ${name} and I am ${age} years old.`;
console.log(multiLine);

const multiLine = `
  This is a
  multi-line
  string.
`;

console.log(message);
```

### default parameter

In JavaScript, default parameters allow you to specify a default value for a function parameter in case no value or undefined is passed in when the function is called. This can be useful to provide a fallback value or to make a function more flexible.

Here's an example:

```javascript
function greet(name = "World") {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, World!
greet("John"); // Output: Hello, John!

function add(a, b = a * 2) {
  return a + b;
}

console.log(add(1)); // Output: 3
console.log(add(1, 3)); // Output: 4
```

### rest spread operator

In JavaScript, the rest and spread operators are used to work with arrays and objects.

The rest operator ... is used to represent an indefinite number of arguments as an array. It can be used in function arguments to collect all remaining arguments into an array. Here's an example:

```javascript
// rest
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22

// spread
const numbers = [1, 2, 3];
const moreNumbers = [4, 5, 6];
const allNumbers = [...numbers, ...moreNumbers];

console.log(allNumbers); // Output: [1, 2, 3, 4, 5, 6]

function greet(name, age, city) {
  console.log(`Hello, ${name}! You are ${age} years old and live in ${city}.`);
}

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

greet(...Object.values(person)); // Output: Hello, John! You are 30 years old and live in New York.
```

### destructor assignment

n JavaScript, destructuring assignment is a way to extract values from objects and arrays into separate variables. It can be used to make code more concise and readable by allowing you to extract multiple values from an object or array in a single statement.

Destructuring assignment uses curly braces {} for objects and square brackets [] for arrays. Here's an example:

```javascript
// Object destructuring
const person = { name: "John", age: 30, city: "New York" };
const { name, age, city } = person;

console.log(name); // Output: John
console.log(age); // Output: 30
console.log(city); // Output: New York

// Array destructuring
const numbers = [1, 2, 3];
const [first, second, third] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(third); // Output: 3

// Object destructuring with default values and variable renaming
const person = { name: "John", age: 30 };
const { name: fullName = "Unknown", age: years } = person;

console.log(fullName); // Output: John
console.log(years); // Output: 30

// Array destructuring with default values and variable renaming
const numbers = [1, 2];
const [first, second = 0, third = 0] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(third); // Output: 0
```

## React

## React vs regular js

### js

```html
<!-- HTML -->
<div id="counter">
  <span id="count">0</span>
  <button id="increment">+</button>
  <button id="decrement">-</button>
</div>

<!-- CSS -->
<style>
  #count {
    font-size: 2em;
    font-weight: bold;
  }
</style>

<!-- JavaScript -->
<script>
  const countEl = document.querySelector("#count");
  const incrementBtn = document.querySelector("#increment");
  const decrementBtn = document.querySelector("#decrement");

  let count = 0;

  incrementBtn.addEventListener("click", () => {
    count++;
    countEl.textContent = count;
  });

  decrementBtn.addEventListener("click", () => {
    count--;
    countEl.textContent = count;
  });
</script>
```

### react

```javascript
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div id="counter">
      <span id="count">{count}</span>
      <button id="increment" onClick={handleIncrement}>
        +
      </button>
      <button id="decrement" onClick={handleDecrement}>
        -
      </button>
    </div>
  );
}
```

## why react

1. Reusability: Components can be reused throughout your application, reducing duplication of code and making it easier to maintain and update your UI.

2. Encapsulation: Each component encapsulates its own behavior and state, making it easier to reason about and test the code.

3. Composability: Components can be composed together to create more complex UIs, making it easier to break down complex UIs into smaller, more manageable pieces.

4. Separation of concerns: Components separate the concerns of rendering the UI from managing the state and behavior, making it easier to reason about and maintain the code.

## Folder structure

node_modules/: This folder contains all the third-party dependencies installed for the project using NPM or Yarn.

public/: This folder contains the public assets for the project, such as the index.html file that serves as the entry point for the app.

src/: This folder contains all the source code for the app, including the main index.js file that renders the app to the DOM.

App.js: This is the main component of the app that renders the UI of the entire application. It may contain other nested components as children.

components/: This folder contains reusable components that are used across multiple pages of the app.

pages/: This folder contains the main pages of the app that are rendered based on the URL path.

assets/: This folder contains static assets such as images, videos, and stylesheets.

package.json: This file contains metadata about the project, including the project name, version, and dependencies.

README.md: This file contains documentation and instructions for the project.

## Component and component types

In React, a component is a building block of a user interface that can be reused and composed to create more complex UIs. A component is a JavaScript class or function that returns a React element, which is a lightweight description of what should be rendered on the screen.

There are two main types of components in React:

1. Class components: A class component is a JavaScript class that extends the React.Component base class. It defines a render() method that returns a React element, and may also define other lifecycle methods that are called at various stages of the component's life cycle. Here is an example of a class component:

```jsx
import React from "react";

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

2. Functional components: A functional component is a JavaScript function that takes props as an argument and returns a React element. It is a simpler and more concise way of defining a component compared to class components. Here is an example of a functional component:

```jsx
import React from "react";

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

Functional components can also be defined using arrow functions:

```jsx
import React from "react";

const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};
```

### JSX

JSX stands for JavaScript XML, which is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. JSX makes it easier to create and manipulate the DOM elements in a React application by providing a syntax that is similar to HTML.

When you write JSX code in a React component, it gets compiled into regular JavaScript code using a transpiler like Babel. The resulting JavaScript code uses the React.createElement() method to create a tree of React elements that represent the HTML structure of the component.

For example, consider the following JSX code:

```jsx
const element = <h1>Hello, world!</h1>;
```

This code gets compiled into the following JavaScript code:

```js
const element = React.createElement("h1", null, "Hello, world!");
```

## props

In React, "props" is short for "properties" and is a way to pass data from a parent component to a child component.

In a class component, you can access props through the this.props object, while in a function component, you can access props as a parameter.

Here's an example of passing props to a class component:

```jsx
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

ReactDOM.render(<Greeting name="John" />, document.getElementById("root"));
```

Here's the same example using a function component:

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

ReactDOM.render(<Greeting name="John" />, document.getElementById("root"));
```

## state

In React, "state" is a built-in object that allows you to store component-specific data that can change over time. When a component's state changes, React will re-render the component to reflect the updated state.

Here's an example of using state in a class component:

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));
```

Here's the same example using a function component and the useState hook:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

ReactDOM.render(<Counter />, document.getElementById("root"));
```

## props vs state

In React, both props and state are used to manage data within a component, but they serve different purposes.

Props (short for "properties") are read-only data that are passed from a parent component to a child component. They are used to customize the behavior and appearance of a component based on the parent's needs. Props are immutable, which means that they cannot be changed by the child component.

Here's an example of using props in a component:

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

ReactDOM.render(<Greeting name="Alice" />, document.getElementById("root"));
```

In this example, we define a Greeting component that accepts a name prop and renders a greeting with the name. We pass the name prop as an attribute when rendering the component using ReactDOM.render.

State, on the other hand, is mutable data that is managed within a component. It is used to keep track of component-specific data that can change over time, such as user input, server responses, or animation frames. When the state changes, React will re-render the component to reflect the updated state.

Here's an example of using state in a component:

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));
```

## async usestate

Class based component

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));

////

handleClick = () => {
  this.setState({ count: this.state.count + 1 }, () => {
    console.log(this.state.count);
  });
};

///

handleClick = () => {
  this.setState({ count: this.state.count + 1 });
  this.setState({ count: this.state.count + 1 });
};

////
handleClick = () => {
  this.setState((prevState) => ({ count: prevState.count + 2 }));
};
```

Function based Component

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log(count); // This will log the previous value of count, not the updated value
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

///

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleDoubleIncrement() {
    setCount((prevCount) => prevCount + 2);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment by 1</button>
      <button onClick={handleDoubleIncrement}>Increment by 2</button>
    </div>
  );
}
```

## event Handling

In React, you can handle events in a similar way to how you would handle them in regular HTML. The main difference is that instead of using event attributes like onclick and onsubmit, you pass a function as a prop to the relevant React component.

Here's an example of handling a button click event in React

```javascript
// class component
import React from "react";

class Button extends React.Component {
  handleClick = () => {
    console.log("Button clicked!");
  };

  render() {
    return <button onClick={this.handleClick}>Click me!</button>;
  }
}

// function component
import React, { useState } from "react";

function Button() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return <button onClick={handleClick}>Click me!</button>;
}
```

## methods as props

n React, you can pass methods as props to child components. This allows child components to call methods defined in their parent component, which can be useful for handling events or updating state.

Here's an example of passing a method as a prop from a parent component to a child component:

```javascript
import React from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends React.Component {
  handleClick = () => {
    console.log("Button clicked!");
  };

  render() {
    return <ChildComponent onClick={this.handleClick} />;
  }
}
```
