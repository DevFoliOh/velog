import React from 'react';
import styled from 'styled-components';
import CardSkeleton from 'Components/CardSkeleton';

const ListSkeleton = () => {
  const cardArr = Array.from({ length: 8 }, () => <CardSkeleton />);

  return (
    <Main>
      <Container>
        <CardList>{cardArr}</CardList>
      </Container>
    </Main>
  );
};

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #f8f9fa;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  background: #f8f9fa;

  @media (max-width: 1919px) {
    width: 1376px;
  }
  @media (max-width: 1440px) {
    width: 1124px;
  }
  @media (max-width: 1056px) {
    width: calc(80% - 2rem);
    margin-left: 1rem;
    margin-right: 1rem;
  }
  @media (max-width: 767px) {
    width: calc(100% - 2rem);
  }
`;

const CardList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
  background: #f8f9fa;
`;

export default ListSkeleton;
