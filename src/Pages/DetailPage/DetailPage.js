import React, { useCallback, useState } from 'react';
import Header from 'Components/Header/Header';
import { style } from './DetailPageStyle';
import useGetDetailData from 'Hooks/useGetDetailData';
import Tag from 'Components/Tag/Tag';

const DetailPage = ({ id }) => {
  return (
    <div>
      <Header></Header>
      <Main>
        <Title>Title</Title>
        <TagList>
          <Tag />
        </TagList>
      </Main>
    </div>
  );
};

export default DetailPage;

const { Main, Title, TagList } = style;
