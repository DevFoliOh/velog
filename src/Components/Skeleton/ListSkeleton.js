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
  width: 19rem;
  height: 333px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 6px;
  background-color: #eeeeee;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0px 0px 1rem 0px;
  }
  @media (max-width: 944px) {
    width: calc(50% - 2rem);
  }
  @media (min-width: 944px) {
    &:hover {
      transform: translateY(-10px);
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 16px 0px;
    }
  }
  @media (max-width: 944px) {
    width: 487px;
    height: 464px;
  }
  @media (max-width: 1056px) {
    width: 42vw;
  }
  @media (max-width: 767px) {
    width: 92vw;
  }
  @media (max-width: 500px) {
    width: 451px;
  }
`;

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  overflow: hidden;
`;

const ContentWrap = styled.div`
  flex-wrap: wrap;
  background-color: white;
  height: 165px;
`;
