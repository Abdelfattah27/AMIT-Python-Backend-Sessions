# static pages
## Declarative React 

The concept of "declarative" in React refers to describing what you want to achieve in your user interface without explicitly specifying how to achieve it. React handles the "how" part for you. Let's illustrate the declarative nature of React with an example comparing the creation of an element using plain Vanilla JavaScript and React with a CDN.


### Creating an Element with Vanilla JavaScript (Imperative): 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vanilla JS Element</title>
    <style>
        /* Define a CSS class */
        .custom-class {
            color: blue;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <div id="vanilla-element"></div>

    <script>
        const vanillaElement = document.getElementById('vanilla-element');
        const paragraph = document.createElement('p');
        paragraph.classList.add('custom-class');
        paragraph.id = 'custom-id';
        paragraph.textContent = 'This is created with vanilla JavaScript.';
        vanillaElement.appendChild(paragraph);
    </script>
</body>
</html>


```
### Creating an Element with React (Declarative):

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React with CDN</title>
</head>
<body>
    <div id="root"></div>
    
    <!-- Include React and ReactDOM from a CDN -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
    <script type="text/babel">
    function HelloWorld() {
        return (
            <div>
                <h1>Hello, React!</h1>
            </div>
        );
    }

    const element = <p>Hello</p>
    console.log(element)

    const root = ReactDOM.createRoot( document.getElementById('root'))
    console.log(root)
    root.render(element)
    </script>
</body>
</html>

```

The key difference is that in the Vanilla JavaScript example, you provide a sequence of imperative instructions, while in the React example, you declare the desired UI structure declaratively. React abstracts away the DOM manipulation details and efficiently updates the UI as state or props change. This declarative approach makes your code more predictable, easier to read, and maintainable, especially as your UI becomes more complex.

2.24 // project
- composable code 
- declarative >> imparative 
- JSX 
- log JSX 
- chalenge 38 
- run react without react-app
- append() , reactDOM 
- call a function


- props
- create multiple elements in array of data
