## GraphQL

### What is GraphQL?

### Definition of GraphQL

> GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.

GraphQL is an innovative query language introduced to address the limitations of REST APIs. It was first implemented by Facebook in 2015 as a specification in Markdown format, not as code but as an idea. This allows GraphQL to be used not only with JavaScript but also with various programming languages.

### Issues with REST APIs

1. **Over-fetching**

   When a user sends a request to the server via a REST API, the server loads all the data requested. For example, suppose a developer is working on a web project to display the latest movie titles using a movie API. When the developer requests data from the movie API, the REST API will return a JSON response like this:

   ```JSON
   {
       status: "ok",
       data: {
           movie_count: 1000,
           movies: [
               {
                   id: 105981,
                   name: "Quiet Place",
                   company: "Paramount",
                   language: "en",
                   summary: "this is a summary of Quiet Place.",
                   /* more fields... */
               },
               /* more data... */
           ]
       }
   }
   ```

   However, the developer does not need fields like `language` or `company` from this JSON data. Loading unnecessary data increases API call time and can cause delays. This issue is called "over-fetching." GraphQL resolves the over-fetching problem by allowing requests for only the required fields, significantly improving API response speed.

2. **Under-fetching**

   Now suppose the same developer wants to add the genre of each movie to the web project using the movie API. When the developer sends a request to the movie API, the following JSON data is returned:

   ```JSON
   {
       movies: [
           {
               adult: false,
               id: 185717,
               name: "Quite Place",
               genre_ids: [
                   185,
                   13,
                   1
               ],
               /* more fields */
           },
           /* more movies... */
       ]
   }
   ```

   The issue here is that to identify the genre of the movie `Quiet Place`, the developer needs to send another request to a separate genre API:

   ```JSON
   {
       genres: [
           {
               id: 1,
               name: "horror"
           },
           {
               id: 2,
               name: "romance"
           },
           /* ... */
           {
               id: 13,
               name: "science fiction"
           },
           /* ... */
       ]
   }
   ```

   This requires two separate URL requests to get the genre of a movie, an issue known as "under-fetching." However, with GraphQL, you can obtain all the required information in a single request, greatly improving the project's response speed.

### Summary:

1. GraphQL APIs resolve the issues of over-fetching and under-fetching, making them faster than REST APIs.
2. **Over-fetching** occurs when a single API request retrieves more data than needed.
3. **Under-fetching** occurs when multiple requests are needed to retrieve the desired information.

## GraphQL Setup

### Apollo Server

Apollo Server is a backend server that processes GraphQL requests.

### Setup Instructions

1. Create a new directory:

   ```bash
   mkdir my-graphql-app
   cd my-graphql-app
   mkdir backend
   cd backend
   ```

2. Generate a `package.json` file:

   ```bash
   npm init -y
   ```

3. Install Apollo Server & GraphQL:

   ```bash
   npm install apollo-server graphql
   npm install nodemon -D
   ```

   > (**Nodemon** automatically restarts the server whenever file changes are detected.)

4. Set up scripts:

   Modify the `scripts` in the `package.json` file and add `"type": "module"`.

   ```JSON
   {
   "name": "my-graphql-app",
   "version": "1.0.0",
   "main": "index.js",
   "scripts": {
       "dev":  "nodemon server.js"
   },
   "keywords": [],
   "author": "",
   "license": "ISC",
   "description": "",
   "dependencies": {
       "apollo-server": "^3.13.0",
       "graphql": "^16.9.0"
   },
   "devDependencies": {
       "nodemon": "^3.1.7"
   },
   "type": "module"
   }
   ```

   > Adding `"type": "module"` allows the use of `import` syntax.

5. Create a `server.js` file:

   In the root directory, create a `server.js` file and add the following code:

   ```javascript
   import { ApolloServer, gql } from "apollo-server";

   const server = new ApolloServer({});

   server.listen().then(({ url }) => {
     console.log(`Running on ${url}`);
   });
   ```

   Running this code will result in an error (`Apollo Server requires either an existing schema, modules, or typeDefs`). Let’s explore GraphQL basics to understand why this error occurs.

---

## GraphQL Basics

### 1. Query Type

The error occurs because Apollo Server requires a GraphQL schema or type definitions to function. A GraphQL server needs to clearly define the structure and methods for client data requests, which makes `typeDefs` essential.

To resolve this, define the `typeDefs` that specify the structure of the data. For example, you can include a `Tweet` type in your typeDefs as shown below:

