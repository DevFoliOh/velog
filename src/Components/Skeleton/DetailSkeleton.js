import React from 'react';
import styled from 'styled-components';
import { Shimmer } from 'Common';

export const DetailSkeleton = () => {
  const titleArr = Array.from({ length: 3 }, () => (
    <Shimmer width="100px" height="60px" margin="0 1em 2rem 0" />
  ));

  const tagArr = Array.from({ length: 3 }, () => (
    <Shimmer width="60px" height="32px" margin="0 0.9rem 0.9rem 0" />
  ));

  const contentArr = Array.from({ length: 3 }, () => (
    <Shimmer width="400px" height="30px" margin="1rem" />
  ));

  return (
    <Main>
      <TitleWrap>{titleArr}</TitleWrap>
      <TagList>{tagArr}</TagList>

      <ContentWrap>
        <ImageWrap>
          <Shimmer width="500px" height="400px" />
        </ImageWrap>
        <Content>{contentArr}</Content>
      </ContentWrap>
    </Main>
  );
};

const Main = styled.main`
  margin-top: 5.5rem;
  width: 768px;
  margin-left: auto;
  margin-right: auto; ;
`;

const TitleWrap = styled.div`
  display: flex;
`;

const TagList = styled.ul`
  margin-top: 0.875rem;
  margin-bottom: -0.875rem;
  min-height: 0.875rem;
  display: flex;
`;

const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 4rem 0;
`;

const ImageWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;
