# Introduction to jQuery

jQuery is a fast, lightweight, and feature-rich JavaScript library designed to simplify the client-side scripting of HTML. It provides a convenient way to perform common tasks in web development, making it easier for developers to create interactive and dynamic web pages.

## DOM Manipulation

jQuery simplifies DOM manipulation by providing concise methods to select and modify HTML elements. Compare the following examples in vanilla JavaScript and jQuery:

```javascript
// Vanilla JavaScript
document.getElementById("myElement").innerHTML = "Hello, jQuery!";

// jQuery equivalent
$("#myElement").html("Hello, jQuery!");
```
## Event Handling
Event handling is made more straightforward with jQuery, offering a concise syntax for attaching event listeners:

```javascript
// Vanilla JavaScript
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button Clicked!");
});

// jQuery equivalent
$("#myButton").click(function() {
    alert("Button Clicked!");
});
```
## AJAX (Asynchronous JavaScript and XML)
jQuery simplifies AJAX requests, allowing you to fetch data from 
```js
// Vanilla JavaScript
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data", true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText);
    }
};
xhr.send();

// jQuery equivalent
$.ajax({
    url: "https://api.example.com/data",
    method: "GET",
    success: function(data) {
        console.log(data);
    }
});

```


## Animations
jQuery provides simple methods for creating animations, making it easy to add visual effects to your web pages:

```javascript
// Vanilla JavaScript (with CSS for animation)
var element = document.getElementById("myElement");
element.style.transition = "width 2s";
element.style.width = "300px";
// jQuery equivalent
$("#myElement").animate({ width: "300px" }, 2000);
```

## Chaining
jQuery allows you to chain multiple methods together, improving code readability:

```javascript
// Without chaining
$("#myElement").css("color", "red");
$("#myElement").hide();
$("#myElement").fadeIn();

// With chaining
$("#myElement").css("color", "red").hide().fadeIn();
```

### jQuery Selectors

#### ID Selector:

The ID selector is used to select elements with a specific ID attribute.

```javascript
// Selects the element with the ID "myElement"
$("#myElement").css("color", "blue");
```

#### Class Selector:
The class selector is used to select elements with a specific class attribute.

```javascript
// Selects all elements with the class "myClass"
$(".myClass").hide();
```
#### Element Selector:
The element selector is used to select elements based on their tag name.

```javascript
// Selects all <p> elements
$("p").css("font-size", "16px");
```
#### Attribute Selector:
The attribute selector allows you to select elements based on their attributes.

```javascript
// Selects all elements with the "data-type" attribute equal to "example"
$("[data-type='example']").addClass("highlight");

```
#### Combined Selectors:
You can combine multiple selectors to target specific elements more precisely.

```javascript
// Selects all <input> elements with the class "form-input"
$("input.form-input").prop("disabled", true);
```
#### Descendant Selector:
The descendant selector selects all elements that are descendants of a specified element.

```javascript
// Selects all <span> elements within a <div> with the ID "myContainer"
$("#myContainer span").css("color", "green");
```
#### Child Selector:
The child selector selects all elements that are a direct child of a #### specified element.

``` javascript
// Selects all <li> elements that are direct children of a <ul>
$("ul > li").addClass("list-item");
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jQuery Selectors Example</title>
    <style>
        .highlight {
            background-color: yellow;
        }
    </style>
</head>
<body>

<div id="container">
    <h1 class="header">jQuery Selectors Example</h1>

    <p>This is a paragraph.</p>

    <ul>
        <li class="list-item" data-type="example">List Item 1</li>
        <li class="list-item">List Item 2</li>
        <li>List Item 3</li>
    </ul>

    <input type="text" class="form-input" placeholder="Type here">

    <div>
        <span>Inner Span 1</span>
        <span>Inner Span 2</span>
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<script>
    // jQuery code using various selectors
    $(document).ready(function () {
        // ID Selector
        $("#container").css("border", "2px solid blue");

        // Class Selector
        $(".header").css("color", "green");

        // Element Selector
        $("p").addClass("highlight");

        // Attribute Selector
        $("[data-type='example']").text("Modified List Item");

        // Combined Selectors
        $("ul > .list-item").css("font-weight", "bold");

        // Descendant Selector
        $("#container span").css("font-style", "italic");
    });
</script>

</body>
</html>


```


## Differences Between Vanilla JavaScript Object and jQuery Object

