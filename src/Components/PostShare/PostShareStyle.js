import styled from 'styled-components';

const ShareContainer = styled.div`
  position: ${(props) => props.position};
  /* position: absolute; */
  left: ${(props) => props.left};
  top: ${(props) => props.top};
`;

const ShareWrap = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background: rgb(248, 249, 250);
  border: 1px solid rgb(241, 243, 245);
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShareBtn = styled.button`
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 1px solid rgb(173, 181, 189);
  border-radius: 1.5rem;
  color: rgb(134, 142, 150);
  cursor: pointer;
  z-index: 5;

  &:hover {
    color: black;
    border: 1px solid black;
  }
`;

const ShareImg = styled.svg`
  width: 25px;
  height: 25px;
`;

export const style = {
  ShareContainer,
  ShareWrap,
  ShareBtn,
  ShareImg,
};
