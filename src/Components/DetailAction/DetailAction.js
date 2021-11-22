import React from 'react';
import { style } from './DetailActionStyle';

const DetailAction = ({ openModal }) => {
  const onOpenModal = () => {
    openModal('postDelete');
  };

  return (
    <ActionWrap>
      <EditLink to="/edit">
        <ActionChange>수정</ActionChange>
      </EditLink>
      <ActionDelete onClick={onOpenModal}>삭제</ActionDelete>
    </ActionWrap>
  );
};
export default DetailAction;

const { ActionWrap, ActionChange, ActionDelete, EditLink } = style;
