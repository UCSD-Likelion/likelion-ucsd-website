# UCSD Classual

Course Visualizer specialized for UCSD

Team Members: Hyunwoo Choi, Dawon Park, Hanjun Choi, Sunhyo Kim, Youngjik Cha

---

## Demo

<br>
<div style="text-align: center;">
    <a href="https://classual.vercel.app/">
        <img src="../images/home.png" alt="Home Page" width="80%" />
        </a>
    <p style="text-align: center;">
        <br>
        <a href="https://classual.vercel.app/" style="background-color: #3a62ac; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px;"> Visit Classual
        </a>
    </p>
</div>

---

## Idea Proposal

- Visualize course registration trends by subject, year, and section through graphs to support more efficient registration planning.
- Focused on data mining and data visualization.
- Development of a Minimum Viable Product (MVP) implementable within a limited 10-week timeframe.

---

## Tech Stack

- Frontend: React.js
- DB: AWS S3
- Deploy platform: Vercel

---

## Specifications

### Search Function

![Search](/search.png)

- Categorized courses alphabetically.
- Implemented a search function.

---

### Course Details

![Course Detailed](/cse100.png)

- Displayed course code, name, units, and description.
- Select Quarter: Users can select the desired quarter.
- Checkbox: Users can choose specific parameters to view on the graph.
- Graph: Analyze and plan course registration by visualizing enrolled, waitlisted, and total seats alongside various other parameters.

---

### Prerequisite Courses

![Prerequisite Tree](/prereq.png)

- Represented prerequisite courses required for a specific course as a prerequisite tree.

---

## Future Plans

- Regular data updates.
- Integration of professor information and ratings inspired by 'Rate My Professor.'
- Analyze courses at a more granular level by sections.
