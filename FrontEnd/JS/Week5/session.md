# Event Listeners
`target.addEventListener(event, function, useCapture)`
    - target: the HTML element you wish to add your event handler to. This element exists as part of the Document Object Model (DOM) and you may wish to learn about how to select a DOM element
    - event: a string that specifies the name of the event. We already mentioned load and click events
  
    - function: specifies the function to run when the event is detected. This is the magic that can allow your web pages to change dynamically.
    - useCapture: an optional Boolean value (true or false) that specifies whether the event should be executed in the capturing or bubbling phase. In the case of nested HTML elements (such as an img within a div) with attached event handlers, this value determines which event gets executed first. By default, it's set to false which means that the innermost HTML event handler is executed first (bubbling phase).
## Events 


### Event Listener: `focus`

**Description:**
The `focus` event is triggered when an element becomes the active focus, typically as a result of a user interacting with the element, such as clicking inside an input field or tabbing to it.

**Most Common Case to Use:**
The `focus` event is commonly used to perform actions when an element gains focus. For example, it can be used to show additional information, highlight the selected input, or trigger certain behaviors when a user starts interacting with a particular element.

**Example Code:**
```javascript
// HTML
<input type="text" id="focusInput" placeholder="Click here">

// JavaScript
const focusInput = document.getElementById('focusInput');

function handleFocus() {
  console.log('Input field focused');
  // Perform actions or updates when the input field gains focus
}

focusInput.addEventListener('focus', handleFocus);
```


### Event Listener: `blur`

**Description:**
The `blur` event is triggered when an element loses focus. This can occur when a user clicks outside the currently focused element, tabs away, or otherwise moves the focus to another part of the document.

**Most Common Case to Use:**
The `blur` event is commonly used to perform actions or validations when the user moves away from a form field or another interactive element. It is often used in conjunction with form validation to check user input as they leave a field.

**Example Code:**
```javascript
// HTML
<input type="text" id="inputField" placeholder="Type something">

// JavaScript
const inputField = document.getElementById('inputField');

function handleBlur() {
  console.log('Input field lost focus');
  // Perform validation or other actions when the input field loses focus
}

inputField.addEventListener('blur', handleBlur);
```

### Event Listener: `change`

**Description:**
The `change` event is triggered when the value of an input, select, or textarea element has been altered by the user. This event is commonly used with form elements to capture changes made by the user.

**Most Common Case to Use:**
The `change` event is frequently employed to perform actions or updates based on user input, especially when dealing with form elements like dropdowns (`<select>`), checkboxes, or radio buttons. It is useful for scenarios where you want to respond to changes in the user's selection.

**Example Code:**
```javascript
// HTML
<select id="dropdown">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>

// JavaScript
const dropdown = document.getElementById('dropdown');

function handleChange() {
  console.log('Dropdown value changed:', dropdown.value);
  // Perform actions or updates based on the selected value
}

dropdown.addEventListener('change', handleChange);
```

### Event Listener: `click`

**Description:**
The `click` event is triggered when an element is clicked by the user, either with the mouse or by using a touch interface. It is one of the most commonly used events and is fundamental for handling user interactions.

**Most Common Case to Use:**
The `click` event is extensively used to respond to user interactions such as button clicks, link clicks, or any other clickable element. It is the primary means of capturing user-initiated actions that require a response from the application.

**Example Code:**
```javascript
// HTML
<button id="clickButton">Click me</button>

// JavaScript
const clickButton = document.getElementById('clickButton');

function handleClick() {
  console.log('Button clicked!');
  // Perform actions or updates in response to the click event
}

clickButton.addEventListener('click', handleClick);
```


### Event Listener: `input`

**Description:**
The `input` event is triggered when the value of an input, textarea, or select element changes. It occurs as the user types or interacts with the input field.

**Most Common Case to Use:**
The `input` event is commonly used to dynamically respond to changes in the user's input. It's often utilized for real-time validation, character counting, or any scenario where you want to perform actions as the user is actively typing or making selections.

**Example Code:**
```javascript
// HTML
<input type="text" id="textInput" placeholder="Type something">

// JavaScript
const textInput = document.getElementById('textInput');

function handleInput() {
  console.log('Input value changed:', textInput.value);
  // Perform actions or updates based on the input value
}

textInput.addEventListener('input', handleInput);
```


### Event Listener: `invalid`

**Description:**
The `invalid` event is triggered when a form element's value is considered invalid according to its constraints, such as a required field being left blank or a mismatched pattern for an input.

**Most Common Case to Use:**
The `invalid` event is commonly used for form validation. It provides an opportunity to customize error messages or styles when the user enters invalid data before submitting a form.

**Example Code:**
```javascript
// HTML
<form id="exampleForm">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required pattern="[a-zA-Z0-9]+">
  <button type="submit">Submit</button>
</form>

// JavaScript
const exampleForm = document.getElementById('exampleForm');
const usernameInput = document.getElementById('username');

function handleInvalid(event) {
  console.log('Invalid input:', event.target.validationMessage);
  // Perform actions or updates when the input is invalid
}

usernameInput.addEventListener('invalid', handleInvalid);

// Optional: Prevent the default form submission for demonstration purposes
exampleForm.addEventListener('submit', function (event) {
  event.preventDefault();
});
```

### Event Listener: `keydown`

**Description:**
The `keydown` event is triggered when a key on the keyboard is pressed down. It occurs before the actual character input and can capture any key, including non-printable keys like Shift, Ctrl, or Arrow keys.

**Most Common Case to Use:**
The `keydown` event is commonly used to capture user input before it is fully processed. It's often employed for tasks like implementing keyboard shortcuts, restricting input, or performing actions based on specific key presses.

