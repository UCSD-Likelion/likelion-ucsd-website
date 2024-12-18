# HTML

1. HTML Basics
2. HTML Basic Template
3. Various HTML Tags

## HTML

HTML (Hyper Text Markup Language) is the standard "language" used to create websites. It is not a programming language but a markup language.

HTML serves as the **skeleton of a website**, allowing the inclusion of text, images, videos, links, and other media on a web page.

HTML code consists of HTML elements. These elements define the structural meaning of the text and can include headings, paragraphs, lists, images, etc. Tags are enclosed within angle brackets (`<` `>`), with an Opening Tag and a Closing Tag that encapsulate the HTML element.

![Untitled](/html1.png)

## HTML Basic Template

In Visual Studio Code, typing `!` and pressing Enter will generate the basic HTML skeleton as shown below:

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

- **Template Explanation**  
  **<!DOCTYPE html>**
  - This declaration informs the browser that the document is an HTML5 document. It must be the very first line of an HTML document.
    **<html lang="en">**
  - The **`<html>`** tag is the root element of the HTML document and contains all other elements. The **`lang`** attribute specifies the primary language of the document (in this case, English), which is beneficial for accessibility and SEO.
    **<head>**
  - The **`<head>`** tag contains metadata about the document, which is not directly visible to users. This can include scripts, stylesheets, and meta information.
    **<meta charset="UTF-8">**
  - This meta tag specifies that the character encoding of the document is UTF-8. This encoding supports a wide range of characters and is globally accepted.
    **<meta name="viewport" content="width=device-width, initial-scale=1.0">**
  - This meta tag instructs the browser to set the viewport width to the device's width and the initial zoom level to 1.0. It is crucial for responsive design, ensuring the content looks proper on devices of various sizes.
    **<title>**
  - The **`<title>`** tag defines the document's title that appears on the browser tab. It helps identify pages when multiple tabs are open and is important for search engine rankings.
    **<body>**
  - The **`<body>`** tag contains all the visible content on the webpage, such as text, images, videos, links, and forms.

The above code provides a very basic framework for an HTML document. Developers add content and elements inside the **`<body>`** tag to build a webpage.

## HTML Basics

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>LikeLion UCSD | HTML Basics</title>
  </head>

  <body>
    <!-- Tags for dividing sections -->
    <div>I separate spaces for your content!</div>
    <p>I am a tag that represents a paragraph, useful for breaking content.</p>
    <ul>
      <li>This is the first list item</li>
      <li>This is the second list item</li>
    </ul>

    <!-- Tags for representing content -->
    <h1>
      The h1 tag represents the most important heading. It is recommended to use
      one per page for SEO purposes.
    </h1>
    <h2>The h2 tag is used for subtitles.</h2>
    <h3>There are also h3 to h6 tags, but their importance decreases.</h3>
    <hr />
    The span tag is here: Use it to emphasize
    <span style="color:red">important text</span>.
    <hr />
    The a tag creates links: Clicking here takes you to
    <a href="http://naver.com/">Naver</a>.
    <hr />
    The img tag displays images:
    <img
      src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
    />
    <hr />
    The input tag is used to collect user input: <input type="text" />
    <hr />
    The button tag creates clickable buttons: <button>Click me</button>
    <hr />
    The textarea tag provides a space to enter multiple lines of text:
    <textarea>What should I write here?</textarea>
  </body>
</html>
```

The above code includes the most basic HTML tags. You can find more from the list below or search for specific tags as needed! (No need to memorize them!)

Let's run the HTML file above directly!

## Text Tags

These are tags used to represent basic text.

- **`<h1>` to `<h6>`**: Tags for headings, where **`<h1>`** represents the most important heading, and **`<h6>`** represents the least important heading.
- **`<p>`**: Defines a paragraph of text.
- **`<code>`**: Displays inline code snippets.
- **`<pre>`**: Displays preformatted text, preserving whitespace as written.
- **`<blockquote>`**: Represents a block-level quotation from another source.
- **`<cite>`**: Used to cite the title of a work.
- **`<abbr>`**: Denotes abbreviations or acronyms and provides descriptions.
- **`<mark>`**: Highlights or marks text.
- **`<q>`**: Represents inline quotations.
- **`<var>`**: Used to denote variables or placeholders in text.
- **`<kbd>`**: Represents user input, like keyboard or button actions.
- **`<samp>`**: Represents output from a program or system.

## Text Formatting Tags

These tags modify the text style to emphasize meaning or display information in a specific format.

- **`<strong>` or `<b>`**: Boldens the text for emphasis.
- **`<em>` or `<i>`**: Italicizes the text for emphasis.
- **`<u>`**: Underlines text to emphasize it.
- **`<s>` or `<del>`**: Strikes through the text.
- **`<sup>`**: Displays text as superscript, used for exponents or footnotes.
- **`<sub>`**: Displays text as subscript, used in chemical formulas, etc.

## Hyperlink

Hyperlinks are created as follows:

```html
<a href="url">link text</a>
```

You can also make an image clickable:

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

An unordered list is represented using `<ul>`.

![Untitled](/html2.png)

```html
<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Orange</li>
</ul>
```

### Ordered

An ordered list is represented using `<ol>`.

![Untitled](/html3.png)

```html
<ol>
  <li>Pour oil into the pan.</li>
  <li>Preheat the pan over medium heat.</li>
  <li>Crack the egg into the pan and cook it.</li>
