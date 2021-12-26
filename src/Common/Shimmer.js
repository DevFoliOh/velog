import React from 'react';
import styled from 'styled-components';

export const Shimmer = (props) => {
  const { width, height, margin, bg } = props;

  const styles = {
    width,
    height,
    margin,
    bg,
  };

  return (
    <Wrapper {...styles}>
      <Effect />
    </Wrapper>
  );
};

Shimmer.defaultProps = {
  width: '200px',
  height: '20px;',
  margin: '1rem 1rem 0',
  bg: '#eeeeee',
};

const Wrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bg};
  overflow: hidden;
`;

const Effect = styled.div`
  width: 40%;
  height: 100%;
  background-color: #e0e0e0;
  box-shadow: 0 0 30px 30px #e0e0e0;
  animation: loading 1s infinite;

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
