# GraphQL

1. GraphQL 소개
2. Apollo Server 셋업

## GraphQL이 무엇인가?

### GraphQL의 정의

> GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.

GraphQL은 REST API의 한계점을 해결하기 위해 등장한 혁신적인 쿼리 언어입니다. 2015년 Facebook에서 처음으로 사양(specification)을 Markdown 문서 형식으로 구현했으며, 이는 코드가 아닌 아이디어의 형태로 제시되었습니다. 그 덕분에 GraphQL은 JavaScript뿐만 아니라 다양한 언어에서도 사용될 수 있습니다.

### REST API가 갖고 있던 문제점들

1.  **Over-fetching**

    사용자가 REST API를 통해 서버에 요청을 보내면, 서버는 요청한 자료의 모든 데이터를 로딩합니다. 예를 들어, 어떤 개발자가 영화 API를 사용하여 최신 영화 제목을 표시하는 웹 프로젝트를 진행하고 있다고 가정해봅시다. 이 개발자가 영화 API에 데이터를 요청하면, REST API는 아래와 같은 JSON 데이터를 반환할 것입니다.

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

    하지만 개발자는 이 JSON 데이터에서 `language`나 `company` 같은 필드가 필요하지 않습니다. 불필요한 데이터를 불러오게 되면 API 호출 시간이 길어지고 딜레이가 발생할 수 있습니다. 이러한 문제를 "over-fetching"이라고 합니다. GraphQL은 over-fetching 문제를 해결해 필요한 필드만 요청할 수 있어 API의 응답 속도를 크게 향상시킵니다.

2.  **Underfetching**

    같은 개발자가 영화 API를 이용해 영화 목록을 요청한다고 가정해봅시다. 이번에는 각 영화의 장르를 웹 프로젝트에 추가하려고 합니다. 개발자가 영화 API로 요청을 보내면 아래와 같은 JSON 데이터가 반환됩니다.

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

    여기서 문제는, 영화 `Quiet Place`의 장르를 확인하기 위해 별도의 장르 API로 또 다른 요청을 보내야 한다는 점입니다.

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

    결국 영화의 장르를 확인하기 위해 두 번의 URL 요청을 보내야 하는데, 이런 현상을 "under-fetching"이라고 부릅니다. 그러나 GraphQL을 사용하면 단 한 번의 요청으로 필요한 모든 정보를 얻을 수 있어, 프로젝트의 응답 속도가 훨씬 빨라집니다.

### 요약:

1. GraphQL API는 over-fetching과 under-fetching 문제를 해결하여 REST API보다 더 빠릅니다.
2. **Over-fetching**은 한 번의 API 요청으로 불필요하게 많은 데이터를 받는 현상입니다.
3. **Underfetching**은 원하는 정보를 얻기 위해 여러 번의 요청을 보내야 하는 상황을 의미합니다.

## GraphQL 셋업

### Apollo Server

Apollo Server는 GraphQL 요청을 처리할 수 있는 백엔드 서버입니다.

### 셋업 방법

1. 새로운 다이렉토리 생성:

   ```bash
   mkdir my-graphql-app
   cd my-graphql-app
   mkdir backend
    cd backend
   ```

2. package.json 생성

   ```bash
   npm init -y
   ```

3. Apollo Server & GraphQL 설치

   ```bash
   npm install apollo-server graphql
   npm install nodemon -D
   ```

   > (**Nodemon** 은 파일에 변경사항이 있을 때마다 서버를 자동으로 다시 시작해줍니다)

4. 스크립트 설정

   `package.json` 파일의 `scripts`를 변경하고 `module`을 추가합니다

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

   > (`type`을 `"module"`로 설정하면 `import` 구문을 사용할 수 있습니다.)

5. `server.js` 작성
   루트 다이렉토리에서 `server.js` 파일을 생성하고, 다음과 같은 코드를 작성합니다:
    ```javascript
    import {ApolloServer, gql} from "apollo-server";

    const server = new ApolloServer({})

    server.listen().then(({url}) => {
        console.log(`Running on ${url}`);
    })
    ```

    이 코드를 작성하시면 에러가 뜰 것입니다 (`Apollo Server requires either an existing schema, modules, or typeDefs`). 이 에러 메세지가 왜 뜨는지 GraphQL 기본 개념에서 배워보겠습니다. 


