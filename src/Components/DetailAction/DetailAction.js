import { formatDate } from 'lib/formatDate';
import React from 'react';
import { style } from './DetailActionStyle';

const DetailAction = ({ openModal, detailData }) => {
  const onOpenModal = () => {
    openModal('postDelete');
  };

  return (
    <ActionContainer>
      <div>{formatDate(detailData.createdAt)}</div>
      <ActionWrap>
        <EditLink to={`/edit/${detailData.id}`}>
          <ActionChange>수정</ActionChange>
        </EditLink>
        <ActionDelete onClick={onOpenModal}>삭제</ActionDelete>
      </ActionWrap>
    </ActionContainer>
  );
};
export default DetailAction;

const { ActionContainer, ActionWrap, ActionChange, ActionDelete, EditLink } =
  style;
