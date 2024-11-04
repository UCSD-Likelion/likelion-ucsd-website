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

Next.js를 시작하려면 프로젝트를 생성하고, App Router 구조의 기본 템플릿을 실행해보는 것이 좋습니다. 아래 단계에 따라 **Next.js 프로젝트 설정**과 **간단한 파일 작성**을 해보겠습니다.

### 1. **Next.js 설치하기**

Next.js 프로젝트를 생성하기 위해 **create-next-app** 명령어를 사용합니다. 이 명령어는 Next.js의 기본 설정과 폴더 구조를 자동으로 생성합니다.

```bash
npx create-next-app my-next-app
```

- `my-next-app`은 프로젝트 이름으로, 원하는 이름으로 변경할 수 있습니다.
- 이 명령어는 필요한 모든 **의존성(dependency)**을 설치하고, Next.js의 기본 템플릿을 생성합니다.

### 2. **App Router 프로젝트 구조 이해하기**

App Router가 적용된 프로젝트의 폴더 구조는 아래와 같습니다:

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

- **app/**: Next.js의 **App Router 폴더**로, 페이지와 레이아웃을 정의합니다.

  - **favicon.ico**: 프로젝트의 **파비콘 파일**로, 브라우저 탭 아이콘으로 사용됩니다.
  - **layout.js**: 공통 레이아웃을 정의하는 파일로, **app 폴더 내 모든 페이지**에 적용됩니다.
    - 예를 들어, 헤더나 푸터를 포함하는 레이아웃을 설정할 수 있습니다.
  - **page.js**: 기본 홈 페이지 파일로, **`/` 경로**에 매핑됩니다.
  - **globals.css**: **전역 스타일**을 정의하는 CSS 파일로, 애플리케이션 전체에 적용됩니다.
  - **page.module.css**: **모듈화된 CSS 파일**로, 특정 페이지에만 스타일을 적용할 수 있습니다.

- **public/**: **정적 파일**을 저장하는 폴더입니다. 이 폴더의 파일들은 `/` 경로로 직접 접근할 수 있습니다.

  - 예를 들어, `public/image.png` 파일은 `/image.png` 경로로 접근 가능합니다.

- **next.config.mjs**: Next.js의 **설정 파일**로, 환경 변수, 리다이렉트, 국제화 등의 설정을 정의합니다.

- **package.json**: 프로젝트의 **의존성 정보**와 **스크립트**를 포함하는 파일입니다.

- **jsconfig.json**: 프로젝트 내 **경로 별칭**을 정의하는 데 사용되며, JavaScript 프로젝트에 대한 설정 파일입니다.

### 3. **개발 서버 실행하기**

Next.js 앱을 로컬 환경에서 실행하려면, 생성된 프로젝트 디렉토리로 이동한 후 다음 명령어를 입력합니다:

```bash
cd my-next-app
npm run dev
```

- 이 명령어를 실행하면 **개발 서버**가 시작되며, 브라우저에서 `http://localhost:3000`에 접속하면 기본 Next.js 페이지가 보입니다.
- 개발 서버는 **자동 리로드**를 지원하여, 코드 변경 시 페이지가 자동으로 갱신됩니다.

### 4. **기본 페이지 수정하기**

App Router에서는 `app/page.js`가 홈 페이지로 설정됩니다. 이 파일을 열어 내용을 수정해보세요:

```jsx
export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <img
        src="https://i.imgur.com/i7pdsjX.png"
        alt="로고"
        style={{ width: "120px", height: "100px" }}
      />
      <h1>안녕하세요, Next.js!</h1>
      <p>이 프로젝트는 Next.js를 테스트하는 예제입니다.</p>
    </div>
  );
}
```

- 위와 같이 텍스트를 변경하고, 브라우저에서 새로고침하면 **자동으로 반영**되는 것을 확인할 수 있습니다.

위의 `app/page.js`를 수정하였으면, 이번에는 `app/layout.js`으로 들어가줍니다. 여기서 Navigation bar을 추가해보겠습니다. 이 파일을 열어 내용을 수정해보세요:

```jsx
export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <title>Next.js App Router 예제</title>
      </head>
      <body>
        {/* 네비게이션 바 */}
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
                홈
              </a>
            </li>
            <li style={{ marginRight: "1rem" }}>
              <a
                href="/about"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                소개
              </a>
            </li>
            <li>
              <a
                href="/contact"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                연락처
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

### 5. **새로운 페이지 추가하기**

