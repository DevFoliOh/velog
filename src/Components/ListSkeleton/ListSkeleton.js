import React from 'react';
import { style } from './ListSkeletonStyle';
import CardSkeleton from 'Components/CardSkeleton/CardSkeleton';

const ListSkeleton = () => {
  const cardArr = Array.from({ length: 16 }, () => <CardSkeleton />);

  return (
    <Main>
      <Container>
        <CardList>{cardArr}</CardList>
      </Container>
    </Main>
  );
};

export default ListSkeleton;

const { Main, Container, CardList } = style;
