# Introduction

안녕하세요! **UCSD 멋쟁이사자처럼 Beginner Project**에 오신 것을 환영합니다! 👋🏻

저희 Beginner Project에서는 HTML, CSS, JavaScript, React등 기본적인 웹개발 테크닉을 프론트엔드 위주로 다룰 예정입니다!

## Class Schedule

- Week 2: Orientation, 웹개발 기초
- Week 3: HTML + CSS, JavaScript
- Week 4: React
- Week 5: Node.js
- Week 6: GraphQL, MongoDB
- Week 7: 프론트엔드 프로젝트
- Week 8-9: 파이널 프로젝트
- Week 10: 발표

## Class 진행방식

- 일주일 3시간 미팅 (1시간 반 X 2)
- 40분 강의 + 40분 실습
- 매주 1회정도의 실습과제
- 결석은 24시간 전에 멘토에게 연락
- 무단결석/과제 미수행 3회 이하권장

## Command line(Terminal) Basic Command

### **파일 관리**

- **`ls`**: 현재 디렉토리에 있는 모든 파일과 디렉토리를 나열합니다.
- **`cd 디렉토리명`**: 현재 디렉토리를 **디렉토리명**으로 변경합니다.
- **`mkdir 디렉토리명`**: **디렉토리명**이라는 새 디렉토리를 생성합니다.
- **`rmdir 디렉토리명`**: 디렉토리를 제거합니다 (비어 있어야 합니다).
- **`touch 파일명`**: **파일명**이라는 새로운 빈 파일을 생성합니다.
- **`cp 원본 목적지`**: 파일이나 디렉토리를 **원본**에서 **목적지**로 복사합니다.
- **`mv 원본 목적지`**: 파일이나 디렉토리를 **원본**에서 **목적지**로 이동합니다.
- **`rm 파일명`**: **파일명**을 제거(삭제)합니다. **rm -r 디렉토리명**을 사용하면 디렉토리와 그 내용을 모두 제거합니다.

### **파일 보기 & 편집**

- **`cat 파일명`**: **파일명**의 내용을 표시합니다.
- **`less 파일명`**: 한 페이지씩 **파일명**의 내용을 볼 수 있습니다.
- **`nano 파일명`**: **파일명**을 나노 에디터로 엽니다.
- **`vim 파일명`**: **파일명**을 Vim 에디터로 엽니다.

### **시스템 정보**

- **`pwd`**: 현재 작업 디렉토리를 표시합니다.
- **`whoami`**: 현재 사용자의 사용자명을 표시합니다.
- **`hostname`**: 시스템의 네트워크 이름을 표시합니다.
- **`uname -a`**: 모든 가능한 시스템 정보를 표시합니다.

### **프로세스 관리**

- **`top`**: 시스템에서 실행 중인 프로세스의 지속적인 뷰를 표시합니다.
- **`ps`**: 현재 프로세스의 스냅샷을 표시합니다.
- **`kill pid`**: 주어진 프로세스 ID(**`pid`**)를 가진 프로세스를 종료합니다.

### **네트워킹**

- **`ping 호스트`**: **호스트**에 대한 연결성을 확인합니다.
- **`ifconfig`** (유닉스/리눅스에서) 또는 **`ipconfig`** (윈도우에서): 네트워크 구성을 표시합니다.
- **`netstat`**: 네트워크 통계를 표시합니다.

### **파일 권한**

- **`chmod 권한 파일명`**: **파일명**의 권한을 변경합니다.
- **`chown 소유자 파일명`**: **파일명**의 소유자를 변경합니다.

### **검색 및 정렬**

- **`find 위치 기준`**: 기준에 따라 파일이나 디렉토리를 검색합니다.
- **`grep 패턴 파일`**: **파일**에서 **패턴**을 검색합니다.
- **`sort 파일명`**: **파일명**의 내용을 정렬합니다.

## Git 배워보기

### Git이란 무엇인가?

Git은 2005년에 리누스 토발즈에 의해 개발된 ‘**소프트웨어** **분산 버전관리 시스템**’중 하나이다. 이는 주로 여러명의 개발자가 하나의 소프트웨어 개발 프로젝트에 참여할 때, 소스 코드를 관리하는데 주로 사용된다.

그러면 버전관리는 왜 필요할까?

