# CSS

1. CSS 기초개념
2. 주요 CSS 태그들

## CSS (Cascading Style Sheets)

![Untitled](/css1.png)

HTML이 구역과 텍스트를 나타내 뼈대를 잡아주는 것이라면, CSS는 잡은 구역을 꾸며주는 코드입니다. HTML 안에서 Style 속성으로 꾸미기를 할 수 있지만, 주로 다른 곳에서 같이 모아서 볼 수 있는 CSS파일을 따로 생성합니다.

## Inline CSS

Tag 안에서 Style 속성으로 꾸미기

```html
<h2 style="color: red; text-align: center;">Come to LIKELION!</h2>
```

## Internal CSS

HTML안에서 Style 속성으로 꾸미기

```html
<head>
  <style>
    h2 {
      color: red;
      text-align: center;
    }
  </style>
</head>

<h2>Come to LIKELION!</h2>
```

## External CSS

외부 CSS는 모든 스타일을 별도의 CSS 파일에 작성하고 **`<link>`** 태그를 사용하여 HTML 문서와 연결하는 방식입니다. 이 방법은 코드의 조직성과 유지 보수성을 높여줍니다. 같은 스타일시트를 여러 HTML 파일에 재사용할 수 있습니다.

styles.css:

```css
h2 {
  color: red;
  text-align: center;
}
```

index.html:

```html
<head>
  <link rel="stylesheet" href="styles.css" />
</head>

<h2>Come to LIKELION!</h2>
```

## Selectors

CSS Selectors는 스타일을 적용할 HTML 요소를 지정하는 데 사용됩니다.

### Universal Selector

말그대로 모든 element에 스타일을 적용합니다.

```css
* {
  margin: 0;
  padding: 0;
}
```

### Type Selector

특정 Tag Type에 스타일을 적용합니다.

```css
p {
  color: blue;
}
```

### Class Selector

HTML에서 지정한 Class에서 스타일을 적용합니다.

```css
.menu {
  background-color: yellow;
}
```

### ID Selector

HTML에서 지정한 ID에서 스타일을 적용합니다.

```css
#header {
  background-color: green;
}
```

### Attribute Selector ~~(잘 안씀)~~

특정 Attribute를 가진 HTML 부분에 스타일을 적용합니다.

```css
input[type="text"] {
  border: 1px solid grey;
}
```

## **HTML 부모-자식 관계와 CSS 스타일 상속**

### 상속

- CSS에서 **상속**은 부모 요소에 적용된 스타일 속성이 자식 요소에도 적용되는 특성을 말합니다. 예를 들어, 부모 요소에 설정한 글꼴 스타일이나 색상이 자식 요소에도 동일하게 적용될 수 있습니다. 이는 코드의 재사용성을 높이고, 일관된 디자인을 유지하는 데 도움이 됩니다.

![Untitled](/css2.png)

- 빨간색 div를 가운데로 옮기면 파란색과 초록색도 같이 이동
- 초록 div의 글씨색을 바꾸면 나는버튼1의 글씨색도 같이 바뀐다.

## Key Properties in CSS

### **색상 (Color)**

- **color**: 텍스트의 색상을 변경합니다.
  ```html
  <p style="color: blue;">파란색 텍스트</p>
  ```

### **폰트 (Font)**

- **font-family, font-size, font-weight, font-style** 등: 폰트 가족, 크기, 무게, 스타일 등 글꼴 관련 속성을 수정합니다.
  ```html
  <p
    style="font-family: Arial, sans-serif; font-size: 16px; font-weight: bold;"
  >
    굵은 아리얼 16px 텍스트
  </p>
  ```

### **여백 (Margins)**

- **margin**: 요소 주변의 공간을 조절하여 요소들 사이의 간격을 조정합니다.
  ```html
  <div style="margin: 20px;">20px 여백이 있는 콘텐츠</div>
  ```

### **패딩 (Padding)**

- **padding**: 요소의 경계 내부에 공간을 추가하여 콘텐츠와 경계 사이의 공간을 생성합니다.
  ```html
  <div style="padding: 10px;">10px 패딩이 있는 콘텐츠</div>
  ```

### **테두리 (Borders)**

- **border, border-width, border-style, border-color**: 요소 주변에 테두리를 스타일링하며, 그 너비, 스타일(실선, 점선, 점점선 등), 색상을 제어합니다.
  ```html
  <div style="border: 1px solid black; width: 100px; height: 50px;">
    검은색 1px 실선 테두리가 있는 상자
  </div>
  ```