1. **Purpose and Context:**
   - **Vanilla JavaScript Object:** In general, refers to native JavaScript objects and methods part of the core language (e.g., `document`, `window`).
   - **jQuery Object:** A special object created by the jQuery library for simplified DOM manipulation and utility methods.

2. **DOM Manipulation:**
   - **Vanilla JavaScript Object:** Direct interaction with native methods and properties.
     ```javascript
     document.getElementById('myElement').style.color = 'red';
     ```
   - **jQuery Object:** Abstracts common tasks into methods for concise syntax.
     ```javascript
     $('#myElement').css('color', 'red');
     ```

3. **Cross-Browser Compatibility:**
   - **Vanilla JavaScript Object:** May require additional handling for cross-browser compatibility.
   - **jQuery Object:** Aims for consistent behavior across browsers.

4. **Chaining:**
   - **Vanilla JavaScript Object:** Chaining is less common and may involve creating intermediate variables.
   - **jQuery Object:** Designed with method chaining, allowing multiple operations in a single line.

5. **Event Handling:**
   - **Vanilla JavaScript Object:** Involves methods like `addEventListener`.
   - **jQuery Object:** Provides simplified event handling.
     ```javascript
     $('#myButton').click(function() {
         alert('Button Clicked!');
     });
     ```

## jQuery Filters: `:first`, `:last`, `:first-child`, `:last-child`

### `:first` Filter:
The `:first` filter selects the first element in the set of matched elements.

```javascript
// Selects the first <p> element
$("p:first").css("color", "blue");

```
### :last Filter:
The :last filter selects the last element in the set of matched elements.

```javascript
// Selects the last <p> element
$("p:last").css("color", "green");
```
### :first-child Filter:
The :first-child filter selects all elements that are the first child of their parent.

```javascript
// Selects the first <li> element in each <ul>
$("ul li:first-child").css("font-weight", "bold");
```
### :last-child Filter:
The :last-child filter selects all elements that are the last child of their parent.

```javascript
// Selects the last <li> element in each <ul>
$("ul li:last-child").css("font-style", "italic");
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jQuery Filters Examples</title>
    <style>
        p, li {
            margin: 5px;
        }
    </style>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</head>
<body>

<!-- :first Filter Example -->
<p>This is the first paragraph.</p>
<p>This is the second paragraph.</p>

<!-- :last Filter Example -->
<p>This is the third paragraph.</p>
<p>This is the last paragraph.</p>

<!-- :first-child Filter Example -->
<ul>
    <li>First List Item</li>
    <li>Second List Item</li>
</ul>

<!-- :last-child Filter Example -->
<ul>
    <li>Another List Item</li>
    <li>Last List Item</li>
</ul>

<script>
    // jQuery code using filters
    $(document).ready(function () {
        // :first Filter
        $("p:first").css("color", "blue");

        // :last Filter
        $("p:last").css("color", "green");

        // :first-child Filter
        $("ul li:first-child").css("font-weight", "bold");

        // :last-child Filter
        $("ul li:last-child").css("font-style", "italic");
    });
</script>

</body>
</html>
```


## Tasks on selectors 

suppose you have this 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jQuery Selectors and Filters Training</title>
    <style>
        .highlight {
            background-color: yellow;
        }
    </style>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</head>
<body>

<div id="container">
    <h1 class="header">Training Tasks</h1>

    <ul>
        <li class="list-item">List Item 1</li>
        <li class="list-item">List Item 2</li>
        <li class="list-item">List Item 3</li>
    </ul>

    <div class="content">
        <p>Paragraph 1</p>
        <p class="highlight">Paragraph 2</p>
        <p>Paragraph 3</p>
    </div>

    <input type="text" id="inputField" class="form-input" placeholder="Type here">

    <button id="submitButton">Submit</button>
</div>

<script>
    $(document).ready(function () {
    // Task 1: Select the <h1> element and change its text to "jQuery Training"
    
    // Task 2: Select all <li> elements in the <ul> and add a class "selected" to them
    
    // Task 3: Select the <p> element with class "highlight" and change its background color to red
    
    // Task 4: Select all <p> elements in the <div class="content"> and set their font color to blue
    
    // Task 5: Select the input field with id "inputField" and set its border to 2px solid green
    
    // Task 6: Select the last <li> element in the <ul> and make its text italic
    
    // Task 7: Select the <button> element with id "submitButton" and change its text to "Click Me"
    
    // Task 8: Select all even-numbered <li> elements in the <ul> and add a class "even"
    
    // Task 9 (Hard): Select the parent <div> of the <input> element and change its background color to #f0f0f0
    
    // Task 10 (Hard): Select the <p> element that comes after the <input> element and change its text to "New Paragraph"
});

    // Your jQuery code for tasks will go here
