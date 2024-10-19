# React

1. 리액트의 중요성
2. 프론트엔드 라이브러리란
3. 리엑트 기초 문법
4. 실습

## Why React?

![/react1.png](/react1.png)

리엑트는 페이스북에서 개발한 프론트엔드 라이브러리로, 수많은 프론트엔드 라이브러리중 리액트는 실제로 **5천만 개** 이상의 웹사이트가 리액트를 사용하고 있으며, 상위 1만개의 웹사이트 중에서 **40.78%의** 웹사이트에서 사용되었고, 아직까지도 가장 사랑받는 자바스크립트 프론트엔드 라이브러리입니다.

![/react2.png](/react2.png)

위와 같이 넷플릭스, 페이스북, 트위터, 에어비엔비, 우버잇츠, 페이팔 등 다양한 글로벌 기업들이 실제로 리엑트를 사용하고 있습니다.

많은 기업들이 또한 리엑트 경험을 중요하게 여기고, 특히 프론트엔드 개발자쪽으로 관심이 있으면 필수적으로 요구되는 기술중에 하나입니다. 또한 계속해서 성장하는 커뮤니티로 인해 다양한 플러그인들, 도구들, 라이브러리들이 생김에 따라 다양한 확장성을 제공합니다.

## 라이브러리 vs 프레임워크

프로그래밍을 하다 보면 라이브러리와 프레임워크라는 용어를 자주 접하게 됩니다. 두 개념은 비슷해 보이지만, 중요한 차이점이 있습니다.

![/react3.png](/react3.png)

### 1. 라이브러리 (Library)

라이브러리는 이미 만들어진 코드 모음입니다. 개발자가 필요한 기능이 있을 때, 이 코드를 가져와서 사용하는 방식이죠. 주도권은 개발자에게 있습니다. 즉, 내가 원하는 기능을 불러와서 사용하고, 프로그램의 흐름은 내가 직접 관리하는 거예요.
예를 들어, **리액트(React)** 는 UI를 만드는 데 필요한 코드를 제공하는 라이브러리입니다. 내가 필요한 UI 컴포넌트를 골라서 쓰는 거죠.

### 2. 프레임워크 (Framework)

프레임워크는 프로그램을 만드는 기본적인 틀을 제공합니다. 프레임워크가 전체 구조와 흐름을 관리하고, 그 안에서 개발자가 필요한 부분을 작성하는 방식입니다. 주도권은 프레임워크에 있죠. 내가 프로그램의 흐름을 통제하기보다는, 프레임워크가 제공하는 규칙에 따라 코드를 작성하게 됩니다. 예를 들어, **앵귤러(Angular)** 나 **장고(Django)** 는 프레임워크입니다. 이 틀 안에서 프로그램을 개발하는 방식으로 진행됩니다.

### 핵심 차이:

- 라이브러리는 만들어진 코드 모음에서 필요한 코드를 가져다 쓸 수 있고, 전체 흐름은 내가 관리하는 반면,
- 프레임워크는 정해진 구조와 규칙에 따라 개발자가 그 틀 안에서 코드를 작성하게 됩니다.

쉽게 말해, 주도권이 누구에게 있느냐가 가장 큰 차이입니다. 라이브러리는 내가 주도하고, 프레임워크는 그 틀이 주도하는 방식이라고 보면 됩니다!

### 문제

1. 지수는 웹 애플리케이션의 스타일링을 빠르게 구현하기 위해 **부트스트랩(Bootstrap)** 을 사용했습니다. 부트스트랩을 통해 다양한 UI 컴포넌트를 불러와서 쉽게 레이아웃과 디자인을 구성할 수 있었습니다. 지수가 사용한 부트스트랩은 프레임워크일까요, 라이브러리일까요?

2. 민수는 파이썬으로 웹사이트를 개발하기 위해 **장고(Django)** 를 선택했습니다. 이 프로그램은 기본적으로 프로젝트 구조를 설정해 주고, 민수는 그 틀 안에서 코드를 작성하면서 전체적인 흐름을 따릅니다. 민수가 사용한 장고는 프레임워크일까요, 라이브러리일까요?

## 프론트엔드 라이브러리의 필요성: 왜 HTML만으로는 부족할까요?

