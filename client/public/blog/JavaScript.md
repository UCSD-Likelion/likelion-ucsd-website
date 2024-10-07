# JavaScript

1. JavaScript 기초개념 및 HTML 연결방법
2. JavaScript 베이직 Syntex
3. Document Object Model (DOM)

## JavaScript

JavaScript는 웹 페이지에서 복잡한 기능을 구현할 수 있도록 하는 스크립팅 언어 또는 프로그래밍 언어입니다. JavaScript는 웹 브라우저 내에서 실행되어 사용자 상호작용, 애니메이션, 동적 콘텐츠 관리 등을 가능하게 합니다. 이 언어는 특히 웹 페이지의 동적 요소를 제어하기 위해 필수적으로 사용되며, 프론트엔드 개발에서 중요한 역할을 담당합니다.

클라이언트가 서버에 요청을 하면, **서버는 클라이언트에게 HTML, CSS, 그리고 JavaScript로 구성된 자료를 전송합니다.** 이러한 파일들은 웹 페이지의 구조, 스타일, 그리고 동작을 정의하며, 모든 웹 브라우저는 자바스크립트를 해석할 수 있도록 설계되어 있습니다. 따라서, 모든 웹 서버는 사용자의 요구에 응답하여 HTML, CSS 및 JavaScript를 포함하는 데이터를 제공하게 됩니다.

## 기본적인 HTML과 연결

JavaScript와 HTML을 연결하는 방법은 CSS와 비슷합니다.

### 1. 인라인 JavaScript

HTML element에 직접적으로 연결하는 방법입니다.

```bash
<button onclick="alert('안녕하세요!')">클릭하세요!</button>
```

### 2. 내부 JavaScript

HTML내부에 script 파일을 만들어서 작성합니다. 일반적으로 **`<head>`** 태그 안에 넣거나, **`<body>`** 안에 HTML내용 밑에 작성합니다. 밑의 예시처럼 **`<body>`** 안에 HTML내용 밑에 작성하면, 페이지의 나머지 내용이 먼저 로드된 후 스크립트가 로드되므로 페이지 로딩 시간을 단축할 수 있습니다.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>예제 페이지</title>
  </head>
  <body>
    <!-- HTML 내용 -->

    <script>
      console.log("바디 끝에서 실행되는 스크립트");
    </script>
  </body>
</html>
```

## 예시를 통해 배워보기

아래 예시를 통해서 버튼을 클릭하면 경고창이 뜨게 하는 프로그램을 만들어봅시다.

먼저 `2. JavaScript` 폴더 안에 있는 `JavaScript연결.html` 파일을 열어줍니다.

그리고 나서 HTML파일 안에 버튼을 만들어 줍니다.

마지막으로 script 파일 안에 함수를 만들어 `alert('안녕!');` 을 넣은후, 만든 버튼에 `onclick` 을 통해 함수를 연결해줍니다.

- 정답

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>

    <body>
      <button onclick="hey()">버튼</button>

      <script>
        function hey() {
          alert("안녕!");
        }
      </script>
    </body>
  </html>
  ```

## Programming Language JavaScript

### Console.log()

다른 language의 print 같은 역할을 합니다.

```jsx
console.log(변수); // 변수의 값을 콘솔 창에 출력해줍니다.
console.log(변수1, 변수2); // 여러 변수를 한번에 출력할 수도 있습니다.
console.log("Hello World!");
```

### Variable (변수)

`let`이나 `const`를 사용하여 variable을 지정합니다. python과 같이 따로 type지정이 필요 없습니다.

```jsx
const num = 20;
num = "Bob";
```

### 사칙연산

사칙연산, 문자열 더하기가 기본적으로 가능합니다.

```jsx
const a = 1;
const b = 2;

a + b; // 3
a / b; // 0.5

const first = "Bob";
const last = "Lee";

first + last; // 'BobLee'

first + " " + last; // 'Bob Lee'

first + a; // Bob1 -> 문자+숫자를 하면, 숫자를 문자로 바꾼 뒤 수행합니다.
```

특정 문자로 문자열을 나누고 싶은 경우

```jsx
let myemail = "sparta@gmail.com";
// 만약 여기서 gmail만 print 하고 싶으면?

let result = myemail.split("@"); // ['sparta','gmail.com']

result[0]; // sparta
result[1]; // gmail.com

let result2 = result[1].split("."); // ['gmail','com']

result2[0]; // gmail -> 우리가 알고 싶었던 것!
result2[1]; // com

myemail.split("@")[1].split(".")[0]; // gmail -> 간단하게 쓸 수도 있다!
```

### List & Dictionary

