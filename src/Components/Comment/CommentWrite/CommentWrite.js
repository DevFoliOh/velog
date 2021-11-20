import React, { useRef } from 'react';
import { style } from './CommentWriteStyle';
import MenuApi from 'Common/api';

const CommentWrite = ({
  onTextSubmit,
  currentComment,
  CommentId,
  isOpenPatchText,
  onClosePatchTextArea,
  onChangeCurrentComment,
}) => {
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
