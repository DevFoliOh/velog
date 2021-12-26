<p align='middle'>
<a href='https://github.com/DevFoliOh/velog'><img src='https://user-images.githubusercontent.com/66353903/142974589-1a9d29a4-3c67-4208-b861-00491a02f810.png' width="200px;" alt="Velog" /></a></p>


<h1 align='middle'><a href='https://determined-volhard-ea03ee.netlify.app'>https://determined-volhard-ea03ee.netlify.app</a></h1>


## 📌 velog 클론코딩

해당 사이트를 클론하였습니다 👉 https://velog.io/

<br/>

![image](https://user-images.githubusercontent.com/66353903/142976104-d163bec4-f0a3-468b-adfa-0f21572a8d1f.png)


<br/>

## :timer_clock: 개발기간
+ 2021년 11월 16일 ~ 2021년 11월 23일

## 🛠 기술 스택
  
 <img src="https://img.shields.io/badge/React-v17.0.2-blue?logo=React"/>
    <img src="https://img.shields.io/badge/redux-toolkit-^1.6.2-purple?logo=Redux"/>
    <img src="https://img.shields.io/badge/StyledComponents-v5.2.3-pink?logo=styled-components"/> 
<br/>

## API Spec
  <img src="https://img.shields.io/badge/Swagger-v1.7.0-lime?logo=Swagger"/>
  
  <br/>

##🔮 역할 배분
- 김은태: WritePage 담당, CKEditor 도입
- 송창엽: DetailPage 담당, 공통 컴포넌트 제작
- 윤예나: ListPage 및 EditPage 담당, 코드 개선

<br/>

##✨ 구현 목록

### ListPage: `게시글 목록 조회`

✔ 전체 게시글을 가져와서 렌더링
✔ 무한스크롤: 첫 렌더링 시 게시글 10개로 제한, 스크롤 시 10장씩 추가 렌더링
✔ Top 버튼: 일정 높이를 스크롤하면 렌더링, 클릭 시 페이지 최상단으로 이동


### WritePage: `게시글 등록`

✔ 마크다운 WYSIWYG 에디터인 CKEditor5 적용
✔ 기존 velog와 달리 썸네일이미지를 따로 등록 및 확인할 수 있는 공간 추가
✔ 미리보기: 우측 Preview 공간에서 작성 중인 내용을 확인
✔ 임시저장: 작성 중인 내용을 localStorage에 저장
✔ 불러오기: localStorage에 저장된 내용을 불러옴
✔ 출간하기: 작성한 내용을 서버에 업로드


### DetailPage: `게시글 상세 조회`

✔ 리덕스에 저장된 id에 해당하는 게시글을 불러옴
✔ 카카오톡 공유 기능 (실제 카카오톡으로 링크가 전달되고 채팅창 썸네일 미리보기까지 구현)
✔ 댓글 기능: 댓글 작성, 수정, 조회, 삭제 기능 구현
✔ 댓글 수정 시 댓글창이 그대로 input창으로 변경되고 수정 후 바로 뷰에 반영
✔ 댓글 상단에 댓글 추가 및 삭제에 따른 댓글 총 개수 표시


### EditPage: `게시글 수정`

✔ 서버에 저장된 게시글을 작성 중이던 상태처럼 불러옴 (WritePage와 동일한 뷰)
✔ 미리보기, 임시저장, 불러오기: WritePage와 동일
✔ 수정하기: 수정한 내용을 서버에 업로드


##🎨 공통

### Skeleton UI
✔ DetailPage와 ListPage: 게시글을 불러오는 동안 사용자의 시각적 경험 개선

### Modal창 활용
✔ WritePage, EditPage: 나가기 버튼 클릭 시 페이지 이탈 여부 재확인
✔ DetailPage: 게시글 삭제 및 댓글 삭제 버튼 클릭 시 삭제 여부 재확인

<br/>

##🚀 코드 개선사항

✔ 미리보기
+ WritePage와 EditPage의 작성 내용을 작성 중 실시간 미리보기로 변경

✔ ListPage: 게시글 정렬
+ 기존: 등록된 순서로 렌더링
+ 변경: 최신 순으로 렌더링

✔ 

##💻 실행 방법

### 설치

`npm install`

### 실행

`npm start` 또는 `yarn start`

