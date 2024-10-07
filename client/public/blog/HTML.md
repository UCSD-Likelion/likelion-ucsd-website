# HTML

1. HTML 기초개념
2. HTML Basic Template
3. 여러가지 HTML 태그들

## HTML

HTML (Hyper Text Markup Language)은 웹사이트를 만드는 데 사용되는 표준 "언어"입니다. HTML은 프로그래밍 언어가 아닌 마크업 언어입니다.

HTML은 **웹사이트의 뼈대**를 구성하는 역할을 하며, 이를 이용하여 텍스트, 이미지, 비디오, 링크 등의 미디어를 웹사이트에 포함시킬 수 있습니다.

HTML코드는 HTML 요소(element) 로 구성됩니다. 이 요소들은 텍스트의 구조적 의미를 나타내며, 제목, 문단, 리스트, 이미지 등을 포함할 수 있습니다. Tag는 꺾쇠 괄호(`<` `>`) 안에 둘러싸여 있으며, Opening Tag과 Closing Tag로 구성되어 있으며, 그 사이에 HTML 요소가 들어갑니다.

![Untitled](/html1.png)

## HTML Basic Template

Visual Studio Code에서 HTML을 연채로 `!` 를 치고 엔터를 하면 아래와 같이 기본 HTML 뼈대가 나타납니다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

- 뼈대 설명
  **<!DOCTYPE html>**
  - 이 declaration 은 현재 문서가 HTML5 문서임을 브라우저에 알려주는 역할을 합니다. 이는 문서의 첫 줄에서 사용되며, HTML 문서에서 가장 먼저 나와야 하는 declaration입니다.
    **<html lang="en">**
  - **`<html>`** 태그는 HTML 문서의 루트 요소로, 페이지의 모든 다른 요소들을 포함합니다. **`lang`** 속성은 문서의 주 언어가 영어임을 나타내며, 이는 접근성과 검색 엔진 최적화(SEO)에 도움이 됩니다.
    **<head>**
  - **`<head>`** 태그는 문서의 메타 데이터를 포함하는 부분으로, 사용자에게 직접적으로 보이지 않는 정보들을 담습니다. 여기에는 스크립트, 스타일시트 링크, 메타 정보 등이 포함될 수 있습니다.
  - **<meta charset="UTF-8">**
    - 이 메타 태그는 문서의 문자 인코딩이 UTF-8임을 명시합니다. UTF-8 인코딩은 국제적으로 광범위하게 사용되며 다양한 문자를 지원합니다.
  - **<meta name="viewport" content="width=device-width, initial-scale=1.0">**
    - 이 메타 태그는 브라우저에게 뷰포트의 크기를 디바이스의 화면 너비에 맞추고 초기 확대/축소 레벨을 1.0으로 설정하라는 지시를 합니다. 이는 반응형 디자인에서 중요한 역할을 하며, 모바일과 태블릿 등 다양한 크기의 디바이스에서 콘텐츠가 제대로 보이도록 합니다.
  - **<title>**
    - **`<title>`** 태그는 브라우저 탭에 표시될 문서의 제목을 정의합니다. 이는 사용자가 여러 탭을 사용할 때 각 웹 페이지를 식별하는 데 도움이 됩니다. (검색에서도 영향을 끼침)
      **<body>**
  - **`<body>`** 태그는 웹 페이지의 모든 콘텐츠가 포함되는 부분입니다. 텍스트, 이미지, 비디오, 링크, 폼 등 사용자에게 보여지는 모든 요소들이 이 부분에 위치합니다.

위 코드는 아주 기본적인 HTML 페이지의 틀을 제공하며, 개발자는 **`<body>`** 태그 안에 필요한 콘텐츠와 요소들을 추가하여 웹 페이지를 구성하게 됩니다.

