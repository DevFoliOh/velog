import styled from 'styled-components';

const CommentItem = styled.li`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgb(233, 236, 239);
`;

const CommentUserWrap = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommentUser = styled.img`
  width: 3.375rem;
  height: 3.375rem;
  display: block;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

const CommentTextWrap = styled.div`
  font-size: 1.125rem;
  color: rgb(34, 36, 38);
  line-height: 1.7;
  letter-spacing: -0.004em;
  word-break: keep-all;
  overflow-wrap: break-word;
`;

const CommentAction = styled.div`
  font-size: 0.875rem;
  color: rgb(134, 142, 150);
`;

const ChangeComment = styled.span`
  cursor: pointer;
`;

const RemoveComment = styled.span`
  margin-left: 0.5rem;
  cursor: pointer;
`;

export const style = {
  CommentItem,
  CommentUserWrap,
  CommentUser,
  CommentTextWrap,
  CommentAction,
  ChangeComment,
  RemoveComment,
};