HTML은 웹 페이지의 구조를 만드는 데 사용되는 기본적인 마크업 언어입니다. 하지만, 현대의 복잡한 웹 애플리케이션을 구축하기에는 HTML만으로는 한계가 있습니다. 그 이유는 다음과 같습니다:

1. **동적인 기능 부족**: HTML은 정적인 페이지를 만들기에는 적합하지만, 사용자와 상호작용하는 동적인 웹 애플리케이션을 만들기에는 부족합니다. 예를 들어, 실시간 데이터 업데이트나 사용자 이벤트 처리에는 자바스크립트와 같은 동적 언어가 필요합니다.
2. **반복 작업 증가**: 복잡한 UI를 만들 때 HTML로만 작업하면 중복되는 코드가 많아집니다. **프론트엔드 라이브러리(예: React)** 는 컴포넌트 기반으로 코드를 재사용할 수 있어, 유지보수와 확장성이 훨씬 좋아집니다.
3. **상태 관리 어려움**: 대규모 애플리케이션에서 다양한 데이터와 UI 상태를 관리하는 것은 HTML만으로는 매우 비효율적입니다. 프론트엔드 라이브러리들은 이러한 상태 관리를 쉽게 처리할 수 있는 도구를 제공합니다.

즉, 프론트엔드 라이브러리는 동적인 웹 애플리케이션을 만들고, 효율적인 코드 관리를 가능하게 하며, 복잡한 상태 관리 문제를 해결해 주기 때문에 HTML만으로는 해결할 수 없는 문제들을 해결해줍니다.

## 리엑트 시작하기

리액트를 시작하려면, **npx create-react-app** 명령어를 사용해 리액트 프로젝트를 쉽게 생성할 수 있습니다.

### 1. Node.js 설치

리액트를 사용하기 위해서는 **Node.js**와 **npm**(Node Package Manager)이 필요합니다. 만약 Node.js가 설치되어 있지 않다면, 먼저 설치해야 합니다.

