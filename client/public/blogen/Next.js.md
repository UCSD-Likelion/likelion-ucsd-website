# Next.js

1. What is Next.js
2. Basic Concepts of Next.js
3. Next.js Backend
4. Hands-on Practice

---

## Why Next.js?

![/nextjs0.png](/nextjs0.png)

Next.js is a widely-used web development framework utilized by global companies such as Netflix, Facebook, Google, TikTok, and Uber Eats. By offering features like **Server-Side Rendering (SSR)** and **Static Site Generation (SSG)**, Next.js enables optimized SEO and fast page load times. It supports efficient development environments with functionalities like **file-based routing** and **image optimization**. With its seamless integration with **Vercel**, deployment is straightforward. These features make Next.js highly sought after in the frontend and full-stack developer job markets. Learning Next.js equips you with practical skills that can be directly applied to real-world scenarios, significantly boosting your employability.

---

## Differences Between Next.js and React

- **React** is a frontend library focused primarily on building user interfaces. React uses **Client-Side Rendering (CSR)** by default. For functionalities like **data fetching**, **Server-Side Rendering (SSR)**, and **Static Site Generation (SSG)**, you need to implement them manually or use additional libraries like `react-router-dom` or `axios`.
- **Next.js**, built on top of React, is a **full-stack framework**. It extends React's capabilities by including features like **Server-Side Rendering (SSR)**, **Static Site Generation (SSG)**, **file-based routing**, and **API routes**. In short, it offers more out-of-the-box features than React, providing a **full-stack framework** capable of handling both client and server operations.

### Server-Side Rendering (SSR) vs. Client-Side Rendering (CSR)

#### Server-Side Rendering (SSR)

- Pages are generated on the server and the fully rendered HTML is sent to the client.
- Faster initial loading and SEO-friendly.
- The client renders the HTML directly.

#### Client-Side Rendering (CSR)

- Pages are rendered in the browser using JavaScript.
- Initially, an empty HTML page is loaded, and JavaScript dynamically generates the content.
- Slower initial loading but offers smooth **user experience (UX)** during page transitions.

---

## Getting Started with Next.js

To start with Next.js, you need to set up a project and run a basic template using the App Router structure. Follow the steps below to set up your **Next.js project** and create a simple file.

---

### 1. **Install Next.js**

To create a new Next.js project, use the **`create-next-app`** command. This command automatically sets up the basic configuration and folder structure for a Next.js project.

```bash
npx create-next-app my-next-app
```

- Replace `my-next-app` with your desired project name.
- This command installs all necessary **dependencies** and creates the default Next.js template.

---

### 2. **Understanding the App Router Project Structure**

Here’s the typical folder structure for a project using the App Router:

```lua
my-next-app/
├── app/
│   ├── favicon.ico
│   ├── layout.js
│   ├── page.js
│   ├── globals.css
│   └── page.module.css
├── public/
├── .gitignore
├── next.config.mjs
├── package.json
├── package-lock.json
├── jsconfig.json
└── README.md
```

- **app/**: The **App Router directory** in Next.js, where pages and layouts are defined.

  - **favicon.ico**: A small icon displayed on browser tabs.
  - **layout.js**: Defines the common layout applied to all pages inside the `app` folder (e.g., header, footer).
  - **page.js**: The default homepage mapped to the **`/` route**.
  - **globals.css**: A global CSS file applied across the entire application.
  - **page.module.css**: A modular CSS file applied to specific pages.

- **public/**: Stores **static files** accessible directly via `/` paths.

  - For example, `public/image.png` is accessible at `/image.png`.

- **next.config.mjs**: The **Next.js configuration file** for settings like environment variables, redirects, and internationalization.

- **package.json**: Contains project **dependencies** and **scripts**.

- **jsconfig.json**: Used to define **path aliases** within the project.

---

### 3. **Run the Development Server**

To run your Next.js app locally, navigate to your project directory and enter the following command:

```bash
cd my-next-app
npm run dev
```

- This starts the **development server**, and you can view your app at `http://localhost:3000` in your browser.
- The development server supports **hot reloading**, so any changes you make in the code are reflected immediately without manually refreshing the page.

---

### 4. **Edit the Default Page**

The default homepage is defined in `app/page.js`. Open this file and modify its content:

```jsx
export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <img
        src="https://i.imgur.com/i7pdsjX.png"
        alt="Logo"
        style={{ width: "120px", height: "100px" }}
      />
      <h1>Welcome to Next.js!</h1>
      <p>This is a test project using Next.js.</p>
    </div>
  );
}
```

Save the file and refresh your browser to see the changes automatically reflected.

Next, edit `app/layout.js` to add a navigation bar. Open the file and modify it as follows:

```jsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js App Router Example</title>
      </head>
      <body>
        {/* Navigation Bar */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#333",
            padding: "1rem",
          }}
        >
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            <li style={{ marginRight: "1rem" }}>
              <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
                Home
              </a>
            </li>
            <li style={{ marginRight: "1rem" }}>
              <a
                href="/about"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
