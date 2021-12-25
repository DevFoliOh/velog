import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getCardAction } from 'Modules/getCard/getCard';
import { useDispatch } from 'react-redux';
import { formatDate } from 'lib/formatDate';
import { Grid, Text, Icon, Anchor } from 'Common';
import parse from 'html-react-parser';
import defaultImg from 'Assets/default.png';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const PostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  min-height: 165px;
  flex: 1 1 0;
`;

const Card = ({ post }) => {
  const { getCard } = getCardAction;
  const dispatch = useDispatch();
  const thumbnail = post.thumbnail;

  if (!post) {
    return (
      <Wrapper>
        <Skeleton height={400} />;
      </Wrapper>
    );
  } else {
    return (
      <Wrapper
        onClick={() => {
          dispatch(getCard(post));
        }}
        to={`/detail/${post.id}`}
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
          <div>
            <Title>{post.title}</Title>
            <Content
              dangerouslySetInnerHTML={{ __html: parse(post.body) }}
            ></Content>
          </div>
          <SubInfo>
            <Text size="13px" color="rgb(134, 142, 150)">
              {formatDate(post.createdAt)}
            </Text>
            <span>·</span>
            <Text size="13px" color="rgb(134, 142, 150)">
              8개의 댓글
            </Text>
          </SubInfo>
        </PostInfoContainer>
      </Wrapper>
    );
  }
};

export default React.memo(Card);

const Wrapper = styled(Link)`
  width: 19rem;
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

const ImageContainer = styled.div`
  position: relative;
  padding-bottom: 55%;
  width: 100%;
  max-height: 177px;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  display: block;
  object-fit: cover;
`;

const SubInfo = styled.div`
  font-size: 0.75rem;
  line-height: 1.5;
  color: rgb(134, 142, 150);
  /* height: 18px; */
`;

const Title = styled.b`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
`;

const Content = styled.p`
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
  margin-bottom: 2rem;
`;

const DateBox = styled.div`
  font-size: 13px;
  color: rgb(134, 142, 150);
`;