App Router에서는 파일 시스템 기반으로 페이지가 설정됩니다. 새로운 페이지를 만들려면, **`app/` 폴더에 새 파일을 추가**하면 됩니다.

1. **새로운 파일 생성**: `app/about/page.js`를 생성하고, 아래 내용을 추가합니다:

```jsx
export default function About() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>소개 페이지</h1>
      <p>이 페이지는 Next.js App Router를 사용하여 만든 소개 페이지입니다.</p>
    </div>
  );
}
```

2. **URL 확인**: 브라우저에서 `http://localhost:3000/about`에 접속하면, 새로 만든 페이지가 표시됩니다.

3. 이번에는 위와 똑같은 방식으로 `app/contact/page.js`를 생성하고, 아래 내용을 추가합니다:

```jsx
export default function Contact() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>연락처 페이지</h1>
      <p>문의 사항이 있으면 언제든지 연락주세요!</p>
    </div>
  );
}
```

### 6. **스타일 적용하기**

App Router에서도 전역 스타일과 모듈화된 스타일을 지원합니다.

1. **전역 스타일 적용하기**

   - `app/globals.css` 파일을 수정하여 전역 스타일을 추가할 수 있습니다.

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

2. **모듈화된 스타일 적용하기**

- Next.js의 **CSS 모듈**을 사용하여 컴포넌트별로 독립적인 스타일을 적용할 수 있습니다.
- 예를 들어, `app/page.module.css` 파일을 만들어 다음과 같이 작성합니다:

  ```css
  .title {
    color: blue;
    font-size: 2rem;
  }
  ```

- `app/page.js`에서 CSS 모듈을 사용하여 스타일을 적용합니다:

  ```jsx
  import styles from "./page.module.css";

  export default function Home() {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <img
          src="https://i.imgur.com/i7pdsjX.png"
          alt="로고"
          style={{ width: "120px", height: "100px" }}
        />
        <h1 className={styles.title}>안녕하세요, Next.js!</h1>
        <p>이 프로젝트는 Next.js를 테스트하는 예제입니다.</p>
      </div>
    );
  }
  ```

### 7. **Next.js의 기본 개념 요약**

- Next.js의 **App Router**는 **파일 시스템 기반 라우팅**과 **서버사이드 렌더링(SSR)**, **정적 사이트 생성(SSG)**을 지원합니다.
- 기본 페이지를 생성하고, 실시간으로 변경 사항을 반영할 수 있습니다.
- 스타일링은 **전역 CSS**와 **CSS 모듈**을 통해 쉽게 적용할 수 있습니다.

## Next.js 기본 개념

### 1. 파일 기반 라우팅

- **설명**: Next.js의 App Router에서는 `app/` 폴더 내의 파일과 폴더 구조를 기반으로 라우팅이 자동으로 이루어집니다. 파일이나 폴더 이름에 따라 URL이 결정됩니다.
- **코드 예시**:

1. **홈 페이지 (/)** 프로젝트 루트에 있는 `app` 폴더 안에 `page.js` 파일을 생성해 아래와 같이 코드를 작성해 주세요:

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

`http://localhost:3000`으로 접속하면 "This is home page"라는 텍스트가 표시됩니다. `app/page.js` 파일은 루트 경로(`/`)와 매핑됩니다.

2. **소개 페이지 (/about)** `app/about/` 폴더 안에 `page.js` 파일을 생성해 아래와 같이 코드를 작성해주세요:

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

3. **제품 페이지 (/products/item)** `app/products/item/` 폴더를 만든 후 `page.js` 파일을 생성해 아래와 같이 코드를 작성해주세요:

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

- **요약**: Next.js의 App Router에서는 파일과 폴더 이름에 따라 URL이 자동으로 매핑됩니다. 이 구조를 활용하면 유지보수가 용이하며 URL 경로를 직관적으로 관리할 수 있습니다.

### 2. 동적 라우팅 (Dynamic Routing)

- **설명**: Next.js의 App Router에서는 동적 경로를 만들기 위해 **`[]` 문법**을 사용합니다. 이를 통해 다양한 URL을 처리할 수 있습니다.

- **코드 예시**: `app/posts/[id]/page.js` 파일을 생성한 뒤, 아래의 코드를 작성해 주세요:

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

  `http://localhost:3000/posts/1`과 같은 URL에 접속하면 "Post ID: 1"이 표시됩니다. 여기서 `1`은 URL의 동적 파라미터로, `params`를 통해 접근할 수 있습니다.

