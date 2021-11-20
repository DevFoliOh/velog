import React, { useRef } from 'react';
import { style } from './CommentWriteStyle';

const CommentWrite = ({
  onTextSubmit,
  currentText,
  isOpenPatchText,
  onClosePatchTextArea,
}) => {
  const textRef = useRef();
  const formRef = useRef();

  const onPropsTextSubmit = (e) => {
    e.preventDefault();
    if (isOpenPatchText) {
    } else {
      onTextSubmit(textRef);
    }
  };

  return (
    <form onSubmit={onPropsTextSubmit} ref={formRef}>
      <CommentTextArea
        placeholder="댓글을 작성하세요"
        value={currentText}
        ref={textRef}
      ></CommentTextArea>
      {isOpenPatchText ? (
        <ButtonWraper>
          <CloseButton onClick={onClosePatchTextArea}>취소</CloseButton>
          <Button>댓글 수정</Button>
        </ButtonWraper>
      ) : (
        <ButtonWraper>
          <Button>댓글 작성</Button>
        </ButtonWraper>
      )}
    </form>
  );
};

export default CommentWrite;

const { CommentTextArea, ButtonWraper, Button, CloseButton } = style;