## HTML 기초

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>멋쟁이사자처럼 UCSD | HTML 기초</title>
  </head>

  <body>
    <!-- 구역을 구분하는 태그들 -->
    <div>저는 여러분의 콘텐츠를 위한 공간을 구분해요!</div>
    <p>저는 문단을 표현하는 태그이죠. 내용을 나눠 쓸 때 유용해요.</p>
    <ul>
      <li>첫 번째 목록 아이템입니다</li>
      <li>두 번째 목록 아이템입니다</li>
    </ul>

    <!-- 콘텐츠 표현 태그들 -->
    <h1>
      h1 태그는 가장 중요한 제목을 나타내요. 검색 엔진 최적화(SEO)를 위해서도
      페이지마다 하나씩 사용하는 걸 추천드려요.
    </h1>
    <h2>h2 태그는 부제목으로 사용돼요.</h2>
    <h3>h3부터 h6까지도 있지만, 그 중요도는 점점 줄어들죠.</h3>
    <hr />
    span 태그는 여기에요: 이런 <span style="color:red">중요한 글자</span>를
    강조할 때 사용해요.
    <hr />
    a 태그는 링크를 만들죠: 여기를 클릭하면
    <a href="http://naver.com/">네이버</a>로 이동해요.
    <hr />
    img 태그는 이미지를 보여줘요:
    <img
      src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
    />
    <hr />
    input 태그는 사용자 입력을 받을 때 사용해요: <input type="text" />
    <hr />
    button 태그는 클릭할 수 있는 버튼을 만들어요: <button>클릭하세요</button>
    <hr />
    textarea 태그는 여러 줄의 텍스트를 입력할 수 있는 공간을 제공해요:
    <textarea>여기에 무엇을 적을까요?</textarea>
  </body>
</html>
```

위 코드는 제일 기초적인 HTML태그들 입니다. 그 외에도 아래 리스트에서 찾아보거나, 서치를 통해서 필요할 때마다 찾아서 넣는 것이 편합니다! (암기할 필요 없음)

위의 HTML 파일을 직접 실행해봅시다!

## Text Tags

기본적인 Text들을 나타내는 태그들입니다.

- **`<h1>` ~ `<h6>`**: 제목을 위한 태그로, **`<h1>`**이 가장 중요한 제목이며 **`<h6>`**으로 갈수록 중요도가 감소합니다.
- **`<p>`**: 텍스트 단락을 정의합니다.
- **`<code>`**: 인라인 코드 스니펫을 표시합니다.
- **`<pre>`**: 사전에 정의된 텍스트를 표시하며, 공백을 그대로 유지합니다.
- **`<blockquote>`**: 다른 출처에서 인용한 블록 레벨의 인용문을 나타냅니다.
- **`<cite>`**: 작품의 제목을 인용할 때 사용합니다.
- **`<abbr>`**: 약어나 두문자어를 나타내며, 설명을 위한 태그입니다.
- **`<mark>`**: 텍스트를 하이라이트하거나 마크합니다.
- **`<q>`**: 인라인 인용문을 나타냅니다.
- **`<var>`**: 변수나 자리 표시자 텍스트를 나타내는 데 사용됩니다.
- **`<kbd>`**: 키보드 입력이나 사용자의 행동을 나타내는 텍스트입니다.
- **`<samp>`**: 프로그램이나 시스템에서 출력된 샘플을 나타내는 태그입니다.

## Text Formatting Tag

텍스트 스타일을 변경하여 의미를 강조하거나 특정 방식으로 정보를 표기할 때 사용됩니다.

- **`<strong>` 또는 `<b>`**: 텍스트를 굵게 표시하여 강조.
- **`<em>` 또는 `<i>`**: 텍스트를 기울여 표시.
- **`<u>`**: 텍스트에 밑줄을 추가하여 강조.
- **`<s>` 또는 `<del>`**: 텍스트에 취소선을 추가.
- **`<sup>`**: 텍스트를 위첨자로 표시, 수학적 지수나 참조 마크 등에 사용.
- **`<sub>`**: 텍스트를 아래첨자로 표시, 화학식 등에서 사용.

## Hyperlink

하이퍼링크는 아래와 같이 만들 수 있습니다.

```html
<a href="url">link text</a>
```

아래와 같이, 사진을 클릭할 수 있게도 만들 수 있습니다.

```html
<a
  href="https://melted-gym-f03.notion.site/HTML-9997159ee878406f84fc5bf8e544c527"
