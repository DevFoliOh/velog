import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import CommentWrite from './CommentWrite';
import { useDispatch } from 'react-redux';
import { currentCommentAction } from 'Modules/currentComment/currentComment';
import avatar from 'Assets/avatar.png';
import { Image } from 'Common';

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
        <Image
          src={avatar}
          alt="user"
          width="3.4rem"
          height="3.4rem"
          radius="50%"
        />
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

export default React.memo(CommentView);
