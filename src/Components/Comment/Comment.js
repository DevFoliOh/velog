import React from 'react';
import { style } from './CommentStyle';
import MenuApi from 'Common/api';

const Comment = ({ comment }) => {
  const onDeleteComment = async () => {
    const response = await MenuApi.deleteComment(comment.id);
    response && window.location.reload();
  };

  return (
    <CommentItem>
      <CommentUserWrap>
        <CommentUser src="/avatar.png" />
        <CommentAction>
          <ChangeComment>수정</ChangeComment>
          <RemoveComment onClick={onDeleteComment}>삭제</RemoveComment>
        </CommentAction>
      </CommentUserWrap>
      <CommentTextWrap>{comment.body}</CommentTextWrap>
    </CommentItem>
  );
};

export default Comment;

const {
  CommentItem,
  CommentUserWrap,
  CommentUser,
  CommentTextWrap,
  CommentAction,
  ChangeComment,
  RemoveComment,
} = style;
