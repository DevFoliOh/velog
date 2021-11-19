import React from 'react';
import { style } from './CommentStyle';

const Comment = ({ comment }) => {
  return (
    <CommentItem>
      <CommentUserWrap>
        <CommentUser src="/avatar.png" />
        <CommentAction>
          <ChangeComment>수정</ChangeComment>
          <RemoveComment>삭제</RemoveComment>
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
