# UCSD Classual

Course Visualizer specialized for UCSD

팀원: 최현우, 박다원, 최한준, 김선효, 차영직

---

## Demo

<br>
<div style="text-align: center;">
    <a href="https://classual.vercel.app/">
        <img src="images/home.png" alt="Home Page" width="80%" />
        </a>
    <p style="text-align: center;">
        <br>
        <a href="https://classual.vercel.app/" style="background-color: #3a62ac; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px;"> Visit Classual
        </a>
    </p>
</div>

---

## Idea Proposal

- 과목별, 학년별, 구간별 수강신청 추이를 그래프로 시각화하여 보다 효율적인 수강신청 지원
- Data mining, data visualization 중점화
- 10주라는 제한된 기간 내에 구현 가능한 최소 기능 제품 (MVP) 개발

---

## Tech Stack

- Frontend: React.js
- DB: AWS S3
- Deploy Platform: Vercel

---

## Specifications

### Search Function

![Search](/search.png)

- Alphabetical order 로 course 카테고리화
- Search function 구현

---

### Course Detailed

![Course Detailed](/cse100.png)

- Course code, name, units, description 기재
- Select Quarter: 유저가 필요한 쿼터 선택 가능
- Checkbox: 유저가 그래프에서 보고싶은 내용 선택 가능
- Graph: enrolled, waitisted, totalSeats 를 기본으로 여러가지 parameter 과 함께 수강신청 시간 분석 및 계획 수립 가능

---

### Prerequisite Courses

![Prerequisite Tree](/prereq.png)

- 해당 course를 듣기 위해서 필수로 이수해야하는 course를 prerequisite tree로 표현

---

## Future Plans

- 주기적인 data update
- 'Rate My Professor' 에서 착안하여 교수 정보 및 평점 기능 도입
- 수업을 섹션별로 세분화하여 분석