```

---

### 5. **Add a New Page**

In the App Router, creating a new page is as simple as adding a new file in the **`app/` directory**.

1. Create a new file: `app/about/page.js`, and add the following content:

```jsx
export default function About() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>About Page</h1>
      <p>This page was created using the Next.js App Router.</p>
    </div>
  );
}
```

2. Open your browser and visit `http://localhost:3000/about` to view the new page.

3. Similarly, create another file for a **Contact Page**: `app/contact/page.js`:

```jsx
export default function Contact() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Contact Page</h1>
      <p>If you have any questions, feel free to reach out!</p>
    </div>
  );
}
```

---

### 6. **Apply Styling**

The App Router supports both **global styles** and **modular styles**.

1. **Global Styles**  
   Edit `app/globals.css` to apply global styles across your application:

   ```css
   body {
     font-family: "Arial", sans-serif;
     margin: 0;
     padding: 0;
     background-color: #f4f4f4;
   }

   nav ul {
     display: flex;
     justify-content: center;
   }

   nav a:hover {
     text-decoration: underline;
   }
   ```

2. **Modular Styles**  
   Create a `page.module.css` file and apply specific styles for the homepage:

   ```css
   .title {
     color: blue;
     font-size: 2rem;
   }
   ```

   Import and use the styles in `app/page.js`:

   ```jsx
   import styles from "./page.module.css";

   export default function Home() {
     return (
       <div style={{ textAlign: "center", padding: "2rem" }}>
         <img
           src="https://i.imgur.com/i7pdsjX.png"
           alt="Logo"
           style={{ width: "120px", height: "100px" }}
         />
         <h1 className={styles.title}>Welcome to Next.js!</h1>
         <p>This is a test project using Next.js.</p>
       </div>
     );
   }
   ```

---

### 7. **Summary of Basic Concepts**

- Next.js’s **App Router** supports **file-based routing**, **Server-Side Rendering (SSR)**, and **Static Site Generation (SSG)** out of the box.
- You can easily create new pages and apply styling, and changes are reflected instantly.
- Styles can be applied globally or modularly for specific components.

---

## **Next.js Basics**

### 1. File-Based Routing

- **Description**: In Next.js, the App Router automatically creates routes based on the structure of files and folders inside the `app/` directory. URLs are determined by file and folder names.
- **Code Examples**:

1. **Home Page (/)** Create a `page.js` file inside the root `app` folder and add the following code:

```jsx
function Home() {
  return (
    <div>
      <h1>This is home page</h1>
    </div>
  );
}

export default Home;
```

When you access `http://localhost:3000`, the text "This is home page" will be displayed. The `app/page.js` file is automatically mapped to the root route `/`.

2. **About Page (/about)** Create a `page.js` file inside the `app/about/` folder and add the following code:

```jsx
function About() {
  return (
    <div>
      <h1>About Us</h1>
    </div>
  );
}

export default About;
```

When you access `http://localhost:3000/about`, the "About Us" page will be displayed.

3. **Product Page (/products/item)** Create an `app/products/item/` folder, then create a `page.js` file inside it and add the following code:

```jsx
function ProductItem() {
  return (
    <div>
      <h1>Product Item</h1>
    </div>
  );
}

export default ProductItem;
```

