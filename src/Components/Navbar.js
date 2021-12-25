import React from 'react';
import styled from 'styled-components';
import { Grid, Text } from 'Common';

const Navbar = ({ sort, setSort, setPostData }) => {
  return (
    <Wrapper>
      <LeftDiv>
        <Box onClick={() => setSort(false)}>
          <Icon>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path>
            </svg>
          </Icon>
          <Text>트렌딩</Text>
        </Box>

        <Box onClick={() => setSort(true)}>
          <Icon>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
            </svg>
          </Icon>
          <Text>최근</Text>
        </Box>
      </LeftDiv>

      <Icon>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          class="more"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
        </svg>
      </Icon>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  margin-top: 2rem;
`;

const LeftDiv = styled.div`
  display: flex;
`;

const Box = styled.div`
  width: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  text-decoration: none;
  color: rgb(134, 142, 150);
  height: 3rem;
  cursor: pointer;

  &:active {
    color: rgb(52, 58, 64);
    font-weight: bold;
    border-bottom: 2px soild rgb(52, 58, 64);
  }

  @media (max-width: 944px) {
    font-size: 1rem;
    width: 5rem;
  }
`;

const Icon = styled.div`
  font-size: 1.5rem;
  margin-right: 0.5rem;
  box-sizing: inherit;
  stroke-width: 0;
  height: 1em;
  width: 1em;
  overflow: hidden;
  color: rgb(52, 58, 64);
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: rgb(134, 142, 150);
  cursor: pointer;
`;

export default Navbar;
