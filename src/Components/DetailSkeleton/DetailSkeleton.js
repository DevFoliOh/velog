import React from 'react';
import { style } from './DetailSkeletonStyle';

const DetailSkeleton = () => {
  return (
    <Main>
      <TitleWrap>
        <Title>
          <Shimmer />
        </Title>
        <Title>
          <Shimmer />
        </Title>
        <Title>
          <Shimmer />
        </Title>
        <Title>
          <Shimmer />
        </Title>
      </TitleWrap>
      <TagList>
        <TagItem>
          <Shimmer />
        </TagItem>
        <TagItem>
          <Shimmer />
        </TagItem>
        <TagItem>
          <Shimmer />
        </TagItem>
      </TagList>
      <Content>
        <FirstContentItem>
          <Shimmer />
        </FirstContentItem>
        <SecondContentItem>
          <Shimmer />
        </SecondContentItem>
        <ThirdContentItem>
          <Shimmer />
        </ThirdContentItem>
      </Content>
      <UserContainer>
        <UserImg />
        <UserDescriptionWrap>
          <UserDescriptionTitle>
            <Shimmer />
          </UserDescriptionTitle>
          <UserDescriptionSubTitle>
            <Shimmer />
          </UserDescriptionSubTitle>
        </UserDescriptionWrap>
      </UserContainer>
    </Main>
  );
};

export default DetailSkeleton;

const {
  Main,
  Title,
  TitleWrap,
  TagList,
  TagItem,
  Content,
  FirstContentItem,
  SecondContentItem,
  ThirdContentItem,
  UserContainer,
  UserImg,
  UserDescriptionWrap,
  UserDescriptionTitle,
  UserDescriptionSubTitle,
  Shimmer,
} = style;