When you access `http://localhost:3000/products/item`, the "Product Item" page will be displayed.

- **Summary**: In Next.js, the App Router automatically maps URLs based on file and folder names. This structure makes maintenance easier and allows intuitive URL management.

---

### 2. Dynamic Routing

- **Description**: In Next.js, you can create dynamic routes using the **`[]` syntax**. This allows handling of various URLs dynamically.

- **Code Example**: Create a `page.js` file inside `app/posts/[id]/` and add the following code:

  ```jsx
  export default function Post({ params }) {
    const { id } = params;

    return (
      <div>
        <h1>Post ID: {id}</h1>
      </div>
    );
  }
  ```

  When you access a URL like `http://localhost:3000/posts/1`, the text "Post ID: 1" will be displayed. Here, `1` is a dynamic parameter that can be accessed using the `params` object.

---

### 3. Layouts & Metadata Configuration

- **Description**: In Next.js, you can define shared layouts using a **`layout.js`** file. This file is used to set up structural elements shared across all pages, as well as metadata like titles and descriptions.

- **Code Examples**: Create a `layout.js` file inside the project `app/` folder with the following content:

  ```jsx
  export const metadata = {
    title: "Test 1",
    description: "This is a Test",
  };

  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <h1>This is a Layout</h1>
          {children}
        </body>
      </html>
    );
  }
  ```

  To apply a different layout to a specific route, create a `layout.js` file inside the corresponding folder. For example, create `app/about/layout.js` and add the following code:

  ```jsx
  export const metadata = {
    title: "About",
    description: "This is the about page",
  };

  export default function AboutLayout({ children }) {
    return (
      <div>
        <h1>About Layout</h1>
        {children}
      </div>
    );
  }
  ```

- **Summary**: The App Router in Next.js manages common UI elements and metadata settings via layout files. This improves user experience, enhances SEO, and simplifies maintenance.

---

### 4. Server Side Rendering (SSR) and Client Side Rendering (CSR)

#### Client Side Rendering (CSR)

- **Description**: CSR renders components directly in the browser using JavaScript.
- **Code Example**: Create a `page.js` file inside the `app/counter/` folder and add the following code:

  ```jsx
  "use client";

  import { useState } from "react";

  export default function Counter() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <h1>Client Side Rendering Example</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  }
  ```

  Adding `"use client";` specifies that this is a client-side component.

---

#### Server Side Rendering (SSR)

- **Description**: The App Router in Next.js renders pages on the server and sends them to the client as pre-rendered HTML.
- **Code Example**: Create a `page.js` file inside the `app/server-side/` folder and add the following code:

  ```jsx
  export const dynamic = "force-dynamic";

  export default async function ServerSidePage() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();

    return (
      <div>
        <h1>Server Side Rendering Example</h1>
        <p>Title: {data.title}</p>
      </div>
    );
  }
  ```

  Use the `dynamic` property to enforce SSR behavior for this page.

---

### 5. Deployment on Vercel

Vercel is the official deployment platform for Next.js, providing fast and reliable hosting.

#### Steps to Deploy on Vercel