### 3. 레이아웃 & 메타데이터 설정

- **설명**: Next.js의 App Router에서는 **`layout.js`** 파일을 통해 공통 레이아웃을 설정합니다. 모든 페이지에서 공유되는 구조적 요소를 정의하며, 메타데이터도 설정할 수 있습니다.

- **코드 예시**: 프로젝트의 `app/layout.js` 파일을 아래와 같이 작성합니다:

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

  특정 경로에 다른 레이아웃을 적용하려면 해당 폴더에 `layout.js` 파일을 생성합니다. 예를 들어, `app/about/layout.js` 파일을 아래와 같이 작성합니다:

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

- **요약**: Next.js의 App Router는 공통 UI 요소와 메타데이터 설정을 레이아웃 파일을 통해 관리합니다. 이를 통해 사용자 경험과 SEO를 동시에 개선할 수 있으며, 코드의 유지보수성도 높아집니다.

### 4. Server Side Rendering (SSR)과 Client Side Rendering (CSR)

#### Client Side Rendering (CSR)

- **설명**: CSR은 브라우저가 직접 렌더링 작업을 수행하는 방식으로, React 컴포넌트를 클라이언트에서 렌더링합니다.
- **코드 예시**: `app/counter/page.js` 파일을 생성하고, 아래 코드를 작성합니다:

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

  `"use client";`를 추가해 클라이언트 전용 컴포넌트임을 명시합니다.

#### Server Side Rendering (SSR)

- **설명**: Next.js의 App Router에서는 **서버에서 페이지를 렌더링**하고 HTML로 변환된 상태로 클라이언트에 전달합니다.
- **코드 예시**: `app/server-side/page.js` 파일을 생성하고, 아래 코드를 작성합니다:

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

  여기서 `dynamic` 속성을 사용해 페이지가 SSR로 동작하도록 강제합니다.

### 5. Vercel 배포

Vercel은 Next.js의 공식 배포 플랫폼으로, 빠르고 안정적인 Next.js 배포를 지원합니다.

#### Vercel 배포 단계