</script>

</body>
</html>

```
### answer 
```js
$(document).ready(function () {
    // Task 1: Select the <h1> element and change its text to "jQuery Training"
    $("h1.header").text("jQuery Training");

    // Task 2: Select all <li> elements in the <ul> and add a class "selected" to them
    $("ul li").addClass("selected");

    // Task 3: Select the <p> element with class "highlight" and change its background color to red
    $("p.highlight").css("background-color", "red");

    // Task 4: Select all <p> elements in the <div class="content"> and set their font color to blue
    $("div.content p").css("color", "blue");

    // Task 5: Select the input field with id "inputField" and set its border to 2px solid green
    $("#inputField").css("border", "2px solid green");

    // Task 6: Select the last <li> element in the <ul> and make its text italic
    $("ul li:last").css("font-style", "italic");

    // Task 7: Select the <button> element with id "submitButton" and change its text to "Click Me"
    $("#submitButton").text("Click Me");

    // Task 8: Select all even-numbered <li> elements in the <ul> and add a class "even"
    $("ul li:even").addClass("even");

    // Task 9 (Hard): Select the parent <div> of the <input> element and change its background color to #f0f0f0
    $("#inputField").parent("div").css("background-color", "#f0f0f0");

    // Task 10 (Hard): Select the <p> element that comes after the <input> element and change its text to "New Paragraph"
    $("#inputField ~ p").text("New Paragraph");
});

```

## jQuery Filters: `:not()`, `:lt()`, `:gt()`, Attribute Filter

### 1. `:not()` Filter:
The `:not()` filter selects all elements that do not match the specified selector.

**Description:**
```javascript
// Selects all paragraphs that do not have the class "exclude"
$("p:not(.exclude)").css("color", "green");
```
## 2. :lt() Filter:
The :lt() filter selects all elements at an index less than a specified index within the set of matched elements.

Description:

```javascript
// Selects the first three <li> elements in the <ul>
$("ul li:lt(3)").css("font-weight", "bold");
```
## 3. :gt() Filter:
The :gt() filter selects all elements at an index greater than a specified index within the set of matched elements.

Description:

```javascript
// Selects all <p> elements after the first two paragraphs
$("p:gt(1)").css("font-style", "italic");
```
## 4. Attribute Filter:
Attribute filters select elements based on the presence or value of their attributes.

Description:

```javascript
// Selects all elements with the "data-type" attribute equal to "example"
$("[data-type='example']").addClass("highlight");
```
Description:

```javascript
// Selects all input elements with a "placeholder" attribute
$("input[placeholder]").css("border", "1px solid #ccc");
```


## Traversing the DOM 

### 1. .next():
The .next() method gets the immediately following sibling of each element in the set.

Description:

```javascript
// Selects the next sibling of the element with ID "myElement"
$("#myElement").next().css("color", "blue");
```
### 2. .prev():
The .prev() method gets the immediately preceding sibling of each element in the set.

Description:

```javascript
// Selects the previous sibling of the element with ID "myElement"
$("#myElement").prev().css("color", "green");
```
### 3. .parent():
The .parent() method gets the parent of each element in the set.

Description:

```javascript
// Selects the parent of all <span> elements
$("span").parent().addClass("highlight");
```
### 4. .parents():
The .parents() method gets the ancestors of each element in the set, optionally filtered by a selector.

Description:

```javascript
// Selects all ancestors of the element with ID "myElement"
$("#myElement").parents().css("border", "1px solid red");
```
### 5. .children():
The .children() method gets the immediate children of each element in the set, optionally filtered by a selector.

Description:

```javascript
// Selects all immediate children of the <ul> element
$("ul").children().addClass("list-item");
```
### 6. .find():
The .find() method gets the descendants of each element in the set, optionally filtered by a selector.

Description:

```javascript
// Selects all <span> elements inside the element with class "container"
$(".container").find("span").css("font-weight", "bold");
```
### 7. .closest():
The .closest() method gets the first ancestor of each element in the set, optionally filtered by a selector.

Description:

```javascript
// Selects the closest ancestor of the element with class "highlight"
$(".highlight").closest("div").css("background-color", "#f0f0f0");
```

## Chaining 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chaining Example</title>
    <style>
        .section {
            margin: 20px;
            padding: 10px;
        }

        #contact-methods {
            border: 1px solid black;
            padding: 10px;
        }
    </style>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</head>
<body>

<div class="section">
    <div id="contact-methods">
        <p>Contact Methods</p>
        <ul>
            <li>Email</li>
            <li>Phone</li>
            <li>Mail</li>
        </ul>
    </div>
</div>

<script>
    $(document).ready(function () {
        // Chained jQuery methods for styling
        $("#contact-methods").css({border: "2px solid blue"})
            .next().css({border: "2px solid red"})
            .closest(".section").css({border: "2px solid green"});
    });
</script>

</body>
</html>

```

