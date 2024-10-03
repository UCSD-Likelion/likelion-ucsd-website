# GraphQL

1) GraphQL 소개
2) Apollo Server 셋업

## GraphQL이 무엇인가?

### GraphQL의 정의

> GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. 

GraphQL은 가장 대중적인 REST API가 가지고 있던 문제점을 해결하는 당시에 혁신적인 쿼티 언어입니다. GraphQL은 2015년에 처음으로 Facebook에서 specification (코드가 아닌 Markdown으로 아이디어를 구현한 방식)을 구현이 되었습니다. 그래서 GraphQL은 Javascript 뿐만 아니라 다른 언어에서도 사용이 가능합니다. 

### REST API가 갖고 있던 문제점들
 1. **Over-fetching**

   사용자가 REST API를 이용해 서버에 요청을 보낸다면 서버는 요청한 자료의 모든 것을 로딩합니다. 예를 들어, 어떤 개발자가 영화 API를 이용해 최신 영화들의 제목을 띄어주는 웹 프로젝트를 진행하고 있다고 해보자. 만약에 영화 API한테 데이터를 요청을 했다면 REST API는 이런 JSON 데이터를 줄 것입니다. 
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

   하지만 개발을 하고 있는 개발자는 저 JSON 데이터에 있는 `language`나 `company` 필드가 필요 없습니다. 이런 필요 없는 데이터를 불러옴으로서 API의 데이터 불러오는 시간은 더 길어질 것이고 딜레이가 생길 것입니다. 이 문제를 over-fetching이라고 합니다. GraphQL은 이 over-fetching 문제를 해결함으로서 API 요청의 속도를 향상시켰습니다. GraphQL은 필요한 필드만 요청합니다. 

 2. **Underfetching**

만약 같은 개발자가 같은 영화 API로 영화 리스트를 요청하고 있다고 가정을 해봅시다. 그리고 그 개발자는 본인 웹 프로젝트에 각각 영화의 장르들을 넣고 싶길 원합니다. 개발자가 영화 API로 보낸 요청은 이런 JSON 데이터를 줍니다: 

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

하지만 여기서 문제가 발생합니다. 예를 들어 `Quiet Place`의 장르를 알기 위해선 장르 JSON 파일을 요청해야합니다.

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

결국엔 그 개발자는 어떤 영화의 장르를 알기 위해서 두개의 URL에 요청을 해야합니다. 즉 하나의 요청이 부족한 현상입니다. 이런 REST API 문제점을 underfetching이라고 부릅니다. 

하지만 GraphQL API로는 단 한번의 요청으로 원하는 모든 정보를 얻을 수 있습니다. 이로서 GraphQL을 사용하는 프로젝트들은 속도가 훨씬 빨라집니다. 

### 요약: 

1. GraphQL API는 over-fetching과 underfetching의 문제점을 해결함으로서 REST API보다 빠르다
2. Over-fetching이란 한 번의 API 요청으로 과도하게 많은 데이터를 받는 현상을 말한다.
3. Under-fetching이란 어떠한 정보를 취득하기 위해서 여러 번의 요청을 보내야하는 현상을 말한다. 

## GraphQL 셋업

### Apollo Server

Apollo Server는 GraphQL 언어를 알아들을 수 있는 백앤드 서버입니다. 

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

4. 스크립트 변경

`package.json` 파일의 `scripts`를 변경 및 `module` 추가: 
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

> (`type`이 `"module"` 이라면 `import` syntax를 사용할 수 있다.)

**Reference**

[https://www.redhat.com/ko/topics/api/what-is-graphql](https://www.redhat.com/ko/topics/api/what-is-graphql)

[https://graphql.org/](https://graphql.org/)

[https://apollographql.com/docs/apollo-server/](https://apollographql.com/docs/apollo-server/)