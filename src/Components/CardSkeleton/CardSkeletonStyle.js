import styled from 'styled-components';

const CardBox = styled.div`
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

const ImageWrap = styled.div`
  position: relative;
  padding-bottom: 55%;
  width: 100%;
  height: 249px;
`;

const PostInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  min-height: 165px;
  flex: 1 1 0;
`;

const TitleLine = styled.div`
  background-color: #eeeeee;
  /* width: 100px;
  height: 30px; */
`;

const ContentLine = styled.div`
  background-color: #eeeeee;
  /* width: 100px;
  height: 20px; */
`;

const Shimmer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e0e0e0;
  box-shadow: 0 0 30px 30px #e0e0e0;
  animation: loading 2s infinite;

  @keyframes loading {
    0% {
      transform: translateX(-50%);
    }
    50% {
      transform: translateX(100%);
    }
    100% {
      transform: translate(200%);
    }
  }
`;

export const style = {
  CardBox,
  ImageWrap,
  PostInfoWrap,
  TitleLine,
  ContentLine,
  Shimmer,
};
