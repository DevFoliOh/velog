import React, { useCallback, useEffect, useState } from 'react';
import { style } from './CommentViewStyle';
import MenuApi from 'Common/api';
import CommentWrite from '../CommentWrite/CommentWrite';
import reactDom from 'react-dom';

const CommentView = ({ comment, id, setComment, mainRef, deleteComment }) => {
  const [isOpenPatchText, setIsOpenPatch] = useState(false);
  const [currentComment, setCurrentComment] = useState(comment);

  const onDeleteComment = async () => {
    const response = await MenuApi.deleteComment(currentComment.id);
    if (response) {
      console.log(currentComment.id);
      deleteComment(currentComment.id);
      mainRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'end',
      });
    }
  };

  useEffect(() => {
    setCurrentComment(comment);
  }, [comment]);

  const onOpenPatchTextArea = () => {
    setIsOpenPatch(true);
  };

  const onClosePatchTextArea = () => {
    setIsOpenPatch(false);
  };

  const onChangeCurrentComment = useCallback((text) => {
    setCurrentComment(text);
  }, []);

  return (
    <CommentItem>
      <CommentUserWrap>
        <CommentUser src="/avatar.png" />
        {isOpenPatchText === false && (
          <CommentAction>
            <ChangeComment onClick={onOpenPatchTextArea}>수정</ChangeComment>
            <RemoveComment onClick={onDeleteComment}>삭제</RemoveComment>
          </CommentAction>
        )}
      </CommentUserWrap>
      {isOpenPatchText === true ? (
        <CommentWrite
          currentComment={currentComment.body}
          CommentId={currentComment.id}
          isOpenPatchText={isOpenPatchText}
          onClosePatchTextArea={onClosePatchTextArea}
          onChangeCurrentComment={onChangeCurrentComment}
        />
      ) : (
        <CommentTextWrap>{currentComment.body}</CommentTextWrap>
      )}
    </CommentItem>
  );
};

export default React.memo(CommentView);

const {
  CommentItem,
  CommentUserWrap,
  CommentUser,
  CommentTextWrap,
  CommentAction,
  ChangeComment,
  RemoveComment,
} = style;
