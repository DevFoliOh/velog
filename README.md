<p align='middle'>
<a href='https://github.com/DevFoliOh/velog'><img src='https://user-images.githubusercontent.com/66353903/142974589-1a9d29a4-3c67-4208-b861-00491a02f810.png' width="200px;" alt="Velog" /></a></p>


<h1 align='middle'><a href='https://determined-volhard-ea03ee.netlify.app'>https://determined-volhard-ea03ee.netlify.app</a></h1>


## 📌 프로젝트 소개

### Velog(벨로그) 서비스

> ❕ **Velog를 벤치 마킹한 블로그 서비스입니다. **❗

- `Swagger UI`를 제공하는 서버의 API를 이용하여 프로젝트를 진행하였습니다.

<br/>

![image](https://user-images.githubusercontent.com/66353903/142976104-d163bec4-f0a3-468b-adfa-0f21572a8d1f.png)


<br/>

## 📑 구현 목록

### 공통
#### Modal창 적용 
- WritePage: 나가기 버튼 클릭 시 재확인
- DetailPage: 게시글 삭제 및 댓글 삭제 버튼 클릭 시 재확인

#### Skeleton UI 적용
- ListPage와 DetailPage: 게시글을 불러오는 동안 사용자의 시각적 경험 개선

### ListPage: `게시글 목록 조회`

- 전체 게시글을 가져와서 렌더링
- 무한스크롤: 첫 렌더링 시 게시글 10개로 제한, 스크롤 시 10장씩 추가 렌더링
- Top 버튼: 일정 높이를 스크롤하면 렌더링, 클릭 시 페이지 최상단으로 이동

<br/>

### WritePage: `게시글 등록`

- 마크다운 WYSIWYG 에디터인 CKEditor5 적용
- 기존 velog와 달리 썸네일이미지를 따로 등록 및 확인할 수 있는 공간 추가
- 미리보기: 우측에서 작성중인 내용 확인 가능
- 임시저장: 작성중인 내용이 localStorage에 저장됨
- 불러오기: localStorage에 저장된 내용을 불러옴
- 출간하기: 작성한 내용을 서버에 업로드 + ListPage로 이동

<br/>

### DetailPage: `게시글 상세 조회`

- 리덕스에 저장된 id의 게시글을 불러옴
- 카카오톡 공유 기능
- 댓글 기능: 댓글 작성, 수정, 조회, 삭제 
- 댓글 수정 시 댓글창이 그대로 input창으로 변경되고 수정 후 바로 뷰에 반영
- 댓글을 추가 및 삭제에 따른 댓글의 총 개수 표시

<br/>

`게시글 수정`

- 해당 포스트의 게시글 수정페이지 진입시 해당포스트의 데이터를 각 부분에 맞게 가져옴(제목, 태그, 썸네일, 본문내용)
- 서버에서 가져온 내용들을 수정 및 삭제 가능
- 수정한 내용을 임시저장하기 위한 임시저장 기능
- 임시저장한 내용을 가져오기 위한 불러오기 기능
- 수정하던 내용을 미리보기위한 미리보기 기능
- 수정완료 후 '수정하기' 버튼 클릭시 PATCH의 형태로 서버에 업로드 및 상세페이지로 이동
- '뒤로가기'버튼 클릭시 안내를 위한 모달창 생성

<br/>

`게시글 삭제`

- 게시글 및 댓글 삭제를 위한 Modal컴포넌트 생성
- 해당 모달은 재사용을 고려하여 구현
- 게시글 작성중 뒤로가기, 게시글 삭제, 댓글 삭제에 사용

<br/>

## 💻 실행 방법

### 설치

`npm install`

### 실행

`npm start`


<br/>

## ⚙ 기술 스택

- React.js
- Redux
- Swagger UI API Document
- Styled-Components
