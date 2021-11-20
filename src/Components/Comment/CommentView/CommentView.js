import React, { useState } from 'react';
import { style } from './CommentViewStyle';
import MenuApi from 'Common/api';
import CommentWrite from '../CommentWrite/CommentWrite';

const CommentView = ({ comment, id, setComment, mainRef }) => {
  const [isOpenPatchText, setIsOpenPatch] = useState(false);

  const onDeleteComment = async () => {
    const response = await MenuApi.deleteComment(comment.id);
    if (response) {
      const commentResponse = await MenuApi.getCommentData(id);
      setComment(commentResponse.data.results);
      mainRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'end',
      });
    }
  };

  const onOpenPatchTextArea = () => {
    setIsOpenPatch(true);
  };

  const onClosePatchTextArea = () => {
    setIsOpenPatch(false);
  };

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
          currentText={comment.body}
          isOpenPatchText={isOpenPatchText}
          onClosePatchTextArea={onClosePatchTextArea}
        />
      ) : (
        <CommentTextWrap>{comment.body}</CommentTextWrap>
      )}
    </CommentItem>
  );
};

export default CommentView;

const {
  CommentItem,
  CommentUserWrap,
  CommentUser,
  CommentTextWrap,
  CommentAction,
  ChangeComment,
  RemoveComment,
} = style;
