import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const WriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  padding: 30px 0 30px 50px;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
`;

const WriteHeader = styled.div``;

const WriteTitle = styled.input.attrs({
  placeholder: '제목을 입력하세요',
  type: 'text',
  name: 'title',
})`
  width: 100%;
  height: 66px;
  font-size: 30px;
  font-weight: 700;
  color: rgb(33, 37, 41);
  border: none;
  padding-left: 0;
`;

const WriteLine = styled.div`
  width: 64px;
  height: 6px;
  background: rgb(33, 37, 41);
  margin: 24px 0 16px;
`;

const WriteTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const WriteTagContent = styled.div`
  display: flex;
  margin-bottom: 10px;

  div {
    height: 32px;
    line-height: 36px;
    border-radius: 16px;
    background: rgb(241, 243, 245);
    padding: 5px 10px;
    margin-right: 10px;
    cursor: pointer;
  }
`;

const WriteTag = styled.input.attrs({
  placeholder: '태그를 입력하세요',
  type: 'text',
  name: 'tag',
})`
  width: 100%;
  height: 30px;
  font-size: 20px;
  border: none;
  padding-left: 0;
  margin-bottom: 12px;
`;

const EditorContainer = styled.div`
  display: flex;
  margin-bottom: 50px;

  .ck.ck-editor {
    max-width: 100%;
  }
  .ck-editor__editable {
    min-height: 400px;
  }
`;

const WriteFooter = styled.div`
  display: flex;
  justify-content: center;
  /* padding-right: 70px; */
  /* box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px; */
`;

const PreviewContainer = styled.div`
  display: flex;
`;

export const style = {
  Container,
  WriteContainer,
  WriteHeader,
  WriteTitle,
  WriteLine,
  WriteTagContainer,
  WriteTagContent,
  WriteTag,
  EditorContainer,
  WriteFooter,
  PreviewContainer,
};