**Example Code:**
```javascript
// HTML
<input type="text" id="keyInput" placeholder="Type something">

// JavaScript
const keyInput = document.getElementById('keyInput');

function handleKeyDown(event) {
  console.log('Key pressed:', event.key);
  // Perform actions or updates based on the key pressed
}

keyInput.addEventListener('keydown', handleKeyDown);
```


### Event Listener: `keypress`

**Description:**
The `keypress` event is triggered when a key on the keyboard is pressed down and produces a character value. It is more specific to printable characters and excludes non-printable keys like Shift, Ctrl, or Arrow keys.

**Most Common Case to Use:**
The `keypress` event is commonly used to capture and handle character input from the keyboard. It's suitable for tasks like form validation, implementing autocomplete, or any scenario where you need to respond to printable character input.

**Example Code:**
```javascript
// HTML
<input type="text" id="charInput" placeholder="Type a character">

// JavaScript
const charInput = document.getElementById('charInput');

function handleKeyPress(event) {
  console.log('Character pressed:', event.key);
  // Perform actions or updates based on the character pressed
}

charInput.addEventListener('keypress', handleKeyPress);
```


### Event Listener: `keyup`

**Description:**
The `keyup` event is triggered when a key on the keyboard is released after being pressed down. It occurs after the `keydown` event and can be used to capture when a key is no longer being held down.

**Most Common Case to Use:**
The `keyup` event is commonly used to capture the release of keys and respond to user input. It can be used for tasks such as implementing key combinations, updating UI elements dynamically, or any scenario where you want to detect when a specific key is released.

**Example Code:**
```javascript
// HTML
<input type="text" id="releaseInput" placeholder="Release a key">

// JavaScript
const releaseInput = document.getElementById('releaseInput');

function handleKeyUp(event) {
  console.log('Key released:', event.key);
  // Perform actions or updates based on the key released
}

releaseInput.addEventListener('keyup', handleKeyUp);
```


### Event Listener: `load`

**Description:**
The `load` event is triggered when a resource (such as an image, script, or entire web page) has finished loading.

**Most Common Case to Use:**
The `load` event is commonly used with resources like images, scripts, or external content to execute additional actions once the resource has been fully loaded. It ensures that the content is ready for interaction or manipulation.

**Example Code:**
```javascript
// HTML
<img id="loadedImage" src="example.jpg" alt="Example Image">

// JavaScript
const loadedImage = document.getElementById('loadedImage');

function handleLoad() {
  console.log('Image loaded successfully');
  // Perform actions or updates once the image is fully loaded
}

loadedImage.addEventListener('load', handleLoad);
```
### Event Listener: `mousedown`

**Description:**
The `mousedown` event is triggered when a mouse button is pressed down over an element. It provides information about which mouse button was pressed.

**Most Common Case to Use:**
The `mousedown` event is commonly used to capture the initial interaction when a user clicks a mouse button. It is often employed for tasks such as initiating drag-and-drop operations, capturing the starting point of a selection, or triggering actions on a mouse click.

**Example Code:**
```javascript
// HTML
<button id="mouseButton">Click me</button>

// JavaScript
const mouseButton = document.getElementById('mouseButton');

function handleMouseDown(event) {
  console.log('Mouse button pressed:', event.button);
  // Perform actions or updates when a mouse button is pressed
}

mouseButton.addEventListener('mousedown', handleMouseDown);
```


### Event Listener: `mouseleave`

**Description:**
The `mouseleave` event is triggered when the mouse pointer leaves the boundaries of an element. It is commonly used to detect when the mouse moves out of a specific region.

**Most Common Case to Use:**
The `mouseleave` event is often used to perform actions when the mouse exits a defined area. This can be useful for implementing hover effects, hiding tooltips, or triggering actions when the mouse leaves a particular UI element.

**Example Code:**
```javascript
// HTML
<div id="hoverDiv">Hover over me</div>

// JavaScript
const hoverDiv = document.getElementById('hoverDiv');

function handleMouseLeave() {
  console.log('Mouse left the element');
  // Perform actions or updates when the mouse leaves the element
}

hoverDiv.addEventListener('mouseleave', handleMouseLeave);
```


### Event Listener: `mousemove`

**Description:**
The `mousemove` event is triggered when the mouse pointer moves over an element. It provides information about the current position of the mouse.

**Most Common Case to Use:**
The `mousemove` event is commonly used to track the movement of the mouse and respond to it dynamically. It's often used for tasks such as updating the position of elements, creating interactive features like sliders or tooltips, or any scenario where you need to detect and respond to mouse movement.

**Example Code:**
```javascript
// HTML
<div id="trackMouse">Move your mouse over me</div>

// JavaScript
const trackMouse = document.getElementById('trackMouse');

function handleMouseMove(event) {
  console.log('Mouse coordinates:', `X: ${event.clientX}, Y: ${event.clientY}`);
  // Perform actions or updates based on the mouse position
}

trackMouse.addEventListener('mousemove', handleMouseMove);
```


### Event Listener: `mouseover`

**Description:**
The `mouseover` event is triggered when the mouse pointer enters the boundaries of an element. It is commonly used to detect when the mouse moves over a specific element.

**Most Common Case to Use:**
The `mouseover` event is often used to perform actions when the mouse enters a defined area. This can be useful for implementing hover effects, displaying tooltips, or triggering actions when the mouse enters a particular UI element.

**Example Code:**
```javascript
// HTML
<div id="hoverDiv">Hover over me</div>

// JavaScript
const hoverDiv = document.getElementById('hoverDiv');

function handleMouseOver() {
  console.log('Mouse entered the element');
  // Perform actions or updates when the mouse enters the element
}

hoverDiv.addEventListener('mouseover', handleMouseOver);
```
