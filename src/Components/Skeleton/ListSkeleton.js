import React from 'react';
import styled from 'styled-components';
import { Shimmer } from 'Common';

export const ListSkeleton = () => {
  const cardArr = Array.from({ length: 8 }, () => (
    <CardBox>
      <ImageWrap>
        <Shimmer height="200px" margin="0" />
      </ImageWrap>
      <ContentWrap>
        <Shimmer width="100px" />
        <Shimmer />
      </ContentWrap>
    </CardBox>
  ));

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
  width: 1728px;
  margin-left: auto;
  margin-right: auto;
  background: #f8f9fa;

  @media (max-width: 1919px) {
    width: 1376px;
  }
  @media (max-width: 1440px) {
    width: 1024px;
    margin: 0 auto;
  }
  @media (max-width: 1056px) {
    width: calc(100% - 2rem);
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

const CardBox = styled.div`
  width: 18rem;
  margin-top: -1rem;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  border-radius: 6px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
  -webkit-transition: box-shadow 0.25s ease-in 0s,
    -webkit-transform 0.25s ease-in 0s;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;

  @media (max-width: 1440px) {
    margin-top: 1rem;
  }

  @media (max-width: 1056px) {
    width: 42vw;
  }

  @media (max-width: 944px) {
    width: calc(50% - 2rem);
    height: 464px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0px 0px 1rem 0px;
  }

  @media (max-width: 500px) {
    width: 451px;
  }
`;

const ImageWrap = styled.div`
  position: relative;
  padding-bottom: 55%;
  width: 100%;
  max-height: 177px;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  min-height: 165px;
  flex: 1 1 0;
`;
