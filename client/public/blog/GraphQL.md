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
    import {ApolloServer, gql} from "appolo-server";

    const server = new ApolloServer({})

    server.listen().then(({url}) => {
        console.log(`Running on ${url}`);
    })
    ```

    이 코드를 작성하시면 에러가 뜰 것입니다 (`Apollo Server requires either an existing schema, modules, or typeDefs`). 이 에러 메세지가 왜 뜨는지 GraphQL 기본 개념에서 배워보겠습니다. 


## GraphQL 기본 개념

### 1. Query Type

위의 에러 메시지의 원인은 Apollo Server가 작동하기 위해 GraphQL 스키마나 타입 정의가 필요하기 때문입니다. GraphQL 서버는 클라이언트가 데이터를 요청하는 방법과 구조를 명확히 정의해줘야 하기 때문에 스키마 또는 `typeDefs`가 필수 요소입니다. 위와 같은 코드에선 아직 Data의 모양 (shema)가 아직 정의되지 않았기 떄문에 위와 같은 에러가 뜹니다. 

이 문제를 해결하기 위해, 데이터를 어떻게 구조화할지 명시하는 typeDefs를 정의해주어야 합니다. 아래와 같이 Tweet 타입을 포함한 typeDefs를 추가하는 코드로 이를 해결할 수 있습니다.

```javascript
import {ApolloServer, gql} from "appolo-server";

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
위 코드에서 추가한 Query 타입은 GraphQL의 기본 요소 중 하나로, 클라이언트가 서버에서 데이터를 요청하는 방식을 정의합니다. GraphQL 서버는 클라이언트가 요청할 수 있는 데이터와 그 형태를 Query 타입을 통해 설명하며, 이를 통해 클라이언트는 서버에 데이터 요청을 할 수 있게 됩니다. 그래서 만약 `Query`가 정의되지 않는다면 GraphQL 서버는 시작되지 않습니다. 

1. **type Query**: 여기서 Query는 GraphQL의 특별한 타입으로, 클라이언트가 데이터를 읽어 올 때 사용하는 "읽기 전용" 타입입니다. Query 타입 안에 정의된 필드는 클라이언트가 요청할 수 있는 데이터의 이름과 구조를 나타냅니다. 예를 들어, 위 코드에서는 text라는 이름의 필드를 정의했으며, 이 필드의 데이터 타입은 String으로 설정되어 있습니다. 즉, 클라이언트는 text라는 문자열 데이터를 요청할 수 있게 됩니다.
2. **text 필드**: text 필드는 Query 타입에 속해 있으며, String 타입을 반환합니다. 이를 통해 클라이언트가 이 Query를 요청하면 서버는 text라는 이름으로 정의된 문자열 값을 반환할 것입니다. 이는 서버에서 정의된 스키마에 따라 클라이언트가 받을 수 있는 데이터 형식을 명확하게 나타냅니다.

여기에 새로운 User 타입을 추가하겠습니다. User 타입에는 세가지 필드가 있습니다: `ID`, `firstName`, 그리고 `lastName`. 

이걸 코드로 작성해보겠습니다

```javascript
import {ApolloServer, gql} from "appolo-server";

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

### 3. Query Resolvers

**Reference**

[https://www.redhat.com/ko/topics/api/what-is-graphql](https://www.redhat.com/ko/topics/api/what-is-graphql)

[https://graphql.org/](https://graphql.org/)

[https://apollographql.com/docs/apollo-server/](https://apollographql.com/docs/apollo-server/)