### **너비와 높이 (Width and Height)**

- **width, height**: 요소의 크기를 지정하여 제어할 수 있습니다.
  ```html
  <div style="width: 200px; height: 100px; background-color: lightgray;"></div>
  ```

### **배경 (Background)**

- **background-image, background-color, background-position** 등: 요소의 배경 이미지, 색상 및 위치를 설정합니다.
  ```html
  <div style="width: 200px; height: 100px; background-color: lightgray;"></div>
  ```

### **텍스트 (Text)**

- **text-align, text-decoration, text-transform**: 텍스트의 정렬, 장식(밑줄, 윗줄 등), 변환(대문자, 소문자, 첫 글자 대문자)을 제어합니다.
  ```html
  <p
    style="text-align: center; text-decoration: underline; text-transform: uppercase;"
  >
    가운데, 밑줄, 대문자 텍스트
  </p>
  ```

### **디스플레이 (Display)**

- **display**: 요소의 표시 방식(블록, 인라인, 플렉스, 그리드 등)을 변경하고 다른 요소와의 상호 작용 방식을 제어합니다.
  ```html
  <div style="display: flex; justify-content: space-between;">
    <div>아이템 1</div>
    <div>아이템 2</div>
  </div>
  ```

### **위치 (Positioning)**

- **position, top, bottom, left, right**: 요소의 위치를 페이지에서 제어하는 데 사용됩니다.
  ```html
  <div style="position: absolute; top: 50px; left: 100px;">
    상단에서 50px, 왼쪽에서 100px에 위치한 요소
  </div>
  ```

### **플로트 (Float)**

- **float**: 요소를 컨테이너의 왼쪽 또는 오른쪽으로 띄웁니다.
  ```html
  <img src="image.jpg" style="float: left; margin-right: 20px;" />
  ```

### **투명도 (Opacity)**

- **opacity**: 요소와 그 내용물의 투명도를 조절합니다. 값이 낮을수록 더 투명해집니다.
  ```html
  <div style="opacity: 0.7;">반투명 콘텐츠</div>
  ```

### **전환과 애니메이션 (Transitions and Animations)**

- **transition**: 요소의 속성 변경을 시간에 걸쳐 부드럽게 전환시킵니다.
  ```html
  <button style="transition: background-color 0.3s ease;">
    호버 시 색상 변화
  </button>
  ```
- **animation**: 키 프레임을 이용하여 복잡한 애니메이션 효과를 생성합니다.
  ```html
  <div style="animation: slidein 3s;">애니메이션 적용</div>
  ```

### **그림자 (Shadows)**

- **box-shadow**: 요소에 상자 그림자를 추가합니다.
- **text-shadow**: 텍스트에 그림자 효과를 추가합니다.
  ```html
  <div style="box-shadow: 2px 2px 5px gray; text-shadow: 1px 1px 2px black;">
    상자와 텍스트에 그림자
  </div>
  ```

### **리스트 스타일 (List Styles)**

- **list-style-type**: 목록 아이템의 불릿 스타일을 설정합니다.
- **list-style-image**: 목록 아이템의 불릿 대신 이미지를 사용합니다.
- **list-style-position**: 불릿의 위치를 내부 또는 외부로 설정합니다.
  ```html
  <ul style="list-style-type: square;">
    <li>아이템 1</li>
    <li>아이템 2</li>
  </ul>
  ```

### **플렉스박스와 그리드 (Flexbox and Grid)**

- **display: flex**: 요소를 플렉스 컨테이너로 만들어 내부 아이템을 유연하게 배치할 수 있습니다.
- **display: grid**: 그리드 레이아웃을 사용하여 요소들을 더 정밀하게 배치할 수 있습니다.
  ```html
  <div style="display: grid; grid-template-columns: repeat(3, 1fr);">
    <div>그리드 아이템 1</div>
    <div>그리드 아이템 2</div>
    <div>그리드 아이템 3</div>
  </div>
  ```

## CSS Flexbox

Flexbox는 컨테이너 내의 요소들을 배치하고 정렬, 분배, 순서를 제어하는 도구입니다.

### **Flexbox 개념**

**Flex Container와 Flex Items**

- **Flex Container**: **`display: flex;`** 또는 **`display: inline-flex;`** 속성을 적용한 요소로, Flex Items의 부모 요소가 됩니다. 이 설정은 자식 요소들을 Flex Items로 만들어, 유연하게 배치할 수 있게 합니다.
- **Flex Items**: Flex Container 내부의 자식 요소들로, 유연하게 정렬됩니다.

