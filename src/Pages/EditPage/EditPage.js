import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { style } from './EditPageStyle';
import usePatchEditData from 'Hooks/usePatchEditData';
import useGetDetailData from 'Hooks/useGetDetailData';

const EditPage = (props) => {
  const [id, setId] = useState();
  const [post, setPost] = useState();
  const [edited, setEdited] = useState(false); // 수정이 완료되었음을 알리는 플래그

  usePatchEditData(setPost, post);

  // useEffect(() => {
  //   // 수정페이지 첫 로딩 시
  //   // 수정할 데이터를 받고
  //   setData(fetchedData);
  // }, []);

  // useEffect(() => {
  //   // 수정이 완료된 데이터를 반환하는 함수
  //   setEdited(editedData);
  // }, [edited]);

  return (
    <Wrapper>
      <EditContainer>
        <EditBox></EditBox>
        <Button onClick={() => setEdited(true)}>수정 버튼</Button>
      </EditContainer>
      <PreviewBox></PreviewBox>
      {/* 사용자가 수정버튼을 누르면 수정된 데이터를 db에 넣는다 */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2rem;
  width: 100%;
  height: 100vh;
  display: flex;
`;

const EditContainer = styled.div`
  flex: 1;
  background: lightcyan;
`;

const EditBox = styled.div``;

const Button = styled.button`
  width: 80px;
  height: 20px;
`;

const PreviewBox = styled.div`
  flex: 1;
  background: lightgoldenrodyellow;
`;

export default EditPage;
