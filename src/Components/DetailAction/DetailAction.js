import React from 'react';
import { style } from './DetailActionStyle';

const DetailAction = ({ openModal }) => {
  return (
    <ActionWrap>
      <EditLink to="/edit">
        <ActionChange>수정</ActionChange>
      </EditLink>
      <ActionDelete onClick={openModal}>삭제</ActionDelete>
    </ActionWrap>
  );
};
export default DetailAction;

const { ActionWrap, ActionChange, ActionDelete, EditLink } = style;