```javascript
import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    text: String
  }
`;

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
```

**Code Explanation**:

1. **`type Query`**: Similar to a GET request, the Query type is used to request data from the server.
2. **`text` field**: This field belongs to the Query type and returns a String. When the client requests this query, the server responds with a string defined as `text`. This ensures the client receives data in a format defined by the server schema.

Let’s add a new `User` type with three fields: `ID`, `firstName`, and `lastName`.

Here’s how the code looks:

```javascript
import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
  }

  type Query {
    allUsers: [User!]!
  }
`;

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
```

**Code Explanation**:

1. The `!` after each field signifies that the field is non-nullable, meaning `id`, `firstName`, and `lastName` must always have a value.
2. The `Query` type defines a new field, `allUsers`. The client can request `allUsers` to retrieve a list of users.
3. `allUsers: [User!]!` represents an array of `User` objects. Each `User` cannot be null, and the array itself cannot be null.

---

### 2. Mutation Type

The Mutation type is used to send requests that modify data. For instance, adding a new user or updating an existing user’s information. Similar to a POST request, Mutation is used to add or modify data on the server.

```javascript
import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
  }

  type Query {
    allUsers: [User!]!
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!): User!
    deleteUser(id: ID!): User
  }
`;

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
```

**Code Explanation**:

1. The `Mutation` type includes a `createUser` field for adding users. It takes `firstName` and `lastName` as arguments and returns a `User` type.
2. `firstName` and `lastName` are of type `String!`, and `User` cannot be null.
3. The `createUser` field adds a new user and returns the created user.
4. The `deleteUser` field removes a user and returns the deleted user. It takes an argument of type `ID!`.

Since the logic for `createUser` and `deleteUser` is not yet implemented, using these fields will result in an error. To resolve this, you need to add **Mutation Resolvers**.

---

### 3. Resolver

A Resolver is a function that handles requests on a GraphQL server. It executes Queries or Mutations and returns the corresponding responses.

```javascript
import { ApolloServer, gql } from "apollo-server";

let users = [
  {
    id: "1",
    firstName: "Chanbin",
    lastName: "Na",
  },
  {
    id: "2",
    firstName: "Heesu",
    lastName: "Park",
  },
];

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
  }

  type Query {
    allUsers: [User!]!
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!): User!
  }
`;

const resolvers = {
  Query: {
    allUsers() {
      return users;
    },
  },

  Mutation: {
    createUser(_, { firstName, lastName }) {
      const newId =
        users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1;
      const newUser = {
        id: newId,
        firstName: firstName,
        lastName: lastName,
      };
      return newUser;
    },

    deleteUser(_, { id }) {
      const userIndex = users.findIndex((user) => user.id === id);
      if (userIndex === -1) {
        throw new Error("User not found");
      }

      const deletedUser = users.splice(userIndex, 1)[0];
      return deletedUser;
    },
  },

  User: {
    fullName({ firstName, lastName }) {
      return `${firstName} ${lastName}`;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
```

**Code Explanation**:

1. The `resolvers` object contains functions for `Query` and `Mutation` types.
2. The `allUsers` function returns the `users` array, serving as a Resolver for the `Query` type's `allUsers` field.
3. The `createUser` function adds a new user and returns the created user. It serves as a Resolver for the `Mutation` type's `createUser` field.
4. The `createUser` function takes `firstName` and `lastName` as arguments, provided by the client during a Mutation.
5. The `createUser` function creates a new user object and returns it.

### 4. NextJS Integration

1. Create a NextJS Project  
   In the same root directory, create a NextJS project:

   ```bash
   npx create-next-app frontend
   cd frontend
   ```

2. Install Apollo Client

   ```bash
   npm install graphql @apollo/client apollo-server-micro graphql-tag
   ```

3. Create `apollo-client.js`  
   While `localhost:4000` is running, create a `lib` folder in the root directory and create a `apollo-client.js` file.

   ```javascript
   import { ApolloClient, InMemoryCache } from "@apollo/client";

   const client = new ApolloClient({
     uri: "http://localhost:4000",
     cache: new InMemoryCache(),
   });

   export default client;
   ```

