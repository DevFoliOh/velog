import { getCardAction } from 'Modules/getCardData/getCardData';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';

const Dispatch = () => {
  // 아래 card State에 클릭한 card의 데이터가 들어오게 하면 될 것 같습니다 !
  const [card, setCard] = useState();

  const { getCardData } = getCardAction;
  const dispatch = useDispatch();
  dispatch(getCardData(card));
};

export default Dispatch;
