import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const WriteContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const WriteHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 50px 0;
`;

const WriteTitle = styled.input`
  width: 100%;
  height: 66px;
  font-size: 30px;
  font-weight: 700;
  color: rgb(133, 133, 133);
  border: none;
  padding-left: 0;
`;

const WriteLine = styled.div`
  width: 64px;
  height: 6px;
  background: rgb(133, 133, 133);
  margin: 24px 0 16px;
`;

const WriteTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const WriteTagContent = styled.div`
  display: flex;
  margin-bottom: 10px;

  /* div {
    height: 32px;
    line-height: 36px;
    border-radius: 16px;
    background: rgb(241, 243, 245);
    padding: 5px 10px;
    margin-right: 10px;
    cursor: pointer;
  } */
`;

const WriteTag = styled.input`
  width: 100%;
  height: 30px;
  font-size: 20px;
  border: none;
  padding-left: 0;
  margin-bottom: 12px;
`;

const EditorContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 50px 14px;

  .ck.ck-editor {
    max-width: 700px;
  }
  .ck-editor__editable {
    min-height: 400px;
  }
`;

const WriteFooter = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;

  div {
    display: flex;
  }
`;

const PreviewContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 100px 50px;
  background: #fafafa;

  h2 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
  }
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
