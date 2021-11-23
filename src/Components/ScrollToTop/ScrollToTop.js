import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { TopButton } from './ScrollToTopStyle';

function ScrollToTop() {
  const [scroll, setScroll] = useState(0);
  const [btnStatus, setBtnStatus] = useState(false);

  const handleFollow = () => {
    setScroll(window.pageYOffset);
    if (scroll > 100) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  };

  const handleTop = () => {
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
      <TopButton
        onClick={handleTop}
        style={btnStatus ? { display: 'block' } : { display: 'none' }}
      >
        <FaArrowUp />
      </TopButton>
    </>
  );
}

export default ScrollToTop;
