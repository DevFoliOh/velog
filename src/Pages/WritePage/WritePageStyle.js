import styled from 'styled-components';

const WriteContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 600px;
`;

const WriteHeader = styled.div`
  padding: 32px 48px 0;
`;

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
  padding: 0 48px;

  .ck.ck-editor {
    max-width: 600px;
  }
  .ck-editor__editable {
    min-height: 400px;
  }
`;

const WriteFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0 0 48px;
`;

export const style = {
  WriteContainer,
  WriteHeader,
  WriteTitle,
  WriteLine,
  WriteTagContainer,
  WriteTag,
  EditorContainer,
  WriteFooter,
};
