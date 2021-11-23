import React from 'react';
import { getCardAction } from 'Modules/getCard/getCard';
import { useDispatch } from 'react-redux';
import { style } from './CardStyle';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { formatDate } from 'Common/formatDate';
import parse from 'html-react-parser';
import defaultImg from 'Assets/default.png';
const Card = ({ posts }) => {
  const { getCard } = getCardAction;
  const dispatch = useDispatch();
  const thumbnail = posts.thumbnail;

  if (!posts) {
    return (
      <Wrapper>
        <Skeleton height={400} />;
      </Wrapper>
    );
  } else {
    return (
      <Wrapper
        onClick={() => {
          dispatch(getCard(posts));
        }}
        to={`/detail/${posts.id}`}
      >
        {thumbnail ? (
          <ImageContainer>
            <Image src={thumbnail} alt="thumbnail" />
          </ImageContainer>
        ) : (
          <ImageContainer>
            <Image src={defaultImg} alt="default" />
          </ImageContainer>
        )}
        <PostInfoContainer>
          <PostInfo>
            <Title>{posts.title}</Title>
            <Content
              dangerouslySetInnerHTML={{ __html: parse(posts.body) }}
            ></Content>
          </PostInfo>
          <DateBox>{formatDate(posts.createdAt)}</DateBox>
        </PostInfoContainer>
      </Wrapper>
    );
  }
};

export default React.memo(Card);

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