4. Connect to NextJS  
   Open the `app/layout.js` file and add `ApolloProvider`:

   ```javascript
   "use client";

   import { ApolloProvider } from "@apollo/client";
   import client from "../lib/apollo-client";

   export default function RootLayout({ children }) {
     return (
       <html lang="en">
         <body>
           <ApolloProvider client={client}>{children}</ApolloProvider>
         </body>
       </html>
     );
   }
   ```

   Next, create a new `app/page.js` file and write the following code:

   ```javascript
   "use client";

   import { gql, useQuery, useMutation } from "@apollo/client";
   import { useState } from "react";

   const ALL_USERS = gql`
     query {
       allUsers {
         id
         firstName
         lastName
         fullName
       }
     }
   `;

   const CREATE_USER = gql`
     mutation CreateUser($firstName: String!, $lastName: String!) {
       createUser(firstName: $firstName, lastName: $lastName) {
         id
         firstName
         lastName
         fullName
       }
     }
   `;

   export default function Page() {
     const { loading, error, data, refetch } = useQuery(ALL_USERS);
     const [createUser] = useMutation(CREATE_USER);

     const [formData, setFormData] = useState({
       firstName: "",
       lastName: "",
     });

     const handleInputChange = (e) => {
       const { name, value } = e.target;
       setFormData((prev) => ({
         ...prev,
         [name]: value,
       }));
     };

     const handleSubmit = async (e) => {
       e.preventDefault();
       try {
         await createUser({
           variables: {
             firstName: formData.firstName,
             lastName: formData.lastName,
           },
         });
         setFormData({ firstName: "", lastName: "" }); // Clear the form
         refetch(); // Refresh the list of users
       } catch (err) {
         console.error("Error creating user:", err);
       }
     };

     if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
     if (error)
       return (
         <p style={{ textAlign: "center", color: "red" }}>
           Error: {error.message}
         </p>
       );

     return (
       <div
         style={{
           maxWidth: "600px",
           margin: "20px auto",
           fontFamily: "Arial, sans-serif",
         }}
       >
         <h1 style={{ textAlign: "center" }}>Users</h1>
         <ul style={{ listStyleType: "none", padding: 0 }}>
           {data.allUsers.map((user) => (
             <li
               key={user.id}
               style={{
                 padding: "10px",
                 border: "1px solid #ddd",
                 borderRadius: "5px",
                 marginBottom: "10px",
               }}
             >
               {user.fullName}
             </li>
           ))}
         </ul>
         <h2 style={{ textAlign: "center" }}>Create a New User</h2>
         <form
           onSubmit={handleSubmit}
           style={{
             display: "flex",
             flexDirection: "column",
             gap: "10px",
             padding: "20px",
             border: "1px solid #ddd",
             borderRadius: "5px",
             background: "#f9f9f9",
           }}
         >
           <div>
             <label style={{ display: "block", marginBottom: "5px" }}>
               First Name:
               <input
                 type="text"
                 name="firstName"
                 value={formData.firstName}
                 onChange={handleInputChange}
                 required
                 style={{
                   width: "100%",
                   padding: "8px",
                   border: "1px solid #ddd",
                   borderRadius: "5px",
                   marginTop: "5px",
                 }}
               />
             </label>
           </div>
           <div>
             <label style={{ display: "block", marginBottom: "5px" }}>
               Last Name:
               <input
                 type="text"
                 name="lastName"
                 value={formData.lastName}
                 onChange={handleInputChange}
                 required
                 style={{
                   width: "100%",
                   padding: "8px",
                   border: "1px solid #ddd",
                   borderRadius: "5px",
                   marginTop: "5px",
                 }}
               />
             </label>
           </div>
           <button
             type="submit"
             style={{
               padding: "10px",
               backgroundColor: "#007BFF",
               color: "white",
               border: "none",
               borderRadius: "5px",
               cursor: "pointer",
               fontWeight: "bold",
             }}
           >
             Add User
           </button>
         </form>
       </div>
     );
   }
   ```

   Afterward, run the NextJS project in your terminal using:

   ```bash
   npm run dev
   ```

   > **Note**: To run both the Apollo Server and NextJS project simultaneously, open two terminal windows. Run `npm run dev` in the `frontend` directory and `npm run start` in the `backend` directory.

   Navigate to `http://localhost:3000` to view the user list and user creation form. When you add a user, the list will update.

---

**Code Explanation**:

1. The `ALL_USERS` query retrieves all users using the `useQuery` hook.
2. The `CREATE_USER` mutation adds a new user using the `useMutation` hook.
3. The `handleInputChange` function updates the form input values.
4. The `handleSubmit` function submits the form, executes the `createUser` mutation, clears the form, and refreshes the user list using `refetch()`.
5. If `loading` is `true`, "Loading..." is displayed. If an error occurs, it shows an error message.

---

**Reference**:

- [What is GraphQL](https://www.redhat.com/ko/topics/api/what-is-graphql)
- [GraphQL Official Documentation](https://graphql.org/)
- [Apollo Server Documentation](https://apollographql.com/docs/apollo-server/)