버전관리는 오른쪽의 그림과 같다. 처음에 발표.ppt 파일을 만들고 수정의 수정을 거듭하여 발표\_최종최종.ppt를 만드는 비슷한 경험을 해본 적이 있을 것이다. 버전관리는 이렇게 여러 버전을 만들어 저장하는 것이다. 그러나 오른쪽의 예시는 각 버전의 파일을 복사, 저장, 백업하는 버전관리의 하나의 방법이긴 하지만 어느 것이 가장 최근의 버전인지 구분하기 힘들다는 단점이 있다.

그래서 이러한 버전관리를 더욱 효율적으로 돕는 시스템이 바로 git이다.

![Untitled](/Untitled.png)

### Git의 장점

- 인터넷 연결이 안된 곳에서도 오프라인 작업이 가능
- 속도가 빠르며, 각각의 개발자들이 각자의 branch에서 작업을 한 뒤, 나중에 merge하는 방식으로 작업할 수 있다.

### Git vs GitHub

![Untitled](/Untitled-1.png)

Git과 GitHub를 혼용해서 사용하기 쉬운데 둘은 서로 다른 서비스이다. Git은 설명했듯이 분산버전 관리 시스템이며, GitHub는 Git을 사용하는 프로젝트를 지원하는 웹호스팅 서비스이다.

### Git 기본용어

- **`Repository`** : 저장소, 저장소는 히스토리, 태그, 소스의 가지치기 혹은 branch에 따라 버전을 저장, 저장소를 통해 작업자가 변경한 모든 히스토리 확인 가능
- **`Working Tree`**: 저장소를 어느 한 시점을 바라보는 작업자의 현재 시점
- **`Staging Area`**: 저장소에 커밋하기 전에 커밋을 준비하는 위치
- **`Commit`**: 현재 변경된 작업 상태를 점검을 마치면 확정하고 저장소에 저장하는 작업
- **`Head`**: 현재 작업중인 Branch
- **`Branch`** : 가지 또는 분기점, 작업을 할때에 현재 상태를 복사하여 Branch에서 작업
- **`Merge`** : 다른 Branch의 내용을 현재 Branch로 가져와 합치는 작업

### Git 주요 명령어

- **`git init`**: 새로운 Git 저장소를 초기화합니다. 이 명령은 현재 디렉토리에 **`.git`** 폴더를 생성하여 Git 저장소로 설정합니다.
- **`git clone [url]`**: 원격 저장소를 복제하여 로컬에 가져옵니다. 이를 통해 원격 저장소의 모든 파일, 이력 등을 복사할 수 있습니다.
- **`git add [file]`**: 특정 파일 또는 폴더를 스테이징 영역에 추가합니다. 이는 커밋할 변경사항을 준비하는 과정입니다.
- **`git commit -m "[commit message]"`**: 스테이징 영역에 있는 변경사항들을 저장소의 이력에 추가합니다. 커밋 메시지를 통해 변경사항에 대한 설명을 추가할 수 있습니다.
- **`git status`**: 현재 작업 디렉토리의 상태를 확인합니다. 수정된 파일, 스테이징된 파일, 브랜치 상태 등을 볼 수 있습니다.
- **`git branch [branch-name]`**: 새로운 브랜치를 생성합니다. 브랜치명을 생략하고 실행하면, 현재 존재하는 모든 브랜치를 확인할 수 있습니다.
- **`git checkout [branch-name]`**: 특정 브랜치로 전환합니다. 브랜치가 존재하지 않는 경우, **`b`** 옵션과 함께 사용하면 새 브랜치를 생성하고 전환합니다.
- **`git merge [branch]`**: 다른 브랜치의 변경사항을 현재 브랜치에 병합합니다.
- **`git pull [remote] [branch]`**: 원격 저장소의 변경사항을 로컬 저장소에 가져와 현재 브랜치와 병합합니다.
- **`git push [remote] [branch]`**: 로컬 브랜치의 변경사항을 원격 저장소에 업로드합니다.

## Environment Setting

### 1. Visual Studio Code 다운로드 및 세팅

저희 프로젝트에서는 Microsoft에서 개발한 Visual Studio Code라는 텍스트 에디터를 사용해서 진행합니다.

#### 1. 먼저 아래 링크에 들어가서 각자의 OS에 맞는 버전을 다운로드합니다.

