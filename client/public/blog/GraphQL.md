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

## Query Type

## Mutation Type

## Query Resolverfs

**Reference**

[https://www.redhat.com/ko/topics/api/what-is-graphql](https://www.redhat.com/ko/topics/api/what-is-graphql)

[https://graphql.org/](https://graphql.org/)

[https://apollographql.com/docs/apollo-server/](https://apollographql.com/docs/apollo-server/)
