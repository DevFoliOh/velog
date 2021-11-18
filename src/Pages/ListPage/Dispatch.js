import { getCardIdAction } from 'Modules/getCardId/getCardId';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Dispatch = () => {
  // 아래 card State에 클릭한 card의 데이터가 들어오게 하면 될 것 같습니다 !
  const [cardId, setCardId] = useState();
  const { getCardId } = getCardIdAction;
  const dispatch = useDispatch();
  dispatch(getCardId(cardId));
};

export default Dispatch;
