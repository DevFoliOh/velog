import React, { useEffect, useState } from 'react';
import { getCardIdAction } from 'Modules/getCardId/getCardId';
import { useDispatch } from 'react-redux';
import { style } from './CardStyle';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { formatDate } from 'Common/formatDate';

const Card = ({ posts }) => {
  const { getCardId } = getCardIdAction;
  const dispatch = useDispatch();

  if (!posts) {
    return (
      <Wrapper>
        <Skeleton height={400} />;
      </Wrapper>
    );
  } else {
    const thumbnail = posts.thumbnail;

    return (
      <Wrapper
        onClick={() => {
          dispatch(getCardId(posts.id));
        }}
        to={`/detail/${posts.id}`}
      >
        {thumbnail ? (
          <ImageContainer>
            <Image src={thumbnail} />
          </ImageContainer>
        ) : (
          <ImageContainer>
            <Image src="default.png" alt="default" />
          </ImageContainer>
        )}
        <PostInfoContainer>
          <PostInfo>
            <Title>{posts.title || <Skeleton />}</Title>
            <Content>{posts.body || <Skeleton count={3} />}</Content>
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
