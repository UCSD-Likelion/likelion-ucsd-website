# MongoDB

MongoDB란 NoSQL 데이터베이스의 한 종류로, JSON과 비슷한 BSON 형식을 사용하는 문서 지향 데이터베이스입니다. MongoDB는 스키마가 없는 데이터베이스로, 데이터베이스에 저장되는 데이터의 구조를 미리 정의할 필요가 없습니다. 이는 데이터베이스의 유연성을 높여주지만, 데이터의 일관성을 유지하기 어렵게 만들 수 있습니다.

MongoDB는 다양한 언어를 지원하며, 대표적으로 Node.js, Python, Java, Ruby, PHP 등을 지원합니다. MongoDB는 대용량 데이터를 빠르게 처리할 수 있으며, 데이터의 확장성이 높습니다. 또한, MongoDB는 쉽게 배울 수 있으며, 다양한 기능을 제공합니다.

## MongoDB 설치 및 셋업

1. 우선 새로운 프로젝트를 만듭니다. 
    
    ```bash
    mkdir graphql-db
    cd graphql-db
    ```

2. `package.json` 파일을 생성합니다.

    ```bash
    npm init -y
    ```

    그리고 다음과 같이 `mongodb` 패키지를 설치합니다.

    ```bash
    npm install mongodb apollo-server graphql
    npm install nodemon -D
    ```

3. `package.json` 파일 수정합니다
   
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

4. `Server.js` 파일을 생성합니다.

    ```javascript
    import { ApolloServer, gql } from 'apollo-server';
    import Mongoose from 'mongoose';

    const userSchema = new Schema({
        firstName: String,
        lastName: String,
    });

    const User = model("User", userSchema);

    const MONGODB =
        "<YOUR_MONGODB_KEY>";

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

5. MongoDB 서버를 실행합니다.

    ```bash
    npm run dev
    ```

6. `http://localhost:4000`에 접속하여 GraphQL Playground를 확인합니다.
   
   만약 서버가 잘 실행이 된다면 터미널에 `MongoDB connected`와 `Server running at http://localhost:4000`가 출력됩니다.

7. GraphQL Playground에서 다음과 같은 뮤테이션을 실행합니다.

    ```graphql
    mutation($firstName: String!, $lastName: String!) {
        createUser(firstName: $firstName, lastName: $lastName) {
            id
            firstName
            lastName
        }
    }
    ```

    그리고 JSON 형식으로 다음과 같은 변수를 입력합니다.

    ```json
    {
        "firstName": "Heesu",
        "lastName": "Park"
    }
    ```

    그렇게 하면 다음과 같은 결과가 나옵니다.

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

    비슷한 방식으로 `deleteUser` 뮤테이션도 실행할 수 있습니다.

8. MongoDB Compass를 이용하여 데이터베이스에 저장된 데이터를 확인합니다.