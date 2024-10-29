# Next.js

1. Next.js란
2. Next.js 기본개념
3. Next.js 백앤드
4. 실습

## Why Next.js?

![/nextjs0.png](/nextjs0.png)

Next.js는 웹 개발에서 자주 사용되는 프레임워크로, 넷플릭스, 페이스북, 구글, TikTok, Uber Eats 등 글로벌 기업들이 실제로 사용하고 있습니다. Next.js는 서버사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 통해 SEO 최적화와 빠른 페이지 로딩 속도를 제공하며, 파일 기반 라우팅과 이미지 최적화 등 다양한 기능으로 효율적인 개발 환경을 지원합니다. Vercel과의 통합 덕분에 배포도 간편하며, 이러한 이유로 Next.js는 프론트엔드와 풀스택 개발자 채용 시장에서 큰 주목을 받고 있습니다. Next.js를 배우면 실무에 바로 적용할 수 있는 기술을 익히게 되어 취업 경쟁력을 크게 높일 수 있습니다.

## Next.js와 React의 차이

- **React**는 프론트엔드 라이브러리로, 주로 웹페이지의 화면 구성에 집중합니다. React는 **클라이언트 사이드 렌더링(CSR)** 을 기본으로 하며, 데이터 페칭, 서버사이드 렌더링(SSR), 정적 사이트 생성(SSG) 등의 기능은 직접 구현하거나 추가 라이브러리(`react-router-dom`, `axios` 등)를 사용해야 합니다.
- **Next.js**는 React를 기반으로 한 **풀스택 프레임워크**입니다. React의 기능에 **서버사이드 렌더링(SSR)**, **정적 사이트 생성(SSG)**, **파일 기반 라우팅**, **API Routes** 등의 기능을 추가로 제공합니다. (더 간단하게 설명하면, React보다 더 다양한 기능들을 제공하며 여러 편리한 기능들이 있습니다.) Next.js는 단순한 **UI 라이브러리**를 넘어 **백엔드 API**와 **서버사이드 로직**까지 포함할 수 있는 **풀스택 프레임워크**로, 클라이언트와 서버를 모두 다룰 수 있습니다.

### 서버사이드 렌더링(SSR) vs 클라이언트 사이드 렌더링(CSR)

#### 서버사이드 렌더링(SSR)

- 서버에서 페이지를 생성한 뒤, 완성된 HTML을 클라이언트로 전달하는 방식입니다.
- 초기 로딩 속도가 빠르고, SEO에 유리합니다.
- 클라이언트는 받은 HTML을 그대로 렌더링하여 화면에 표시합니다.

#### 클라이언트 사이드 렌더링(CSR)

- 브라우저에서 자바스크립트로 페이지를 렌더링하는 방식입니다.
- 처음에는 빈 HTML이 로드되고, 자바스크립트가 실행되어 페이지가 동적으로 생성됩니다.
- 초기 로딩은 느리지만, 페이지 전환이 빠르고 **사용자 경험(UX)**이 매끄럽습니다.

## Next.js 시작하기

Next.js를 시작하려면 먼저 프로젝트를 생성하고, 기본적으로 제공되는 템플릿을 실행해보는 것이 좋습니다. 아래 단계에 따라 Next.js 프로젝트를 설정하고, 간단한 파일을 작성해봅시다.

### 1. **Next.js 설치하기**

Next.js 프로젝트를 생성하기 위해 **create-next-app**이라는 명령어를 사용합니다. 이 명령어는 기본 설정과 폴더 구조를 자동으로 생성해 줍니다.

```bash
npx create-next-app my-next-app
```

- `my-next-app`은 프로젝트 이름으로, 원하는 이름으로 변경할 수 있습니다.
- 이 명령어는 필요한 모든 dependency(사용된 패키지들)를 설치하고, Next.js의 기본 템플릿을 생성합니다.

![/nextjs1.png](/nextjs1.png)

**create-next-app**을 실행하면 여러가지 선택사항들이 나옵니다. 저희 실습에서는 위의 사진대로 선택해줍니다.

### 2. **프로젝트 구조 이해하기**

프로젝트가 생성되면 아래와 같은 폴더 구조가 나타납니다:

```markdown
my-next-app/
├── pages/
│ ├── index.js
│ └── api/
│ └── hello.js
├── public/
│ └── favicon.ico
├── styles/
│ ├── globals.css
│ └── Home.module.css
├── .gitignore
├── next.config.js
├── package.json
└── README.md
```

