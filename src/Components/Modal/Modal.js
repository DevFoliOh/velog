import MenuApi from 'Common/api';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { style } from './ModalStyle';

const Modal = (props) => {
  // const [modalState, setModalState] = useState(true);
  const {
    title,
    description,
    modalLink,
    postId,
    mainRef,
    deleteComment,
    clickComponent,
    history,
    onToggleModal,
  } = props;

  const comment = useSelector((state) => state.currentCommentReducer.comment);

  const closeModal = (e) => {
    if (e.target.innerText === '확인') {
      clickComponent === 'postDelete' && onDeleteDetail();
      clickComponent === 'commentDelete' && onDeleteComment();
      clickComponent === 'goToBack' && history.push('/');
    } else {
      onToggleModal();
    }
  };

  const onDeleteDetail = async () => {
    await MenuApi.deleteDetail(postId);
    history.push(modalLink);
    onToggleModal();
  };

  const onDeleteComment = async () => {
    console.log(comment.id);
    const response = await MenuApi.deleteComment(comment.id);
    console.log(response);
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
          <ModalTitle>{title}</ModalTitle>
          <ModalDesc>{description}</ModalDesc>
        </ModalHeader>
        <ModalFooter>
          <Button
            style={{
              background: 'rgb(233, 236, 239)',
              color: 'rgb(73, 80, 87)',
            }}
            onClick={(e) => closeModal(e)}
          >
            취소
          </Button>
          <Button onClick={(e) => closeModal(e)}>확인</Button>
        </ModalFooter>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;

const {
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDesc,
  ModalFooter,
  Button,
} = style;