- [Node.js 공식 웹사이트](https://nodejs.org/)에 접속하여 최신 버전을 다운로드하고 설치합니다.
- 설치가 완료되면, 터미널에서 다음 명령어로 Node.js와 npm이 제대로 설치되었는지 확인합니다:
  ```bash
  node -v
  npm -v
  ```
  각각의 버전이 출력되면 설치가 완료된 것입니다.

### 2. 리액트 앱 생성

Node.js가 설치되었다면, 이제 리액트 프로젝트를 시작할 수 있습니다.

- **터미널을 열고**, 리액트 프로젝트를 만들고자 하는 디렉토리로 이동합니다.
- 그런 다음, 아래 명령어를 실행합니다:

  ```bash
  npx create-react-app my-app
  ```

  여기서 `my-app`은 프로젝트 이름입니다. 원하는 이름으로 바꿀 수 있습니다.

  > **npx**는 npm 패키지를 실행할 때 사용하는 명령어로, `create-react-app` 패키지를 설치하지 않고 바로 사용할 수 있게 해줍니다.

### 3. 디렉토리로 이동

리액트 앱이 생성되면, 프로젝트 폴더로 이동합니다:

```bash
cd my-app
```

### 4. 앱 실행

리액트 앱을 로컬 서버에서 실행하려면, 아래 명령어를 입력합니다:

```bash
npm start
```

이 명령어를 실행하면 자동으로 브라우저가 열리고 `http://localhost:3000`에서 기본 리액트 앱이 표시됩니다.

### 5. 기본 파일 구조

리액트 앱이 생성되면, 기본적인 파일 구조는 다음과 같습니다:

- **public/**: 정적 파일들이 위치하는 곳. 여기에는 `index.html` 파일이 있으며, 리액트 앱의 루트 파일입니다.
- **src/**: 실제 리액트 코드가 들어가는 폴더입니다. `App.js` 파일이 주요 컴포넌트이며, 여기서부터 리액트 코드가 시작됩니다.

### 6. 코드 수정해 보기

생성된 리액트 앱을 실행한 후, `src/App.js` 파일을 열어 코드를 수정할 수 있습니다. 예를 들어, 다음과 같이 변경할 수 있습니다:

```jsx
function App() {
  return (
    <div>
      <h1>안녕하세요, 리액트를 시작해봅시다!</h1>
    </div>
  );
}

export default App;
```

코드를 수정하면 자동으로 브라우저가 업데이트되어, 변경된 내용을 즉시 확인할 수 있습니다.

## 간단한 프로그램 실행해보기

```jsx
import React, { useState } from "react";

function App() {
  // state to store the list of tasks
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // Function to add a task to the list
  const addTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask(""); // Clear the input field
    }
  };

  // Function to remove a task from the list
  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div
      style={{
        background: "linear-gradient(#e66465, #9198e5)",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          background: "white",
          width: "60%",
          height: "70%",
          borderRadius: "30px",
          padding: "20px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1>TODO List</h1>
        <form onSubmit={addTask} style={{ marginBottom: "20px" }}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="할 일을 입력하세요"
            style={{
              padding: "10px",
              width: "60%",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginRight: "10px",
              fontSize: "16px",
              boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              background: "#e66465",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
              boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            추가하기
          </button>
        </form>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {tasks.map((task, index) => (
            <li
              key={index}
              style={{
                marginTop: "10px",
                fontSize: "18px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span>{task}</span>
              <button
                onClick={() => removeTask(index)}
                style={{
                  marginLeft: "10px",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  border: "none",
                  background: "#ff4d4d",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
```

이제 위 파일을 실행해보겠습니다. 스타일링(CSS)은 별도의 파일로 분리해서 작성할 수도 있습니다. 이번 파일은 HTML 실습에서 만들어봤던 TODO 리스트를 리액트로 다시 구현한 것입니다. HTML, CSS, JavaScript로 직접 구현했을 때보다 훨씬 더 간단하고 직관적으로 코드를 작성할 수 있다는 점을 확인할 수 있습니다.

## 리엑트 기초개념

### 1. **컴포넌트(Component)**

- **설명**: 리액트에서 UI는 **컴포넌트**라는 작은 조각들로 나눠집니다. 각 컴포넌트는 HTML 태그처럼 동작하지만, 더 유연하고 재사용 가능합니다.
- **비유**: 웹 페이지를 레고 블록으로 생각해 보세요. 리액트의 컴포넌트는 레고 한 블록처럼 작고 독립적입니다. 여러 컴포넌트를 조립해서 더 큰 웹 페이지를 만들 수 있습니다.
- **예시**: 버튼, 입력 폼, 네비게이션 바 같은 것들이 각각 컴포넌트가 될 수 있습니다.
- **코드 예시**:
  ```jsx
  function Welcome() {
    return <h1>Hello, world!</h1>;
  }
  ```
  이처럼 `Welcome`이라는 컴포넌트는 "Hello, world!"라는 텍스트를 반환하는 하나의 블록이 됩니다.

#### 실습 문제:

1. 위 코드에서 `h1` 태그 대신 `p` 태그를 사용하여, "리액트를 배우는 중입니다!"라는 문구를 반환하는 컴포넌트를 작성해 보세요.

2. 컴포넌트를 별도의 파일로 분리하고, 메인 파일에서 해당 컴포넌트를 불러오는 연습을 해봅시다.

#### **실습 2 예제**: 컴포넌트를 다른 파일로 나누어 불러오기

1. **`src/Greeting.js`** 파일 생성

   - 새 컴포넌트 `Greeting`을 `src/Greeting.js`라는 파일에 작성합니다.

   ```jsx
   import React from "react";

   function Greeting() {
     return <p>리액트를 배우는 중입니다!</p>;
   }

   export default Greeting;
   ```

2. **`src/App.js`** 파일 수정

   - 이제 `Greeting` 컴포넌트를 `App.js`에서 불러와서 사용할 수 있습니다.

   ```jsx
   import React from "react";
   import Greeting from "./Greeting"; // 다른 파일에서 컴포넌트를 불러옵니다

   function App() {
     return (
       <div>
         <h1>리액트 컴포넌트 예제</h1>
         <Greeting /> {/* Greeting 컴포넌트 사용 */}
       </div>
     );
   }

   export default App;
   ```

3. **실행**
   - 이 코드를 실행하면, "리액트 컴포넌트 예제"라는 제목 아래에 **Greeting** 컴포넌트의 내용인 "리액트를 배우는 중입니다!"라는 문구가 출력됩니다.

---

### 2. **JSX (JavaScript XML)**

- **설명**: 리액트에서 **JSX**는 JavaScript 안에서 HTML처럼 생긴 문법을 사용할 수 있도록 도와줍니다. 사실은 **JavaScript 코드**지만, HTML처럼 보여서 친숙합니다.
- **비유**: HTML과 JavaScript가 섞인 것처럼 보이지만, 사실 JSX는 JavaScript로 변환됩니다.
- **예시**: HTML처럼 보이지만, 실제로는 JavaScript로 동작합니다.
- **코드 예시**:
  ```jsx
  const element = <h1>Hello, React!</h1>;
  ```
  이 코드는 `h1` 태그처럼 보이지만, 실제로는 JavaScript 코드 안에서 실행됩니다.

#### 실습 문제:

2. JSX를 사용하여 `div` 태그 안에 `h2`와 `p` 태그를 추가해 "리액트 실습 중"과 "JSX 문법을 사용 중입니다."라는 문구를 출력해 보세요.

---

### 3. **Props (Properties)**

- **설명**: **Props**는 컴포넌트에 데이터를 전달하는 방법입니다. 컴포넌트는 props를 받아서 UI를 다르게 표현할 수 있습니다.
- **비유**: 마치 함수에 인수를 전달하는 것처럼, 컴포넌트에도 값을 전달할 수 있습니다.
- **예시**: `Welcome` 컴포넌트에 이름을 전달하면, 다른 이름을 표시할 수 있습니다.
- **코드 예시**:

  ```jsx
  function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
  }

  <Welcome name="Alice" />
  <Welcome name="Bob" />
  ```

  `Alice`와 `Bob`을 전달하면 각각 "Hello, Alice!"와 "Hello, Bob!"이 출력됩니다.

#### 실습 문제:

3. `Welcome` 컴포넌트를 수정해, `props`로 전달된 사용자의 이름과 함께 "환영합니다!"라는 문구를 출력해 보세요. 예: "Alice 환영합니다!"

---

### 4. **State (상태)**

- **설명**: **State**는 컴포넌트가 기억해야 할 값입니다. 사용자의 상호작용에 따라 컴포넌트가 변하는 데이터를 저장하는 곳입니다.
- **비유**: HTML에서는 폼을 입력하거나 버튼을 클릭했을 때, 그 상태를 저장하기 어려운데, 리액트의 `state`는 이런 동적인 상태 변화를 저장할 수 있습니다.
- **예시**: 사용자가 클릭할 때마다 버튼의 숫자가 증가하는 예시를 생각해보세요.
- **코드 예시**:

  ```jsx
  function Counter() {
    const [count, setCount] = React.useState(0);

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
  }
  ```

  여기서 `count`는 상태값이고, 사용자가 버튼을 클릭할 때마다 그 값이 증가합니다.

#### 실습 문제:

4. 버튼을 클릭할 때마다 숫자가 증가하는 대신, 감소하는 기능을 구현해 보세요.

---

### 5. **이벤트 핸들링**

- **설명**: 리액트에서는 HTML처럼 이벤트(클릭, 입력 등)를 다룰 수 있습니다. 하지만, 리액트에서는 이벤트가 JavaScript 함수로 처리됩니다.
- **비유**: 마치 HTML에서 `onclick`을 사용하는 것처럼, 리액트에서도 버튼을 클릭하면 JavaScript 함수가 실행되도록 할 수 있습니다.
- **코드 예시**:

  ```jsx
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click me</button>;
  ```

  버튼을 클릭하면 `handleClick` 함수가 실행되어 알림이 나타납니다.

#### 실습 문제:

5. 버튼을 클릭할 때, 알림 대신 콘솔에 "버튼이 클릭되었습니다!"라는 메시지를 출력해 보세요.

---

### 6. **Virtual DOM**

- **설명**: 리액트는 변경 사항이 있을 때 실제 DOM을 바로 업데이트하지 않고, 가상 DOM에서 먼저 처리해 더 빠르게 업데이트할 수 있습니다.
- **비유**: HTML에서 DOM을 직접 조작하는 것은 느리고 복잡할 수 있는데, 리액트는 이 과정을 가상으로 처리한 후 실제 DOM에 필요한 것만 업데이트해 성능을 최적화해 줍니다.

#### 실습 문제:

6. `useState`를 사용하여, 입력 폼에 값을 입력할 때마다 실시간으로 텍스트가 화면에 표시되도록 구현해 보세요.

---

### 7. **다른 라이브러리 사용하기**

리액트는 다른 라이브러리와 함께 사용할 수 있다는 큰 장점이 있습니다. 예를 들어, 외부 UI 라이브러리인 **Material-UI** 또는 **Bootstrap**을 쉽게 리액트와 함께 사용하여 멋진 UI를 구성할 수 있습니다.

#### 실습 문제 1 (Material-UI 사용):

1. **Material-UI**를 사용하여 버튼을 스타일링해봅시다.

1. **Material-UI 설치**:

   - 터미널에서 다음 명령어를 실행하여 **Material-UI**를 설치합니다.
     ```bash
     npm install @mui/material @emotion/react @emotion/styled
     ```

1. **버튼 컴포넌트 만들기**:

   - `src/ButtonComponent.js` 파일을 만들고 **Material-UI**의 버튼을 사용하여 컴포넌트를 작성해 봅니다.

   ```jsx
   import React from "react";
   import Button from "@mui/material/Button";

   function ButtonComponent() {
     return (
       <Button variant="contained" color="primary">
         Material-UI 버튼
       </Button>
     );
   }

   export default ButtonComponent;
   ```

1. **`src/App.js`** 파일에서 `ButtonComponent`를 불러와 사용합니다.

   ```jsx
   import React from "react";
   import ButtonComponent from "./ButtonComponent";

   function App() {
     return (
       <div style={{ textAlign: "center", marginTop: "50px" }}>
         <h1>Material-UI 버튼 예제</h1>
         <ButtonComponent />
       </div>
     );
   }

   export default App;
   ```

1. **실행**:
   - 실행하면 "Material-UI 버튼 예제" 아래에 **Material-UI**에서 제공하는 스타일이 적용된 버튼이 표시됩니다.

#### 실습 문제 2 (Bootstrap 사용):

1. **Bootstrap**을 설치하고 리액트에서 사용해 봅시다.

2. **Bootstrap 설치**:

   - 터미널에서 다음 명령어를 실행하여 **Bootstrap**을 설치합니다.
     ```bash
     npm install bootstrap
     ```

3. **`index.js` 파일에 Bootstrap CSS 추가**:

   - `index.js` 파일에서 **Bootstrap** CSS 파일을 불러옵니다.

   ```javascript
   import "bootstrap/dist/css/bootstrap.min.css";
   ```

4. **Bootstrap 버튼 사용**:

   - `src/BootstrapButton.js` 파일을 만들고 **Bootstrap** 스타일이 적용된 버튼을 추가합니다.

   ```jsx
   import React from "react";

   function BootstrapButton() {
     return <button className="btn btn-primary">Bootstrap 버튼</button>;
   }

   export default BootstrapButton;
   ```

5. **`src/App.js`**에서 `BootstrapButton`을 불러와서 사용합니다.

   ```jsx
   import React from "react";
   import BootstrapButton from "./BootstrapButton";

   function App() {
     return (
       <div style={{ textAlign: "center", marginTop: "50px" }}>
         <h1>Bootstrap 버튼 예제</h1>
         <BootstrapButton />
       </div>
     );
   }

   export default App;
   ```

6. **실행**:
   - 실행하면 Bootstrap 스타일이 적용된 버튼이 "Bootstrap 버튼 예제" 아래에 표시됩니다.

---

### 8. **리액트에서 CSS 사용하기**

리액트에서는 다양한 방식으로 CSS를 사용하여 스타일을 적용할 수 있습니다. 여기서는 대표적인 몇 가지 방법을 소개하겠습니다.

#### 1. **인라인 스타일링**

리액트에서는 인라인 스타일링을 지원합니다. 하지만, 일반 HTML과는 다르게 스타일 객체를 사용하며, CSS 속성 이름은 **카멜 케이스**로 작성해야 합니다. 예를 들어, `background-color`는 `backgroundColor`로, `font-size`는 `fontSize`로 작성합니다.

- **예시**:

```jsx
function App() {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "white", fontSize: "24px" }}>Hello, React!</h1>
    </div>
  );
}

