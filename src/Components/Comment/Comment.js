import React from 'react';
import { style } from './CommentStyle';

const Comment = (props) => {
  return (
    <>
      <CommentItem>
        <CommentUserWrap>
          <CommentUser src="avatar.png" />
        </CommentUserWrap>
        <CommentTextWrap>첫번째 댓글</CommentTextWrap>
      </CommentItem>
      <CommentItem>
        <CommentUserWrap>
          <CommentUser src="avatar.png" />
        </CommentUserWrap>
        <CommentTextWrap>두번째 댓글</CommentTextWrap>
      </CommentItem>
    </>
  );
};

export default Comment;

const { CommentItem, CommentUserWrap, CommentUser, CommentTextWrap } = style;