- **List**: 순서를 지켜서 가지고 있는 형태입니다.

```jsx
const a_list = [];

const b_list = [1, 2, "hey", 3]; // intialize

b_list[1]; // 2 를 출력
b_list[2]; // 'hey'를 출력

// 리스트에 요소 넣기
b_list.push("헤이");
b_list; // [1, 2, "hey", 3, "헤이"] 를 출력

// 리스트의 길이 구하기
b_list.length; // 5를 출력
```

- **Dictionary**: key-value 값의 묶음입니다.

```jsx
let a_dict = {}; // Declare 변수 이름은 역시 아무렇게나 가능!

// 또는,

let b_dict = { name: "Bob", age: 21 }; // intialize
b_dict["name"]; // 'Bob'을 출력
b_dict["age"]; // 21을 출력

b_dict["height"] = 180; // 딕셔너리에 키:밸류 넣기, 추가
b_dict; // {name: "Bob", age: 21, height: 180}을 출력
```

- list 와 dictionary 의 조합

```jsx
names = [
  { name: "bob", age: 20 },
  { name: "carry", age: 38 },
];

// names[0]['name']의 값은? 'bob'
// names[1]['name']의 값은? 'carry'

new_name = { name: "john", age: 7 };
names.push(new_name);

// names의 값은? [{'name':'bob','age':20},{'name':'carry','age':38},{'name':'john','age':7}]
// names[2]['name']의 값은? 'john'
```

### Function

**함수 선언 방법**

- **전통적인 함수 선언 (Function Declaration)**
  ```jsx
  function add(num1, num2) {
    // 두 숫자를 더하는 함수
    console.log("Numbers:", num1, num2);
    return num1 + num2;
  }
  ```
  이 방식은 **`function`** 키워드를 사용하여 함수를 선언합니다. 여기서 **`add`**는 함수 이름이고, **`num1`**과 **`num2`**는 parameter 입니다. 이 함수에서는 두 parameter를 더하고 그 결과를 return 합니다.
- **화살표 함수 (Arrow Function)**
  ```jsx
  const subtract = (num1, num2) => {
    // 두 숫자를 빼는 함수
    console.log("Numbers:", num1, num2);
    return num1 - num2;
  };
  ```
  화살표 함수는 **`function`** 키워드 없이 함수를 declare 할 수 있는 더 간결한 방법입니다. 이 예제에서는 두 숫자의 차를 return 합니다. 화살표 함수는 익명 함수로 사용될 수 있으며, 주로 콜백 함수로 많이 사용됩니다

**함수 호출**

```jsx
console.log(add(3, 5)); // 출력: Numbers: 3 5
// 반환 값: 8

console.log(subtract(10, 5)); // 출력: Numbers: 10 5
// 반환 값: 5
```

함수를 호출할 때는 함수 이름과 괄호를 사용하며, 괄호 안에는 필요한 parameter 을 전달합니다.

### Conditional Statement

**Conditional Statement 사용 예시**

- **간단한 if-else 구조**

  ```jsx
  function checkAge(age) {
    // 사용자의 나이를 기반으로 성인 여부를 확인
    if (age > 20) {
      alert("Adult"); // 성인이면 이 메시지를 보여줍니다.
    } else {
      alert("Youth"); // 청소년이면 이 메시지를 보여줍니다.
    }
  }

  checkAge(25); // 팝업: 'Adul
  ```

- **if, else if, else 구조**

  ```jsx
  function checkAge(age) {
    // 나이에 따라 다른 메시지를 표시
    if (age > 20) {
      alert("Adult");
    } else if (age > 10) {
      alert("Youth");
    } else {
      alert("Child"); // 10살 이하일 때 출력
    }
  }

  checkAge(12); // 팝업: 'Youth'
  ```

### Loop

**반복문 사용 예시**

- **for 문을 사용하여 0부터 99까지 출력**
  ```jsx
  for (let i = 0; i < 100; i++) {
    console.log(i);
  }
  ```
  이 **`for`** 문은 **`i`**라는 카운터 변수를 사용하여 0부터 시작하여 99까지 숫자를 출력합니다. **`i++`**는 각 반복 후에 **`i`**를 1씩 증가시키는 연산입니다.
- **list dictionary iteration**

  ```jsx
  let scores = [
    { name: "Cheolsu", score: 90 },
    { name: "Younghee", score: 85 },
    { name: "Minsu", score: 70 },
    { name: "Hyungjun", score: 50 },
    { name: "Ginam", score: 68 },
    { name: "Donghee", score: 30 },
  ];

  for (let i = 0; i < scores.length; i++) {
    if (scores[i]["score"] < 70) {
      console.log(scores[i]["name"]); // 점수가 70점 미만인 사람의 이름을 출력
    }
  }
  ```

  이 코드는 **`scores`** 리스트를 반복하여 각 요소의 **`score`** 속성을 검사하고, 70점 미만일 경우 해당 요소의 **`name`** 속성을 출력합니다.