export default App;
```

- **설명**: 인라인 스타일링은 컴포넌트 내부에서 스타일을 정의하여 간편하게 적용할 수 있습니다. 하지만 큰 프로젝트에서는 관리가 어려울 수 있으므로 간단한 컴포넌트나 일회성 스타일링에 유용합니다.

#### 2. **CSS 파일 사용**

CSS 파일을 사용하여 스타일을 적용하는 방법은 가장 일반적입니다. 리액트에서는 기존의 CSS 파일을 `import`하여 컴포넌트에 스타일을 적용할 수 있습니다.

1. **`App.css` 파일 생성**:

   ```css
   /* App.css */
   .container {
     background-color: lightblue;
     padding: 20px;
     text-align: center;
   }

   .heading {
     color: white;
     font-size: 24px;
   }
   ```

2. **`App.js`에서 CSS 파일을 불러와 사용**:

   ```jsx
   import React from "react";
   import "./App.css"; // CSS 파일을 import

   function App() {
     return (
       <div className="container">
         <h1 className="heading">Hello, React!</h1>
       </div>
     );
   }

   export default App;
   ```

- **설명**: 이 방법은 CSS 파일을 별도로 관리할 수 있어 코드의 가독성과 유지보수가 쉬워집니다. 리액트에서는 **CSS 클래스 이름**을 HTML 요소처럼 사용하여 스타일을 적용할 수 있습니다.

#### 3. **CSS 모듈 사용**

리액트에서 CSS 모듈은 컴포넌트별로 스타일을 분리하고, 클래스 이름이 충돌하지 않도록 관리하는 데 유용한 방법입니다. CSS 모듈을 사용하면 CSS 클래스가 **고유한 이름**으로 변환되어, 동일한 이름의 클래스가 충돌하는 문제를 방지할 수 있습니다.

1. **`App.module.css` 파일 생성**:

   ```css
   /* App.module.css */
   .container {
     background-color: lightblue;
     padding: 20px;
     text-align: center;
   }

   .heading {
     color: white;
     font-size: 24px;
   }
   ```

2. **`App.js`에서 CSS 모듈 사용**:

   ```jsx
   import React from "react";
   import styles from "./App.module.css"; // CSS 모듈 import

   function App() {
     return (
       <div className={styles.container}>
         <h1 className={styles.heading}>Hello, React!</h1>
       </div>
     );
   }

   export default App;
   ```

- **설명**: CSS 모듈을 사용하면 `styles.container`와 같이 클래스 이름을 객체처럼 접근할 수 있습니다. 이를 통해 각 컴포넌트마다 스타일이 독립적으로 관리되며, 클래스 이름 충돌을 방지할 수 있습니다.

#### 4. **Styled-components (CSS-in-JS)**

**Styled-components**는 리액트에서 자바스크립트 코드 내에 직접 스타일을 작성하는 방식입니다. 이를 사용하면 컴포넌트별로 독립적인 스타일을 정의할 수 있고, 동적인 스타일을 쉽게 적용할 수 있습니다.

1. **Styled-components 설치**:

   ```bash
   npm install styled-components
   ```

2. **Styled-components 사용**:

   ```jsx
   import React from "react";
   import styled from "styled-components";

   // Styled-components로 스타일 정의
   const Container = styled.div`
     background-color: lightblue;
     padding: 20px;
     text-align: center;
   `;

   const Heading = styled.h1`
     color: white;
     font-size: 24px;
   `;

   function App() {
     return (
       <Container>
         <Heading>Hello, React!</Heading>
       </Container>
     );
   }

   export default App;
   ```

- **설명**: **Styled-components**는 자바스크립트 파일 내에서 CSS를 작성할 수 있는 강력한 도구입니다. 스타일을 컴포넌트처럼 다룰 수 있어, 동적인 스타일링이나 컴포넌트 간 스타일 재사용이 용이합니다.

#### 5. **CSS 프레임워크 사용 (예: Bootstrap, Material-UI)**

리액트에서는 **Bootstrap**이나 **Material-UI**와 같은 CSS 프레임워크를 쉽게 통합할 수 있습니다. 프레임워크를 사용하면 미리 정의된 스타일과 컴포넌트를 빠르게 적용할 수 있어, 복잡한 UI를 손쉽게 구현할 수 있습니다.

1. **Bootstrap 설치 및 사용**:

   ```bash
   npm install bootstrap
   ```

2. **Bootstrap을 `index.js` 파일에 추가**:

   ```javascript
   import "bootstrap/dist/css/bootstrap.min.css";
   ```

3. **Bootstrap 클래스 사용**:

   ```jsx
   function App() {
     return (
       <div className="container">
         <h1 className="text-primary">Hello, React with Bootstrap!</h1>
       </div>
     );
   }

   export default App;
   ```

- **설명**: **Bootstrap**이나 **Material-UI** 같은 프레임워크를 사용하면, 미리 정의된 스타일을 손쉽게 적용할 수 있어 개발 속도가 크게 향상됩니다.

## React 추가 개념들

### 1. **Hooks (훅)**

리액트에서 함수형 컴포넌트에서 상태를 관리하거나, 생명주기 메서드를 사용할 수 있게 해주는 기능입니다. 특히, `useState`와 `useEffect`는 리액트에서 필수적인 훅입니다.

- **설명**: 리액트 훅은 함수형 컴포넌트에서 `state`와 `lifecycle` 기능을 사용할 수 있게 해줍니다. 클래스형 컴포넌트가 아닌 함수형 컴포넌트에서 상태를 쉽게 관리할 수 있게 도와줍니다.
- **주요 훅**:
  - **`useState`**: 상태를 관리하기 위한 훅.
  - **`useEffect`**: 컴포넌트가 렌더링되거나 업데이트될 때 특정 작업을 실행하기 위한 훅.
- **예시**:

  ```jsx
  import React, { useState, useEffect } from "react";

  function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      console.log("Counter updated:", count);
    }, [count]);

    return (
      <div>
        <p>{count}번 클릭했습니다.</p>
        <button onClick={() => setCount(count + 1)}>클릭</button>
      </div>
    );
  }

  export default Counter;
  ```

  - **`useState`**는 `count`라는 상태를 저장하고, **`useEffect`**는 `count`가 업데이트될 때마다 실행됩니다.

### 2. **React Router (라우팅)**

리액트는 **싱글 페이지 애플리케이션(SPA)**을 위한 라이브러리이기 때문에 여러 페이지처럼 보이도록 라우팅을 설정할 필요가 있습니다. **React Router**는 이 역할을 도와줍니다.

- **설명**: 여러 페이지를 가진 것처럼 보이는 싱글 페이지 애플리케이션(SPA)을 구현할 때 **React Router**를 사용합니다.
- **예시**:

  ```jsx
  import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
  import Home from "./Home";
  import About from "./About";

  function App() {
    return (
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    );
  }

  export default App;
  ```

  - 이 예시에서는 `Home`과 `About` 페이지가 각각의 경로로 나뉘어 렌더링됩니다.

### (3, 4번은 일단 스킵)

### 3. **Context API**

**Context API**는 전역 상태 관리를 쉽게 할 수 있도록 도와줍니다. **Redux**와 같은 상태 관리 라이브러리 없이도 간단한 전역 상태 관리를 할 수 있습니다.

- **설명**: 컴포넌트 간의 데이터 전달을 쉽게 할 수 있도록 해주는 기능으로, `props`로 일일이 전달하지 않고도 전역 상태를 공유할 수 있습니다.
- **예시**:

  ```jsx
  import React, { useContext, useState } from "react";

  const ThemeContext = React.createContext();

  function App() {
    const [theme, setTheme] = useState("light");

    return (
      <ThemeContext.Provider value={theme}>
        <Toolbar />
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Toggle Theme
        </button>
      </ThemeContext.Provider>
    );
  }

  function Toolbar() {
    return <ThemedButton />;
  }

  function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
      <button
        style={{
          background: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        Theme Button
      </button>
    );
  }

  export default App;
  ```

  - 이 코드는 테마를 전역 상태로 관리하여, 여러 컴포넌트에서 쉽게 사용할 수 있게 합니다.

### 4. 리액트 성능 최적화

리액트는 가상 DOM 덕분에 성능이 좋지만, 대규모 애플리케이션에서는 성능 최적화가 필요할 때가 있습니다. 리액트에서 성능을 최적화하는 주요 기법 중 몇 가지를 소개하겠습니다.

#### 1. **`React.memo`**

- **설명**: `React.memo`는 **동일한 props**로 컴포넌트를 렌더링할 때, 불필요한 렌더링을 방지하는 고차 함수입니다. 컴포넌트가 재렌더링될 필요가 없을 때 성능을 최적화할 수 있습니다.
- **예시**:

```jsx
import React from "react";

