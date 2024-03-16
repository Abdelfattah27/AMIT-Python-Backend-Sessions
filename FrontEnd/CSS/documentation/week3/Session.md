# CSS Session: Flexbox, Media Queries, and Font Awesome

In this CSS session, we will explore three essential topics that are integral to modern web design and development: **Flexbox**, **Media Queries**, and **Font Awesome**. Each of these topics plays a crucial role in creating responsive and visually appealing websites. Let's take a closer look at what we will cover:

## 1. Flexbox

**Introduction to Flexbox**
- Understanding the Flexbox layout model.
- How Flexbox simplifies complex layouts.

**Flex Container and Flex Items**
- Defining the flex container and its child elements (flex items).
- Exploring the relationship between container and items.

**Flex Properties**
- A deep dive into essential Flexbox properties:
  - `display: flex;`, `flex-direction`, `justify-content`, `align-items`, and more.
- Practical exercises for using these properties to create flexible layouts.

**Advanced Flexbox Techniques**
- Mastering advanced Flexbox concepts like nesting, aligning, and controlling item order.
- Creating responsive designs using Flexbox.

## 2. Media Queries

**Responsive Web Design**
- Understanding the importance of responsive web design.
- How different devices and screen sizes affect layout.

**Media Query Basics**
- Introduction to media queries.
- Writing media query syntax to target specific screen characteristics.

**Common Media Features**
- Exploring common media features such as screen width, height, and orientation.
- Using media features to create responsive layouts.

**Implementing Responsive Design**
- Hands-on examples of implementing responsive design using media queries.
- Techniques for adapting content and layout to various devices.

## 3. Font Awesome

**Introduction to Font Awesome**
- What is Font Awesome, and why is it useful for web development?
- The advantages of using scalable vector icons.

**Using Font Awesome Icons**
- How to integrate Font Awesome icons into HTML and CSS.
- Customizing icons to match your website's style.

**Practical Applications**
- Real-world examples of using Font Awesome icons in navigation menus, buttons, and more.
- Enhancing user experience and design with icons.

Throughout this session, you will gain a comprehensive understanding of Flexbox for layout control, Media Queries for responsive design, and how to use Font Awesome icons to enhance your web projects. We will combine theoretical knowledge with practical exercises to ensure you leave with the skills and confidence to implement these CSS techniques effectively in your web development endeavors.



## Understanding the Flexbox Layout Model

The Flexbox layout model, also known as the Flexible Box Layout, is a powerful CSS layout system designed to simplify the process of creating flexible and responsive web layouts. It allows you to distribute space within a container, even when the size of your items is unknown or dynamic.

### Key Concepts

**1. Flex Container:** 
- A container element that holds a group of flex items.
- To create a flex container, use the `display: flex;` property on the container element.

**2. Flex Items:**
- The child elements of a flex container are referred to as flex items.
- Flex items are automatically aligned within the flex container according to the layout rules.

**3. Main Axis and Cross Axis:**
- In a flex container, there are two main axes: the main axis and the cross axis.
- The main axis is the primary axis along which flex items are distributed.
- The cross axis is perpendicular to the main axis.

**4. Flex Direction:**
- The `flex-direction` property determines the direction of the main axis.
- Values include `row`, `row-reverse`, `column`, and `column-reverse`.

**5. Justify Content:**
- `justify-content` defines how flex items are distributed along the main axis.
- Common values include `flex-start`, `flex-end`, `center`, `space-between`, and `space-around`.

**6. Align Items and Align Content:**
- `align-items` aligns flex items along the cross axis.
- `align-content` aligns flex lines (when wrapping is enabled).
- Common values include `flex-start`, `flex-end`, `center`, `stretch`, and `baseline`.

### Advantages of Flexbox

Flexbox offers several advantages in web layout design:

**1. Simplified Layouts:**
- Flexbox simplifies complex layouts that would be challenging to achieve with traditional CSS approaches.

**2. Equal Sizing:**
- It allows for equal sizing of items, regardless of their content or dimensions.

