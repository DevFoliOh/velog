import { getCardAction } from 'Modules/getCardData/getCardData';
import { useDispatch } from 'react-redux';
import React from 'react';

const Dispatch = () => {
  const { getCardData } = getCardAction;
  const dispatch = useDispatch();
  dispatch(
    getCardData({
      id: 2,
      title: 'Title!!',
      body: 'body!!',
    }),
  );
};

export default Dispatch;
