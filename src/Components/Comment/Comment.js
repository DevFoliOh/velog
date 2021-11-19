import React from 'react';
import { style } from './CommentStyle';
import MenuApi from 'Common/api';

const Comment = ({ comment, id, setComment, mainRef }) => {
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
