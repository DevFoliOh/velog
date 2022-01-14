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
      is_flex
      justify="space-between"
      padding=" 12px 50px 12px 20px"
      bg="rgba(255, 255, 255, 0.85)"
      shadow="rgb(0 0 0 / 10%) 0px 0px 8px"
    >
      <Button
        bg="#fff"
        color="rgb(73, 80, 87)"
        padding="8px 4px"
        _onClick={() => onToggleModal('goToBack')}
      >
        <Icon icon="exitArrow" width={20} height={20} />
        &nbsp; 나가기
      </Button>

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
