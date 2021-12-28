import React from 'react';
import styled from 'styled-components';
import { Grid } from 'Common';

export const Shimmer = (props) => {
  const { width, height, margin, bg } = props;

  return (
    <Grid width={width} height={height} margin={margin} bg={bg} overflow>
      <Effect />
    </Grid>
  );
};

Shimmer.defaultProps = {
  width: '200px',
  height: '20px;',
  margin: '1rem 1rem 0',
  bg: '#eeeeee',
};

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
