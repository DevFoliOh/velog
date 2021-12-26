import React, { useRef } from 'react';
import styled from 'styled-components';
import MenuApi from 'lib/api';
import { Grid, Button } from 'Common';

export default function CommentWrite({
  onTextSubmit,
  currentComment,
  CommentId,
  isOpenPatchText,
  onClosePatchTextArea,
  onChangeCurrentComment,
}) {
  const textRef = useRef();
  const formRef = useRef();

  const onPropsTextSubmit = async (e) => {
    e.preventDefault();
    let text = textRef.current.value;

    if (isOpenPatchText) {
      const response = await MenuApi.patchComment(CommentId, text);
      onChangeCurrentComment(response.data);
      onClosePatchTextArea();
    } else {
      await onTextSubmit(text);
      textRef.current.value = '';
    }
  };

  return (
    <form onSubmit={onPropsTextSubmit} ref={formRef}>
      <CommentTextArea
        placeholder="댓글을 작성하세요"
        defaultValue={currentComment}
        ref={textRef}
      />
      {isOpenPatchText ? (
        <Grid is_flex justify="flex-end">
          <Button
            flex="inline-flex"
            bold
            bg="rgb(134, 142, 150)"
            height="2rem"
            size="1rem"
            width="100px"
            _onClick={onClosePatchTextArea}
          >
            취소
          </Button>
          <Button
            flex="inline-flex"
            bold
            bg="rgb(18, 184, 134)"
            height="2rem"
            size="1rem"
            margin="0 0 0 0.5rem"
            hoverBg="#20c997"
          >
            댓글 수정
          </Button>
        </Grid>
      ) : (
        <Grid is_flex justify="flex-end">
          <Button
            bold
            bg="rgb(18, 184, 134)"
            height="2rem"
            size="1rem"
            hoverBg="#20c997"
          >
            댓글 작성
          </Button>
        </Grid>
      )}
    </form>
  );
}

const CommentTextArea = styled.textarea`
  height: 70px;
  resize: none;
  padding: 1rem 1rem 1.5rem;
  outline: none;
  border: 1px solid rgb(233, 236, 239);
  margin-bottom: 1.5rem;
  width: 100%;
  border-radius: 4px;
  min-height: 3.5rem;
  font-size: 1rem;
  color: rgb(33, 37, 41);
  line-height: 1.75;
`;
