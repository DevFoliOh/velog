import MenuApi from 'Common/api';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { style } from './ModalStyle';

const Modal = (props) => {
  const [modalState, setModalState] = useState(true);
  const {
    title,
    description,
    modalLink,
    postId,
    mainRef,
    deleteComment,
    clickComponent,
    history,
  } = props;

  const comment = useSelector((state) => state.currentCommentReducer.comment);

  const closeModal = (e) => {
    if (e.target.innerText === '확인') {
      clickComponent === 'postDelete' && onDeleteDetail();
      clickComponent === 'commentDelete' && onDeleteComment();
      setModalState(false);
    } else {
      setModalState(false);
    }
  };

  const onDeleteDetail = async () => {
    await MenuApi.deleteDetail(postId);
    history.push(modalLink);
  };

  const onDeleteComment = async () => {
    const response = await MenuApi.deleteComment(comment.id);
    if (response) {
      deleteComment(comment.id);
      mainRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'end',
      });
    }
  };

  return modalState ? (
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
  ) : null;
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
