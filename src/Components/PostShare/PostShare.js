import React, { useEffect, useState } from 'react';
import { style } from './PostShareStyle';

const PostShare = ({ isFixedShare }) => {
  const [shareContainerStyle, setShareContainerStyle] = useState({
    position: 'absolute',
    left: '7em',
  });

  useEffect(() => {
    console.log(isFixedShare);
    if (isFixedShare) {
      setShareContainerStyle({
        position: 'fixed',
        top: '112px',
        left: '7em',
      });
    } else {
      setShareContainerStyle({
        position: 'absolute',
        left: '7em',
      });
    }
    console.log(shareContainerStyle);
  }, [isFixedShare]);

  return (
    <ShareContainer
      position={shareContainerStyle.position}
      left={shareContainerStyle.left}
      top={shareContainerStyle.top}
    >
      <ShareWrap>
        <ShareBtn>
          <ShareImg width="24" height="24" viewBox="0 0 24 24" class="share">
            <path
              fill="currentColor"
              d="M5 7c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm11.122 12.065c-.073.301-.122.611-.122.935 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4c-1.165 0-2.204.506-2.935 1.301l-5.488-2.927c-.23.636-.549 1.229-.943 1.764l5.488 2.927zm7.878-15.065c0-2.209-1.791-4-4-4s-4 1.791-4 4c0 .324.049.634.122.935l-5.488 2.927c.395.535.713 1.127.943 1.764l5.488-2.927c.731.795 1.77 1.301 2.935 1.301 2.209 0 4-1.791 4-4z"
            ></path>
          </ShareImg>
        </ShareBtn>
      </ShareWrap>
    </ShareContainer>
  );
};

export default PostShare;

const { ShareContainer, ShareWrap, ShareBtn, ShareImg } = style;
