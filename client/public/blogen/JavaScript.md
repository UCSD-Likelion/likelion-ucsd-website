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

Here’s the complete text with all Korean content translated into English while keeping everything else intact:

---

# JavaScript

1. Basic Concepts of JavaScript and How to Connect with HTML
2. JavaScript Basic Syntax
3. Document Object Model (DOM)

## JavaScript

JavaScript is a scripting or programming language that enables the implementation of complex functionalities on web pages. JavaScript runs within a web browser and facilitates user interactions, animations, and dynamic content management. It is especially essential for controlling dynamic elements on web pages and plays a critical role in frontend development.

When the client makes a request to the server, **the server sends the client materials composed of HTML, CSS, and JavaScript.** These files define the structure, style, and behavior of a webpage, and every web browser is designed to interpret JavaScript. Therefore, all web servers respond to user requests by providing data that includes HTML, CSS, and JavaScript.

---

## Connecting JavaScript with Basic HTML

The way to connect JavaScript to HTML is similar to CSS.

### 1. Inline JavaScript

This method directly connects JavaScript within an HTML element.

```bash
<button onclick="alert('Hello!')">Click me!</button>
```

### 2. Internal JavaScript

Write the script directly within the HTML file. Generally, it is placed inside the **`<head>`** tag or at the end of the **`<body>`** tag below the HTML content. Writing it below the HTML content in **`<body>`** shortens the page loading time since the rest of the page content is loaded before the script.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Example Page</title>
  </head>
  <body>
    <!-- HTML Content -->

    <script>
      console.log("Script executed at the end of the body");
    </script>
  </body>
</html>
```

---

## Learn Through Examples

Let’s create a program that displays an alert when a button is clicked.

First, open the `JavaScriptConnection.html` file located in the `2. JavaScript` folder.

Next, add a button within the HTML file.

Finally, create a function in the script file that includes `alert('Hello!')`, then link the function to the button using `onclick`.

**Solution:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <button onclick="hey()">Button</button>

    <script>
      function hey() {
        alert("Hello!");
      }
    </script>
  </body>
</html>
```

---

## Programming Language JavaScript

### Console.log()

Functions like `print` in other programming languages.

```jsx
console.log(variable); // Prints the value of the variable to the console
console.log(variable1, variable2); // Prints multiple variables at once
console.log("Hello World!");
```

---

### Variable

Use `let` or `const` to declare variables. There is no need to specify a type, like in Python.

```jsx
const num = 20;
num = "Bob"; // Error: Cannot reassign a constant variable
```

---

### Arithmetic Operations

Basic arithmetic operations and string concatenation are possible.

```jsx
const a = 1;
const b = 2;

a + b; // 3
a / b; // 0.5

const first = "Bob";
const last = "Lee";

first + last; // 'BobLee'

first + " " + last; // 'Bob Lee'

first + a; // Bob1 -> Adds numbers to strings by converting numbers to strings first
```

To split a string by a specific character:

```jsx
let myemail = "sparta@gmail.com";
// If you want to print 'gmail' only:

let result = myemail.split("@"); // ['sparta','gmail.com']

result[0]; // sparta
result[1]; // gmail.com

let result2 = result[1].split("."); // ['gmail','com']

result2[0]; // gmail -> The part we wanted!
result2[1]; // com

myemail.split("@")[1].split(".")[0]; // gmail -> Can be written more concisely
```

---

### List & Dictionary

- **List**: A collection that maintains order.

```jsx
const a_list = [];

const b_list = [1, 2, "hey", 3]; // Initialize

b_list[1]; // Outputs 2
b_list[2]; // Outputs 'hey'

// Add an item to the list
b_list.push("Hello");
b_list; // Outputs [1, 2, "hey", 3, "Hello"]

// Get the length of the list
b_list.length; // Outputs 5
```

- **Dictionary**: A collection of key-value pairs.

```jsx
let a_dict = {}; // Declare; variable names can be anything!

// Or,

let b_dict = { name: "Bob", age: 21 }; // Initialize
b_dict["name"]; // Outputs 'Bob'
b_dict["age"]; // Outputs 21

b_dict["height"] = 180; // Add key-value pair to the dictionary
b_dict; // Outputs {name: "Bob", age: 21, height: 180}
```

- Combining lists and dictionaries:

```jsx
names = [
  { name: "bob", age: 20 },
  { name: "carry", age: 38 },
];

// What is names[0]['name']? -> 'bob'
// What is names[1]['name']? -> 'carry'

new_name = { name: "john", age: 7 };
names.push(new_name);

// What is names? -> [{'name':'bob','age':20},{'name':'carry','age':38},{'name':'john','age':7}]
// What is names[2]['name']? -> 'john'
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

### Function

**How to Declare Functions**

- **Traditional Function Declaration**

  ```jsx
  function add(num1, num2) {
    // A function that adds two numbers
    console.log("Numbers:", num1, num2);
    return num1 + num2;
  }
  ```

  This method uses the **`function`** keyword to declare a function. Here, **`add`** is the function name, and **`num1`** and **`num2`** are parameters. This function adds the two parameters and returns the result.

- **Arrow Function**
  ```jsx
  const subtract = (num1, num2) => {
    // A function that subtracts two numbers
    console.log("Numbers:", num1, num2);
    return num1 - num2;
  };
  ```
  Arrow functions allow you to declare functions without the **`function`** keyword in a more concise way. This example returns the difference between two numbers. Arrow functions are often used as anonymous functions, particularly as callbacks.

**Calling a Function**

```jsx
console.log(add(3, 5)); // Output: Numbers: 3 5
// Return value: 8

