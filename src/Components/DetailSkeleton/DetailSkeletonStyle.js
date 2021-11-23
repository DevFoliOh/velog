import styled from 'styled-components';

const Main = styled.main`
  margin-top: 5.5rem;
  width: 768px;
  margin-left: auto;
  margin-right: auto; ;
`;

const TitleWrap = styled.div`
  display: flex;
`;

const Title = styled.div`
  background-color: #eeeeee;
  width: 100px;
  height: 60px;
  line-height: 1.5;
  letter-spacing: -0.004em;
  margin-top: 0px;
  margin-right: 1em;
  color: rgb(52, 58, 64);
  margin-bottom: 2rem;
  word-break: keep-all;
  overflow: hidden;
`;

const TagList = styled.ul`
  margin-top: 0.875rem;
  margin-bottom: -0.875rem;
  min-height: 0.875rem;
`;

const TagItem = styled.ul`
  width: 60px;
  height: 32px;
  margin-bottom: 0.875rem;
  background: rgb(241, 243, 245);
  margin-right: 0.9rem;
  margin-bottom: 0.9rem;
  height: 2rem;
  border-radius: 1rem;
  display: inline-flex;
  align-items: center;
  margin-right: 0.875 rem;
  color: rgb(12, 166, 120);
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  overflow: hidden;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const FirstContentItem = styled.div`
  width: 400px;
  height: 30px;
  background-color: #eeeeee;
  margin-top: 1rem;
  overflow: hidden;
`;

const SecondContentItem = styled.div`
  width: 200px;
  height: 30px;
  background-color: #eeeeee;
  margin-top: 1rem;
  overflow: hidden;
`;

const ThirdContentItem = styled.div`
  width: 300px;
  height: 30px;
  background-color: #eeeeee;
  margin-top: 1rem;
  overflow: hidden;
`;

const Shimmer = styled.div`
  width: 50%;
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

const UserContainer = styled.footer`
  display: flex;
  align-items: center;
  margin-top: 7rem;
  margin-bottom: 6rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgb(233, 236, 239);
`;

const UserImg = styled.div`
  background-color: #eeeeee;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  cursor: pointer;
`;

const UserDescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
`;

const UserDescriptionTitle = styled.div`
  width: 65px;
  height: 30px;
  background-color: #eeeeee;
  overflow: hidden;
`;

const UserDescriptionSubTitle = styled.div`
  width: 76px;
  height: 25px;
  margin-top: 0.25rem;
  background-color: #eeeeee;
  overflow: hidden;
`;

export const style = {
  Main,
  TitleWrap,
  Title,
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
};
