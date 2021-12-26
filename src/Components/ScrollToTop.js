import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { throttle } from 'lodash';
import { FaArrowUp } from 'react-icons/fa';

export const ScrollToTop = () => {
  const [scroll, setScroll] = useState(0);
  const [btnStatus, setBtnStatus] = useState(false);

  const handleFollow = () => {
    console.log('스크롤');

    setScroll(window.pageYOffset);

    if (scroll > 200) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  };

  const handleTop = () => {
    console.log('위로 올라가기');

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setScroll(0);
    setBtnStatus(false);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener('scroll', handleFollow);
    };
  });

  return (
    <>
      {btnStatus && (
        <TopButton onClick={handleTop}>
          <FaArrowUp size="40" />
        </TopButton>
      )}
    </>
  );
};

const TopButton = styled.button`
  position: fixed;
  bottom: 70px;
  right: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 70px;
  height: 70px;
  border: none;
  border-radius: 50%;
  background-color: rgb(18, 184, 134);
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  cursor: pointer;
  z-index: 999;

  @media screen and (max-width: 375px) {
    display: none;
  }
`;

export default ScrollToTop;