## jQuery Methods Descriptions

### 1. `.append()`:
The `.append()` method inserts content at the end of each element in the set of matched elements.

### 2. `.prepend()`:
The `.prepend()` method inserts content at the beginning of each element in the set of matched elements.

### 3. `.before()`:
The `.before()` method inserts content before each element in the set of matched elements.

### 4. `.after()`:
The `.after()` method inserts content after each element in the set of matched elements.

### 5. `.html()`:
The `.html()` method sets or returns the HTML content of the selected elements.

### 6. `.text()`:
The `.text()` method sets or returns the text content of the selected elements.

---

## jQuery Methods Examples

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jQuery Methods Examples</title>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</head>
<body>

<div id="myDiv">
    <p>Initial Content</p>
</div>

<script>
    // jQuery code for each method
    $(document).ready(function () {
        // Append Example
        $("#myDiv").append("<p>Appended Paragraph</p>");

        // Prepend Example
        $("#myDiv").prepend("<p>Prepended Paragraph</p>");

        // Before Example
        $("#myDiv").before("<p>Before Paragraph</p>");

        // After Example
        $("#myDiv").after("<p>After Paragraph</p>");

        // HTML Example
        $("#myDiv").html("<p>New HTML Content</p>");

        // Text Example
        $("#myDiv").text("New Text Content");
    });
</script>

</body>
</html>
```

## jQuery Methods Descriptions

### 1. `.wrap()`:
The `.wrap()` method wraps an HTML structure around each element in the set of matched elements.

### 2. `.unwrap()`:
The `.unwrap()` method removes the parent of each element in the set of matched elements, leaving the selected elements.

### 3. `.wrapAll()`:
The `.wrapAll()` method wraps an HTML structure around all elements in the set of matched elements as a single group.

---

## jQuery Methods Examples

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jQuery Methods Examples</title>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</head>
<body>

<div class="container">
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    <p>Paragraph 3</p>
</div>

<script>
    // jQuery code for each method
    $(document).ready(function () {
        // Wrap Example
        $("p").wrap("<div class='wrapper'></div>");

        // Unwrap Example
        $("div.wrapper").unwrap();

        // WrapAll Example
        $("p").wrapAll("<div class='group-wrapper'></div>");
    });
</script>

</body>
</html>
```

## jQuery Methods Descriptions

### 1. `.empty()`:
The `.empty()` method removes all child nodes and content from each element in the set of matched elements.

### 2. `.remove()`:
The `.remove()` method removes the set of matched elements from the DOM, including all their descendants.

---

## jQuery Methods Examples

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jQuery Methods Examples</title>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</head>
<body>

<div class="container">
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    <p>Paragraph 3</p>
</div>

<script>
    // jQuery code for each method
    $(document).ready(function () {
        // Empty Example
        $("div.container").empty();

        // Remove Example
        $("div.container").remove();
    });
</script>

</body>
</html>
```

## jQuery Methods Descriptions

### 1. `.removeAttr()`:
The `.removeAttr()` method removes an attribute from each element in the set of matched elements.

### 2. `.attr()` (to get and update):
The `.attr()` method gets the value of an attribute for the first element in the set of matched elements. To update an attribute, you can pass a second argument to set the value of the attribute.

---

## jQuery Methods Examples

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jQuery Methods Examples</title>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</head>
<body>

<div id="myElement" class="highlight" data-type="example">Sample Element</div>

<script>
    // jQuery code for each method
    $(document).ready(function () {
        // removeAttr Example
        $("#myElement").removeAttr("data-type");

        // attr (to get) Example
        var elementClass = $("#myElement").attr("class");
        console.log("Class Attribute:", elementClass);

        // attr (to update) Example
        $("#myElement").attr("data-type", "new-example");
    });
</script>

</body>
</html>
```

