import React, { useState } from 'react';
import styled from 'styled-components';

const Card = ({ userInfo }) => {
  if (!userInfo) {
    // return <SkeletonProfile />;
  } else {
    return (
      <Wrapper>
        {/* <ImageContainer></ImageContainer> */}
        <PostInfoContainer>
          <ContentContainer>
            <TitleCon>{userInfo.username}</TitleCon>
            <ContentCon>{userInfo.email}</ContentCon>
          </ContentContainer>
        </PostInfoContainer>
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  width: 20rem;
  margin: 1rem;
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

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 16px 0px;
  }

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

  @media (max-width: 1153px) {
    width: 487px;
    height: 464px;
  }
`;

const PostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  flex: 1 1 0%;
`;

const ContentContainer = styled.div`
  color: black;
  text-decoration: none;
  &:focus {
    color: black;
  }
`;

const TitleCon = styled.b`
  font-size: 1rem;
  line-height: 1.5;
`;

const ContentCon = styled.p`
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.5rem;
  height: 1.5rem * 3;
  font-size: 0.875rem;
  color: rgb(73, 80, 87);
`;

export default Card;
