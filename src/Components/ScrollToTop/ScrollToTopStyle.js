import styled from 'styled-components';

export const TopButton = styled.button`
  position: fixed;
  bottom: 50px;
  right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 50px;
  height: 50px;
  border: none;
  background-color: rgb(18, 184, 134);
  cursor: pointer;
  z-index: 999;
  @media screen and (max-width: 375px) {
    display: none;
  }
`;
