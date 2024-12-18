# Introduction

Hello! Welcome to the **UCSD Likelion Beginner Project**! 👋🏻

In our Beginner Project, we will focus on basic web development techniques such as HTML, CSS, JavaScript, and React, primarily from a frontend perspective!

## Class Schedule

- Week 2: Orientation, Web Development Basics, HTML + CSS, JavaScript
- Week 3: React
- Week 4: Next.js, GraphQL
- Week 5: MongoDB
- Week 6: Frontend Project
- Week 7-8: Final Project
- Week 9: Presentation

## Class Format

- 3-hour weekly meetings (1.5 hours x 2)
- 40 minutes lecture + 40 minutes practice
- Approximately one practice assignment per week
- Notify mentors 24 hours in advance for absences
- Limit unauthorized absences or unsubmitted assignments to 3 or fewer instances

## Command Line (Terminal) Basic Commands

### **File Management**

- **`ls`**: Lists all files and directories in the current directory.
- **`cd directory_name`**: Changes the current directory to **directory_name**.
- **`mkdir directory_name`**: Creates a new directory called **directory_name**.
- **`rmdir directory_name`**: Removes a directory (it must be empty).
- **`touch file_name`**: Creates a new empty file called **file_name**.
- **`cp source destination`**: Copies files or directories from **source** to **destination**.
- **`mv source destination`**: Moves files or directories from **source** to **destination**.
- **`rm file_name`**: Removes (deletes) the file named **file_name**. Use **`rm -r directory_name`** to remove a directory and its contents.

### **Viewing & Editing Files**

- **`cat file_name`**: Displays the contents of **file_name**.
- **`less file_name`**: Views the contents of **file_name** one page at a time.
- **`nano file_name`**: Opens **file_name** in the Nano editor.
- **`vim file_name`**: Opens **file_name** in the Vim editor.

### **System Information**

- **`pwd`**: Displays the current working directory.
- **`whoami`**: Displays the username of the current user.
- **`hostname`**: Displays the network name of the system.
- **`uname -a`**: Displays all available system information.

### **Process Management**

- **`top`**: Displays a real-time view of processes running on the system.
- **`ps`**: Displays a snapshot of current processes.
- **`kill pid`**: Terminates a process with the specified **`pid`** (process ID).

### **Networking**

- **`ping host`**: Tests connectivity to **host**.
- **`ifconfig`** (on Unix/Linux) or **`ipconfig`** (on Windows): Displays network configuration.
- **`netstat`**: Displays network statistics.

### **File Permissions**

- **`chmod permissions file_name`**: Changes permissions for **file_name**.
- **`chown owner file_name`**: Changes ownership of **file_name**.

### **Searching and Sorting**

- **`find location criteria`**: Searches for files or directories based on the criteria.
- **`grep pattern file`**: Searches **file** for **pattern**.
- **`sort file_name`**: Sorts the contents of **file_name**.

## Learning Git

### What is Git?

Git is a **distributed version control system** developed by Linus Torvalds in 2005. It is primarily used to manage source code in collaborative software development projects.

Why is version control necessary?

Version control is illustrated in the diagram to the right. You might have experienced creating multiple versions of a file like **presentation.ppt** and editing it repeatedly until you end up with **presentation_final_final.ppt**. Version control allows you to manage these versions. However, in the example to the right, it is difficult to distinguish the most recent version because it involves manually copying, saving, and backing up files.

Git is a system that makes version control more efficient.

![Untitled](/Untitled.png)

### Advantages of Git

- Works offline without an internet connection
- Fast and allows developers to work on separate branches and later merge their work

### Git vs GitHub

![Untitled](/Untitled-1.png)

Git and GitHub are often confused, but they are different services. Git is a distributed version control system, while GitHub is a web hosting service that supports projects using Git.

### Basic Git Terminology

- **`Repository`**: A storage space where histories, tags, and branches are saved, allowing developers to view all changes.
- **`Working Tree`**: The current state of the developer's working directory.
- **`Staging Area`**: The area where changes are prepared before committing them to the repository.
- **`Commit`**: Saving the current state of the working directory to the repository after review.
- **`Head`**: The current working branch.
- **`Branch`**: A branch or fork where developers can work independently on a copy of the current state.
- **`Merge`**: Combining changes from another branch into the current branch.

### Basic Git Commands

