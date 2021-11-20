import React from 'react';
import { Link } from 'react-router-dom';
import { style } from './DetailActionStyle';
import MenuApi from 'Common/api';

const DetailAction = ({ postId, history }) => {
  const onDeleteDetail = async () => {
    try {
      await MenuApi.deleteDetail(postId);
      history.push('/');
    } catch (error) {
      throw new Error('Delete Error');
    }
  };
  return (
    <ActionWrap>
      <EditLink to="/edit">
        <ActionChange>수정</ActionChange>
      </EditLink>
      <ActionDelete onClick={onDeleteDetail}>삭제</ActionDelete>
    </ActionWrap>
  );
};
export default DetailAction;

const { ActionWrap, ActionChange, ActionDelete, EditLink } = style;
