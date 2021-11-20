import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const PostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  min-height: 165px;
  flex: 1 1 0;
`;

const PostInfo = styled.div`
  color: black;
  text-decoration: none;
  &:focus {
    color: black;
  }
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

export const style = {
  Wrapper,
  ImageContainer,
  Image,
  PostInfoContainer,
  PostInfo,
  Title,
  Content,
  DateBox,
};