**Main Axis와 Cross Axis**

- **Main Axis**: Flex Items가 주로 배치되는 축으로, 기본적으로 왼쪽에서 오른쪽으로의 흐름을 가집니다.
- **Cross Axis**: Main Axis에 수직인 축으로, 주로 위에서 아래로의 흐름을 가집니다.

### **주요 Flex Container 속성**

1. **flex-direction**
   - Container의 Main Axis의 방향을 결정합니다.
   - **row**: 요소들을 텍스트의 읽는 방향대로 가로로 나열합니다.
   - **row-reverse**: 요소들을 텍스트의 읽는 방향과 반대로 가로로 나열합니다.
   - **column**: 요소들을 세로로 나열합니다.
   - **column-reverse**: 요소들을 세로의 반대 방향으로 나열합니다.
2. **justify-content**
   - Main Axis에 따라 Items를 정렬합니다.
   - **flex-start**: 요소들을 컨테이너의 시작 부분에 정렬합니다.
   - **flex-end**: 요소들을 컨테이너의 끝 부분에 정렬합니다.
   - **center**: 요소들을 컨테이너 중앙에 정렬합니다.
   - **space-between**: 요소들 사이에 동일한 간격을 두고 첫 요소와 마지막 요소는 컨테이너의 양 끝에 위치합니다.
   - **space-around**: 요소들 주위에 동일한 간격을 두되, 요소들 사이의 간격이 요소와 컨테이너 경계 사이 간격의 두 배가 됩니다.
   - **space-evenly**: 요소들 사이와 양 끝에 모두 동일한 간격을 둡니다.
3. **align-items**
   - Cross Axis에 따라 Items를 정렬합니다.
   - **flex-start**: 요소들을 컨테이너의 교차축 시작 부분에 정렬합니다.
   - **flex-end**: 요소들을 교차축 끝 부분에 정렬합니다.
   - **center**: 요소들을 교차축 중앙에 정렬합니다.
   - **baseline**: 요소들을 텍스트 기준선에 맞춰 정렬합니다.
   - **stretch**: 요소들을 교차축 방향으로 늘려 컨테이너를 채웁니다.
4. **flex-wrap**
   - Items가 Container를 벗어날 때 줄바꿈 여부를 결정합니다.
   - **nowrap**: 모든 요소를 한 줄로 배치하며 줄바꿈을 하지 않습니다.
   - **wrap**: 필요에 따라 요소들을 여러 줄로 나누어 배치합니다.
   - **wrap-reverse**: 요소들을 여러 줄로 나누되, 순서를 반대로 배치합니다.
5. **flex-flow**
   - **`flex-direction`**과 **`flex-wrap`**의 단축 속성입니다.
   - 예: **`row wrap`**

### **Flex Item 속성**

1. **flex-grow**
   - 남은 공간을 어떻게 분배할지 결정합니다. 기본값은 0이며, 값이 클수록 더 많은 공간을 차지합니다.
2. **flex-shrink**
   - 공간이 부족할 때 요소가 얼마나 줄어들지 결정합니다. 기본값은 1이며, 값이 클수록 더 많이 줄어듭니다.
3. **flex-basis**
   - 요소의 기본 크기를 설정합니다. 기본값은 **`auto`**이며, 이는 요소의 내용 크기에 따라 결정됩니다.
4. **order**
   - 요소의 배치 순서를 설정합니다. 기본값은 0이며, 값이 낮을수록 먼저 배치됩니다.

### **Flexbox 예제**

Flexbox를 사용하여 간단한 표와 같은 레이아웃을 구성해보겠습니다:

**HTML 구조**

```html
<div class="table">
  <div class="row header">
    <div class="cell">Header 1</div>
    <div class="cell">Header 2</div>
    <div class="cell">Header 3</div>
  </div>
  <div class="row">
    <div class="cell">Cell 1</div>
    <div class="cell">Cell 2</div>
    <div class="cell">Cell 3</div>
  </div>
</div>
```

**CSS 스타일링**

```css
.table {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  background-color: #1e90ff;
}

.row {
  display: flex;
  flex-direction: row;
}

.cell {
  width: 100px;
  padding: 10px;
  border: 1px solid black;
  background-color: #f1f1f1;
}
```

---

이 외에도 [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) 와 같은 웹사이트에서 더 많은 CSS 코드를 찾으실 수 있습니다.