## GraphQL 기본 개념

### 1. Query Type

위의 에러 메시지의 원인은 Apollo Server가 작동하기 위해 GraphQL 스키마나 타입 정의가 필요하기 때문입니다. GraphQL 서버는 클라이언트가 데이터를 요청하는 방법과 구조를 명확히 정의해줘야 하기 때문에 스키마 또는 `typeDefs`가 필수 요소입니다. 

이 문제를 해결하기 위해, 데이터를 어떻게 구조화할지 명시하는 typeDefs를 정의해주어야 합니다. 아래와 같이 Tweet 타입을 포함한 typeDefs를 추가하는 코드로 이를 해결할 수 있습니다.

```javascript
import {ApolloServer, gql} from "apollo-server";

const typeDefs = gql`
    type Query {
        text: String
    }
`;

const server = new ApolloServer({ typeDefs })

server.listen().then(({url}) => {
    console.log(`Running on ${url}`);
})
```

**코드 설명**:
1. **type Query**: GET 요청과 유사하게, Query 타입은 서버에 데이터를 요청할 때 사용됩니다.
2. **text 필드**: text 필드는 Query 타입에 속해 있으며, String 타입을 반환합니다. 이를 통해 클라이언트가 이 Query를 요청하면 서버는 text라는 이름으로 정의된 문자열 값을 반환할 것입니다. 이는 서버에서 정의된 스키마에 따라 클라이언트가 받을 수 있는 데이터 형식을 명확하게 나타냅니다.

여기에 새로운 User 타입을 추가하겠습니다. User 타입에는 세가지 필드가 있습니다: `ID`, `firstName`, 그리고 `lastName`. 

이걸 코드로 작성해보겠습니다

```javascript
import {ApolloServer, gql} from "apollo-server";

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

const server = new ApolloServer({ typeDefs })

server.listen().then(({url}) => {
    console.log(`Running on ${url}`);
})
```

**코드 설명**:
1. 각각 필드 위에 붙혀진 `!`은 non-nullable를 의미합니다. 즉, `id`, `firstName`, `lastName`은 `null`이 될 수 없고 값이 반드시 존재해야 합니다. 
2. `Query` 타입에 새로운 `allUsers` 필드를 지정했습니다. 클라이언트는 이제 `allUsers`를 요청해 사용자 목록을 가져올 수 있습니다. 
3. `allUsers: [User!]!`은 `User` 타입의 배열입니다. 이 배열 안의 각 `User`은 `null`이 될 수 없고 배열 자체도 `null`이 될 수 없습니다. 


### 2. Mutation Type

Mutation 타입은 데이터를 변경하는 요청을 보낼 때 사용됩니다. 예를 들어, 새로운 사용자를 추가하거나 기존 사용자의 정보를 업데이트할 때 Mutation을 사용합니다. POST 요청과 유사하게, Mutation은 서버에 데이터를 추가하거나 수정할 때 사용됩니다.

```javascript
import {ApolloServer, gql} from "apollo-server";

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

const server = new ApolloServer({ typeDefs })

server.listen().then(({url}) => {
    console.log(`Running on ${url}`);
})
```

**코드 설명**:
1. `Mutation` 타입은 사용자를 추가하는 `createUser` 필드를 포함합니다. 이 필드는 `firstName`과 `lastName` 두 개의 인자를 받아 `User` 타입을 반환합니다.
2. `firstName`과 `lastName`는 `String!` 타입이며, `User` 타입은 `null`이 될 수 없습니다.
3. `createUser` 필드는 새로운 사용자를 추가하고, 추가된 사용자를 반환합니다.
4. `deleteUser` 필드는 사용자를 삭제하고 삭제된 사용자를 반환합니다. 이 필드는 `ID!` 타입의 인자를 받습니다.

아직 `createUser`와 `deleteUser` 필드에 대한 로직이 없기 때문에, 이 필드를 사용하면 에러가 발생할 것입니다. 이를 해결하기 위해 **Mutation Resolver**를 추가해야 합니다.

### 3. Resolver

Resolver는 GraphQL 서버에서 요청을 처리하는 함수입니다. Resolver는 Query나 Mutation을 실행하고, 요청에 대한 응답을 반환합니다.

