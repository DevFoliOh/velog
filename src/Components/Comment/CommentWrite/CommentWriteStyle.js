import styled from 'styled-components';

const CommentTextArea = styled.textarea`
  height: 70px;
  resize: none;
  padding: 1rem 1rem 1.5rem;
  outline: none;
  border: 1px solid rgb(233, 236, 239);
  margin-bottom: 1.5rem;
  width: 100%;
  border-radius: 4px;
  min-height: 3.5rem;
  font-size: 1rem;
  color: rgb(33, 37, 41);
  line-height: 1.75;
`;

const ButtonWraper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  background: rgb(18, 184, 134);
  color: white;
  border-radius: 4px;
  padding: 0px 1.25rem;
  height: 2rem;
  font-size: 1rem;

  &:hover {
    background-color: #20c997;
  }
`;

const CloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  background: rgb(134, 142, 150);
  color: white;
  border-radius: 4px;
  padding: 0px 1.25rem;
  height: 2rem;
  font-size: 1rem;
  margin-right: 8px;
`;

export const style = {
  CommentTextArea,
  ButtonWraper,
  Button,
  CloseButton,
};