1. **Create a Vercel Account**

   - Sign up on [Vercel](https://vercel.com/).

2. **Connect Your Project**

   - Upload your project to GitHub, then select **“New Project”** in Vercel and connect your GitHub repository.

3. **Deploy**

   - Review the deployment settings and click **“Deploy”**.

4. **Access Your Deployment**
   - Once deployment is complete, a unique deployment URL will be generated (e.g., `https://your-project.vercel.app`).

#### Key Features of Vercel

- **Automatic Deployments**: Every commit pushed to GitHub automatically updates your deployment.
- **Environment Variable Management**: Environment variables can be set directly in the Vercel dashboard.

---

### **Practice Problems for Next.js Basics**

The following exercises will help you understand the concepts of Next.js App Router structure. Try solving them on your own without provided solutions.

---

#### **1. File-Based Routing Practice**

1. **Task 1: Create a Home Page**

   - **Goal**: Create an `app/page.js` file and display the text "Welcome to Next.js!" on the home page.
   - **Hint**: The `app/page.js` file maps to the root route (`/`).

2. **Task 2: Add an About Page**

   - **Goal**: Create an `app/about/page.js` file and display the text "This is the About Page" on the About page.
   - **Hint**: Access the page via the `/about` route in your browser.

3. **Task 3: Implement a Nested Route**

   - **Goal**: Create an `app/products/item/page.js` file and display the text "Product Details" on the Product Details page.
   - **Hint**: Access this page via the `/products/item` URL.

---

#### **2. Dynamic Routing Practice**

1. **Task 4: Create a Dynamic Blog Post Page**

   - **Goal**: Create an `app/posts/[id]/page.js` file and use URL parameters to display "Post ID: {id}" dynamically.
   - **Hint**: Use the `params` object to extract the `id` from the URL. For example, accessing `/posts/123` should display "Post ID: 123".

---

#### **3. Layouts & Metadata Practice**

1. **Task 5: Apply a Shared Layout**

   - **Goal**: Create an `app/layout.js` file and add a shared header with the text "My Next.js App" for all pages.
   - **Hint**: Use a `<header>` element in the layout file.

2. **Task 6: Configure Metadata**

   - **Goal**: Add metadata (e.g., title, description) in the `app/layout.js` file.
   - **Hint**: Use the `export const metadata` object to set metadata for the application.

---

#### **4. SSR and CSR Practice**

1. **Task 7: Create a CSR Page**

   - **Goal**: Create an `app/counter/page.js` file and implement a simple counter using `useState` and `useEffect`.
   - **Hint**: Add `"use client";` at the top of the file to enable client-side rendering.

2. **Task 8: Create an SSR Page**

   - **Goal**: Create an `app/server-side/page.js` file and simulate fetching data using an async function for server-side rendering.
   - **Hint**: Use the `fetch` function inside the async function to retrieve data during server-side rendering.

---

### Frontend Practice Assignment: Build a Personal Portfolio Website with Next.js

Use the concepts you have learned to build a **Personal Portfolio** website.  
A Personal Portfolio website is used to showcase an individual’s skills and career highlights. It is commonly created by developers, designers, and creative professionals to display their work, projects, tech stack, experience, and contact information.  
Key sections may include a homepage, projects, skills, and contact information. Implement these using the frontend skills you’ve acquired.

## **Next.js and Backend**

In this section, we will learn backend concepts using **Next.js API Routes** and ultimately build a **login system**.

---

### 0. Project Setup

1. **Create a Next.js Project**

   ```bash
   npx create-next-app@latest login-system
   cd login-system
   npm install mongodb next-auth@beta
   ```

2. **Set Environment Variables**

   - Add the following to a `.env.local` file in the project root:

   ```plaintext
   MONGODB_URI=your_mongo_uri
   GITHUB_ID=your_github_id
   GITHUB_SECRET=your_github_secret
   ```

Now let’s build the login system step by step while exploring key concepts.

---

### 1. What is Backend?

#### Concept

The **backend** refers to the unseen part of a software system that primarily handles data storage, business logic, and responding to client requests. Users (clients) interact with the **frontend**, which is the visible interface, but actual data management and complex computations occur in the backend. The backend processes client requests, prepares the required data, performs necessary operations, and sends responses back to the frontend.

---

#### Key Components of the Backend

1. **Server**:

   - A server is a program or computer that processes client requests. Web servers, database servers, etc., run the backend system. The server communicates with the client over a network, exchanging requests and responses.

2. **Database**:

   - A database is where an application’s data is stored permanently. The backend retrieves or saves data from/to the database to provide the information needed by users. For example, during login, the backend compares user input with stored credentials or retrieves specific data as requested by the user.

3. **API (Application Programming Interface)**:

   - APIs allow the backend to exchange data with the frontend. The client sends requests to the server through APIs, and the server responds with data. Common API styles include **REST APIs** and **GraphQL**, enabling the frontend to utilize backend functionality easily.

4. **Business Logic**:

   - Business logic defines the rules and core functionality an application must follow. For instance, adding items to a shopping cart, processing payments, and applying discounts in an e-commerce application fall under business logic. The backend implements these rules to handle client requests.

---

#### Summary of Backend Roles

- **Data Processing and Management**: Securely stores and retrieves data.
- **Executing Business Logic**: Implements rules and performs necessary computations.
- **Security**: Protects user data and systems through authentication and authorization.
- **Responding to Client Requests**: Processes client requests and provides appropriate responses.

The backend is a vital component that operates behind the scenes, managing data and ensuring the functionality required by the frontend.

![Backend Roles](/nextjs3.png)

---

### 2. API Routes (App Router Method)

#### Concept

**API Routes** in the **App Router** method are created by adding files to the **`app/api`** directory. Each file becomes an **API endpoint**. Next.js configures these endpoints to work in a serverless environment, allowing seamless API development without additional server setup.

#### Example Code

1. In the **App Router** method, create a `route.js` file inside `app/api/hello/` and add the following code:

   ```javascript
   // app/api/hello/route.js
   export async function GET(req) {
     return new Response(JSON.stringify({ message: "Hello, World!" }), {
       status: 200,
       headers: { "Content-Type": "application/json" },
     });
   }
   ```

   The `GET` method handles requests to `/api/hello`, returning a `Hello, World!` message in JSON format with a 200 status code.

2. **Sending Requests from the Client**

   Use the `fetch` method to send requests to `/api/hello`. The following code can be executed in a component’s `useEffect` or upon a button click to log the API response in the browser console.

   ```javascript
   // app/hello/page.js
   "use client";
   import { useEffect } from "react";

   function HelloWorld() {
     useEffect(() => {
       fetch("/api/hello")
         .then((response) => response.json())
         .then((data) => console.log(data.message)) // Logs "Hello, World!" in the console
         .catch((error) => console.error("Error fetching data:", error)); // Adds error handling
     }, []);

     return <div>Check the console for the message from the server.</div>;
   }

   export default HelloWorld;
   ```

3. **Viewing Results**

   - This code sends a GET request to `/api/hello` when the component renders.
   - The server responds with a JSON object, and `data.message` is logged in the console.
   - You will see `"Hello, World!"` in the console.

---

### 3. HTTP Methods

**HTTP Methods** specify the type of request being sent to the server. Common methods include:

- **GET**: Used to request data from the server. Example: Fetching user information.
- **POST**: Used to add new data to the server. Example: Registering a new user.
- **PUT**: Used to update existing data on the server. Example: Updating a user profile.
- **DELETE**: Used to delete data from the server. Example: Removing a user account.

---

#### Practice Scenarios

1. **Scenario**: You are signing up for a social media app and need to send your name, email, and password to the server.  
   **Question**: Which HTTP method should you use?  
   **Hint**: Use this method to add new data to the server.

   <details>
   <summary>Answer</summary>
   Use the POST method to add new data to the server.
   </details>

2. **Scenario**: You want to view the title and author of a book in an online library.  
   **Question**: Which HTTP method should you use?  
   **Hint**: This method is used to fetch data from the server.

   <details>
   <summary>Answer</summary>
   Use the GET method to fetch data from the server.
   </details>

3. **Scenario**: You want to delete an outdated blog post from a website.  
   **Question**: Which HTTP method should you use?  
   **Hint**: Use this method to remove data from the server.

   <details>
   <summary>Answer</summary>
   Use the DELETE method to remove data from the server.
   </details>

4. **Scenario**: You need to update your delivery address in an online shopping platform.  
   **Question**: Which HTTP method should you use?  
   **Hint**: Use this method to update data on the server.

   <details>
   <summary>Answer</summary>
   Use the PUT method to update data on the server.
   </details>

---

#### HTTP Testing Example

Here’s an example setup for testing HTTP methods:

```javascript
// app/api/test/data.js
export const data = [];
```

```javascript
// app/api/test/route.js
import { data } from "./data";

export async function GET(req) {
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req) {
  const { message } = await req.json();
  const newItem = { id: Date.now().toString(), message };
  data.push(newItem);
  return new Response(
    JSON.stringify({ message: "Data added successfully", item: newItem }),
    {
      status: 201,
      headers: { "Content-Type": "application/json" },
    }
  );
}
```

```javascript
// app/api/test/[id]/route.js
import { data } from "../data";

export async function PUT(req, { params }) {
  const { id } = params;
  const { message } = await req.json();

  const itemIndex = data.findIndex((item) => item.id === id);

  if (itemIndex !== -1) {
    data[itemIndex].message = message;
    return new Response(
      JSON.stringify({
        message: "Data updated successfully",
        item: data[itemIndex],
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } else {
    return new Response(JSON.stringify({ message: "Item not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function DELETE(req, { params }) {
  const { id } = params;

  const itemIndex = data.findIndex((item) => item.id === id);

  if (itemIndex !== -1) {
    const deletedItem = data.splice(itemIndex, 1);
    return new Response(
      JSON.stringify({
        message: "Data deleted successfully",
        item: deletedItem,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } else {
    return new Response(JSON.stringify({ message: "Item not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
}
```

The following code is written in the `/app/test/page.js` file to provide a UI where users can click buttons to call each HTTP method and check the results.

```javascript
"use client";

import { useState } from "react";

export default function TestAPI() {
  const [response, setResponse] = useState([]);
  const [id, setId] = useState(""); // ID input 상태
  const [message, setMessage] = useState(""); // Message input 상태 (POST 및 PUT용)

  const fetchData = async () => {
    const res = await fetch("/api/test");
    const data = await res.json();
    setResponse(data); // 데이터 배열로 설정
  };

  const postData = async () => {
    if (!message) {
      alert("Please enter a message for POST request.");
      return;
    }
    const res = await fetch("/api/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();
    alert(`POST Response: ${JSON.stringify(data)}`);
    fetchData(); // 데이터 갱신
  };

  const putData = async () => {
    if (!id) {
      alert("Please enter an ID for PUT request.");
      return;
    }
    if (!message) {
      alert("Please enter a message for PUT request.");
      return;
    }
    const res = await fetch(`/api/test/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();
    alert(`PUT Response: ${JSON.stringify(data)}`);
    fetchData(); // 데이터 갱신
  };

  const deleteData = async () => {
    if (!id) {
      alert("Please enter an ID for DELETE request.");
      return;
    }
    const res = await fetch(`/api/test/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    alert(`DELETE Response: ${JSON.stringify(data)}`);
    fetchData(); // 데이터 갱신
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>HTTP Methods Test</h1>

      {/* Unified Input Section */}
      <div style={styles.section}>
        <input
          type="text"
          placeholder="Enter ID (for PUT/DELETE)"
          value={id}
          onChange={(e) => setId(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Enter message (for POST/PUT)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={styles.input}
        />
      </div>

      {/* Action Buttons */}
      <div style={styles.buttonContainer}>
        <button onClick={fetchData} style={styles.button}>
          GET
        </button>
        <button onClick={postData} style={styles.button}>
          POST
        </button>
        <button onClick={putData} style={styles.button}>
          PUT
        </button>
        <button onClick={deleteData} style={styles.button}>
          DELETE
        </button>
      </div>

      {/* Response Table */}
      <div style={styles.tableContainer}>
        <h2 style={styles.subheader}>Response Data</h2>
        {Array.isArray(response) && response.length > 0 ? (
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>ID</th>
                <th style={styles.th}>Message</th>
              </tr>
            </thead>
            <tbody>
              {response.map((item) => (
                <tr key={item.id}>
                  <td style={styles.td}>{item.id}</td>
                  <td style={styles.td}>{item.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    marginBottom: "20px",
    marginTop: "50px",
  },
  header: {
    fontSize: "1.5rem",
    marginBottom: "20px",
    textAlign: "center",
    color: "#333",
  },
  subheader: {
    fontSize: "1.25rem",
    marginBottom: "10px",
    color: "#333",
  },
  section: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "8px",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    flex: "1",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginBottom: "20px",
  },
  button: {
    padding: "8px 12px",
    fontSize: "1rem",
    borderRadius: "4px",
    backgroundColor: "#0070f3",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  tableContainer: {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#e8e8e8",
    borderRadius: "4px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    borderBottom: "2px solid #0070f3",
    padding: "8px",
    textAlign: "left",
    fontWeight: "bold",
  },
  td: {
    borderBottom: "1px solid #ddd",
    padding: "8px",
  },
};
```

### Practice: Implementing the Registration API

To implement a **Registration API** using the **App Router** approach, create a `app/api/register/route.js` file and use the POST method to accept and store user data.

```javascript
// app/api/register/route.js
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  const client = await clientPromise;
  const db = client.db("loginSystem");

  const { email, password } = await req.json();
  await db.collection("users").insertOne({ email, password });

  return new Response(
    JSON.stringify({ message: "User registered successfully" }),
    {
      status: 201,
      headers: { "Content-Type": "application/json" },
    }
  );
}
```

This API accepts `email` and `password` from the client and stores the user information in MongoDB.

---

### Registration Page (`app/register/page.js`)

The following is the frontend registration form that connects with the backend API:

```javascript
"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Register</h1>
      <form onSubmit={handleRegister} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    backgroundColor: "#f4f4f4",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    maxWidth: "400px",
    margin: "2rem auto",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  input: {
    padding: "0.75rem",
    margin: "0.5rem 0",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    outline: "none",
    transition: "border 0.3s",
  },
  inputFocus: {
    borderColor: "#0070f3",
  },
  button: {
    padding: "0.75rem",
    fontSize: "1rem",
    backgroundColor: "#0070f3",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#005bb5",
  },
  message: {
    marginTop: "1rem",
    color: "#0070f3",
  },
};
```

---

### RESTful API

#### Concept Overview

A **RESTful API** is a standardized way of exchanging data between the client and server. Its key principles include:

- **Resource-Based URLs**: Each URL represents a resource. For example:

  - `/api/users` represents all users.
  - `/api/users/1` represents a specific user.

- **Statelessness**: Servers do not retain client state between requests; every request is processed independently.

- **Standard HTTP Methods**: REST APIs use HTTP methods like `GET`, `POST`, `PUT`, and `DELETE` to clearly define how resources are manipulated.

- **JSON Format**: Data is typically exchanged in JSON format.

---

### Practice: Creating a Login API

Using the **App Router** approach, we will create a login API that validates user credentials sent via a POST request.

1. **Create `app/api/login/route.js`**

   ```javascript
   // app/api/login/route.js
   import clientPromise from "@/lib/mongodb";

   export async function POST(req) {
     const client = await clientPromise;
     const db = client.db("loginSystem");

     const { email, password } = await req.json();
     const user = await db.collection("users").findOne({ email, password });

     if (user) {
       return new Response(
         JSON.stringify({ message: "Login successful", user }),
         {
           status: 200,
           headers: { "Content-Type": "application/json" },
         }
       );
     } else {
       return new Response(JSON.stringify({ message: "Invalid credentials" }), {
         status: 401,
         headers: { "Content-Type": "application/json" },
       });
     }
   }
   ```

2. **Login Page (`app/login/page.js`)**

   The following frontend form integrates with the backend login API:

   ```javascript
   "use client";
   import { useState } from "react";

   export default function LoginPage() {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [message, setMessage] = useState("");

     const handleLogin = async (e) => {
       e.preventDefault();
       const response = await fetch("/api/login", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ email, password }),
       });
       const data = await response.json();
       setMessage(data.message);
     };

     return (
       <div style={{ padding: "2rem" }}>
         <h1>Login</h1>
         <form onSubmit={handleLogin}>
           <input
             type="email"
             placeholder="Email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             required
           />
           <input
             type="password"
             placeholder="Password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             required
           />
           <button type="submit">Login</button>
         </form>
         {message && <p>{message}</p>}
       </div>
     );
   }
   ```

---

### MongoDB Integration

#### Concept Overview

The server integrates with **MongoDB**, a database where data is stored permanently. The database handles client requests and efficiently manages data.

#### Practice: MongoDB Connection

To connect with MongoDB, use the `lib/mongodb.js` file:

```javascript
// lib/mongodb.js
import { MongoClient } from "mongodb";

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(process.env.MONGODB_URI);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;
```

### 6. Authentication and Authorization (Using NextAuth)

#### Concept Overview

**Authentication** is the process of verifying a user's identity, while **Authorization** determines what actions an authenticated user is allowed to perform within the application. NextAuth.js is a library that simplifies authentication, providing built-in support for external OAuth providers like GitHub.

#### Practice: Implementing GitHub OAuth with NextAuth

1. **Backend Setup**  
   Create the `app/api/auth/[...nextauth]/route.js` file to configure GitHub OAuth authentication.

   ```javascript
   // app/api/auth/[...nextauth]/route.js
   import NextAuth from "next-auth";
   import GitHubProvider from "next-auth/providers/github";

   const authOptions = {
     providers: [
       GitHubProvider({
         clientId: process.env.GITHUB_ID,
         clientSecret: process.env.GITHUB_SECRET,
       }),
     ],
     callbacks: {
       async session({ session, token }) {
         session.userId = token.sub;
         return session;
       },
     },
   };

   const handler = NextAuth(authOptions);

   export { handler as GET, handler as POST };
   ```

2. **Implementing the GitHub Login Button in the Frontend**

   ```javascript
   // components/LoginButton.js
   "use client";
   import { useSession, signIn, signOut } from "next-auth/react";

   export default function LoginButton() {
     const { data: session } = useSession();

     if (session) {
       return (
         <>
           <p>Signed in as {session.user.email}</p>
           <button onClick={() => signOut()}>Sign out</button>
         </>
       );
     }
     return (
       <button onClick={() => signIn("github")}>Sign in with GitHub</button>
     );
   }
   ```

3. **Using the Login Button on the Login Page**

   The `LoginButton` component integrates GitHub OAuth login functionality into the login page.

   ```javascript
   // app/login/page.js
   "use client";
   import LoginButton from "@/components/LoginButton";

   export default function LoginPage() {
     return (
       <div style={{ padding: "2rem" }}>
         <h1>Login</h1>
         {/* Use LoginButton for GitHub OAuth */}
         <LoginButton />
       </div>
     );
   }
   ```

4. **Using Session Information on the Profile Page**

   ```javascript
   // app/profile/page.js
   "use client";
   import { useSession } from "next-auth/react";

   export default function ProfilePage() {
     const { data: session } = useSession();

     if (!session) {
       return <p>Login is required.</p>;
     }

     return (
       <div style={{ padding: "2rem" }}>
         <h1>Profile Page</h1>
         <p>Email: {session.user.email}</p>
         <p>Name: {session.user.name}</p>
         <img src={session.user.image} alt="User Image" />
       </div>
     );
   }
   ```

---

### 7. Client-Server Communication (CSR)

#### Concept Overview

**Client-Side Rendering (CSR)** involves calling an API from the client to fetch data from the server in real-time, then dynamically updating the UI. The client requests data from the server and renders it on the page.

#### Practice: Fetching Logged-In User Information

1. **Creating a User Information API**

   ```javascript
   // app/api/user/route.js
   import { getSession } from "next-auth/react";

   export async function GET(req) {
     const session = await getSession({ req });
     if (session) {
       return new Response(JSON.stringify(session.user), {
         status: 200,
         headers: { "Content-Type": "application/json" },
       });
     } else {
       return new Response(JSON.stringify({ message: "Not authenticated" }), {
         status: 401,
         headers: { "Content-Type": "application/json" },
       });
     }
   }
   ```

2. **Fetching User Data in the Frontend**

   ```javascript
   // app/profile/page.js
   "use client";
   import { useEffect, useState } from "react";
   import { useSession } from "next-auth/react";

   export default function UserProfile() {
     const { data: session } = useSession();
     const [user, setUser] = useState(null);

     useEffect(() => {
       if (session) {
         fetch("/api/user")
           .then((res) => res.json())
           .then((data) => setUser(data));
       }
     }, [session]);

     if (!session) {
       return <p>Login is required.</p>;
     }

     if (!user) return <p>Loading...</p>;

     return (
       <div style={{ padding: "2rem" }}>
         <h1>Profile Page</h1>
         <p>Email: {user.email}</p>
         <p>Name: {user.name}</p>
         <img src={user.image} alt="User Image" />
       </div>
     );
   }
   ```

---

## Next.js Documentation

- [Official Next.js Website](https://nextjs.org/)
- [Official Next.js Documentation](https://nextjs.org/docs)
