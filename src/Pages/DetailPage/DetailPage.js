import React, { useCallback, useState } from 'react';
import Header from 'Components/Header/Header';
import DetailTitle from 'Components/DetailTitle/DetailTitle';
import style from './DetailPageStyle';
import useGetDetailData from 'Hooks/useGetDetailData';

const DetailPage = ({ id }) => {
  const [detailData, setDetailData] = useState({});
  const setData = useCallback((data) => {
    setDetailData(data);
  }, []);

  const loading = useGetDetailData(setData, id);

  return (
    <div>
      <Header></Header>
      <Main>{loading && <DetailTitle title={detailData.title} />}</Main>
    </div>
  );
};

export default DetailPage;

const { Main } = style;
