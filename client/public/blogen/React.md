# React

1. Importance of React
2. What is a Frontend Library?
3. Basics of React Syntax
4. Practical Exercises

## Why React?

![/react1.png](/react1.png)

React is a frontend library developed by Facebook. Among numerous frontend libraries, React is used by **over 50 million websites** and by **40.78% of the top 10,000 websites**, making it one of the most beloved JavaScript frontend libraries to this day.

![/react2.png](/react2.png)

As shown above, global companies like Netflix, Facebook, Twitter, Airbnb, Uber Eats, and PayPal extensively use React.

Many companies highly value React experience. Especially for those interested in frontend development, React is one of the essential skills. Additionally, the continuously growing community introduces various plugins, tools, and libraries, providing exceptional scalability.

## Library vs Framework

When programming, you often encounter the terms "library" and "framework." Although they may seem similar, they have significant differences.

![/react3.png](/react3.png)

### 1. Library

A library is a collection of pre-written code. Developers use it to implement specific functionalities. The control lies with the developer. You choose and use the functions you need, and you manage the program's flow. For example, **React** is a library that provides code for building UIs. You can select and use the UI components you need.

### 2. Framework

A framework provides the basic structure to build programs. It manages the overall structure and flow, and developers write code within the framework's predefined rules. The control lies with the framework. Instead of controlling the program's flow yourself, you follow the rules provided by the framework to write code. For instance, **Angular** or **Django** are frameworks that guide how programs are developed within their structures.

### Key Difference:

- A library provides reusable code snippets that you can use while maintaining control over the overall flow.
- A framework defines a structure and rules that the developer must follow, and it controls the flow of the application.

In simple terms, the main difference lies in **who controls the program**. With a library, the developer has control, whereas with a framework, the control is dictated by its structure.

### Questions

1. Ji-soo used **Bootstrap** to quickly implement styling for her web application. By using various UI components from Bootstrap, she easily created layouts and designs. Is Bootstrap a framework or a library?

2. Min-su decided to use **Django** to develop a Python-based website. Django provided the project structure, and Min-su wrote code following the framework's rules. Is Django a framework or a library?

## Why Frontend Libraries? Why Isn't HTML Enough?

HTML is the fundamental markup language used to build the structure of a web page. However, for modern, complex web applications, HTML alone falls short. Here's why:

1. **Lack of Dynamic Functionality**: HTML is suitable for creating static pages but inadequate for dynamic web applications. Features like real-time data updates or handling user interactions require a dynamic language like JavaScript.
2. **Repetitive Work**: Building complex UIs with HTML often results in redundant code. **Frontend libraries (e.g., React)** offer component-based development, enabling reusable code and improved maintainability.
3. **State Management**: Managing data and UI states in large-scale applications is inefficient with HTML alone. Frontend libraries provide tools to handle state management effectively.

In summary, frontend libraries allow you to create dynamic web applications, manage code efficiently, and solve complex state management challenges that HTML alone cannot address.

## Getting Started with React

To start with React, you can easily create a React project using the **npx create-react-app** command.

### 1. Install Node.js

To use React, you need **Node.js** and **npm** (Node Package Manager). If Node.js is not installed, install it first.