**3. Responsive Design:**
- Flexbox is well-suited for creating responsive designs that adapt to various screen sizes and devices.

**4. Easy Reordering:**
- Flex items can be easily reordered within the container without changing the HTML structure.

**5. Self-Aligned Items:**
- Flex items can be individually aligned within the container, giving fine-grained control over layout.

**6. Reduced Need for Hacks:**
- Flexbox reduces the need for CSS hacks and workarounds to achieve specific layouts.

### Practical Application

To apply the Flexbox layout model, define a flex container by setting `display: flex;` on the container element. Then, manipulate various properties such as `flex-direction`, `justify-content`, and `align-items` to achieve the desired layout. Experiment with different values and combinations to create flexible and responsive designs.

Flexbox is an essential tool for modern web developers, providing a more efficient and intuitive way to create dynamic layouts. It's particularly valuable for designing web pages with complex, multi-dimensional structures.


## How Flexbox Simplifies Complex Layouts

The Flexbox layout model, officially known as the Flexible Box Layout, is a CSS technology designed to simplify the process of creating complex web layouts. It addresses many of the challenges and limitations of traditional CSS layout techniques, making it an ideal choice for modern web development. Here's how Flexbox simplifies complex layouts:

### 1. Eliminates the Need for Floats and Positioning

In traditional CSS layouts, achieving complex designs often required the use of floats and positioning, which could lead to code that was difficult to maintain and understand. Flexbox eliminates the need for these techniques, providing a more intuitive way to control the placement and alignment of elements within a container. With Flexbox, you can create sophisticated layouts using a cleaner and more maintainable code structure.

### 2. Automatic Equal Sizing

One of the key features of Flexbox is its ability to distribute space evenly among flex items. This means that you can create layouts where all items within a container have equal sizes, regardless of their content or dimensions. This feature simplifies the process of creating grids, galleries, and navigation menus where consistent sizing is essential.

### 3. Responsive Design Made Easier

Flexbox is inherently designed to create responsive layouts. By adjusting properties like `flex-direction`, `flex-wrap`, and `justify-content`, you can easily adapt your layout to different screen sizes and orientations. This simplifies the implementation of responsive design, reducing the need for complex media queries and conditional styling.

### 4. Flexible Reordering

In many complex layouts, elements need to be reordered for different screen sizes or design variations. Flexbox allows you to change the order of flex items within a container without altering the HTML structure. This flexibility simplifies the management of elements and makes it easier to adapt your design to various scenarios.

### 5. Fine-Grained Alignment Control

With Flexbox, you have precise control over the alignment of individual flex items within a container. You can vertically and horizontally align items, control their spacing, and achieve a pixel-perfect design with ease. This level of control simplifies the creation of intricate user interfaces and ensures that elements align as intended.

### 6. Reduced Need for Hacks

In the past, web developers often had to resort to CSS hacks and workarounds to achieve specific layout effects. Flexbox significantly reduces the need for such hacks by providing a more robust and predictable layout system. This leads to cleaner, more maintainable code that is easier to troubleshoot.


## Defining the Flex Container and Its Flex Items

In the Flexbox layout model, the primary building blocks are the **flex container** and its child elements, known as **flex items**. Understanding these concepts is essential for creating flexible and responsive layouts.

### 1. Flex Container

A **flex container** is any HTML element that you designate as a container for organizing its child elements using the Flexbox layout. To create a flex container, you apply the CSS property `display: flex;` or `display: inline-flex;` to the container element. Here's what you need to know about flex containers:

- **Declaration**: To define an element as a flex container, add the following CSS rule to the container's style:
  ```css
  .container {
    display: flex; /* or display: inline-flex; */
  }
    ```
- `Primary Axis:` The main axis of a flex container determines the direction in which flex items are laid out. By default, the main axis is horizontal (left to right).
- `Cross Axis:` The cross axis is perpendicular to the main axis. Its direction depends on the main axis (vertical when the main axis is horizontal and vice versa).
- `Flex Container Properties:` Flex containers can have properties like flex-direction, justify-content, and align-items that control the layout and alignment of flex items.


