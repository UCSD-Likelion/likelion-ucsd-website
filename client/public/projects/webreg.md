# Webreg App

Mobile application that enables UCSD students to share their schedules

팀원: 박희수, 나찬빈, 박세아, 최진서, 고동현, 안상규

---

## Demo

앱 스토어에 등록 예정

---

## Screenshots

<div style="text-align: center; display: flex; justify-content: space-between; margin-bottom: 20px;">
    <img src="images/webreg-project/schedule-app-1.png" alt="Home Page" width="40%" />
    <img src="images/webreg-project/webreg-schedule-create.png" alt="Event Creation Page" width="40%" />
</div>

<div style="text-align: center; display: flex; justify-content: space-between; margin-bottom: 20px;">
    <img src="images/webreg-project/webreg-friends.png" alt="Friends Page" width="40%" />
    <img src="images/webreg-project/webreg-search.png" alt="Friend Search Page" width="40%" />
</div>

<div style="text-align: center; display: flex; justify-content: space-between;">
    <img src="images/webreg-project/webreg-profile.png" alt="Profile Page" width="40%" />
    <img src="images/webreg-project/webreg-profile-edit.png" alt="Edit Profile Page" width="40%" />
</div>

---

## Idea Proposal
- UCSD 학생들이 수강신청 시간표를 공유하고, 다른 학생들과 비교할 수 있는 서비스
- Webreg에서 스케줄을 공유할 때 발생하는 불편함을 해소하고, 학생들이 서로의 시간표를 비교하며 수강신청 계획을 세울 수 있도록 도와주는 서비스

---

## Tech Stack
- Frontend: React Native
- Backend: Firebase
- DB: Firebase

---

## Specifications

### Schedule Creation
- 수강 과목을 추가하고, 시간표를 생성할 수 있습니다.
- 시간표를 생성하면, 다른 학생들이 볼 수 있도록 공개할 수 있습니다.

### Friends
- 다른 학생들을 친구로 추가하여, 친구들의 시간표를 볼 수 있습니다.
- 친구 삭제 및 친구 요청을 보낼 수 있습니다

### Profile
- 프로필을 설정하고, 프로필 사진을 업로드할 수 있습니다.
- 자신의 프로필에 해쉬태그를 추가하여, 다른 학생들이 쉽게 찾을 수 있도록 할 수 있습니다.
- 해쉬태그 삭제가 가능합니다.