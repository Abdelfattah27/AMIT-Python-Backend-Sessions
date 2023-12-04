
# Introduction
In this session, we will delve into essential window functions commonly used in web development. These functions provide developers with control over the browser window, enabling them to manipulate its state and behavior.

## `open()`
The `open()` function is used to open a new browser window or tab. It accepts parameters like URL, window name, and window features. This function is frequently employed when triggering pop-up windows or navigating to external links.

### Example:
```javascript
// Open a new window with specified URL and features
window.open('https://www.example.com', '_blank', 'width=600,height=400');
```

## `close()`

The close() function is utilized to close the current browser window or tab. This is particularly useful in scenarios where a temporary window or pop-up needs to be closed programmatically.

Example:
```javascript
// Close the current window
window.close();
``` 

## `moveTo()`

The moveTo() function is employed to move the current browser window to a specific position on the screen. Developers can define the new X and Y coordinates for the window.

Example:
```javascript
// Move the current window to coordinates (100, 200)
window.moveTo(100, 200);
```


# Screen Attributes Session

## Introduction
we will explore various attributes associated with the `screen` object in JavaScript. These attributes provide information about the user's screen and are valuable for creating responsive and dynamic web applications.

## `screen.width`
The `screen.width` attribute returns the total width of the user's screen in pixels.

### Example:
```javascript
// Get the width of the user's screen
const screenWidth = screen.width;
console.log(`Screen Width: ${screenWidth} pixels`);
```


## `screen.height`

The screen.height attribute returns the total height of the user's screen in pixels.

Example:
```javascript
// Get the height of the user's screen
const screenHeight = screen.height;
console.log(`Screen Height: ${screenHeight} pixels`);
```


## `screen.availWidth`

The screen.availWidth attribute returns the available width of the user's screen, excluding taskbars and other system elements.

Example:
```javascript

// Get the available height of the user's screen
const availScreenHeight = screen.availHeight;
console.log(`Available Screen Height: ${availScreenHeight} pixels`);

```

# `window.location` 

## Introduction
The `window.location` object provides information about the current URL and allows developers to manipulate the browser's location. Understanding its properties and methods is crucial for tasks such as URL parsing, navigation, and redirection.

## Properties

### `window.location.href`
The `window.location.href` property returns the complete URL of the current page, including the protocol, domain, path, and query parameters.

### Example:
```javascript
// Get the current page URL
const currentURL = window.location.href;
console.log(`Current URL: ${currentURL}`);
```

### window.location.hostname

The window.location.hostname property returns the domain name of the web host.

Example:
```javascript
// Get the domain name of the web host
const domainName = window.location.hostname;
console.log(`Domain Name: ${domainName}`);
```

### window.location.pathname

The window.location.pathname property returns the path and filename of the current page.

Example:
```javascript
// Get the path and filename of the current page
const pathAndFilename = window.location.pathname;
console.log(`Path and Filename: ${pathAndFilename}`);
```

### window.location.protocol
The window.location.protocol property returns the web protocol used, such as "http:" or "https:".

Example:
```javascript
// Get the web protocol used
const webProtocol = window.location.protocol;
console.log(`Web Protocol: ${webProtocol}`);
```

## Method

### window.location.assign()
The window.location.assign() method loads a new document. It is commonly used for URL redirection.

Example:
```javascript
// Redirect to a new page
window.location.assign('https://www.example.com');
```


# `history` Object Methods: `back()` and `forward()`

## Introduction
The `history` object in JavaScript provides methods for navigating through the user's browsing history. Two commonly used methods are `history.back()` and `history.forward()`, which simulate the actions of clicking the browser's back and forward buttons.

## Method: `history.back()`
The `history.back()` method navigates the browser to the previous page in the session history. It is equivalent to the user clicking the "back" button in the browser.

### Example:
```javascript
// Go back to the previous page in the session history
histor
y.back();
```

## Method: history.forward()
The history.forward() method navigates the browser to the next page in the session history. It is equivalent to the user clicking the "forward" button in the browser.

Example:
```javascript
// Go forward to the next page in the session history
history.forward();
```