- **`while` 문 예시**

  ```jsx
  javascriptCopy code
  let count = 0;
  while (count < 100) {
    console.log(count);
    count++;
  }

  ```

  이 **`while`** 문은 조건 **`count < 100`**이 참인 동안 계속 실행되며, **`count`**를 0부터 99까지 출력합니다. **`count++`**는 각 반복에서 **`count`**를 1씩 증가시킵니다.

- **`do-while` 문 예시**

  ```jsx
  javascriptCopy code
  let count = 0;
  do {
    console.log(count);
    count++;
  } while (count < 100);

  ```

  이 **`do-while`** 문은 최소 한 번은 루프 내의 코드를 실행한 후 조건 **`count < 100`**을 검사합니다. 이 구조는 루프의 조건을 검사하기 전에 코드 블록을 실행할 때 유용합니다. **`count`**가 0부터 99까지 출력됩니다.

## Document Object Model (DOM)

![Screen Shot 2024-04-22 at 12.05.32 PM.png](/js.png)

### 개요

DOM은 HTML 문서의 객체 기반 구조화된 표현으로, JavaScript와 같은 프로그래밍 언어가 웹 페이지의 구조, 스타일, 및 내용을 동적으로 조작할 수 있게 합니다. 이 구조를 통해 웹 페이지는 사용자와의 상호작용, 실시간 데이터 업데이트 등 동적 기능을 제공할 수 있습니다.

### DOM의 구조화된 표현

웹 브라우저가 HTML 파일을 로드할 때, 브라우저는 파일의 내용을 분석하여 DOM 트리를 구성합니다. 이 트리는 문서의 모든 요소(태그), 속성, 텍스트 등을 노드로 포함합니다. 예를 들어, 간단한 HTML 문서는 다음과 같이 변환됩니다:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Sample Page</title>
  </head>
  <body>
    <h1 id="header">Welcome to my website!</h1>
    <p>Enjoy your stay.</p>
  </body>
</html>
```

### 노드 선택 및 조작

노드를 선택하고 조작하는 기능은 JavaScript를 통해 웹 페이지의 동적 변화를 가능하게 합니다. 노드를 선택하는 주요 방법은 다음과 같습니다:

- **ID를 사용한 선택**: `getElementById` 메서드는 주어진 ID를 가진 요소를 반환합니다.
  ```jsx
  var header = document.getElementById("header");
  console.log(header.textContent); // 출력: Welcome to my website!
  ```
- **클래스, 태그 이름, CSS 선택자 사용**:
  - `getElementsByClassName`, `getElementsByTagName`, `querySelector`, `querySelectorAll` 등을 사용하여 요소를 선택할 수 있습니다.
  ```jsx
  var paragraphs = document.querySelectorAll("p");
  paragraphs.forEach((p) => console.log(p.textContent));
  ```

### DOM 조작

선택된 요소의 내용, 스타일 또는 구조를 변경하여 페이지에 변화를 줄 수 있습니다.

- **내용 변경**:
  ```jsx
  header.textContent = "New Welcome Message";
  ```
- **새 요소 추가**:
  ```jsx
  var newParagraph = document.createElement("p");
  newParagraph.textContent = "A new paragraph.";
  document.body.appendChild(newParagraph);
  ```

### 이벤트 처리

DOM은 이벤트 리스너를 통해 사용자 이벤트를 처리합니다.

- **이벤트 리스너 추가**:
  ```jsx
  const button = document.querySelector("button");
  button.addEventListener("click", function () {
    alert("버튼이 클릭되었습니다!");
  });
  ```
- **이벤트 객체 활용**:
  ```jsx
  button.addEventListener("click", function (event) {
    console.log(event.type); // 출력: click
    event.preventDefault(); // 폼 제출 등의 기본 동작 방지
  });
  ```

### 유용한 DOM 관련 API 링크

- [document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [document.createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [Element.setAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)
- [window.onload](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event)

이 통합 설명은 DOM의 주요 개념들과 이를 활용한 프로그래밍 방법을 상세히 설명합니다. 이를 통해 개발자는 웹 페이지를 더욱 동적이고 상호작용적으로 만들 수 있습니다, 웹 개발의 기초를 다지는 데 중요한 내용입니다.
