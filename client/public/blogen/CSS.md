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

## CSS (Cascading Style Sheets)

If HTML creates the structure and text layout of a webpage, CSS is the code that styles and decorates the layout created by HTML. While you can use inline `style` attributes within HTML tags to apply styles, it's common practice to create separate CSS files for better organization and maintainability.

## Inline CSS

Styling directly within a tag using the `style` attribute:

```html
<h2 style="color: red; text-align: center;">Come to LIKELION!</h2>
```

## Internal CSS

Styling within the `<style>` tag inside the HTML document:

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

External CSS involves writing all styles in a separate CSS file and linking it to the HTML document using the `<link>` tag. This approach improves maintainability and allows reusing the same stylesheet across multiple HTML files.

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

CSS Selectors are used to specify which HTML elements the styles should apply to.

### Universal Selector

Applies styles to all elements.

```css
* {
  margin: 0;
  padding: 0;
}
```

### Type Selector

Applies styles to specific HTML tags.

```css
p {
  color: blue;
}
```

### Class Selector

Applies styles to elements with the specified class.

```css
.menu {
  background-color: yellow;
}
```

### ID Selector

Applies styles to elements with the specified ID.

```css
#header {
  background-color: green;
}
```

### Attribute Selector ~~(rarely used)~~

Applies styles to elements with specific attributes.

```css
input[type="text"] {
  border: 1px solid grey;
}
```

## **HTML Parent-Child Relationship and CSS Style Inheritance**

### Inheritance

- **Inheritance** in CSS refers to the concept where child elements inherit certain styles applied to their parent elements, such as font style or color. This promotes code reuse and ensures consistent design.

![Untitled](/css2.png)

- If you move the red `div` to the center, the blue and green elements move along with it.
- Changing the font color of the green `div` also changes the text color of the "Button 1."

---

## Key Properties in CSS

### **Color**

- **color**: Changes the color of text.
  ```html
  <p style="color: blue;">Blue text</p>
  ```

### **Font**

- **font-family, font-size, font-weight, font-style**: Adjust font family, size, weight, and style.
  ```html
  <p
    style="font-family: Arial, sans-serif; font-size: 16px; font-weight: bold;"
  >
    Bold Arial 16px text
  </p>
  ```

### **Margin**

- **margin**: Adjusts spacing around an element.
  ```html
  <div style="margin: 20px;">Content with 20px margin</div>
  ```

### **Padding**

- **padding**: Adds space inside the element, between the content and its border.
  ```html
  <div style="padding: 10px;">Content with 10px padding</div>
  ```

### **Border**

- **border, border-width, border-style, border-color**: Adds and styles the border of an element.
  ```html
  <div style="border: 1px solid black; width: 100px; height: 50px;">
    Box with a 1px black border
  </div>
  ```

### **Width and Height**

- **width, height**: Specifies the size of an element.
  ```html
  <div style="width: 200px; height: 100px; background-color: lightgray;"></div>
  ```

### **Background**

- **background-image, background-color, background-position**: Sets the background image, color, and position.
  ```html
  <div style="width: 200px; height: 100px; background-color: lightgray;"></div>
  ```

### **Text**

- **text-align, text-decoration, text-transform**: Controls text alignment, decoration (e.g., underline), and transformation (e.g., uppercase).
  ```html
  <p
    style="text-align: center; text-decoration: underline; text-transform: uppercase;"
  >
    Centered, underlined, uppercase text
  </p>
  ```

### **Display**

- **display**: Specifies how an element is displayed (e.g., block, inline, flex, grid).
  ```html
  <div style="display: flex; justify-content: space-between;">
    <div>Item 1</div>
    <div>Item 2</div>
  </div>
  ```

### **Positioning**

- **position, top, bottom, left, right**: Controls the positioning of an element.
  ```html
  <div style="position: absolute; top: 50px; left: 100px;">
    Positioned 50px from the top and 100px from the left
  </div>
  ```

### **Float**

- **float**: Floats an element to the left or right within its container.
  ```html
  <img src="image.jpg" style="float: left; margin-right: 20px;" />
  ```

### **Opacity**

- **opacity**: Controls the transparency of an element.
  ```html
  <div style="opacity: 0.7;">Semi-transparent content</div>
  ```

### **Transitions and Animations**