```javascript
import {ApolloServer, gql} from "apollo-server";

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
        }
    },

    Mutation: {
        createUser(_, {firstName, lastName}) {
            const newId =
                users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1;
            const newUser = {
                id: newId,
                firstName: firstName,
                lastName: lastName
            }
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
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({url}) => {
    console.log(`Running on ${url}`);
})
```

**코드 설명**:
1. `resolvers` 객체는 `Query`와 `Mutation` 타입에 대한 함수를 포함합니다.
2. `allUsers` 함수는 `users` 배열을 반환합니다. 이 함수는 `Query` 타입의 `allUsers` 필드에 대한 Resolver입니다.
3. `createUser` 함수는 새로운 사용자를 추가하고 추가된 사용자를 반환합니다. 이 함수는 `Mutation` 타입의 `createUser` 필드에 대한 Resolver입니다.
4. `createUser` 함수의 두 번째 인자는 `firstName`과 `lastName`를 받습니다. 이 인자는 클라이언트가 Mutation을 실행할 때 전달하는 인자입니다.
5. `createUser` 함수는 새로운 사용자를 생성하고, 생성된 사용자를 반환합니다.

이제 GraphQL 서버가 작동합니다. `http://localhost:4000`에 접속하면 GraphQL Playground가 열립니다.

### 4. NextJS 연동

1. NextJS Project 생성
같은 루트 디렉토리에서 NextJS 프로젝트를 생성합니다.
   ```bash
   npx create-next-app frontend
   cd frontend
   ```

2. Apollo Client 설치

   ```bash
    npm install graphql @apollo/client apollo-server-micro graphql-tag
    ```

3. `apollo-client.js` 파일 생성
   
    localhost:4000을 켜신 상태에서 루트 다이렉토리에서 `lib` 폴더를 생성하고 `apollo-client.js` 파일을 생성합니다.

   ```javascript
   import { ApolloClient, InMemoryCache } from "@apollo/client";

   const client = new ApolloClient({
       uri: "http://localhost:4000",
       cache: new InMemoryCache(),
   });

   export default client;
   ```

4. NextJS에 연결
   
   `app/layout.js` 파일을 열고 `ApolloProvider`를 추가합니다.

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

   `app/page.js` 파일을 생성 후 다음과 같이 코드를 작성합니다. 

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
    }`;

    const CREATE_USER = gql`
    mutation CreateUser($firstName: String!, $lastName: String!) {
        createUser(firstName: $firstName, lastName: $lastName) {
        id
        firstName
        lastName
        fullName
        }
    }`;

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

   그러신 후에 터미널에서 `npm run dev`를 실행하시면 NextJS 프로젝트가 실행됩니다. 

   ```bash
    npm run dev
    ```

    > **주의**: Apollo Server와 NextJS 프로젝트를 동시에 실행하려면 두 개의 터미널 창을 열어야 합니다. 한 터미널 창에서  `frontend`에서 `npm run dev`를 실행하고, 다른 터미널 창에서 `backend` 다이렉토리에서 `npm run start`를 실행하세요.

    이제 `http://localhost:3000`에 접속하면 사용자 목록과 사용자 추가 폼이 표시됩니다. 사용자를 추가하면 사용자 목록이 업데이트되는 것을 확인할 수 있습니다.
    
**코드 설명**: 
1. `ALL_USERS` 쿼리는 모든 사용자를 가져오는 쿼리입니다. 이 쿼리는 `useQuery` 훅을 사용해 데이터를 가져옵니다.
2. `CREATE_USER` 뮤테이션은 새로운 사용자를 추가하는 뮤테이션입니다. 이 뮤테이션은 `useMutation` 훅을 사용해 데이터를 추가합니다.
3. `handleInputChange` 함수는 입력 필드의 값을 업데이트합니다.
4. `handleSubmit` 함수는 사용자를 추가하는 함수입니다. 이 함수는 `createUser` 뮤테이션을 실행하고, 사용자를 추가한 후 사용자 목록을 `refatch()`를 통해 새로고침합니다.
5. `loading`이 `true`이면 "Loading..."이 표시됩니다.

**Reference**

[https://www.redhat.com/ko/topics/api/what-is-graphql](https://www.redhat.com/ko/topics/api/what-is-graphql)

[https://graphql.org/](https://graphql.org/)

[https://apollographql.com/docs/apollo-server/](https://apollographql.com/docs/apollo-server/)
