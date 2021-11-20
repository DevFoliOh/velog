import React, { useState } from 'react';
import { style } from './ModalStyle';

const Modal = (props) => {
  const [modalState, setModalState] = useState(true);
  const { title, description, modalLink } = props;

  const closeModal = () => {
    setModalState(false);
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
          <Button onClick={(e) => closeModal(e)} to={modalLink}>
            확인
          </Button>
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