</ol>
```

## Image

Images are displayed using the `<img>` tag. In the `src` attribute, you can include the local file path or the URL of an image from the internet.

The `alt` attribute provides alternative text in case the image fails to load.

```html
<img src="pow.jpg" alt="Pow Pow" />
```

## Table

HTML tables are useful for arranging text, images, links, and other content in a tabular format. The basic components are:

- **`<table>`**: Wraps the entire table.
- **`<tr>`**: Defines a row in the table.
- **`<td>`**: Defines a cell (data) within a row.
- **`<th>`**: Defines a header cell, often used for column titles.
- **`border="1"`**: Specifies the border width of the table.

You can adjust spacing between cells (**`cellspacing`**) and padding inside cells (**`cellpadding`**). Additionally, **`colspan`** and **`rowspan`** attributes allow you to merge columns or rows.

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

HTML elements can have attributes that provide additional information or control their behavior. There are three main types of attributes: required, standard, and event attributes.

### Required Attributes

Required attributes are essential for certain elements to function correctly. Examples include:

- **src**: Used in **`<img>`**, **`<source>`**, and **`<track>`** elements to specify the media source URL.
- **href**: Used in **`<a>`**, **`<area>`**, and **`<link>`** elements to specify the target URL.
- **alt**: Used in **`<img>`** and **`<area>`** elements to provide alternative text for accessibility or when the image fails to load.

### Standard Attributes

Standard attributes are widely applicable across most HTML elements. Examples include:

- **class**: Groups elements for styling or behavior via CSS or JavaScript.
- **id**: Provides a unique identifier for an element, often used in styling or scripting.
- **style**: Applies inline CSS styles to an element.
- **width** and **height**: Specify the dimensions of an element, such as an image or table.
- **colspan** and **rowspan**: Merge columns or rows within a table.
- **disabled**: Disables interactive elements like buttons or inputs.
- **readonly**: Makes inputs or textareas uneditable.
- **placeholder**: Displays hint text inside an input field.
- **required**: Marks inputs or forms as mandatory.
- **aria-label**: Adds accessibility labels for screen readers.
- **data-**: Stores custom data attributes on elements.
- **target**: Specifies where to open linked content (e.g., **`_blank`** for a new tab).
- **rel**: Defines the relationship between the current and linked documents.

### Event Attributes

Event attributes allow elements to respond to user actions by triggering JavaScript functions. Examples include:

- **onclick**: Executes a JavaScript function when the element is clicked.
  ```html
  <button onclick="alert('Clicked!')">Click me</button>
  ```
- **onmouseover**: Executes a JavaScript function when the mouse hovers over the element.
  ```html
  <div onmouseover="console.log('Mouse is hovering!')">
    Hover over this text.
  </div>
  ```

## 🌟 div and span Tags

- **div (division) element**: A block-level container used to group content into sections and apply styles.
  ```html
  <div id="important_info">
    <p>Notion is the best way to take notes.</p>
    <p>Notion keeps you organized.</p>
    <p>We <3 Notion</p>
  </div>
  ```
- **span element**: An inline container used to apply styles to small parts of text.
  ```html
  <p>My golden retriever has <span style="color:brown">brown</span> eyes.</p>
  ```

## User Input

- **HTML Form Element**: Collects user data and sends it to the server.
  ```html
  <form>...</form>
  ```
- **HTML Input Element**: Represents input fields for user data, defined by the `type` attribute. Examples:
  - **`<input type="text">`**: Single-line text field
  - **`<input type="radio">`**: Radio button for single selection
  - **`<input type="checkbox">`**: Checkbox for multiple selections
  - **`<input type="submit">`**: Submit button for forms
  - **`<input type="button">`**: Button for JavaScript functions
- **HTML Button Element**: Represents clickable buttons with various attributes.
  ```html
  <button type="button">I am a regular button</button>
  <button type="reset">I reset the form</button>
  <button type="submit">I submit the form</button>
  ```

## Dropdown Menu

- **select element**: Creates a dropdown menu with multiple **option** elements.
  ```html
  <select name="cats" id="cats">
    <option value="doggo" disabled>woof</option>
    <option value="bengal_cat">Bengal Cat</option>
    <option value="minskin_cat">Minskin Cat</option>
    <option value="persian_cat" selected>Persian Cat</option>
  </select>
  ```

## Website Structure

- **Header (header)**: A container for introductory content or navigation links.
- **Navigation Bar (nav)**: Groups important page links for easy navigation.
- **Main Content (main)**: Contains unique content specific to the current page.
- **Footer (footer)**: Appears at the bottom of a webpage, often containing author or contact information.

## Metadata

- **doctype**: A declaration required for the proper functioning of an HTML document.
- **meta elements**: Include metadata like character encoding or links to stylesheets.

---

For more tags and examples, visit [W3Schools HTML Guide](https://www.w3schools.com/html/default.asp).