- **`git init`**: Initializes a new Git repository in the current directory by creating a **`.git`** folder.
- **`git clone [url]`**: Clones a remote repository to the local machine, copying all files, history, etc.
- **`git add [file]`**: Adds specific files or folders to the staging area, preparing them for commit.
- **`git commit -m "[commit message]"`**: Saves the staged changes to the repository's history with a descriptive message.
- **`git status`**: Displays the status of the working directory, including modified and staged files.
- **`git branch [branch-name]`**: Creates a new branch. Running without arguments lists all existing branches.
- **`git checkout [branch-name]`**: Switches to the specified branch.
- **`git merge [branch]`**: Merges changes from another branch into the current branch.
- **`git pull [remote] [branch]`**: Fetches changes from a remote repository and merges them into the current branch.
- **`git push [remote] [branch]`**: Pushes the changes from the local branch to the remote repository.

## Environment Setting

### 1. Download and Set Up Visual Studio Code

Our project uses Visual Studio Code, a text editor developed by Microsoft.

#### 1. First, visit the link below and download the version suitable for your OS:

[https://code.visualstudio.com/download](https://code.visualstudio.com/download)

![Untitled](/Untitled-2.png)

#### 2. Open Visual Studio Code. Navigate to the Extensions tab in the top-left corner.

![vs-code-extensions.png](/vs-code-extensions.png)

#### 3. Download and enable the following three extensions:

![Untitled](/Untitled-3.png)

![Untitled](/Untitled-4.png)

![Untitled](/Untitled-5.png)

![Untitled](/Untitled-6.png)

#### 4. Then visit [https://nodejs.org/en](https://nodejs.org/en) and download the Node.js LTS version to install on your computer.

![node-js-webiste.png](/node-js-website.png)

### 2. Set Up GitHub

**Visit the following link to access the Spring-2024 repository for the LIKELION UCSD Beginner Project:**

[https://github.com/UCSD-Likelion/Beginner-Project-Fall-2024](https://github.com/UCSD-Likelion/Beginner-Project-Fall-2024)

![Untitled](/Untitled-7.png)

**Clone the GitHub repository to your local computer.**

[https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

- Using the terminal to clone
- Using GitHub Desktop to clone

**Once cloned, open the files in Visual Studio Code and open the terminal.**

#### 1. **Pull the latest `main` branch from the local repository**

```bash
git checkout main # Switch to the main branch
git pull origin main
```

![Untitled](/Untitled-8.png)

#### 2. **Create a new branch**

**During development, separate branches are used to avoid conflicts and maintain stability.**

Create a personal branch with your name.

```bash
git checkout -b new-branch-name
```

![Screenshot 2024-04-11 at 3.15.58 PM.png](/ad8d17ca-9bf5-465d-9619-8b700c2a8598.png)

#### 3. **Run `Start.html`**

In Visual Studio Code, navigate to the **_0.Introduction_** directory and open the **`Start.html`** file. Click the "Go Live" button in the bottom-right corner.

![visual-studio-code.png](/visual-studio-code.png)

The website will launch as shown below.

![launch-website.png](/launch-website.png)

#### 4. **Modify Website Content**

Change the name on the website. Return to the `Start.html` file and update:

```html
<div class="content">
  <div class="gif">
    <img src="https://i.imgflip.com/7bib5h.gif" alt="" />
  </div>
  <div class="private">
    <h2>Name: Chanbin Na</h2>
    <h2>Year: Junior</h2>
    <h2>Major: Math-Computer Science</h2>
  </div>
</div>
```

After editing, save the file (`ctrl` + `s`) and refresh the browser to see the updated content.

#### 5. **Commit Changes**

Commit your changes to the new branch.

```bash
git add .
git commit -m "Commit message"
```

#### 6. **Push the New Branch to GitHub**

Push your changes to the remote repository.

```bash
git push -u origin new-branch-name
```

---

**References**

[https://yanacoding.tistory.com/entry/Git-깃git과-깃허브github란-무엇인가](https://yanacoding.tistory.com/entry/Git-%EA%B9%83git%EA%B3%BC-%EA%B9%83%ED%97%88%EB%B8%8Cgithub%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80)

[https://velog.io/@hedakim/TIL-1-Git이란-무엇인가-Github란-무엇인가](https://velog.io/@hedakim/TIL-1-Git%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-Github%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80)
