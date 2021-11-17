import React, { useCallback, useEffect, useState } from 'react';
import Header from 'Components/Header/Header';
import DetailTitle from 'Components/DetailTitle/DetailTitle';
import * as style from './style';
import useGetDetailData from 'Hooks/useGetDetailData';

const DetailPage = ({ id }) => {
  const [detailData, setDetailData] = useState({});
  const body = { datailData: { body } };
  const title = { datailData: { title } };
  const setData = useCallback((data) => {
    setDetailData(data);
  }, []);

  const loading = useGetDetailData(setData, id);

  return (
    <div>
      <Header></Header>
      <style.Main>{loading && <DetailTitle title={title} />}</style.Main>
    </div>
  );
};

export default DetailPage;