- **transition**: Smoothly animates property changes over time.
  ```html
  <button style="transition: background-color 0.3s ease;">
    Hover to change color
  </button>
  ```
- **animation**: Creates complex animations using keyframes.
  ```html
  <div style="animation: slidein 3s;">Animated content</div>
  ```

### **Shadows**

- **box-shadow**: Adds a shadow to an element's box.
- **text-shadow**: Adds a shadow effect to text.
  ```html
  <div style="box-shadow: 2px 2px 5px gray; text-shadow: 1px 1px 2px black;">
    Box and text shadows
  </div>
  ```

### **List Styles**

- **list-style-type**: Specifies bullet styles for lists.
- **list-style-image**: Uses an image as the bullet.
- **list-style-position**: Sets bullet placement relative to the list item.
  ```html
  <ul style="list-style-type: square;">
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
  ```

### **Flexbox and Grid**

- **display: flex**: Makes an element a flex container for flexible item alignment.
- **display: grid**: Enables precise layout with rows and columns.
  ```html
  <div style="display: grid; grid-template-columns: repeat(3, 1fr);">
    <div>Grid item 1</div>
    <div>Grid item 2</div>
    <div>Grid item 3</div>
  </div>
  ```

## CSS Flexbox

Flexbox is a tool for arranging, aligning, distributing, and ordering items within a container.

### **Flexbox Concepts**

**Flex Container and Flex Items**

- **Flex Container**: The parent element where the `display: flex;` or `display: inline-flex;` property is applied, making its child elements Flex Items. This allows the child elements to be arranged flexibly.
- **Flex Items**: The child elements within the Flex Container, which are flexibly aligned.

**Main Axis and Cross Axis**

- **Main Axis**: The primary axis along which Flex Items are arranged. By default, it flows from left to right.
- **Cross Axis**: The axis perpendicular to the Main Axis, typically flowing from top to bottom.

### **Key Flex Container Properties**

1. **flex-direction**

   - Determines the direction of the Main Axis within the container.
   - **row**: Aligns items horizontally in the text's reading direction.
   - **row-reverse**: Aligns items horizontally in the reverse reading direction.
   - **column**: Aligns items vertically.
   - **column-reverse**: Aligns items vertically in the reverse direction.

2. **justify-content**

   - Aligns items along the Main Axis.
   - **flex-start**: Aligns items at the start of the container.
   - **flex-end**: Aligns items at the end of the container.
   - **center**: Aligns items in the center of the container.
   - **space-between**: Distributes items evenly, with the first item at the start and the last at the end.
   - **space-around**: Distributes items evenly, with equal spacing around each item.
   - **space-evenly**: Distributes items so that the spacing between items and edges is equal.

3. **align-items**

   - Aligns items along the Cross Axis.
   - **flex-start**: Aligns items at the start of the Cross Axis.
   - **flex-end**: Aligns items at the end of the Cross Axis.
   - **center**: Aligns items in the center of the Cross Axis.
   - **baseline**: Aligns items along their text baselines.
   - **stretch**: Stretches items to fill the container along the Cross Axis.

4. **flex-wrap**

   - Determines whether items should wrap onto the next line if they exceed the container's width.
   - **nowrap**: Keeps all items on one line without wrapping.
   - **wrap**: Allows items to wrap onto multiple lines as needed.
   - **wrap-reverse**: Wraps items onto multiple lines in reverse order.

5. **flex-flow**
   - A shorthand property for **`flex-direction`** and **`flex-wrap`**.
   - Example: **`row wrap`**

### **Flex Item Properties**

1. **flex-grow**

   - Specifies how much of the available space the item should take up. The default value is 0, meaning it will not grow.
   - Larger values allocate more space to the item.

2. **flex-shrink**

   - Specifies how much the item should shrink when space is limited. The default value is 1, meaning it will shrink proportionally.
   - Larger values make the item shrink more.

3. **flex-basis**

   - Specifies the initial size of an item before remaining space is distributed. The default value is **`auto`**, which means the size is based on the item's content.

4. **order**
   - Specifies the order of items within the container. The default value is 0, and lower values are displayed first.

### **Flexbox Example**

Using Flexbox to create a table-like layout:

**HTML Structure**

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

**CSS Styling**

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

For more CSS codes and examples, refer to [MDN CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS).