- **pages/**: Next.js에서 **페이지를 정의하는 폴더**로, 파일 이름이 URL 경로에 매핑됩니다.
  - **index.js**: 기본 홈 페이지 파일로, `/` 경로에 해당합니다.
  - **api/**: 서버리스 함수(API)를 정의하는 폴더로, 백엔드 요청을 처리할 수 있습니다.
- **public/**: 정적 파일을 저장하는 폴더입니다. 이 폴더의 파일들은 `/` 경로로 직접 접근할 수 있습니다.
- **styles/**: CSS 파일을 저장하는 폴더로, 전역 스타일과 모듈화된 스타일을 포함합니다.

#### 3. **개발 서버 실행하기**

Next.js 앱을 로컬 환경에서 실행하려면, 생성된 프로젝트 디렉토리로 이동한 후, 다음 명령어를 입력합니다:

```bash
cd my-next-app
npm run dev
```

- 이 명령어를 실행하면 **개발 서버**가 시작되고, 브라우저에서 `http://localhost:3000`에 접속하면 기본 Next.js 페이지가 보입니다.
- 개발 서버는 **자동 리로드**를 지원해, 코드가 변경될 때마다 페이지가 자동으로 갱신됩니다.

#### 4. **기본 페이지 수정하기**

`pages/index.js` 파일을 열어 내용을 수정해보세요:

```jsx
export default function Home() {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <p>This is your first Next.js project.</p>
    </div>
  );
}
```

- 위와 같이 간단한 텍스트를 변경하고, 브라우저에서 새로고침하면 **자동으로 반영**되는 것을 확인할 수 있습니다.

#### 5. **새로운 페이지 추가하기**

Next.js의 기본 라우팅은 파일 시스템 기반으로 이루어집니다. 새로운 파일을 `pages/` 폴더에 추가하면, 그 파일이 URL 경로로 매핑됩니다.

1. **새로운 파일 생성**: `pages/about.js`를 생성하고, 아래 내용을 추가합니다:
   ```jsx
   export default function About() {
     return (
       <div>
         <h1>About Page</h1>
         <p>This is the about page of your Next.js app.</p>
       </div>
     );
   }
   ```
2. **URL 확인**: 브라우저에서 `http://localhost:3000/about`에 접속하면, 새로 만든 페이지가 표시됩니다.

#### 6. **스타일 적용하기**

Next.js에서는 CSS 파일을 통해 전역 스타일과 모듈화된 스타일을 적용할 수 있습니다.

1. **전역 스타일 적용하기**
   - `styles/globals.css` 파일을 수정하여 전역 스타일을 추가할 수 있습니다.
   ```css
   body {
     font-family: Arial, sans-serif;
     margin: 0;
     padding: 0;
     background-color: #f4f4f4;
   }
   ```
2. **모듈화된 스타일 적용하기**

   - Next.js는 **CSS 모듈**을 지원하여, 컴포넌트별로 독립적인 스타일을 적용할 수 있습니다.
   - 예를 들어, `Home.module.css` 파일을 만들어 다음과 같이 작성합니다:
     ```css
     .title {
       color: blue;
       font-size: 2rem;
     }
     ```
   - `pages/index.js`에서 CSS 모듈을 사용하여 스타일을 적용합니다:

     ```jsx
     import styles from "../styles/Home.module.css";

     export default function Home() {
       return (
         <div>
           <h1 className={styles.title}>Hello, Next.js!</h1>
         </div>
       );
     }
     ```

#### 7. **Next.js의 기본 개념 요약**

- Next.js는 **서버사이드 렌더링(SSR)**과 **정적 사이트 생성(SSG)**을 기본으로 제공하며, 파일 기반 라우팅을 지원합니다.
- 기본 페이지를 생성하고, 브라우저에서 실시간으로 변경 사항을 확인할 수 있습니다.
- 스타일링은 **전역 CSS**와 **CSS 모듈**을 통해 쉽게 적용할 수 있습니다.

이로써 Next.js의 초기 설정과 기본 파일 실행 방법을 익혔습니다. 이제 더 복잡한 기능을 다루기 전에, Next.js의 구조와 동작 원리에 대해 조금 더 익숙해질 수 있습니다.

## Next.js 기본 개념

### 1. 파일 기반 라우팅

- **설명**: Next.js는 React와 달리, 디렉터리 구조를 기반으로 라우팅이 자동으로 이루어집니다. 예를 들어, 프로젝트의 특정 폴더에 파일을 추가하면 해당 파일 이름을 URL로 접근할 수 있습니다. 기본적으로 `/pages` 폴더 안에 있는 파일들이 라우트 역할을 하며, 폴더 구조가 URL 경로를 결정합니다.
- **코드 예시**:

  1. **홈 페이지 (/)** 프로젝트 루트에 있는 `app` 폴더 안에 `page.jsx` 파일을 생성해 아래와 같이 코드를 작성해 주세요:

    ```jsx
    function Home() {
      return(
        <div>
          <h1>This is home page</h1>
        </div>
      )
    }

    export default Home;
    ```

    `http://localhost:3000`으로 접속하면 "This is the home page"라는 텍스트가 표시됩니다. index.js 파일은 루트 경로(/)와 자동으로 매핑됩니다.

  2. **소개 페이지 (/about)** `about` 폴더 안에 `page.jsx` 파일을 생성해 아래와 같이 코드를 작성해주세요: 
  
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

    `http://localhost:3000/about`으로 접속하면 "About Us" 페이지가 표시됩니다.

  3. **제품 페이지 (/products/item)** `app` 폴더 안에 `products/item` 다이렉토리를 만든 후 `page.jsx` 파일을 생성해 아래와 같이 코드를 작성해주세요: 

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

    `http://localhost:3000/products/item`으로 접속하면 "Product Item" 페이지가 표시됩니다.
  
  - **요약**: Next.js의 파일 기반 라우팅 덕분에 라우트 설정 없이도 파일과 폴더 이름에 따라 URL이 자동으로 매핑됩니다. 이 구조를 활용하면 유지보수가 용이하며 URL 경로 구조를 직관적으로 관리할 수 있습니다.

### 2. 동적 라우팅 (Dynamic Routing)

- **설명**: Next.js에서는 동적 경로를 만들어 다양한 URL을 처리할 수 있습니다. `[]` 문법을 사용해 폴더나 파일 이름에 변수처럼 작동하는 경로를 지정하면 됩니다.

- **코드 예시**: `app` 폴더 안에 `[id].js` 파일을 생성한 뒤, 아래의 코드를 작성해 주세요:

  ```jsx
  import { useRouter } from 'next/router';

  function Post() {
    const router = useRouter();
    const { id } = router.query;

    return (
      <div>
        <h1>Post ID: {id}</h1>
      </div>
    );
  }

  export default Post;
  ```

  서버가 실행 중일 때, `http://localhost:3000/1`과 같은 URL에 접속하면 Post ID: 1이 표시됩니다. 여기서 1은 URL의 동적 파라미터로, `router.query`를 통해 접근할 수 있습니다.

### 3. 레이아웃 & 메타데이터 설정

- **설명**: Next.js에서는 페이지를 로딩할 때, 먼저 `layout.jsx`에 정의된 Layout 컴포넌트를 렌더링합니다. 그 후, URL 경로에 맞는 페이지 컴포넌트를 찾아 해당 위치에 렌더링합니다. 예를 들어, 프로젝트 루트 디렉토리에 `Layout.jsx`와 `Home.jsx` 파일이 있다면, Next.js는 홈 페이지를 아래와 같이 렌더링합니다:
  ```jsx
  <Layout>
    <Home />
  </Layout>
  ```

  이 방식을 사용하면 모든 페이지에 공통으로 들어가는 요소들을 Layout 컴포넌트에서 한 번에 관리할 수 있습니다. 이 레이아웃 방식은 페이지의 헤더, 푸터, 사이드바 등을 포함해 모든 페이지에 적용되는 메타데이터와 구조적인 부분을 손쉽게 정의할 수 있는 장점이 있습니다.

- **코드 예시**: 이제, 위에서 사용한 프로젝트에 Layout과 메타데이터를 설정해보겠습니다.
  1. `Layout.jsx`를 `app` 폴더 안에 생성을 한 후에 아래와 같이 코드를 작성해주시면 페이지 공통 레이아웃과 메타데이터를 정의합니다: 
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
            <div>{children}</div>
          </body>
        </html>
      );
    }
    ```

    이 뿐만 아니라 특정 경로(about 페이지 등)에 다른 레이아웃을 적용할 수도 있습니다. app/about 폴더 안에 layout.jsx 파일을 생성하고 다음과 같이 작성합니다:



    2. 또 다른 `layout.jsx` 파일을 `about` 폴더 안에 생성합니다: 
    ```jsx
    const metadata = {
      title: "About",
      description: "This is the about page",
    };

    export default function AboutLayout({ children }) {
      return (
        <div>
          <h1>About Layout</h1>
          <div>{children}</div>
        </div>
      );
    }
    ```
    `http://localhost:3000/about`에 접속하게 되면 "About Layout"이 잘 표시되지만 `http://localhost:3000`에는 표시 안되는 걸 보실 수 있습니다. 

- **설명**: 이 `layout.jsx` 파일은 기본 레이아웃을 정의하며, 페이지에 공통으로 적용될 헤더와 푸터를 포함하고 있습니다. 또한 metadata 객체를 통해 메타데이터도 설정했으며, `<title>`과 `<meta name="description">`을 페이지의 `<head>` 태그에 넣어 SEO와 페이지 설명을 지정했습니다. `children` 속성은 각 페이지의 콘텐츠가 표시될 자리입니다.
  
- **요약**: Next.js의 레이아웃과 메타데이터 기능을 사용하면 공통 UI 요소를 쉽게 관리하고, 각 페이지에 맞는 메타데이터를 손쉽게 설정할 수 있습니다. 이를 통해 사용자 경험과 SEO를 개선할 수 있으며, 코드의 유지보수성도 높아집니다.

### 4. Server Side Rendering (SSR)과 Client Side Rendering (CSR)

#### Rendering이란? 
Next.JS가 React 컴포넌트들을 가져온 후에 브라우저가 이해할 수 있는 HTML로 변환하는 작업을 말합니다. 

#### Client Side Rendering (CSR)
CSR은 브라우저 (client)가 직접 렌더링 작업을 수행하는 방식입니다. React는 (기본적으로 CSR을 사용함) JavaScript를 사용하여 컴포넌트를 HTML로 변환하여 화면에 표시합니다. 페이지 소스 코드는 비어 있지만, Chrome의 검사 도구(Inspection Tool)를 통해 렌더링된 HTML 태그들이 브라우저에 잘 나타나는 것을 확인할 수 있습니다.

이 방식의 단점은 네트워크 연결이 끊기는 경우 발생합니다. 브라우저가 JavaScript 파일을 다운로드하지 못하면 소스 코드가 비어 있게 되어, 사용자는 빈 페이지를 보게 됩니다.

그래서 만약 `useState`나 `useEffect`를 사용하게 되면 그 파일 상단에 `"use client";`를 작성해야합니다. 

1. 같은 프로젝트의 `app` 폴더 안에 `ounter` 폴더을 생성한 후, `page.jsx` 파일을 만들고 아래 코드를 작성해 주세요:
   ```jsx
   "use client";

    import React, { useState, useEffect } from 'react';

    function Counter() {
      const [count, setCount] = useState(0);

      useEffect(() => {
        console.log("Component mounted or updated");
      }, [count]);

      const handleIncrement = () => {
        setCount(count + 1);
      };
      
      return (
        <div>
          <h1>Client Side Rendering Example</h1>
          <p>Count: {count}</p>
          <button onClick={handleIncrement}>Increment</button>
        </div>
      );
    }

    export default Counter;
   ```

   이 페이지에서는 `useEffect`와 `useState`를 모두 사용하므로, `"use client";` 지시어가 없으면 Next.js에서 컴파일 에러가 발생합니다.

#### Server Side Rendering (SSR)
Next.js에서의 Server Side Rendering (SSR)은 React와 달리, 컴포넌트들이 서버 (Server)에서 미리 HTML로 변환된 상태로 사용자에게 전달됩니다. 이 때문에 브라우저에서 페이지 소스 코드를 확인하면, 컴포넌트들이 HTML 태그로 완전히 렌더링된 것을 볼 수 있습니다.

SSR의 주요 이점은 다음과 같습니다:

- 빠른 초기 로딩 속도: 서버에서 미리 생성된 HTML을 클라이언트에 전달하기 때문에, 초기 로딩이 빠르고 네트워크 속도가 느리거나 JavaScript가 비활성화된 환경에서도 콘텐츠가 정상적으로 표시됩니다.

이처럼 Next.js의 SSR 기능을 통해, 사용자 경험과 SEO를 동시에 개선할 수 있습니다.

## Next.js와 백앤드

### 1. API Routes

### 2. 데이터베이스 연동

### 3. 인증 및 권한 관리

### 4. 클라이언트와 서버 통신(CSR)

### 5. Vercel 배포와 서버리스 함수

## Next.js Document

## Next.js 실습과제