// React.memo로 불필요한 렌더링 방지
const ChildComponent = React.memo(({ name }) => {
  console.log("ChildComponent 렌더링");
  return <h1>Hello, {name}!</h1>;
});

function App() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("React");

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <ChildComponent name={name} />
    </div>
  );
}

export default App;
```

- **설명**: 이 코드는 `name`이 바뀌지 않는 한 `ChildComponent`는 재렌더링되지 않습니다. `React.memo` 덕분에 props가 변경되지 않으면 컴포넌트는 다시 렌더링되지 않습니다.

#### 2. **`useMemo`**

- **설명**: `useMemo`는 함수의 결과를 메모이제이션하여 성능을 최적화합니다. 값이 변경될 때만 연산을 수행하며, 그렇지 않으면 이전에 계산한 값을 재사용합니다.
- **예시**:

```jsx
import React, { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // useMemo로 값이 변경될 때만 복잡한 연산 실행
  const expensiveCalculation = useMemo(() => {
    console.log("비싼 계산 중...");
    return count * 100;
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Expensive Calculation: {expensiveCalculation}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
    </div>
  );
}

export default App;
```

- **설명**: `useMemo`는 `count`가 변경될 때만 "비싼 계산"을 실행합니다. 그렇지 않으면 이전에 계산된 결과를 재사용하여 불필요한 연산을 방지합니다.

#### 3. **`useCallback`**

- **설명**: `useCallback`은 **함수 자체**를 메모이제이션하여, 컴포넌트가 렌더링될 때마다 함수가 다시 생성되는 것을 방지합니다. 이를 통해 자식 컴포넌트에 동일한 함수 참조를 전달하여 불필요한 렌더링을 줄일 수 있습니다.
- **예시**:

```jsx
import React, { useState, useCallback } from "react";

const ChildComponent = React.memo(({ onClick }) => {
  console.log("ChildComponent 렌더링");
  return <button onClick={onClick}>Click me</button>;
});

function App() {
  const [count, setCount] = useState(0);

  // useCallback으로 함수 메모이제이션
  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increase Count: {count}
      </button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

export default App;
```

- **설명**: `useCallback`으로 `handleClick` 함수를 메모이제이션하면, 컴포넌트가 렌더링되더라도 함수가 다시 생성되지 않으므로 자식 컴포넌트인 `ChildComponent`가 불필요하게 재렌더링되지 않습니다.

## **다른 프론트엔드 프레임워크와의 비교**

- **Angular**
  - MVC 패턴 기반의 풀 프레임워크.
  - 타입스크립트 사용, 양방향 데이터 바인딩 제공.
  - 내장 기능이 많지만, 초보자에게는 다소 복잡할 수 있음.
- **Vue**
  - 리액트와 유사한 경량 프레임워크.
  - 선언적 렌더링과 컴포넌트 기반 개발 방식 지원.
  - 문서가 간단하고 이해하기 쉬우며, 설정이 적고 유연함.

## React Document

[https://react.dev/learn](https://react.dev/learn)

여기서 React 관련 정보들을 찾을 수 있습니다.

## React 실습과제

[https://react.dev/learn/tutorial-tic-tac-toe](https://react.dev/learn/tutorial-tic-tac-toe)
