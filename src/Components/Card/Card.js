import React, { useEffect, useState } from 'react';
import { getCardIdAction } from 'Modules/getCardId/getCardId';
import { useDispatch } from 'react-redux';
import { style } from './CardStyle';

const Card = ({ posts }) => {
  const { getCardId } = getCardIdAction;
  const dispatch = useDispatch();

  const formatDate = (date) => {
    const format = date.slice(0, 10).split('-');
    return `${format[0]}년 ${format[1]}월 ${format[2]}일`;
  };

  if (!posts) {
    // return <Skeleton />;
  } else {
    const thumbnail = posts.thumbnail;

    return (
      <Wrapper
        onClick={() => {
          dispatch(getCardId(posts.id));
        }}
        to={`/detail/${posts.id}`}
      >
        {thumbnail && (
          <ImageContainer>
            <Image src={thumbnail} />
          </ImageContainer>
        )}
        <PostInfoContainer>
          <PostInfo>
            <Title>{posts.title}</Title>
            <Content>{posts.body}</Content>
          </PostInfo>
          <DateBox>{formatDate(posts.createdAt)}</DateBox>
        </PostInfoContainer>
      </Wrapper>
    );
  }
};

export default Card;

const {
  Wrapper,
  ImageContainer,
  Image,
  PostInfoContainer,
  PostInfo,
  Title,
  Content,
  DateBox,
} = style;
