import React from 'react';
import { style } from './DetailActionStyle';

const DetailAction = (props) => (
  <ActionWrap>
    <ActionChange>수정</ActionChange>
    <ActionDelete>삭제</ActionDelete>
  </ActionWrap>
);

export default DetailAction;

const { ActionWrap, ActionChange, ActionDelete } = style;
