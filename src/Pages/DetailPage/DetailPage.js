import React, { useCallback, useState } from 'react';
import Header from 'Components/Header/Header';
import { style } from './DetailPageStyle';
import useGetDetailData from 'Hooks/useGetDetailData';

const DetailPage = ({ id }) => {
  return (
    <div>
      <Header></Header>
      <Main>
        <Title>Title</Title>
      </Main>
    </div>
  );
};

export default DetailPage;

const { Main, Title } = style;