### 2. Flex Items

Flex items are the child elements of a flex container. These items are automatically aligned and distributed along the main axis of the container, allowing you to create flexible and responsive layouts. Here's what you need to know about flex items:

- `Declaration:` Any direct child element of a flex container becomes a flex item without requiring additional CSS declarations.
- `Arrangement:` Flex items are arranged linearly along the main axis of the flex container. The order in which they appear in the HTML source affects their initial order.
- `Flex Item Properties:` Flex items can have properties like flex-grow, flex-shrink, and flex-basis that control how they respond to available space within the flex container.
- `Alignment:` Flex items can be aligned along both the main axis and the cross axis using properties like align-self.

### Example
Let's consider a simple HTML structure with a flex container and its flex items:

```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

In this example, the div element with the class container becomes the flex container, and the div elements with the class item are the flex items. By applying display: flex; to the container, we establish a Flexbox layout. The items will be arranged along the main axis (horizontal by default) and can be further styled and controlled using Flexbox properties.


## Exploring `flex-direction` and Its Impact on Flex Items

The `flex-direction` property is a fundamental part of the Flexbox layout model that allows you to control the flow and direction of flex items within a flex container. Understanding how `flex-direction` works is essential for creating flexible and responsive layouts.

### The `flex-direction` Property

The `flex-direction` property defines the main axis of a flex container, which, in turn, determines how flex items are laid out within that container. It essentially sets the direction in which items flow. `flex-direction` can take one of four values:

1. **`row` (Default)**: This value sets the main axis to run horizontally from left to right. In this configuration, flex items flow in a row.

2. **`row-reverse`**: Similar to `row`, but it reverses the main axis direction. Items flow from right to left.

3. **`column`**: This value sets the main axis to run vertically from top to bottom. Flex items stack on top of each other, creating a column.

4. **`column-reverse`**: Similar to `column`, but it reverses the main axis direction. Items stack from bottom to top.

### Impact on Layout

- **Horizontal Layout (`row` and `row-reverse`)**:
  - In a horizontal layout (`row`), flex items flow horizontally, aligning along the main axis from left to right.
  - In `row-reverse`, the flow is reversed, with items aligning from right to left.

- **Vertical Layout (`column` and `column-reverse`)**:
  - In a vertical layout (`column`), flex items stack vertically, aligning along the main axis from top to bottom.
  - In `column-reverse`, the flow is reversed, with items aligning from bottom to top.

### Practical Applications

Understanding how to use `flex-direction` is crucial for designing various types of layouts:

- **Horizontal Navigation Menus**: Use `row` for a horizontal navigation menu with items flowing from left to right.

- **Vertical Sidebars**: Apply `column` to create a vertical sidebar menu with items stacked from top to bottom.

- **Right-to-Left Languages**: For languages that read from right to left (e.g., Arabic or Hebrew), `row` and `row-reverse` can be used effectively to ensure proper alignment.

- **Reversing Order**: If you want to reverse the order of items within a container, `row-reverse` and `column-reverse` are useful.

- **Responsive Design**: Adjust `flex-direction` based on screen orientation or device to create responsive layouts that adapt to different viewports.

### Example

Here's a simple HTML structure with a flex container and its items to illustrate the `flex-direction` property:

```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

To create a horizontal layout with items flowing from left to right, you can apply the following CSS:

```css
.container {
  display: flex;
  flex-direction: row; /* Default value, can be omitted */
}
```

In this example, the flex-direction property is set to row, resulting in a horizontal flow of flex items. Experimenting with different flex-direction values allows you to achieve various layouts, making your designs more flexible and responsive.


## Introduction to `flex-wrap` and `flex-flow` Properties for Handling Wrapping

In the Flexbox layout model, the `flex-wrap` and `flex-flow` properties are essential for controlling how flex items behave when they exceed the available space within a flex container. These properties allow you to manage wrapping, which is crucial for creating responsive and flexible layouts.

