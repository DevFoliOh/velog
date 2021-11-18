import styled from 'styled-components';

const Main = styled.main`
  margin-top: 5.5rem;
  width: 768px;
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
  margin-top: 0.875rem;
  margin-bottom: -0.875rem;
  min-height: 0.875rem;
`;

export const style = {
  Main,
  Title,
  TagList,
};