[https://code.visualstudio.com/download](https://code.visualstudio.com/download)

![Untitled](/Untitled-2.png)

#### 2. 그리고 Visual Studio Code를 열면 아래 화면이 나옵니다. 왼쪽 상단의 Extensions 탭으로 들어갑니다.

![vs-code-extensions.png](/vs-code-extensions.png)

#### 3. 아래에 있는 3개의 Extension을 다운로드 하고 enable 해줍니다.

![Untitled](/Untitled-3.png)

![Untitled](/Untitled-4.png)

![Untitled](/Untitled-5.png)

![Untitled](/Untitled-6.png)

#### 4. 그다음 [https://nodejs.org/en](https://nodejs.org/en) 이 링크로 들어가서 Node.js LTS 버전을 다운받아 컴퓨터에 Install 시켜줍니다.

![node-js-webiste.png](/node-js-website.png)

### 2. GitHub 세팅하기

**먼저 아래 링크에 접속하여 LIKELION UCSD Beginner Project의 Spring-2024 repository에 접속합니다.**

[https://github.com/UCSD-Likelion/Beginner-Project-Fall-2024](https://github.com/UCSD-Likelion/Beginner-Project-Fall-2024)

![Untitled](/Untitled-7.png)

**위의 페이지로 접속이 됬으면 GitHub repository를 로컬컴퓨터에 clone 해줍니다.**

[https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

- Terminal을 이용해 clone하기
- GitHub Desktop을 이용해 clone하기

**Clone이 완료되면 Visual Studio Code로 Clone된 파일을 열어서 Terminal을 열어줍니다.**

#### 1. **로컬저장소에 최신 `main` 브랜치 받기**

```bash
git checkout main #main branch로 이동
git pull origin main
```

![Untitled](/Untitled-8.png)

#### 2. **새 브랜치 생성하기**

**개발과정에서는 기능이나 수정사항을 독립적으로 작업하여 충돌을 방지하고, 안정성을 유지하기 위해서 branch를 나누어서 작업합니다.**

자기 이름을 넣어서 개인 branch를 생성합니다.

```bash
git checkout -b new-branch-name(이름)
```

![Screenshot 2024-04-11 at 3.15.58 PM.png](/ad8d17ca-9bf5-465d-9619-8b700c2a8598.png)

#### 3. **`Start.html` 실행하기**

그리고 Visual Studio Code에서 _0.Introduction_ 디렉토리 안에 있는 **`Start.html`** 파일을 열고 Visual Studio Code 하단에 있는 Go Live 버튼을 눌러줍니다.

![visual-studio-code.png](/visual-studio-code.png)

그러면 아래와 같이 웹사이트가 실행됩니다.

![launch-website.png](/launch-website.png)

#### 4. **웹사이트 내용 변경하기**

이제 웹사이트에 있는 이름을 변경해보겠습니다. 다시 `Start.html` 파일로 돌아와

```html
<div class="content">
  <div class="gif">
    <img src="https://i.imgflip.com/7bib5h.gif" alt="" />
  </div>
  <div class="private">
    <h2>이름: 나찬빈</h2>
    <h2>학년: 3학년 (Junior)</h2>
    <h2>전공: Math-Computer Science</h2>
  </div>
</div>
```

이 파트를 찾아서 이름과, 학년, 전공을 변경 해줍니다. 변경해준 뒤에는 저장(`ctrl` +`s`)를 한뒤 브라우저를 refresh 해주면 내용이 바뀌어 있는 것을 확인 할 수 있습니다.

#### 5. **변경사항을 커밋하기**

이제 변경된 사항을 새로운 브랜치로 커밋해보겠습니다.

아래 코드를 적어서 git에 add 한 뒤에 commit 할 수 있습니다.

```bash
git add .
git commit -m "커밋 메시지"
```

#### 6. **새 브랜치를 GitHub로 푸쉬합니다.**

이제 변경한 내용을 원격 저장소에 반영하기 위해 새 브랜치를 푸시합니다.

```bash
git push -u origin new-branch-name(이름)
```

---

**Reference**

[https://yanacoding.tistory.com/entry/Git-깃git과-깃허브github란-무엇인가](https://yanacoding.tistory.com/entry/Git-%EA%B9%83git%EA%B3%BC-%EA%B9%83%ED%97%88%EB%B8%8Cgithub%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80)

[https://velog.io/@hedakim/TIL-1-Git이란-무엇인가-Github란-무엇인가](https://velog.io/@hedakim/TIL-1-Git%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-Github%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80)
