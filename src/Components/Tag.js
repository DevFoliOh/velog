import React from 'react';
import styled from 'styled-components';

export const Tag = ({ tagContent, _onClick }) => {
  return <Tagitem onClick={_onClick}>{tagContent}</Tagitem>;
};

const Tagitem = styled.div`
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  height: 2rem;
  border-radius: 1rem;
  padding: 0 1rem;
  margin: 0 0.75rem 0.75rem 0;
  background: rgb(241, 243, 245);
  color: rgb(12, 166, 120);
  cursor: pointer;
`;
