import React from 'react';
import { style } from './CommentStyle';

const Comment = ({ commentData }) => {
  return (
    <>
      <CommentItem>
        <CommentUserWrap>
          <CommentUser src="avatar.png" />
          <CommentAction>
            <ChangeComment>수정</ChangeComment>
            <RemoveComment>삭제</RemoveComment>
          </CommentAction>
        </CommentUserWrap>
        <CommentTextWrap>첫번째 댓글</CommentTextWrap>
      </CommentItem>
      <CommentItem>
        <CommentUserWrap>
          <CommentUser src="avatar.png" />
          <CommentAction>
            <ChangeComment>수정</ChangeComment>
            <RemoveComment>삭제</RemoveComment>
          </CommentAction>
        </CommentUserWrap>
        <CommentTextWrap>두번째 댓글</CommentTextWrap>
      </CommentItem>
    </>
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