## jQuery Methods Descriptions

### 1. `.removeClass()`:
The `.removeClass()` method removes one or more classes from each element in the set of matched elements.

### 2. `.addClass()`:
The `.addClass()` method adds one or more classes to each element in the set of matched elements.

### 3. `.toggleClass()`:
The `.toggleClass()` method adds or removes one or more classes from each element in the set of matched elements, depending on whether the class is present or absent.

---

## jQuery Methods Examples

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jQuery Methods Examples</title>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</head>
<body>

<div id="myElement" class="highlight">Sample Element</div>

<script>
    // jQuery code for each method
    $(document).ready(function () {
        // removeClass Example
        $("#myElement").removeClass("highlight");

        // addClass Example
        $("#myElement").addClass("new-class");

        // toggleClass Example
        $("#myElement").toggleClass("toggle-class");
    });
</script>

</body>
</html>
```

## jQuery Methods Descriptions

### 1. `.on()`:
The `.on()` method attaches one or more event handlers for specified events to the selected elements.

### 2. `.off()`:
The `.off()` method removes an event handler previously attached using `.on()`.

---

## jQuery Methods Examples

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jQuery Methods Examples</title>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</head>
<body>

<button id="myButton">Click Me</button>

<script>
    // jQuery code for each method
    $(document).ready(function () {
        // on Example
        $("#myButton").on("click", function () {
            alert("Button Clicked!");
        });

        // off Example (to remove the previously attached click event)
        $("#myButton").off("click");
    });
</script>

</body>
</html>
```
## jQuery Methods Descriptions

### 1. `.click()`:
The `.click()` method attaches a function to be executed when the specified event (in this case, a click event) occurs on the selected elements.

### 2. `.dblclick()`:
The `.dblclick()` method attaches a function to be executed when the specified event (in this case, a double click event) occurs on the selected elements.

### 3. `$(document).ready()` and `$(function())`:
Both `$(document).ready()` and `$(function())` are jQuery shorthand for executing code when the DOM is fully loaded. They are equivalent in functionality.

---

## jQuery Methods Examples

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jQuery Methods Examples</title>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</head>
<body>

<button id="myButton">Click Me</button>

<script>
    // jQuery code for click and dblclick events
    $(document).ready(function () {
        // click Example
        $("#myButton").click(function () {
            alert("Button Clicked!");
        });

        // dblclick Example
        $("#myButton").dblclick(function () {
            alert("Button Double Clicked!");
        });
    });

    // Alternative shorthand using $(function())
    $(function () {
        // Your code here
    });
</script>

</body>
</html>
```

## Difference Between Event Handling in Vanilla JavaScript and jQuery

### 1. Event Handling Syntax:

### Vanilla JavaScript:
In vanilla JavaScript, you typically use the `addEventListener` method to attach event handlers.

Example:
```javascript
const myElement = document.getElementById("myElement");
myElement.addEventListener("click", function (event) {
    // Your event handling code here
});
```
### jQuery:
In jQuery, you use the .on() method to attach event handlers.

Example:

``` javascript
$("#myElement").on("click", function (event) {
    // Your event handling code here
});
```
## 2. Event Object:
### Vanilla JavaScript:
In vanilla JavaScript, the event object is directly passed to the event handler function.

Example:

```javascript
myElement.addEventListener("click", function (event) {
    console.log(event.target); // Access the target element
    console.log(event.type);   // Access the event type
    console.log(event.pageX);  // Access the X coordinate of the event
    console.log(event.pageY);  // Access the Y coordinate of the event
    event.stopPropagation();   // Prevent event propagation
});
```
### jQuery:
In jQuery, the event object is also directly passed to the event handler function.

Example:

```javascript
$("#myElement").on("click", function (event) {
    console.log(event.target); // Access the target element
    console.log(event.type);   // Access the event type
    console.log(event.pageX);  // Access the X coordinate of the event
    console.log(event.pageY);  // Access the Y coordinate of the event
    event.stopPropagation();   // Prevent event propagation
});
```
