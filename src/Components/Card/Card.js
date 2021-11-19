import React, { useState } from 'react';
import { getCardIdAction } from 'Modules/getCardId/getCardId';
import { useDispatch } from 'react-redux';
import { style } from './CardStyle';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Card = ({ posts }) => {
  const [cardId, setCardId] = useState();
  const { getCardId } = getCardIdAction;
  const dispatch = useDispatch();

  const formatDate = (date) => {
    const format = date.slice(0, 10).split('-');
    return `${format[0]}년 ${format[1]}월 ${format[2]}일`;
  };

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
          setCardId(posts.id);
          dispatch(getCardId(cardId));
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