console.log(subtract(10, 5)); // Output: Numbers: 10 5
// Return value: 5
```

To call a function, use the function name followed by parentheses, passing the necessary parameters within the parentheses.

---

### Conditional Statement

**Examples of Using Conditional Statements**

- **Simple If-Else Structure**

  ```jsx
  function checkAge(age) {
    // Determines whether the user is an adult based on their age
    if (age > 20) {
      alert("Adult"); // Displays this message if the user is an adult
    } else {
      alert("Youth"); // Displays this message if the user is a youth
    }
  }

  checkAge(25); // Popup: 'Adult'
  ```

- **If, Else If, Else Structure**

  ```jsx
  function checkAge(age) {
    // Displays a different message depending on the age
    if (age > 20) {
      alert("Adult");
    } else if (age > 10) {
      alert("Youth");
    } else {
      alert("Child"); // Displays this if the user is 10 years old or younger
    }
  }

  checkAge(12); // Popup: 'Youth'
  ```

---

### Loop

**Examples of Using Loops**

- **Using a For Loop to Print from 0 to 99**

  ```jsx
  for (let i = 0; i < 100; i++) {
    console.log(i);
  }
  ```

  This **`for`** loop uses a counter variable **`i`** that starts at 0 and iterates until 99. The **`i++`** operation increments **`i`** by 1 in each iteration.

- **Iterating Through a List of Dictionaries**

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
      console.log(scores[i]["name"]); // Prints the name of people with scores below 70
    }
  }
  ```

  This code iterates through the **`scores`** list, checks each element's **`score`** property, and prints the **`name`** property if the score is less than 70.

- **Example of a While Loop**

  ```jsx
  let count = 0;
  while (count < 100) {
    console.log(count);
    count++;
  }
  ```

  This **`while`** loop continues as long as the condition **`count < 100`** is true, printing **`count`** from 0 to 99. The **`count++`** operation increments **`count`** by 1 in each iteration.

- **Example of a Do-While Loop**
  ```jsx
  let count = 0;
  do {
    console.log(count);
    count++;
  } while (count < 100);
  ```
  This **`do-while`** loop ensures that the code block runs at least once before checking the condition **`count < 100`**. It prints **`count`** from 0 to 99.

---

## Document Object Model (DOM)

### Overview

The DOM (Document Object Model) is an object-based structured representation of an HTML document that allows programming languages like JavaScript to dynamically manipulate the structure, style, and content of a webpage. Through this structure, web pages can provide dynamic features such as user interaction and real-time data updates.

### Structured Representation of the DOM

When a web browser loads an HTML file, it parses the file's content and constructs a DOM tree. This tree includes every element (tags), attributes, and text as nodes in the document. For example, a simple HTML document is transformed into the following:

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

### Node Selection and Manipulation

The ability to select and manipulate nodes enables dynamic changes to web pages via JavaScript. The primary methods for selecting nodes are:

- **Selection Using ID**: The `getElementById` method returns the element with the given ID.
  ```jsx
  var header = document.getElementById("header");
  console.log(header.textContent); // Output: Welcome to my website!
  ```
- **Using Class, Tag Name, and CSS Selectors**:
  - You can use methods like `getElementsByClassName`, `getElementsByTagName`, `querySelector`, and `querySelectorAll` to select elements.
  ```jsx
  var paragraphs = document.querySelectorAll("p");
  paragraphs.forEach((p) => console.log(p.textContent));
  ```

### Manipulating the DOM

By modifying the content, style, or structure of selected elements, you can make dynamic changes to a webpage.

- **Changing Content**:
  ```jsx
  header.textContent = "New Welcome Message";
  ```
- **Adding New Elements**:
  ```jsx
  var newParagraph = document.createElement("p");
  newParagraph.textContent = "A new paragraph.";
  document.body.appendChild(newParagraph);
  ```

### Event Handling

The DOM processes user events through event listeners.

- **Adding an Event Listener**:
  ```jsx
  const button = document.querySelector("button");
  button.addEventListener("click", function () {
    alert("The button has been clicked!");
  });
  ```
- **Using the Event Object**:
  ```jsx
  button.addEventListener("click", function (event) {
    console.log(event.type); // Output: click
    event.preventDefault(); // Prevents default actions like form submission
  });
  ```

### Useful DOM API Links

- [document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [document.createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [Element.setAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)
- [window.onload](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event)

This comprehensive explanation covers the major concepts of the DOM and demonstrates programming methods to utilize them effectively. It equips developers to make webpages more dynamic and interactive, providing foundational knowledge for web development.
