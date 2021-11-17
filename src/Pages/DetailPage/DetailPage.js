import React, { useCallback, useState } from 'react';
import Header from 'Components/Header/Header';
import DetailTitle from 'Components/DetailTitle/DetailTitle';
import * as style from './style';
import useGetDetailData from 'Hooks/useGetDetailData';
import { useDispatch } from 'react-redux';
import { getCardAction } from 'Modules/getCardData/getCardData';

const DetailPage = ({ id }) => {
  const [detailData, setDetailData] = useState({});
  const setData = useCallback((data) => {
    setDetailData(data);
  }, []);

  const loading = useGetDetailData(setData, id);

  return (
    <div>
      <Header></Header>
      <style.Main>
        {loading && <DetailTitle title={detailData.title} />}
      </style.Main>
    </div>
  );
};

export default DetailPage;