>
  <img
    src="https://external-preview.redd.it/2cQ9g6IO8p3HvWdLz5MvmtoszY2AHCG2jIrLPh4Me-A.jpg?auto=webp&s=ef22d1216cb49de47b65cdbfc8131be8788778b0"
    alt="HTML tutorial"
    style="width:200px;"
  />
</a>
```

## List

### Unordered

순서가 없는 리스트는 `<ul>`을 사용해서 나타냅니다.

![Untitled](/html2.png)

```html
<ul>
  <li>사과</li>
  <li>바나나</li>
  <li>오렌지</li>
</ul>
```

### Ordered

순서가 있는 리스트는 `<ol>` 을 사용해서 나타냅니다.

![Untitled](/html3.png)

```html
<ol>
  <li>팬에 기름을 두른다.</li>
  <li>팬을 중불로 예열한다.</li>
  <li>계란을 깨서 팬에 부어 익힌다.</li>
</ol>
```

## Image

이미지는 아래와 같이 나타냅니다. `src` 부분에 현재 있는 파일로부터 로컬로 위치한 사진의 address나 인터넷의 이미지 address를 넣어 사진을 불러올 수 있습니다.

`alt` 는 사진이 랜더링되지 않을 경우 대신 보여지는 텍스트입니다.

```html
<img src="pow.jpg" alt="Pow Pow" />
```

## Table

HTML 테이블은 텍스트, 이미지, 링크 등을 표 형식으로 배열하는 데 유용합니다. 기본적인 구성 요소는 다음과 같습니다:

- **`<table>`**: 전체 테이블을 감싸는 태그입니다.
- **`<tr>`**: 테이블의 각 행을 정의합니다.
- **`<td>`**: 테이블의 셀(데이터)을 정의합니다.
- **`<th>`**: 테이블의 헤더 셀을 정의하며, 주로 열의 제목을 나타냅니다.
- **`border="1"`**: 테이블의 테두리 너비를 지정합니다.

테이블의 셀 사이의 공간(**`cellspacing`**)과 셀 테두리와 내용 사이의 거리(**`cellpadding`**)를 조정할 수 있습니다. 또한, **`colspan`**과 **`rowspan`** 속성을 사용하여 여러 열이나 행을 합칠 수 있습니다.

![Untitled](/html4.png)

```html
<table border="1" cellpadding="5" cellspacing="5">
  <tr>
    <th>Region</th>
    <th>Cat Breed</th>
    <th>Location of origin</th>
  </tr>
  <tr>
    <td rowspan="3">Europe</td>
    <td>British Shorthair</td>
    <td>the United Kingdom</td>
  </tr>
  <tr>
    <td>Chartreux</td>
    <td>France</td>
  </tr>
  <tr>
    <td>Africa</td>
    <td>Sokoke</td>
    <td>Kenya</td>
  </tr>
