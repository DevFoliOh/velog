import React, { useCallback, useEffect, useState } from 'react';
import { style } from './CommentViewStyle';
import CommentWrite from '../CommentWrite/CommentWrite';
import { useDispatch } from 'react-redux';
import { currentCommentAction } from 'Modules/currentComment/currentComment';

const CommentView = ({ comment, openModal }) => {
  const [isOpenPatchText, setIsOpenPatch] = useState(false);
  const [current, setCurrent] = useState(comment);
  const { getCurrentComment } = currentCommentAction;
  const dispatch = useDispatch();

  const onOpenModal = () => {
    openModal('commentDelete');
    current && dispatch(getCurrentComment(current));
  };

  useEffect(() => {
    setCurrent(comment);
  }, [comment]);

  const onOpenPatchTextArea = () => {
    setIsOpenPatch(true);
  };

  const onClosePatchTextArea = () => {
    setIsOpenPatch(false);
  };

  const onChangeCurrentComment = useCallback((text) => {
    setCurrent(text);
  }, []);

  return (
    <CommentItem>
      <CommentUserWrap>
        <CommentUser src="/avatar.png" />
        {isOpenPatchText === false && (
          <CommentAction>
            <ChangeComment onClick={onOpenPatchTextArea}>수정</ChangeComment>
            <RemoveComment onClick={onOpenModal}>삭제</RemoveComment>
          </CommentAction>
        )}
      </CommentUserWrap>
      {isOpenPatchText === true ? (
        <CommentWrite
          currentComment={current.body}
          CommentId={current.id}
          isOpenPatchText={isOpenPatchText}
          onClosePatchTextArea={onClosePatchTextArea}
          onChangeCurrentComment={onChangeCurrentComment}
        />
      ) : (
        <CommentTextWrap>{current.body}</CommentTextWrap>
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