1. **Vercel 계정 생성**

   - [Vercel 웹사이트](https://vercel.com/)에서 계정을 생성합니다.

2. **Next.js 프로젝트 연결**

   - 프로젝트를 GitHub에 업로드한 후, Vercel에서 **“New Project”**를 선택하고 GitHub 리포지토리를 연결합니다.

3. **배포 진행**

   - 배포 설정을 확인하고, **“Deploy”** 버튼을 클릭합니다.

4. **배포 완료**
   - 배포가 완료되면 **배포 URL**이 생성됩니다. 예: `https://your-project.vercel.app`

#### Vercel의 주요 기능

- **자동 배포**: Git에 커밋을 푸시하면 자동으로 배포가 갱신됩니다.
- **환경 변수 관리**: Vercel 대시보드에서 환경 변수를 설정할 수 있습니다.

## **Next.js 기본 개념 실습 문제**

다음은 **App Router 구조**를 기반으로 한 Next.js의 각 개념을 이해하기 위한 실습 문제입니다. 문제에 대한 구체적인 코드 해답은 주어지지 않았으니, 스스로 해결해 보세요!

---

### **1. 파일 기반 라우팅 실습**

#### **문제 1: 홈 페이지 구현**

- **목표**: `app/page.js` 파일을 생성하고 "Welcome to Next.js!"라는 텍스트가 표시되는 홈 페이지를 구현해 보세요.
- **힌트**: `app/page.js`는 루트 경로(`/`)와 매핑됩니다.

#### **문제 2: 소개 페이지 추가**

- **목표**: `app/about/page.js` 파일을 생성하고 "This is the About Page"라는 텍스트가 표시되는 소개 페이지를 추가해 보세요.
- **힌트**: 브라우저에서 `/about` 경로로 접속해 페이지를 확인할 수 있습니다.

#### **문제 3: 다단계 경로 구현**

- **목표**: `app/products/item/page.js` 파일을 생성하고 "Product Details"라는 텍스트가 표시되는 페이지를 구현해 보세요.
- **힌트**: `/products/item` URL 경로로 접속하면 해당 페이지가 표시되어야 합니다.

---

### **2. 동적 라우팅 (Dynamic Routing) 실습**

#### **문제 4: 동적 블로그 포스트 페이지 만들기**

- **목표**: `app/posts/[id]/page.js` 파일을 생성하고, URL의 id 값을 받아 "Post ID: {id}"라는 텍스트가 표시되도록 해 보세요.
- **힌트**: `useRouter` 대신, **params**를 활용해 URL 파라미터에서 id 값을 가져올 수 있습니다. `/posts/123`과 같은 URL로 접속하면 "Post ID: 123"이 나타나야 합니다.

---

### **3. 레이아웃 & 메타데이터 설정 실습**

#### **문제 5: 공통 레이아웃 적용**

- **목표**: `app/layout.js` 파일을 생성하고, 모든 페이지에 "My Next.js App"이라는 공통 헤더를 추가해 보세요.
- **힌트**: `app/layout.js`는 모든 페이지의 공통 레이아웃을 설정하는 데 사용됩니다.

#### **문제 6: 메타데이터 설정**

- **목표**: `app/layout.js` 파일에서 **메타데이터(예: 제목, 설명)**를 추가해 보세요. 페이지의 `<head>` 태그에 `<title>`과 `<meta>`를 설정합니다.
- **힌트**: `export const metadata` 객체를 사용하여 메타데이터를 설정할 수 있습니다.

---

### **4. Server Side Rendering (SSR)과 Client Side Rendering (CSR) 실습**

#### **문제 7: CSR 페이지 구현**

- **목표**: `app/counter/page.js` 파일을 생성하고, `useState`와 `useEffect`를 사용해 클라이언트 사이드에서 로딩되는 간단한 카운터 페이지를 구현해 보세요.
- **힌트**: `"use client"` 문구를 파일의 최상단에 추가해 클라이언트 렌더링을 명시하세요.

#### **문제 8: SSR 페이지 구현**

- **목표**: `app/server-side/page.js` 파일을 생성하고, Next.js의 `getServerSideProps`에 해당하는 **async 함수**를 사용해 서버에서 데이터를 가져와 렌더링하는 페이지를 구현해 보세요.
- **힌트**: 이 함수 내에서 API 호출을 시뮬레이션하여 서버에서 데이터를 받아오는 방식을 연습해 보세요.

## Next.js 프론트엔드 실습과제: Personal Portfolio 웹사이트 만들기

- 배운 내용들을 이용하여 Personal Portfolio 웹사이트를 만들어봅시다.
- Personal Portfolio는 개인의 기술과 경력을 소개하는 웹사이트입니다. 주로 개발자, 디자이너, 크리에이티브 전문가들이 자신의 작품과 프로젝트, 기술 스택, 경력, 연락처 등을 한눈에 보여주기 위해 만듭니다.
- 주요 구성요소로는 홈페이지, 프로젝트 섹션, 기술스텍, 연락처 등이 있으며, 지금까지 저희가 배운 프론트엔드 기술을 사용하여 구현할 수 있습니다.

## Next.js와 백엔드

이 과정에서는 Next.js의 API Routes를 사용하여 **백엔드 개념**을 배우고, 최종적으로 **로그인 시스템**을 구축해 보겠습니다.

### 0. 프로젝트 설정

1. **Next.js 프로젝트 생성**

   ```bash
   npx create-next-app@latest login-system
   cd login-system
   npm install mongodb next-auth
   ```

2. **환경 변수 설정**
   - `.env.local` 파일에 MongoDB URI와 GitHub OAuth 정보를 입력합니다.
   ```plaintext
   MONGODB_URI=your_mongo_uri
   GITHUB_ID=your_github_id
   GITHUB_SECRET=your_github_secret
   ```

이제 각 개념을 배우면서 로그인 시스템을 구축해 보겠습니다.

---

### 1. 백엔드란?

#### 개념 설명

**백엔드(Backend)** 는 소프트웨어 시스템의 보이지 않는 부분으로, 주로 데이터 저장, 비즈니스 로직 처리, 클라이언트 요청 응답을 담당하는 핵심 요소입니다. 사용자(클라이언트)는 웹 브라우저나 앱을 통해 화면에 보이는 **프론트엔드(Frontend)** 와 상호작용하지만, 실제 데이터 관리나 복잡한 연산은 백엔드에서 이루어집니다. 백엔드는 클라이언트의 요청에 맞는 데이터를 준비하고, 필요한 연산을 수행해 다시 프론트엔드에 응답합니다.

#### 백엔드의 주요 구성 요소

1. **서버(Server)**:

   - 서버는 클라이언트의 요청을 받아 처리하는 컴퓨터나 프로그램입니다. 웹 서버, 데이터베이스 서버 등이 있으며, 백엔드 시스템은 이 서버에서 실행됩니다. 서버는 인터넷을 통해 접근할 수 있으며, 클라이언트와 네트워크로 연결되어 요청과 응답을 주고받습니다.

2. **데이터베이스(Database)**:

   - 데이터베이스는 애플리케이션의 데이터를 영구적으로 저장하는 공간입니다. 백엔드는 데이터베이스에서 데이터를 불러오거나 저장하면서 사용자가 필요로 하는 정보를 제공합니다. 예를 들어, 사용자가 로그인할 때 입력한 정보와 비교해 인증을 처리하거나, 사용자가 원하는 정보를 검색해 반환하는 작업은 모두 데이터베이스와의 상호작용을 통해 이루어집니다.

3. **API(Application Programming Interface)**:

   - API는 백엔드가 프론트엔드와 데이터를 주고받을 수 있도록 해주는 인터페이스입니다. 클라이언트는 API를 통해 서버에 요청을 보내고, 서버는 API를 통해 데이터를 반환합니다. API는 주로 **REST API**나 **GraphQL** 같은 형태로 제공되며, 클라이언트가 백엔드의 기능을 쉽게 사용할 수 있도록 도와줍니다.

4. **비즈니스 로직(Business Logic)**:
   - 비즈니스 로직은 애플리케이션이 수행해야 하는 핵심 기능이나 규칙을 정의합니다. 예를 들어, 온라인 쇼핑몰에서 장바구니에 물건을 추가하는 기능, 결제하는 절차, 할인 조건 등을 처리하는 것은 비즈니스 로직에 속합니다. 백엔드는 이러한 비즈니스 로직을 구현해 클라이언트가 요청하는 작업을 수행합니다.

---

#### 백엔드의 역할 요약

- **데이터 처리 및 관리**: 데이터를 안전하게 저장하고 불러오는 역할을 수행합니다.
- **비즈니스 로직 실행**: 애플리케이션이 수행해야 하는 규칙을 코드로 구현해, 필요한 연산과 검증을 수행합니다.
- **보안**: 인증, 권한 관리 등을 통해 사용자 데이터와 시스템을 보호합니다.
- **클라이언트 요청 응답**: 클라이언트가 보내는 요청을 처리하고, 필요한 정보를 다시 돌려줍니다.

백엔드는 이러한 기능을 통해 사용자가 보이지 않는 곳에서 데이터를 관리하고, 클라이언트가 요구하는 기능을 원활하게 제공할 수 있도록 돕는 중요한 구성 요소입니다.

**Next.js의 API Routes**는 백엔드를 쉽게 구축할 수 있도록 `pages/api` 디렉토리 안에 파일을 생성하면 각 파일이 자동으로 **API 엔드포인트**로 작동하게 해주는 기능입니다. 서버리스 환경에서 작동하므로 별도의 서버 설정 없이 API를 만들고 배포할 수 있습니다.

#### 예시 코드

```javascript
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: "Hello, World!" });
}
```

이 `handler` 함수는 클라이언트가 `/api/hello`로 요청을 보낼 때마다 호출됩니다. `res.status(200).json()`은 상태 코드 200으로 JSON 데이터를 반환하는 함수입니다.

#### 실제 사용 예시

```javascript
// 클라이언트 코드 예시
fetch("/api/hello")
  .then((response) => response.json())
  .then((data) => console.log(data.message)); // 콘솔에 "Hello, World!" 출력
```

이를 통해 클라이언트가 서버에 요청을 보내고 응답을 받는 기본적인 백엔드 구조를 경험할 수 있습니다.

---

### 2. HTTP 메서드

#### 개념 설명

**HTTP 메서드**는 클라이언트가 서버에 요청을 보낼 때 사용하는 방식입니다. 주로 사용되는 HTTP 메서드는 다음과 같습니다:

- **GET**: 서버에서 데이터를 요청할 때 사용합니다. 예를 들어, 사용자의 정보를 요청할 때 사용합니다.
- **POST**: 새로운 데이터를 서버에 추가할 때 사용합니다. 회원가입을 통해 사용자의 정보를 서버에 저장할 때 POST를 사용합니다.
- **PUT**: 서버에 있는 데이터를 수정할 때 사용합니다. 예를 들어, 사용자가 프로필 정보를 업데이트할 때 사용됩니다.
- **DELETE**: 데이터를 삭제할 때 사용합니다.

HTTP 메서드는 클라이언트와 서버가 데이터를 효율적으로 주고받을 수 있도록 돕는 중요한 개념입니다.

#### 실습 2: 회원가입 API 구현

POST 메서드를 사용하여 회원가입 데이터를 서버에 보내고 저장하는 API를 작성해 보겠습니다.

```javascript
// pages/api/register.js
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const client = await clientPromise;
    const db = client.db("loginSystem");

    const { email, password } = req.body;
    await db.collection("users").insertOne({ email, password });
    res.status(201).json({ message: "User registered successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
```

- **확인 방법**: 클라이언트에서 `email`과 `password` 데이터를 POST 요청으로 보내면 서버에 저장됩니다.

---

### 3. RESTful API

#### 개념 설명

RESTful API는 클라이언트와 서버가 데이터를 주고받을 때 일관된 규칙을 따르는 방식입니다. RESTful API의 주요 원칙은 다음과 같습니다:

- **자원 기반의 URL**: 각 URL은 하나의 자원(Resource)을 나타냅니다. 예를 들어, `/api/users`는 모든 사용자를, `/api/users/1`은 특정 사용자를 나타냅니다.
- **무상태성**: 서버는 클라이언트의 요청 상태를 기억하지 않습니다. 모든 요청은 독립적으로 이루어집니다.
- **표준 HTTP 메서드 사용**: GET, POST, PUT, DELETE 메서드를 통해 작업을 일관되게 구분합니다.
- **JSON 형식의 응답**: 대부분의 RESTful API는 JSON 형식으로 데이터를 주고받습니다.

#### 실습 3: 로그인 API 생성

RESTful 구조에 따라 로그인 API를 작성합니다. 클라이언트는 `/api/login` 경로로 POST 요청을 보내 사용자가 로그인할 수 있도록 합니다.

```javascript
// pages/api/login.js
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const client = await clientPromise;
    const db = client.db("loginSystem");

    const { email, password } = req.body;
    const user = await db.collection("users").findOne({ email, password });

    if (user) {
      res.status(200).json({ message: "Login successful", user });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
```

- **확인 방법**: 클라이언트에서 로그인 요청을 보내고, 서버가 올바른 응답을 반환하는지 확인합니다.

---

### 4. 데이터베이스 연동

#### 개념 설명

서버는 **MongoDB**와 같은 데이터베이스를 사용해 사용자 데이터를 영구적으로 저장할 수 있습니다. 데이터베이스는 서버의 데이터 요청에 응답하고, 데이터를 효율적으로 관리합니다.

#### 실습 4: MongoDB 연결

회원가입과 로그인 API가 MongoDB와 연결되도록 설정합니다.

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

- **확인 방법**: 회원가입 시 사용자가 MongoDB에 저장되고, 로그인 시 이 데이터를 조회하여 응답이 정상적으로 이루어지는지 확인합니다.

---

### 5. 인증 및 권한 관리

#### 개념 설명

**인증(Authentication)**은 사용자가 누구인지 확인하는 과정이며, **권한 관리(Authorization)**는 인증된 사용자가 무엇을 할 수 있는지를 결정합니다. NextAuth.js 라이브러리를 통해 OAuth 인증을 사용해 사용자 로그인 기능을 추가할 수 있습니다.

#### 실습 5: NextAuth를 이용한 GitHub OAuth 인증 구현

1. **OAuth 설정**: GitHub 계정을 사용해 로그인할 수 있도록 OAuth 인증을 추가합니다.

   ```javascript
   // pages/api/auth/[...nextauth].js
   import NextAuth from "next-auth";
   import GitHubProvider from "next-auth/providers/github";

   export default NextAuth({
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
   });
   ```

2. **클라이언트에서 로그인 상태 확인**

   ```javascript
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

---

### 6. 클라이언트-서버 통신 (CSR)

#### 개념 설명

CSR(Client-Side Rendering)은 클라이언트에서 API를 호출하여 서버로부터 데이터를 받아와 실시간으로 업데이트하는 방식입니다.

#### 실습 6: 로그인된 사용자 정보 가져오기

```javascript
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

function UserProfile() {
  const { data: session } = useSession();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (session) {
      fetch("/api/user")
        .then((res) => res.json())
        .then((data) => setUser(data));
    }
  }, [session]);

  if (!user) return <p>Loading...</p>;
  return <div>Welcome, {user.email}</div>;
}

export default UserProfile;
```

## Next.js Document

[https://nextjs.org](https://nextjs.org/)
[https://nextjs.org/docs](https://nextjs.org/docs)
