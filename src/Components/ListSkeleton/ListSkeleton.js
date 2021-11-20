import React from 'react';
import { style } from './ListSkeletonStyle';
import CardSkeleton from 'Components/CardSkeleton/CardSkeleton';

const ListSkeleton = () => {
  return (
    <Main>
      <Container>
        <CardList>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </CardList>
      </Container>
    </Main>
  );
};

export default ListSkeleton;

const { Main, Container, CardList } = style;