### The `flex-wrap` Property

The `flex-wrap` property determines whether flex items are allowed to wrap to the next line when they exceed the width or height of the flex container. It accepts one of three values:

- **`nowrap` (Default)**: Flex items remain on a single line, and any overflow is hidden or overflows the container.

- **`wrap`**: Flex items wrap to the next line when they exceed the container's width or height. This allows for multi-line layouts.

- **`wrap-reverse`**: Similar to `wrap`, but the wrapping occurs in reverse order. Items wrap from bottom to top or from right to left.

### The `flex-flow` Property

The `flex-flow` property is a shorthand property that combines `flex-direction` and `flex-wrap` into a single declaration. It allows you to specify both the main axis direction and wrapping behavior in a concise manner. The syntax is as follows:

```css
flex-flow: <flex-direction> <flex-wrap>;
```

- `<flex-direction>:` Specifies the main axis direction, which can be row, row-reverse, column, or column-reverse.

- `<flex-wrap>:` Determines the wrapping behavior, which can be nowrap, wrap, or wrap-reverse.

### Practical Applications

Understanding how to use `flex-wrap` and `flex-flow` is essential for creating layouts that adapt to different screen sizes and orientations:

- `Responsive Design:` Use wrap to allow flex items to wrap onto new lines when screen space is limited, making your layout responsive to various screen widths.

- `Multi-Column Layouts:` Apply wrap to create multi-column layouts, such as magazine-style articles or product listings.

- `Reverse Wrapping:` Employ wrap-reverse for right-to-left languages or scenarios where you want items to wrap in a reverse order.

- `Preventing Wrapping:` Use nowrap to prevent items from wrapping, ensuring that they stay on a single line even if they overflow the container.

### Example
Here's an example of using the flex-flow property to create a multi-line layout for a flex container:

```css
.container {
  display: flex;
  flex-flow: row wrap;
}
```

In this example, `flex-flow` combines `flex-direction: row;` and `flex-wrap: wrap;`, resulting in a horizontal layout where items wrap to the next line when needed. This is particularly useful for creating responsive grids or navigation menus.

## Practical Exercises on Aligning and Justifying Flex Items

To gain a deeper understanding of how to use Flexbox for aligning and justifying flex items within a container, let's dive into some hands-on exercises. These exercises will cover various alignment and justification scenarios that you may encounter when designing layouts with Flexbox.

### Exercise 1: Vertical Alignment

**Objective**: Vertically align flex items within a flex container.

**Instructions**:
1. Create a flex container with a fixed height, e.g., `300px`.
2. Inside the container, add three flex items with varying content.
3. Vertically center-align the flex items within the container.

**Hints**:
- Use the `align-items` property to control vertical alignment.
- Experiment with values like `center`, `flex-start`, and `flex-end`.

### Exercise 2: Horizontal Alignment

**Objective**: Horizontally align flex items within a flex container.

**Instructions**:
1. Create a flex container with a fixed width, e.g., `400px`.
2. Inside the container, add five flex items with different content lengths.
3. Horizontally center-align the flex items within the container.

**Hints**:
- Use the `justify-content` property to control horizontal alignment.
- Try values like `center`, `flex-start`, and `flex-end`.

### Exercise 3: Equal Spacing

**Objective**: Distribute flex items evenly with equal spacing between them.

**Instructions**:
1. Create a flex container with a fixed width, e.g., `500px`.
2. Inside the container, add four flex items with varying content.
3. Ensure that there is equal space between the items, both horizontally and vertically.

**Hints**:
- Use `justify-content` and `align-items` to distribute items evenly.
- Experiment with values like `space-between` and `space-around`.

### Exercise 4: Centered Content

**Objective**: Center-align the content of each flex item within the container.

**Instructions**:
1. Create a flex container with a fixed width and height, e.g., `300px`.
2. Inside the container, add three flex items with content that includes text and images.
3. Center-align the content (text and images) within each flex item.

