import React from 'react';
import { style } from './DetailSkeletonStyle';

const DetailSkeleton = () => {
  return (
    <Main>
      <TitleWrap>
        <Title />
        <Title />
        <Title />
        <Title />
      </TitleWrap>
      <TagList>
        <TagItem />
        <TagItem />
        <TagItem />
      </TagList>
      <Content>
        <FirstContentItem />
        <SecondContentItem />
        <ThirdContentItem />
      </Content>
      <UserContainer>
        <UserImg />
        <UserDescriptionWrap>
          <UserDescriptionTitle></UserDescriptionTitle>
          <UserDescriptionSubTitle></UserDescriptionSubTitle>
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
} = style;
