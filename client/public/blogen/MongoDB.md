# MongoDB

MongoDB is a type of NoSQL database that uses a document-oriented format similar to JSON, called BSON. MongoDB is a schema-less database, meaning you don't need to define the structure of the data before storing it. This increases flexibility but can make it harder to maintain data consistency.

MongoDB supports various programming languages, including Node.js, Python, Java, Ruby, and PHP. It can handle large volumes of data quickly, has high scalability, and provides many useful features. MongoDB is also easy to learn.

## Installing and Setting Up MongoDB

1. First, create a new project:

   ```bash
   mkdir graphql-db
   cd graphql-db
   ```

2. Create a `package.json` file:

   ```bash
   npm init -y
   ```

   Then, install the `mongodb` package along with other dependencies:

   ```bash
   npm install mongodb apollo-server graphql
   npm install nodemon -D
   ```

3. Modify the `package.json` file:

   ```json
   {
     "name": "backend",
     "version": "1.0.0",
     "main": "index.js",
     "scripts": {
       "dev": "nodemon server.js"
     },
     "keywords": [],
     "author": "",
     "license": "ISC",
     "description": "",
     "dependencies": {
       "apollo-server": "^3.13.0",
       "graphql": "^16.9.0",
       "mongoose": "^8.8.2"
     },
     "devDependencies": {
       "nodemon": "^3.1.7"
     },
     "type": "module"
   }
   ```

4. Create the `server.js` file:

   ```javascript
   import { ApolloServer, gql } from "apollo-server";
   import mongoose from "mongoose";

   const userSchema = new mongoose.Schema({
     firstName: String,
     lastName: String,
   });

   const User = mongoose.model("User", userSchema);

   const MONGODB = "<YOUR_MONGODB_KEY>";

   const typeDefs = gql`
     type User {
       id: ID!
       firstName: String!
       lastName: String!
       fullName: String!
     }

     type Query {
       allUsers: [User!]!
     }

     type Mutation {
       createUser(firstName: String!, lastName: String!): User!
       deleteUser(id: ID!): User
     }
   `;

   const resolvers = {
     Query: {
       async allUsers() {
         return await User.find();
       },
     },

     Mutation: {
       async createUser(_, { firstName, lastName }) {
         const newUser = new User({ firstName, lastName });
         return await newUser.save();
       },

       async deleteUser(_, { id }) {
         const userToDelete = await User.findById(id);
         if (!userToDelete) {
           throw new Error("User not found");
         }

         await User.deleteOne(userToDelete);

         return userToDelete;
       },
     },

     User: {
       fullName({ firstName, lastName }) {
         return `${firstName} ${lastName}`;
       },
     },
   };

   const server = new ApolloServer({ typeDefs, resolvers });

   mongoose
     .connect(MONGODB, { useNewUrlParser: true })
     .then(() => {
       console.log("MongoDB connected");
       return server.listen({ port: 4000 });
     })
     .then((res) => {
       console.log(`Server running at ${res.url}`);
     });
   ```

5. Run the MongoDB server:

   ```bash
   npm run dev
   ```

6. Open `http://localhost:4000` to access the GraphQL Playground.  
   If the server is running correctly, you should see the messages `MongoDB connected` and `Server running at http://localhost:4000` in the terminal.

7. In the GraphQL Playground, execute the following mutation:

   ```graphql
   mutation ($firstName: String!, $lastName: String!) {
     createUser(firstName: $firstName, lastName: $lastName) {
       id
       firstName
       lastName
     }
   }
   ```

   Use the following JSON as variables:

   ```json
   {
     "firstName": "Heesu",
     "lastName": "Park"
   }
   ```

   The result will look like this:

   ```json
   {
     "data": {
       "createUser": {
         "id": "60f7b3b3b3b3b3b3b3b3b3b3",
         "firstName": "Heesu",
         "lastName": "Park"
       }
     }
   }
   ```

   Similarly, you can execute the `deleteUser` mutation.

8. Use MongoDB Compass to verify the data stored in the database.
