import React from 'react';
import { useSelector } from 'react-redux';
import { MenuApi } from 'lib';
import { Grid, Text, Button } from 'Common';

export const Modal = (props) => {
  const {
    title,
    content,
    postId,
    mainRef,
    deleteComment,
    command,
    history,
    onToggleModal,
  } = props;

  const comment = useSelector((state) => state.currentCommentReducer.comment);

  const closeModal = (e) => {
    if (e.target.innerText === '확인') {
      command === 'postDelete' && onDeletePost();
      command === 'commentDelete' && onDeleteComment();
      command === 'goToBack' && history.push('/');
      command === 'saveLocalStorage' && onToggleModal();
    } else {
      onToggleModal();
    }
  };

  const onDeletePost = async () => {
    await MenuApi.deleteDetail(postId);
    history.push('/');
    onToggleModal();
  };

  const onDeleteComment = async () => {
    const response = await MenuApi.deleteComment(comment.id);
    onToggleModal();

    if (response) {
      deleteComment(comment.id);
      mainRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'end',
      });
    }
  };

  return (
    <Grid
      position="fixed"
      height="100vh"
      is_flex
      bg="rgba(0, 0, 0, 0.4)"
      zIndex
      _onClick={(e) => closeModal(e)}
    >
      <Grid
        width="400px"
        height="220px"
        is_flex
        column
        padding="40px 30px 30px"
        shadow="rgb(0 0 0 / 9%) 0px 2px 12px 0px"
      >
        <Grid flex="1">
          <Text size="26px" bold="700" margin="0 0 16px">
            {title}
          </Text>
          <Text size="16px" color="rgb(73, 80, 87)">
            {content}
          </Text>
        </Grid>
        <Grid is_flex justify="space-around" align="center">
          <Button
            bg="rgb(233, 236, 239)"
            color="rgb(73, 80, 87)"
            _onClick={(e) => closeModal(e)}
          >
            취소
          </Button>
          <Button _onClick={(e) => closeModal(e)}>확인</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
