import styled from 'styled-components';

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
  width: 340px;
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 40px 30px 30px;
  box-shadow: rgb(0 0 0 / 9%) 0px 2px 12px 0px;
  background-color: #fff;
`;

const ModalHeader = styled.div`
  flex: 1;
`;

const ModalTitle = styled.h3`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ModalDesc = styled.p`
  font-size: 16px;
  color: rgb(73, 80, 87);
  white-space: pre-wrap;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Button = styled.button`
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: rgb(18, 184, 134);
  cursor: pointer;
  border: none;
  outline: none;
  text-decoration: none;
  border-radius: 4px;
`;

export const style = {
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDesc,
  ModalFooter,
  Button,
};
