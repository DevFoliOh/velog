import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #f8f9fa;
  margin-top: 2rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  font-size: 28px;
  font-weight: 600;
`;

const Container = styled.div`
  display: flex;
  margin-top: 2rem;
  width: 1728px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1919px) {
    width: 1376px;
  }
  @media (max-width: 1440px) {
    width: 1280px;
  }
  @media (max-width: 1312px) {
    width: 912px;
  }
  @media (max-width: 944px) {
    width: calc(100% - 2rem);
  }
  @media (max-width: 767px) {
    width: calc(100% - 2rem);
  }
`;

const CardList = styled.div`
  width: 100%;
  /* background: lightgreen; */
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
`;

export const style = { Wrapper, Header, Container, CardList };