</table>
```

## Attributes

HTML elements는 특성(attribute)을 가질 수 있으며, 이러한 속성은 요소의 동작을 제어하는 추가 정보를 제공합니다. 주요 속성 유형에는 필수 속성(required attributes), 표준 속성(standard attributes), 이벤트 속성(event attributes)이 있습니다.

### 필수 속성 (Required Attributes)

필수 속성은 특정 HTML 요소가 기능을 정상적으로 수행하기 위해 반드시 필요한 속성입니다. 여기에는 다음과 같은 속성들이 포함됩니다:

- **src**: **`<img>`**, **`<source>`**, **`<track>`**와 같은 미디어 요소에 사용되며, 미디어 파일의 소스 URL을 지정합니다.
- **href**: **`<a>`**, **`<area>`**, **`<link>`** 요소에서 링크된 문서의 URL을 지정합니다.
- **alt**: **`<img>`**, **`<area>`** 요소에서 이미지 또는 영역의 대체 텍스트를 제공합니다. 이미지가 로드되지 않거나 시각 장애가 있는 사용자를 위해 중요합니다.

### 표준 속성 (Standard Attributes)

표준 속성은 거의 모든 HTML 요소에서 사용할 수 있는 속성으로, 다양한 용도로 활용됩니다. 표준 속성의 예로는 다음과 같은 것들이 있습니다:

- **class**: 요소를 분류하기 위해 사용되며, 한 요소에 여러 클래스를 지정할 수 있습니다. CSS나 JavaScript에서 해당 클래스를 사용하여 스타일링하거나 동작을 제어할 수 있습니다.
- **id**: 요소에 문서 내에서 고유한 식별자를 부여합니다. 주로 CSS 스타일링이나 JavaScript에서 특정 요소를 찾기 위해 사용됩니다.
- **style**: 요소에 인라인 CSS 스타일을 직접 적용합니다. 이를 통해 요소의 모양을 직접 지정할 수 있습니다.
- **width** 및 **height**: 주로 **`<img>`**, **`<table>`**, **`<canvas>`** 요소에서 사용되며, 요소의 너비와 높이를 지정합니다.
- **colspan** 및 **rowspan**: **`<td>`** 또는 **`<th>`** 요소에서 사용되어 테이블 내에서 요소가 차지하는 열 또는 행의 수를 지정합니다.
- **disabled**: **`<input>`**, **`<button>`**, **`<select>`** 요소에 사용되며, 요소를 비활성화하여 사용자의 입력이나 선택을 받지 않도록 합니다.
- **readonly**: **`<input>`**, **`<textarea>`**에 사용되어 요소를 읽기 전용으로 만듭니다.
- **placeholder**: **`<input>`**, **`<textarea>`**에서 사용자에게 입력 필드의 힌트를 제공합니다.
- **required**: **`<input>`**, **`<select>`**, **`<textarea>`**에 사용되어 필드가 필수임을 나타냅니다.
- **aria-label**: 모든 HTML 요소에 사용할 수 있으며, 스크린 리더를 사용하는 사용자에게 요소에 대한 접근성 레이블을 제공합니다.
- **data-**: 사용자 정의 데이터 속성으로, 요소에 추가 정보를 저장할 수 있습니다.
- **target**: **`<a>`**, **`<base>`**에서 링크의 대상을 지정합니다. 예를 들어 **`_blank`**는 새 탭에서 링크를 열도록 합니다.
- **rel**: **`<a>`**, **`<link>`**에서 링크된 문서 간의 관계를 설명합니다.

이 속성들을 이해하고 사용하면 웹 페이지를 더 풍부하고 동적으로 만들 수 있습니다

## 이벤트 속성(Event Attributes)

HTML에서 이벤트 속성(event attributes)은 요소에 발생하는 특정 이벤트에 JavaScript 코드를 연결하여 반응하도록 할 수 있는 속성입니다. 이를 통해 사용자의 동작에 따라 웹 페이지가 동적으로 반응하게 만들 수 있습니다.

예로는 아래와 같은 것들이 있습니다.

- **onclick**: 요소를 클릭했을 때 실행되는 JavaScript 함수를 지정합니다. 예를 들어, 버튼을 클릭하면 특정 함수를 실행시킬 수 있습니다.
  ```html
  htmlCopy code <button onclick="alert('클릭됨!')">클릭하세요</button>
  ```
  이 코드는 사용자가 버튼을 클릭하면 '클릭됨!'이라는 알림 메시지를 표시합니다.
- **onmouseover**: 사용자의 마우스가 요소 위로 올라갔을 때 실행되는 JavaScript 함수를 지정합니다. 예를 들어, 마우스를 요소 위에 올리면 메시지를 표시할 수 있습니다.
  ```html
  htmlCopy code
  <div onmouseover="console.log('마우스가 위에 있습니다!')">
    마우스를 여기에 올려보세요.
  </div>
  ```
  이 코드는 사용자가 div 요소 위에 마우스를 올렸을 때 콘솔에 '마우스가 위에 있습니다!'라는 메시지를 출력합니다.

## 🌟 div와 span 태그

- **div (division) 요소**: 블록 레벨의 범용 컨테이너입니다. 콘텐츠를 구분 가능한 블록으로 조직할 때 사용하며, 특정 스타일을 적용하고 싶은 콘텐츠 주위에 사용할 수 있습니다.
  ```html
  htmlCopy code
  <div id="important_info">
    <p>Notion은 노트를 취하는 최고의 방법입니다.</p>
    <p>Notion은 당신을 정돈된 상태로 유지시켜줍니다.</p>
    <p>We <3 Notion</p>
  </div>
  ```
- **span 요소**: 인라인 레벨의 범용 컨테이너입니다. div 태그처럼 모든 글로벌 속성을 지원하여, 문장 속 단어 하나만 특정 색으로 표시하고 싶을 때 사용할 수 있습니다.
  ```html
  htmlCopy code
  <p>
    내 골든 리트리버는 <span style="color:brown">갈색</span> 눈을 가지고
    있습니다.
  </p>
  ```

## 사용자 입력

- **HTML Form 요소**: 사용자로부터 데이터를 입력받고 서버로 보내기 위해 사용됩니다.
  ```html
  htmlCopy code
  <form>...</form>
  ```
- **HTML Input 요소**: 타입 속성을 통해 어떤 종류의 데이터를 받을지 결정할 수 있는 데이터 필드를 나타냅니다. 예를 들어 텍스트, 이미지, PDF 등을 입력받을 수 있습니다. 중요한 몇 가지 타입은 다음과 같습니다:
  - **`<input type="text">`**: 한 줄짜리 텍스트 입력 필드
  - **`<input type="radio">`**: 여러 선택지 중 하나를 선택할 수 있는 라디오 버튼
  - **`<input type="checkbox">`**: 하나 이상의 선택지를 선택할 수 있는 체크박스
  - **`<input type="submit">`**: 폼 데이터를 서버로 전송하는 제출 버튼
  - **`<input type="button">`**: JavaScript 함수를 실행하는 클릭 가능한 버튼
- **HTML Button 요소**: 입력 요소 대신 사용할 수 있는 버튼 요소로, 다양한 글로벌 및 이벤트 속성을 가지고 있습니다. 예를 들어 다음과 같습니다:
  ```html
  htmlCopy code
  <button type="button">저는 일반 버튼입니다.</button>
  <button type="reset">저는 리셋 버튼입니다.</button>
  <button type="submit">저는 제출 버튼입니다.</button>
  ```

## 드롭다운 메뉴

- **select 요소**: 드롭다운 메뉴를 만들 때 사용합니다. 여러 option 요소를 포함할 수 있으며, 각 옵션의 value 속성을 통해 값을 정의합니다.
  ```html
  htmlCopy code
  <select name="cats" id="cats">
    <option value="doggo" disabled>woof</option>
    <option value="bengal_cat">Bengal Cat</option>
    <option value="minskin_cat">Minskin Cat</option>
    <option value="persian_cat" selected>Persian Cat</option>
  </select>
  ```

## 웹사이트 구조

- **헤더(header)**: 소개 콘텐츠나 네비게이션 링크를 담는 컨테이너 역할을 합니다.
- **네비게이션 바(nav)**: 페이지 내 중요 링크들을 한 곳에 모아 사용자의 탐색을 용이하게 합니다.
- **메인 콘텐츠(main)**: 현재 페이지에만 해당하는 고유한 콘텐츠를 위해 사용됩니다.
- **푸터(footer)**: 웹페이지의 하단에 위치하며 저자 정보, 연락처 정보 등을 포함할 수 있습니다.

## 메타데이터

- **doctype**: HTML 문서가 올바르게 작동하기 위해 필요한 선언입니다.
- **meta 요소**: 문자 인코딩, 스타일 시트 링크 등의 메타데이터를 포함합니다.

---

이 외에도 [https://www.w3schools.com/html/default.asp](https://www.w3schools.com/html/default.asp) 와 같은 웹사이트에서 더 많은 추가적인 HTML태그들을 찾을 수 있습니다.