**Hints**:
- You may need to use CSS properties within the flex items to center-align their content.
- Experiment with `text-align`, `vertical-align`, and `display` properties.

### Exercise 5: Responsive Alignment

**Objective**: Create a responsive layout that adjusts alignment based on screen size.

**Instructions**:
1. Create a flex container with `flex-direction: column` to stack items vertically on small screens.
2. Add four flex items with content.
3. On larger screens (e.g., screens wider than 768px), center-align the items horizontally.

**Hints**:
- Utilize media queries to adjust the alignment properties based on screen size.
- Test your layout on different screen widths to ensure responsiveness.

These practical exercises will help you become proficient in using Flexbox to align and justify flex items within a container. As you work through these exercises, you'll gain valuable hands-on experience that you can apply to real-world web design projects.

you can check thia : (Flex Frogg)[https://flexboxfroggy.com/]


## Individually Controlling Flex Item Alignment and Order

In Flexbox layouts, you have the flexibility to control the alignment and order of individual flex items within a flex container. This level of control allows you to fine-tune your layout to meet specific design requirements.

### Controlling Alignment

#### `align-self` Property

The `align-self` property allows you to individually control the alignment of each flex item along the cross axis (perpendicular to the main axis). It overrides the `align-items` property set on the flex container for that particular item.

**Usage**:
```css
.item {
  align-self: <value>;
}
```

- **`<value>:`** Specifies the alignment for the individual flex item. Common values include `flex-start`, `flex-end`, `center`, `baseline`, and `stretch`.

**Example**
```css
.item-1 {
  align-self: flex-start;
}

.item-2 {
  align-self: center;
}

.item-3 {
  align-self: flex-end;
}
```

In this example, `item-1` is aligned to the start of the cross axis, `item-2` is centered, and `item-3` is aligned to the end.

### Controlling Order
`order` Property
The `order` property allows you to specify the order in which flex items appear within the flex container. By default, flex items have an order of `0`, but you can assign positive or negative values to reorder them.

**Usage:**

```css
.item {
  order: <value>;
}
```

- **`<value>:`** A numerical value that determines the order of the item. Items are ordered from lowest to highest values.

**Example:**

```css
.item-1 {
  order: 2;
}

.item-2 {
  order: 1;
}

.item-3 {
  order: 3;
}
```
In this example, `item-2` will appear first, followed by `item-1`, and then item-3 due to their assigned order values.

## Practical Applications
**Responsive Design:** Use align-self to adjust the alignment of specific items in response to different screen sizes or orientations.

**Custom Grids:** Rearrange flex items within a grid-like structure by manipulating their order values.

**Vertical Centering:** Vertically center-align specific items within a horizontal flex container.

**Custom Item Styles:** Apply unique alignment and order styles to create visually appealing and distinct items within the same container.

**Interactive Elements:** Change the order of interactive elements (e.g., buttons, cards) to improve user experience and flow.


#### Example
Here's an example of how to use align-self and order to control alignment and order within a flex container:

```html
<div class="container">
  <div class="item item-1">Item 1</div>
  <div class="item item-2">Item 2</div>
  <div class="item item-3">Item 3</div>
</div>
```
```css
.container {
  display: flex;
}

.item {
  padding: 10px;
  border: 1px solid #333;
  margin: 5px;
}

.item-1 {
  align-self: flex-start;
  order: 3;
}

.item-2 {
  align-self: center;
  order: 2;
}

.item-3 {
  align-self: flex-end;
  order: 1;
}
```

In this example, `item-1` is aligned to the start, `item-2` is centered, and `item-3` is aligned to the end. Additionally, their order values control their visual order within the container.



## Understanding Media Queries and Their Role in Responsive Design

Media queries are a crucial component of responsive web design. They allow you to apply different styles or layouts to a web page based on various characteristics of the user's device or viewport. This adaptability ensures that your website looks and functions well on screens of all sizes and orientations.

### What Are Media Queries?

A media query is a CSS technique that checks the characteristics of the user's device or viewport and applies styles based on specific conditions. These conditions are defined within `@media` rules in your CSS code. Media queries can target a variety of characteristics, including:

- **Screen Width**: You can set different styles for screens of varying widths, such as smartphones, tablets, laptops, and desktop monitors.

- **Screen Height**: Similar to width, you can specify styles for screens with different heights, which is useful for adjusting layouts on ultra-wide or ultra-short displays.

- **Device Orientation**: Media queries can detect whether the device is in portrait (vertical) or landscape (horizontal) mode. This is valuable for optimizing layouts on mobile devices.

- **Device Type**: You can differentiate between screen types, like handheld devices, screen readers, or printers, to provide tailored experiences for each.

- **Resolution**: Media queries can target high-resolution screens (e.g., Retina displays) to serve higher-quality images or adjust typography for better readability.

### Role in Responsive Design

Media queries play a central role in responsive design by allowing you to create flexible and adaptive layouts and styles. Here's how they contribute to responsive design:

1. **Layout Adaptation**: Media queries enable you to adjust the layout of your web page to fit different screen sizes and orientations. You can switch from multi-column to single-column layouts, reposition elements, or change font sizes as needed.

2. **Content Prioritization**: On smaller screens, it's essential to prioritize content. Media queries let you hide or show specific elements, reorder content, or adjust font sizes to ensure that the most critical information is easily accessible.

3. **Optimized Images**: You can use media queries to serve different image sizes or resolutions based on the user's device. This helps reduce load times and improves performance, especially on mobile devices with limited bandwidth.

4. **Touch vs. Mouse Interaction**: Media queries allow you to optimize the user experience for touch devices by enlarging clickable elements (buttons, links) or providing touch-specific functionality.

5. **Improved Readability**: Adjusting typography styles through media queries ensures that text remains readable and aesthetically pleasing across various screens.

### Basic Syntax

Here's a basic syntax for a media query in CSS:

```css
@media (condition) {
  /* CSS styles for this condition */
}
```

`(condition):` This part contains the condition you want to check, such as screen width, height, orientation, or resolution.

### Example:

```css
/* Apply styles for screens with a maximum width of 768px */
@media (max-width: 768px) {
  /* CSS styles for small screens */
}
```

In this example, the styles within the media query will be applied only to screens with a maximum width of 768 pixels.


## Understanding the Syntax of Media Queries

Media queries in CSS are used to apply styles based on specific conditions or characteristics of the user's device or viewport. Understanding the syntax of media queries is essential for creating responsive and adaptable web designs.

### Basic Media Query Syntax

A media query consists of an `@media` rule followed by a condition and a set of CSS styles. The basic syntax is as follows:

```css
@media (condition) {
  /* CSS styles to apply when the condition is met */
}
```

- `@media:` This is the at-rule that indicates the start of a media query.

- `(condition):` This part contains the condition you want to check. It can target various characteristics, such as screen width, height, orientation, resolution, and more.

- `{ /* CSS styles */ }:` Within the curly braces, you define the CSS styles that should be applied when the specified condition is met.

### Common Media Query Conditions
 
Media queries can target a wide range of conditions. Here are some of the most commonly used conditions:

- `Screen Width`: You can specify a minimum or maximum screen width using the min-width and max-width conditions, respectively. For example:

    ```css
    @media (min-width: 768px) {
    /* Apply styles for screens wider than 768px */
    }
    ```
- `Screen Height`: Similar to width, you can use min-height and max-height conditions to target specific screen heights.

- `Device Orientation`: You can check whether the device is in portrait (vertical) or landscape (horizontal) orientation using the orientation condition. For example:

    ```css
    @media (orientation: landscape) {
    /* Apply styles for landscape orientation */
    }
    ```
- `Resolution`: You can target high-resolution screens (e.g., Retina displays) using the min-resolution condition. For example:
    ```css
    @media (min-resolution: 2dppx) {
    /* Apply styles for high-resolution screens */
    }
    ```
- `Device Type`: Media queries can differentiate between different device types. For example, you can target handheld devices, screen readers, or printers. Here's an example targeting print media:
    ```css
    @media print {
    /* Apply styles for printing */
    }
    ```
### Combining Conditions
You can combine multiple conditions within a single media query to create more specific rules. For example, you can target screens with a minimum width of 768px and a landscape orientation as follows:

```css
@media (min-width: 768px) and (orientation: landscape) {
  /* Apply styles for wide screens in landscape orientation */
}
```
### Logical Operators
Logical operators like and, or, and not can be used to refine conditions further. They allow you to create more complex media queries. For example:

```css
@media (min-width: 768px) and (max-width: 1024px) {
  /* Apply styles for screens between 768px and 1024px wide */
}
```

## Practical Examples of Using Media Queries for Responsive Designs

Media queries are essential for designing responsive websites that adapt gracefully to various screen sizes and devices. Here are some practical examples of how to use media queries to create responsive designs:

### Example 1: Adjusting Typography for Mobile Devices

**Objective**: Change font sizes for improved readability on small screens.

**Code**:
```css
/* Default font size for larger screens */
body {
  font-size: 16px;
}

/* Media query for screens up to 768px wide (e.g., smartphones) */
@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}
```

In this example, the font size is reduced for screens with a width of 768 pixels or less, making text more legible on mobile devices.

### Example 2: Rearranging Navigation Menu for Mobile

Objective: Convert a horizontal navigation menu to a vertical one on smaller screens.

Code:

```css
/* Default horizontal menu for larger screens */
.nav-menu {
  display: flex;
}

/* Media query for screens up to 768px wide */
@media (max-width: 768px) {
  .nav-menu {
    flex-direction: column;
  }
}
```

This media query changes the navigation menu layout from horizontal to vertical when the screen width is 768 pixels or less, improving mobile navigation.

### Example 3: Hiding Non-Essential Content on Small Screens
Objective: Hide certain elements to declutter the interface on mobile devices.

Code:
```css
/* Default style for a featured sidebar on larger screens */
.sidebar {
  width: 300px;
}

/* Media query for screens up to 768px wide */
@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
}

```

Here, the sidebar is hidden on screens with a width of 768 pixels or less, simplifying the mobile view.

### Example 4: Using High-Resolution Images for Retina Displays
Objective: Serve high-resolution images for devices with Retina displays.

Code:

```css
/* Default image for standard screens */
.img-container img {
  src: 'image.jpg';
}

/* Media query for screens with high resolution (e.g., Retina) */
@media (min-resolution: 2dppx) {
  .img-container img {
    src: 'image-2x.jpg';
  }
}

```

This media query detects high-resolution screens and serves images optimized for Retina displays.

## Frog Flexbox Solution 

1)  `justify-content: flex-end;`
2)  `justify-content: center;`
3)  `justify-content: space-around;`
4)  `justify-content: space-between;`
5)  `align-items: flex-end;`
6)  
```css
align-items: center;
justify-content: center;
```    
7)  `justify-content: space-around;`
8)  `flex-direction: row-reverse;`
9)  `flex-direction: column;`
10) 
```css 
flex-direction: row-reverse;
justify-content: flex-end;
```
11)  
```css
flex-direction: column;
justify-content: flex-end;
```
12)  
```css
flex-direction: column-reverse;
justify-content: space-between;
```
13)  
```css
flex-direction: row-reverse;
justify-content: center;   
align-items: flex-end;
```
14)  `order: 1;`
15)  `order: -3;`
16)  3)  `align-self: flex-end;`
17) 
```css
align-self: flex-end;
order: 1;
```
18)  `flex-wrap: wrap;`
19)    
```css
flex-direction: column;
flex-wrap: wrap;
```
20)  `flex-flow: column wrap;`
21)  2)  `align-content: flex-start;`
22) `align-content: flex-end;`
23) 
```css
flex-direction: column-reverse;
align-content: center;
``` 
24)  
```css
flex-flow:column-reverse wrap-reverse;
    
justify-content:center;

align-content:space-between;
```