- Visit the [Node.js official website](https://nodejs.org/), download the latest version, and install it.
- Once the installation is complete, verify it by running the following commands in your terminal:
  ```bash
  node -v
  npm -v
  ```
  If the versions are displayed, the installation was successful.

### 2. Create a React App

Once Node.js is installed, you can start a React project.

- **Open your terminal** and navigate to the directory where you want to create your React project.
- Then, run the following command:

  ```bash
  npx create-react-app my-app
  ```

  Here, `my-app` is the name of the project, which you can replace with any name you prefer.

  > **npx** is a command used to execute npm packages without installing them globally, allowing you to use `create-react-app` immediately.

### 3. Navigate to the Directory

After the React app is created, navigate to the project folder:

```bash
cd my-app
```

### 4. Run the App

To run the React app on your local server, type the following command:

```bash
npm start
```

This command will automatically open a browser displaying the default React app at `http://localhost:3000`.

### 5. Basic File Structure

When a React app is created, it has the following basic file structure:

- **public/**: Contains static files. This is where the `index.html` file is located, serving as the root file for the React app.
- **src/**: Contains the actual React code. The `App.js` file is the main component where the React code starts.

### 6. Modifying the Code

After running the generated React app, open the `src/App.js` file to modify the code. For example, you can change it to the following:

```jsx
function App() {
  return (
    <div>
      <h1>Hello, let's get started with React!</h1>
    </div>
  );
}

export default App;
```

When you modify the code, the browser will automatically update and display the changes.

## Running a Simple Program

```jsx
import React, { useState } from "react";

function App() {
  // State to store the list of tasks
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // Function to add a task to the list
  const addTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask(""); // Clear the input field
    }
  };

  // Function to remove a task from the list
  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div
      style={{
        background: "linear-gradient(#e66465, #9198e5)",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          background: "white",
          width: "60%",
          height: "70%",
          borderRadius: "30px",
          padding: "20px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1>TODO List</h1>
        <form onSubmit={addTask} style={{ marginBottom: "20px" }}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task"
            style={{
              padding: "10px",
              width: "60%",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginRight: "10px",
              fontSize: "16px",
              boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              background: "#e66465",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
              boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            Add
          </button>
        </form>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {tasks.map((task, index) => (
            <li
              key={index}
              style={{
                marginTop: "10px",
                fontSize: "18px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span>{task}</span>
              <button
                onClick={() => removeTask(index)}
                style={{
                  marginLeft: "10px",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  border: "none",
                  background: "#ff4d4d",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
```

Let's run the above file. Styling (CSS) can also be written in a separate file. This file recreates the TODO list implemented in HTML during earlier exercises using React. Compared to directly using HTML, CSS, and JavaScript, you'll find the code much simpler and more intuitive when using React.

## React Basics

### 1. **Component**

- **Description**: In React, UI is divided into small pieces called **components**. Each component acts like an HTML tag but is more flexible and reusable.
- **Analogy**: Think of a web page as being built with LEGO blocks. A React component is like an individual LEGO block: small and independent. By assembling multiple components, you can create a larger web page.
- **Examples**: Buttons, input forms, and navigation bars can all be components.
- **Code Example**:
  ```jsx
  function Welcome() {
    return <h1>Hello, world!</h1>;
  }
  ```
  Here, the `Welcome` component returns a block of text that says "Hello, world!"

#### Practice Problems:

1. Modify the code above to use a `p` tag instead of an `h1` tag to return the text "Learning React!"

2. Practice separating a component into a new file and importing it into the main file.

#### **Practice Example 2**: Separating and Importing Components

1. **Create `src/Greeting.js`**

   Write a new component called `Greeting` in the `src/Greeting.js` file:

   ```jsx
   import React from "react";

   function Greeting() {
     return <p>Learning React!</p>;
   }

   export default Greeting;
   ```

2. **Modify `src/App.js`**

   Import the `Greeting` component into `App.js` and use it:

   ```jsx
   import React from "react";
   import Greeting from "./Greeting";

   function App() {
     return (
       <div>
         <h1>React Component Example</h1>
         <Greeting />
       </div>
     );
   }

   export default App;
   ```

3. **Run the Code**
   - This code will display "React Component Example" with "Learning React!" below it.

---

### 2. **JSX (JavaScript XML)**

- **Description**: In React, **JSX** allows you to write HTML-like syntax within JavaScript. Although it looks like HTML, it is actually **JavaScript code** and feels familiar.
- **Analogy**: It looks like a mix of HTML and JavaScript, but JSX is eventually converted to JavaScript.
- **Example**: Although it looks like HTML, it behaves as JavaScript.
- **Code Example**:
  ```jsx
  const element = <h1>Hello, React!</h1>;
  ```
  This code appears to be an `h1` tag but is actually executed as JavaScript.

#### Practice Problem:

2. Use JSX to create a `div` containing an `h2` with the text "Practicing React" and a `p` tag with the text "Using JSX syntax."

---

### 3. **Props (Properties)**

- **Description**: **Props** are used to pass data to components. A component can use props to display different content based on the received data.
- **Analogy**: It is like passing arguments to a function, allowing components to use the given values.
- **Example**: Pass a name to the `Welcome` component to display different names.
- **Code Example**:

  ```jsx
  function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
  }

  <Welcome name="Alice" />
  <Welcome name="Bob" />
  ```

  When "Alice" and "Bob" are passed, the output will be "Hello, Alice!" and "Hello, Bob!"

#### Practice Problem:

3. Modify the `Welcome` component to display "Welcome, [name]!" using the name passed as a prop. For example: "Welcome, Alice!"

---

### 4. **State**

- **Description**: **State** is used to store values that a component needs to remember. It holds data that can change based on user interactions.
- **Analogy**: In HTML, it's difficult to store values when a form is filled or a button is clicked. React's `state` helps store these dynamic values.
- **Example**: Imagine a button that increases a number every time it is clicked.
- **Code Example**:

  ```jsx
  function Counter() {
    const [count, setCount] = React.useState(0);

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
  }
  ```

  Here, `count` is the state value, and it increases each time the button is clicked.

#### Practice Problem:

4. Modify the button so that instead of increasing the number, it decreases each time it is clicked.

---

### 5. **Event Handling**

- **Description**: In React, you can handle events like clicks and inputs, similar to HTML. However, React handles these events using JavaScript functions.
- **Analogy**: Like using `onclick` in HTML, React can run JavaScript functions when a button is clicked.
- **Code Example**:

  ```jsx
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click me</button>;
  ```

  Clicking the button triggers the `handleClick` function, displaying an alert.

#### Practice Problem:

5. Modify the button to log "Button was clicked!" to the console instead of showing an alert.

---

### 6. **Virtual DOM**

- **Description**: React doesn’t directly update the real DOM when changes occur. Instead, it updates the Virtual DOM first, which is faster, and then syncs only the necessary changes to the real DOM.
- **Analogy**: Directly manipulating the DOM in HTML can be slow and complex. React uses a Virtual DOM to make this process efficient by updating only the parts that need changes.

#### Practice Problem:

6. Use `useState` to create an input form where text entered by the user is displayed live on the screen.

---

### 7. **Using External Libraries**

React allows seamless integration with external libraries, such as **Material-UI** or **Bootstrap**, to build beautiful UIs easily.

#### Practice Problem 1 (Using Material-UI):

1. **Install Material-UI**:

   Run the following command in the terminal to install Material-UI:

   ```bash
   npm install @mui/material @emotion/react @emotion/styled
   ```

2. **Create a Button Component**:

   Create a new file `src/ButtonComponent.js` and use a Material-UI button to write a component:

   ```jsx
   import React from "react";
   import Button from "@mui/material/Button";

   function ButtonComponent() {
     return (
       <Button variant="contained" color="primary">
         Material-UI Button
       </Button>
     );
   }

   export default ButtonComponent;
   ```

3. **Use it in `src/App.js`**:

   ```jsx
   import React from "react";
   import ButtonComponent from "./ButtonComponent";

   function App() {
     return (
       <div style={{ textAlign: "center", marginTop: "50px" }}>
         <h1>Material-UI Button Example</h1>
         <ButtonComponent />
       </div>
     );
   }

   export default App;
   ```

4. **Run the Code**: You will see a Material-UI styled button on the screen.

#### Practice Problem 2 (Using Bootstrap):

1. **Install Bootstrap**:

   Run the following command to install Bootstrap:

   ```bash
   npm install bootstrap
   ```

2. **Add Bootstrap CSS to `index.js`**:

   ```javascript
   import "bootstrap/dist/css/bootstrap.min.css";
   ```

3. **Create a Bootstrap Button Component**:

   Create a new file `src/BootstrapButton.js` and add a Bootstrap-styled button:

   ```jsx
   import React from "react";

   function BootstrapButton() {
     return <button className="btn btn-primary">Bootstrap Button</button>;
   }

   export default BootstrapButton;
   ```

4. **Use it in `src/App.js`**:

   ```jsx
   import React from "react";
   import BootstrapButton from "./BootstrapButton";

   function App() {
     return (
       <div style={{ textAlign: "center", marginTop: "50px" }}>
         <h1>Bootstrap Button Example</h1>
         <BootstrapButton />
       </div>
     );
   }

   export default App;
   ```

5. **Run the Code**: You will see a Bootstrap-styled button on the screen.

---

### 8. **Using CSS in React**

React offers various ways to style components. Below are some popular methods:

#### 1. **Inline Styling**

React supports inline styles, but the syntax differs slightly from HTML. You use style objects, and CSS property names follow **camelCase** instead of kebab-case.

- **Example**:

```jsx
function App() {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "white", fontSize: "24px" }}>Hello, React!</h1>
    </div>
  );
}

export default App;
```

#### 2. **Using CSS Files**

You can import and use CSS files for styling.

1. **Create an `App.css` file**:

   ```css
   .container {
     background-color: lightblue;
     padding: 20px;
     text-align: center;
   }

   .heading {
     color: white;
     font-size: 24px;
   }
   ```

2. **Use it in `App.js`**:

   ```jsx
   import React from "react";
   import "./App.css";

   function App() {
     return (
       <div className="container">
         <h1 className="heading">Hello, React!</h1>
       </div>
     );
   }

   export default App;
   ```

## Additional Concepts in React

### 1. **Hooks**

In React, **Hooks** allow state management and lifecycle-related operations in functional components. By using hooks, you can easily implement state and lifecycle functionalities in functional components without relying on class components. Notably, **`useState`** and **`useEffect`** are the most commonly used basic hooks in React.

---

#### **`useState`**

- **Description**: `useState` is a hook used for managing state within a component. State refers to data or values that the component needs to remember. While class components use `this.state` for state management, functional components can declare and use state more simply with `useState`.
- **Usage**:

  ```jsx
  const [state, setState] = useState(initialValue);
  ```

  - **`state`**: Represents the current state value.
  - **`setState`**: Function used to update the state. Calling this triggers the component to re-render with the updated state value.
  - **`initialValue`**: The initial value for the state.

- **Example**: A simple example of managing counter state
  ```jsx
  const [count, setCount] = useState(0); // Declaring a state variable `count` with an initial value of 0
  ```

#### **`useEffect`**

- **Description**: `useEffect` is a hook for handling **lifecycle events** in a component. For example, it can be used to execute tasks when a component is first rendered, perform specific operations when the state changes, or clean up tasks when the component is removed.
- **Usage**:

  ```jsx
  useEffect(() => {
    // Write effects here
    return () => {
      // Optionally perform cleanup tasks
    };
  }, [dependencies]);
  ```

  - The first argument is the function to execute, and the second argument, **dependencies array**, ensures the effect re-runs only when the specified dependencies change.
  - Setting the dependencies array to an empty array `[]` ensures the effect runs only once when the component is initially rendered.
  - The returned function is used for cleanup tasks when the component unmounts.

- **Example**: An example of logging to the console whenever the state changes
  ```jsx
  useEffect(() => {
    console.log("Counter updated:", count);
  }, [count]); // Executes whenever the `count` value changes
  ```

#### **Practice Example: Timer App (An essential case for `useEffect`)**

This example covers a case where **`useEffect`** is indispensable. Here, a timer starts when the component is mounted and stops when the component is unmounted. In such scenarios, **`useEffect`** is necessary.

```jsx
import React, { useState, useEffect } from "react";

function TimerApp() {
  const [seconds, setSeconds] = useState(0); // Declare a state variable

  // Start a timer when the component is first rendered, and clean it up when the component is removed
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1); // Increment state value every second
    }, 1000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, []); // Empty array: Executes only once when the component is first rendered

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Timer: {seconds} seconds</h1>
    </div>
  );
}

export default TimerApp;
```

#### **Practice Explanation**:

1. **`useState`**: Declares a state variable `seconds` to store the elapsed time as it increases.
2. **`useEffect`**: Sets up a timer that calls `setSeconds` every second to increase the `seconds` value whenever the component is initially rendered. When the component is removed (`unmounted`), `clearInterval` is used to clean up the timer. Setting up and cleaning up the timer would not be possible without `useEffect`.

---

#### **Lifecycle Simplified**

Lifecycle can be easily explained as the **process of a component being created, active, and removed**. A component is a piece (or block) of a web page, and over time, it goes through various stages. These stages are referred to as the **component lifecycle** in React.

React components generally go through **three major stages**:

#### 1. **When it's born (Mounting)**

- This occurs when a component first appears on the screen.
- For example, think of the moment when buttons or timers appear on the screen after opening a web page for the first time.
- During this time, React creates the component and executes the prepared code.
- Tasks like **starting a timer** or **fetching API data** can be performed in this phase.

#### 2. **When it's active (Updating)**

- This happens when the **state** or **props** of the component change due to user interaction.
- For example, if a button is clicked and a number increases, the state updates, causing the screen to re-render.
- At this stage, the component **re-renders** based on the **changed values**.

#### 3. **When it disappears (Unmounting)**

- This occurs when the component is no longer needed and is removed from the screen.
- For example, this could happen when navigating to another page or when a specific component is no longer required.
- At this stage, the component can perform **cleanup tasks** such as **stopping timers** or **canceling network requests**.

---

#### **Relationship Between Lifecycle and `useEffect`**

- **`useEffect`** plays a role in defining specific tasks for each stage of the lifecycle:
  - **When a component is first born (Mounting)**: You can use `useEffect` to execute specific code. For example, starting a timer.
  - **When a component disappears (Unmounting)**: You can use `useEffect` to perform cleanup tasks. For example, stopping a timer.

This concept enables you to define tasks for when a component appears and disappears on a web page. For instance, in the **Timer Example**, a timer starts by using `setInterval` when the component first appears, and it stops with `clearInterval` when the component disappears.

---

#### Revisiting the Timer Example:

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    setSeconds((prev) => prev + 1); // Timer operation
  }, 1000);

  return () => clearInterval(timer); // Cleanup timer when the component is removed
}, []); // This code executes only once when the component is first rendered
```

- **When the component first appears on the screen** (First part of `useEffect`): Starts the timer.
- **When the component disappears from the screen** (Return function in `useEffect`): Cleans up the timer.

### 2. **React Router (Routing)**

React is a suitable library for developing **Single Page Applications (SPA)**. Although it appears as if there are multiple pages, SPAs are actually powered by a single HTML file. To implement navigation between pages in an SPA, **React Router** is used.

#### **Description**

- **SPA (Single Page Application)**: An SPA works by updating only the necessary parts of the page after a single initial load, instead of reloading the entire page during navigation. React Router enables SPAs to display different components based on the URL path. This way, the application can be structured as if it has multiple pages.

- **React Router** handles **route-based navigation** and maps components to specific routes, making it appear as though the application has multiple pages.

### **Key Concepts**

1. **`Router`**: The top-level component that provides routing functionality. `BrowserRouter` is commonly used.
2. **`Route`**: A component that maps a specific path to a corresponding component.
3. **`Switch`**: Renders only the first matching route among the given routes. Typically used to group multiple `Route` components.
4. **`Link`**: A built-in React component that enables navigation by changing the URL. It replaces the traditional `<a>` tag in SPAs.

### **Important Details**

- **`BrowserRouter`**: The most commonly used router that manipulates the browser's URL using the HTML5 `history` API. It allows users to change paths without making additional requests to the backend server.
- **`Route`**: Defines which component should be rendered for a specific path. Each `Route` has `path` and `component` properties.
- **`Link`**: Provides a way to navigate paths within the user interface. Instead of using an `<a>` tag, React uses `Link` for SPA transitions.

#### **Example Code**

```jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Home Component
function Home() {
  return <h2>Home Page</h2>;
}

// About Component
function About() {
  return <h2>About Page</h2>;
}

// Contact Component
function Contact() {
  return <h2>Contact Page</h2>;
}

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Route Configuration */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```

#### **Code Explanation**

1. **`<Router>`**: Wrapping the React application with `BrowserRouter` to enable routing functionality.
2. **`<Link>`**: Changes the browser URL and switches the displayed component. In this example, links are connected to the `/home`, `/about`, and `/contact` paths.
3. **`<Switch>`**: Renders only the first route that matches the current path.
4. **`<Route>`**: Maps each path to its corresponding component. For example, the `/home` path renders the `Home` component.

#### **Exercise 1: Adding a New Page**

1. **Goal**: Add a new page and create a link to navigate to it.
2. **New Page**: Create a page called `Services` with the title "Our Services".
3. **Steps**:

   1. Create a `src/Services.js` file and add the following code:

      ```jsx
      import React from "react";

      function Services() {
        return <h2>Our Services</h2>;
      }

      export default Services;
      ```

   2. Update the `App.js` file to include the new path and link:

      ```jsx
      import Services from "./Services";

      function App() {
        return (
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link> {/* New Link */}
                  </li>
                </ul>
              </nav>

              <Switch>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/services">
                  <Services /> {/* New Route */}
                </Route>
              </Switch>
            </div>
          </Router>
        );
      }
      ```

4. **Result**: A new link to the "Services" page is added, and navigating to `/services` renders the `Services` component.

#### **Exercise 2: Setting a Default Route for Redirection**

1. **Goal**: Redirect users to a default route when they attempt to access an undefined path.
2. **Steps**:

   1. Add the following code below the `Switch` component:

      ```jsx
      <Route path="*">
        <Redirect to="/home" /> {/* Redirect to default route */}
      </Route>
      ```

   2. **Complete Code**:

      ```jsx
      import React from "react";
      import {
        BrowserRouter as Router,
        Route,
        Switch,
        Link,
        Redirect,
      } from "react-router-dom";
      import Home from "./Home";
      import About from "./About";
      import Contact from "./Contact";
      import Services from "./Services";

      function App() {
        return (
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                </ul>
              </nav>

              <Switch>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/services">
                  <Services />
                </Route>
                <Route path="*">
                  <Redirect to="/home" />
                </Route>{" "}
                {/* Redirect to default route */}
              </Switch>
            </div>
          </Router>
        );
      }

      export default App;
      ```

3. **Result**: When accessing an undefined path, users are automatically redirected to `/home`.

### 3. **Context API**

**Context API** allows for easy global state management. It enables developers to manage global state without needing external state management libraries like **Redux**.

- **Description**: The Context API simplifies sharing data between components without passing down `props` manually for every level.
- **Example**:

```jsx
import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <Toolbar />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return <ThemedButton />;
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      Theme Button
    </button>
  );
}

