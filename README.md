<p align='middle'>
<a href='https://github.com/DevFoliOh/velog'><img src='https://user-images.githubusercontent.com/66353903/142974589-1a9d29a4-3c67-4208-b861-00491a02f810.png' width="200px;" alt="Velog" /></a></p>


<h1 align='middle'><a href='https://determined-volhard-ea03ee.netlify.app'>https://determined-volhard-ea03ee.netlify.app</a></h1>


## 📌 프로젝트 소개

### Velog(벨로그) 서비스

> ❕ **Velog를 벤치 마킹한 블로그 서비스입니다. **❗

- `Swagger UI`제공하는 서버를 이용하여 프로젝트를 진행했습니다.
- `Swagger UI의 API Documentation`의 API를 사용하여 개발을 진행하였습니다.

<br/>

![image](https://user-images.githubusercontent.com/66353903/142976104-d163bec4-f0a3-468b-adfa-0f21572a8d1f.png)


<br/>

## 📑 구현 목록

`게시글 목록 조회`

- Server에 저장되는 포스트를 가져와서 렌더링
- 첫 렌더는 포스트10개로 제한되며, 무한 스크롤적용으로 스크롤시 10개씩 추가 렌더링
- Scroll to Top버튼으로 페이지 맨 상단으로 이동
- 게시글 로딩시 스켈레톤 UI적용
- 게시글 반응형 적용

<br/>

`게시글 등록`

- CKEditor5로 마크다운 에디터 적용
- 제목, 태그, 본문, 썸네일 등록 가능
- 작성내용들을 미리 확인할 수 있는 미리보기 기능
- 작성중인 내용저장을 위한 임시저장 기능(localStorage에 데이터저장)
- 임시저장한 데이터 불러오기 기능
- '뒤로가기'버튼 클릭시 안내를 위한 모달창 생성
- '출간하기'버튼 클릭시 서버에 업로드되며, 메인페이지로 이동
- 썸네일 등록 및 미리보기 기능

<br/>

`게시글 상세 조회`

- 서버에 저장된 포스트의 id값에 따라 선택된 포스트의 데이터 호출
- 상세페이지 로딩시 스켈레톤UI 적용
- 게시글 공유를 위한 카카오톡 공유 기능 적용
- textarea로 댓글 작성 기능 구현
- 총 댓글의 갯수 표시
- 각각의 댓글 수정 및 삭제 기능 구현
- '수정'버튼 클릭시 작성되어있던 내용이 textarea에 반영되서 수정
- 댓글 및 포스트 삭제시 서버에서 데이터 삭제
- '댓글 및 포스트 삭제' 버튼 클릭시 삭제 재확인을 위한 모달창 생성

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
