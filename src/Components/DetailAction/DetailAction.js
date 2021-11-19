import React from 'react';
import { style } from './DetailActionStyle';

const DetailAction = (props) => (
  <ActionWrap>
    <ActionPut>수정</ActionPut>
    <ActionDelete>삭제</ActionDelete>
  </ActionWrap>
);

export default DetailAction;

const { ActionWrap, ActionPut, ActionDelete } = style;