export default App;
```

- This code globally manages a theme state, making it easily accessible across components.

---

### 4. **React Performance Optimization**

React inherently performs well thanks to the virtual DOM. However, for large-scale applications, performance optimization becomes necessary. Below are some primary techniques for optimizing performance in React.

#### 1. **`React.memo`**

- **Description**: `React.memo` is a higher-order function that prevents unnecessary re-rendering of a component when the **props** have not changed. This optimization is helpful when re-rendering is not required.

- **Example**:

```jsx
import React from "react";

// Use React.memo to prevent unnecessary rendering
const ChildComponent = React.memo(({ name }) => {
  console.log("ChildComponent rendered");
  return <h1>Hello, {name}!</h1>;
});

function App() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("React");

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <ChildComponent name={name} />
    </div>
  );
}

export default App;
```

- **Explanation**: The `ChildComponent` will not re-render unless the `name` prop changes. Using `React.memo`, we avoid unnecessary re-renders when the props remain unchanged.

---

#### 2. **`useMemo`**

- **Description**: `useMemo` optimizes performance by memoizing the result of an expensive function. It recalculates the value only when its dependencies change and otherwise reuses the previously computed value.

- **Example**:

```jsx
import React, { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // useMemo to execute the expensive calculation only when 'count' changes
  const expensiveCalculation = useMemo(() => {
    console.log("Performing expensive calculation...");
    return count * 100;
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Expensive Calculation: {expensiveCalculation}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
    </div>
  );
}

export default App;
```

- **Explanation**: The `useMemo` hook ensures that the expensive calculation is only recomputed when the `count` value changes. If `count` does not change, the previously computed result is reused.

---

#### 3. **`useCallback`**

- **Description**: `useCallback` memoizes the function itself, ensuring the function is not recreated during every render. This helps avoid unnecessary re-renders of child components when functions are passed as props.

- **Example**:

```jsx
import React, { useState, useCallback } from "react";

const ChildComponent = React.memo(({ onClick }) => {
  console.log("ChildComponent rendered");
  return <button onClick={onClick}>Click me</button>;
});

function App() {
  const [count, setCount] = useState(0);

  // useCallback to memoize the function
  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increase Count: {count}
      </button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

export default App;
```

- **Explanation**: By memoizing the `handleClick` function using `useCallback`, the function is not recreated with every render. This prevents unnecessary re-renders of the `ChildComponent`.

---

## **Comparison with Other Frontend Frameworks**

- **Angular**

  - A full framework based on the MVC pattern.
  - Uses TypeScript and supports two-way data binding.
  - Offers many built-in features but might feel complex for beginners.

- **Vue**
  - A lightweight framework similar to React.
  - Supports declarative rendering and component-based development.
  - Easy-to-read documentation with minimal configuration and flexibility.

---

## React Documentation

[https://react.dev/learn](https://react.dev/learn)

Find detailed React-related information here.

---

## React Practice Tutorial

[https://react.dev/learn/tutorial-tic-tac-toe](https://react.dev/learn/tutorial-tic-tac-toe)
