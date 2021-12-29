<p align='middle'>
<a href='https://github.com/DevFoliOh/velog'><img src='https://user-images.githubusercontent.com/66353903/142974589-1a9d29a4-3c67-4208-b861-00491a02f810.png' width="200px;" alt="Velog" /></a></p>


<h1 align='middle'><a href='https://determined-volhard-ea03ee.netlify.app'>https://determined-volhard-ea03ee.netlify.app</a></h1>


## 📌 velog 클론코딩

### :timer_clock: 개발기간
+ 2021년 11월 16일 ~ 2021년 11월 23일 <br/><br/>
👉 클론한 사이트: https://velog.io/

<br/>

![image](https://user-images.githubusercontent.com/66353903/142976104-d163bec4-f0a3-468b-adfa-0f21572a8d1f.png)

### 🛠 기술 스택

 <p align='left'>
 <img src="https://img.shields.io/badge/React-v17.0.2-blue?logo=React"/>
 <img src="https://img.shields.io/badge/ReduxToolkit-^1.6.2-purple?logo=Redux"/>
 <img src="https://img.shields.io/badge/StyledComponents-v5.3.3-pink?logo=styled-components"/> 
 <img src="https://img.shields.io/badge/Swagger-v1.7.0-lime?logo=Swagger"/>
 </p>


### 🔮 역할 배분
⚜ 김은태: WritePage 담당, CKEditor 도입<br/>
⚜ 송창엽: DetailPage 담당, 공통 컴포넌트 제작<br/>
⚜ 윤예나: ListPage 및 EditPage 담당, 코드 개선<br/>


### ✨ 구현 목록

#### ▶ ListPage: `게시글 목록 조회`

✔ 전체 게시글을 가져와서 렌더링<br/>
✔ 무한스크롤: 첫 렌더링 시 게시글 10개로 제한, 스크롤 시 10장씩 추가 렌더링<br/>
✔ Top 버튼: 일정 높이를 스크롤하면 렌더링, 클릭 시 페이지 최상단으로 이동<br/>


#### ▶ WritePage: `게시글 등록`

✔ 마크다운 WYSIWYG 에디터인 CKEditor5 적용<br/>
✔ 기존 velog와 달리 썸네일이미지를 따로 등록 및 확인할 수 있는 공간 추가<br/>
✔ 미리보기: 우측 Preview 공간에서 작성 중인 내용을 확인<br/>
✔ 임시저장: 작성 중인 내용을 localStorage에 저장<br/>
✔ 불러오기: localStorage에 저장된 내용을 불러옴<br/>
✔ 출간하기: 작성한 내용을 서버에 업로드<br/>


#### ▶ DetailPage: `게시글 상세 조회`

✔ 리덕스에 저장된 id에 해당하는 게시글을 불러옴<br/>
✔ 카카오톡 공유 기능 (실제 카카오톡으로 링크가 전달되고 채팅창 썸네일 미리보기까지 구현)<br/>
✔ 댓글 기능: 댓글 작성, 수정, 조회, 삭제 기능 구현<br/>
✔ 댓글 수정 시 댓글창이 그대로 input창으로 변경되고 수정 후 바로 뷰에 반영<br/>
✔ 댓글 상단에 댓글 추가 및 삭제에 따른 댓글 총 개수 표시<br/>


#### ▶ EditPage: `게시글 수정`

✔ 서버에 저장된 게시글을 작성 중이던 상태처럼 불러옴 (WritePage와 동일한 뷰)<br/>
✔ 미리보기, 임시저장, 불러오기: WritePage와 동일<br/>
✔ 수정하기: 수정한 내용을 서버에 업로드<br/>


### 🎨 공통

#### 👉 로딩 중 Skeleton UI 적용

#### 👉 특정 action의 시행 여부를 확인하기 위한 Modal창 적용
+ 나가기 버튼 클릭 시 페이지 이탈 여부 재확인 (WritePage, EditPage) <br/>
+ 게시글 삭제 및 댓글 삭제 버튼 클릭 시 삭제 여부 재확인 (DetailPage)


### 🚀 코드 개선사항 (21.12.24 ~ 진행중)

❤ ListPage의 게시글이 최신순으로 렌더링되도록 변경 <br/>

❤ 게시글 작성 중 실시간 미리보기로 확인 가능하도록 변경 <br/>

❤ 임시저장 후 페이지 새로고침 시 로컬스토리지의 내용을 자동으로 불러오도록 변경 <br/>

❤ 썸네일 업로드 동안 로딩 스피너 추가 <br/>

❤ 스타일 컴포넌트 모듈화: 코드 가독성을 위해 뷰 컴포넌트 모듈화 (진행중)  <br/>
