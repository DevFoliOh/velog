import styled from 'styled-components';

const ActionWrap = styled.ul`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: rgb(73, 80, 87);
  justify-content: flex-end;
`;

const ActionPut = styled.li`
  padding: 0px;
  outline: none;
  border: none;
  background: none;
  font-size: inherit;
  cursor: pointer;
  color: rgb(134, 142, 150);
`;

const ActionDelete = styled.li`
  padding: 0px;
  outline: none;
  border: none;
  background: none;
  font-size: inherit;
  cursor: pointer;
  color: rgb(134, 142, 150);
  margin-left: 8px;
`;

export const style = {
  ActionWrap,
  ActionPut,
  ActionDelete,
};
