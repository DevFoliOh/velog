import React from 'react';
import { useSelector } from 'react-redux';
import MenuApi from 'lib/api';
import styled from 'styled-components';
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
    <ModalContainer onClick={(e) => closeModal(e)}>
      <ModalContent>
        <ModalHeader>
          <Text size="26px" bold="700" margin="0 0 16px">
            {title}
          </Text>
          <Text size="16px" color="rgb(73, 80, 87)">
            {content}
          </Text>
        </ModalHeader>
        <ModalFooter>
          <Button
            bg="rgb(233, 236, 239)"
            color="rgb(73, 80, 87)"
            _onClick={(e) => closeModal(e)}
          >
            취소
          </Button>
          <Button _onClick={(e) => closeModal(e)}>확인</Button>
        </ModalFooter>
      </ModalContent>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;

const ModalContent = styled.div`
  width: 400px;
  height: 220px;
  display: flex;
  flex-direction: column;
  padding: 40px 30px 30px;
  box-shadow: rgb(0 0 0 / 9%) 0px 2px 12px 0px;
  background-color: #fff;
`;

const ModalHeader = styled.div`
  flex: 1;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default Modal;
