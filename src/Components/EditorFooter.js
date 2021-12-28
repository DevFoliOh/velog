import React from 'react';
import { addStorage } from 'lib';
import { Grid, Button, Icon } from 'Common';

export const EditorFooter = ({
  registerPost,
  patchPost,
  onToggleModal,
  post,
}) => {
  const { title, content, hashTagArr, url } = post;

  return (
    <Grid
      width="100%"
      height="4rem"
      is_flex
      align="center"
      justify="space-between"
      padding="0 50px"
      bg="gba(255, 255, 255, 0.85)"
      shadow="rgb(0 0 0 / 10%) 0px 0px 8px"
    >
      <div>
        <Button
          bg="#fff"
          color="rgb(73, 80, 87)"
          padding="8px 4px"
          _onClick={() => onToggleModal('goToBack')}
        >
          <Icon icon="exitArrow" width={20} height={20} />
          &nbsp; 나가기
        </Button>
      </div>

      <Grid is_flex>
        <Button
          width="112px"
          bold
          bg="rgb(233, 236, 239)"
          color="rgb(73, 80, 87)"
          _onClick={() => {
            addStorage(title, content, hashTagArr, url);
            onToggleModal('saveLocalStorage');
          }}
        >
          임시저장
        </Button>

        {registerPost && (
          <Button
            width="112px"
            bold
            bg="rgb(18, 184, 134)"
            margin="0 0 0 12px"
            _onClick={registerPost}
          >
            출간하기
          </Button>
        )}
        {patchPost && (
          <Button
            width="112px"
            bold
            bg="rgb(18, 184, 134)"
            margin="0 0 0 12px"
            _onClick={patchPost}
          >
            수정하기
          </Button>
        )}
      </Grid>
    </Grid>
  );
};
