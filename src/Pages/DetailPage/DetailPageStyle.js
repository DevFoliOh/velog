import styled from 'styled-components';

const Main = styled.main``;

const Body = styled.div`
  margin-top: 5.5rem;
  width: 768px;
  height: auto;
  margin-left: auto;
  margin-right: auto; ;
`;

const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.5;
  letter-spacing: -0.004em;
  margin-top: 0px;
  font-weight: 800;
  color: rgb(52, 58, 64);
  margin-bottom: 2rem;
  word-break: keep-all;
`;

const TagList = styled.ul`
  position: relative;
  margin-top: 0.875rem;
  margin-bottom: -0.875rem;
  min-height: 0.875rem;
`;

const ThumbnailWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 5rem 0 5rem 0;
`;

const Thumbnail = styled.img`
  width: 50%;
  height: auto;
`;

const Content = styled.section`
  margin-top: 2rem;
  line-height: 2;
`;

const CommentContainer = styled.div`
  margin-top: 3rem;
  width: 768px;
  margin-left: auto;
  margin-right: auto;
  color: rgb(52, 58, 64);
`;

const CommentCount = styled.h4`
  font-size: 1.125rem;
  line-height: 1.5;
  font-weight: 600;
  margin-top: 1.33rem;
  margin-bottom: 1.33rem;
`;

const UserContainer = styled.footer`
  display: flex;
  align-items: center;
  margin-top: 10rem;
  margin-bottom: 6rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgb(233, 236, 239); ;
`;

const UserImg = styled.img`
  width: 8rem;
  height: 8rem;
  cursor: pointer;
`;

const UserDescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
`;

const UserDescriptionTitle = styled.div`
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: bold;
  color: rgb(33, 37, 41);
`;

const UserDescriptionSubTitle = styled.div`
  white-space: pre-wrap;
  font-size: 1.125rem;
  line-height: 1.5;
  margin-top: 0.25rem;
  color: rgb(73, 80, 87);
  letter-spacing: -0.004em;
`;

const CommentList = styled.ul`
  margin-top: 2.5rem;
  margin-bottom: 4rem;
`;

export const style = {
  Main,
  Body,
  Title,
  TagList,
  ThumbnailWrap,
  Thumbnail,
  Content,
  CommentContainer,
  CommentCount,
  CommentList,
  UserContainer,
  UserImg,
  UserDescriptionWrap,
  UserDescriptionTitle,
  UserDescriptionSubTitle,
};
