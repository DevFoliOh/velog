import React from 'react';
import { Link } from 'react-router-dom';
import { style } from './DetailActionStyle';

const DetailAction = (props) => (
  <ActionWrap>
    <EditLink to="/edit">
      <ActionChange>수정</ActionChange>
    </EditLink>
    <ActionDelete>삭제</ActionDelete>
  </ActionWrap>
);

export default DetailAction;

const { ActionWrap, ActionChange, ActionDelete, EditLink } = style;
