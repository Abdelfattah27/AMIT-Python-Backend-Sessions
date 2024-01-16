# React Router Installation

React Router is a powerful navigation library for React applications that enables seamless navigation and routing. Follow the steps below to install React Router in your project.

## 1. Install React Router Dom

React Router Dom is the package that provides DOM bindings for React Router. It is commonly used for web applications. Install it using npm or yarn.

### Using npm:

```bash
npm install react-router-dom
```

```js
// Import BrowserRouter index.js
import { BrowserRouter } from 'react-router-dom';

// Wrap your main component with BrowserRouter
const Main = () => {
  return (
    <BrowserRouter>
         <App />
    </BrowserRouter>
  );
};

// app.js
// Define your components
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

// Create routes using the Route component
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};


// Navigation

// Import Link
import { Link } from 'react-router-dom';

// Use Link for navigation
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};


```