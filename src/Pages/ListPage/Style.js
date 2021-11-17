import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background: #f8f9fa;
  padding: 18px 70px;
  box-sizing: border-box;
  margin: 0 auto;
`;

const Header = styled.div`
  height: 10vh;
  font-size: 28px;
  font-weight: 600;
`;

const Section = styled.div`
  height: 100%;
  background: #d1dbdf;
  display: flex;
  justify-content: center;
`;

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
  /* margin: -1rem; */

  @media (max-width: 768px) {
    margin: 0px;
  }

  @media (max-width: 1153px) {
    width: 670px;
  }
`;

export { Wrapper, Header, Section, CardList };
