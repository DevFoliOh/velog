import React from 'react';
import styled from 'styled-components';
import { Grid, Icon, Responsive } from 'Common';
import { palette } from 'Styles/palette';

export const Input = (props) => {
  const { icon, value, _onChange } = props;

  return (
    <Responsive>
      <InputGrid>
        <Grid top="15px" left="15px">
          <Icon
            icon={icon}
            width={23}
            height={22}
            color={palette.gray[6]}
            fill="transparent"
          />
        </Grid>
        <ElInput
          type="text"
          value={value}
          placeholder="검색어를 입력하세요"
          onChange={_onChange}
        />
      </InputGrid>
    </Responsive>
  );
};

Input.defaultProps = {
  icon: '',
  value: '',
  _onChange: () => {},
};

const InputGrid = styled.div`
  display: flex;
  border: 1px solid rgb(173, 181, 189);
  -webkit-box-align: center;
  align-items: center;
  transition: all 0.125s ease-in 0s;
  cursor: text;
  height: 4rem;
  padding: 0 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    height: 2.25rem;
    padding: 0 1rem;
  }
`;

const ElInput = styled.input`
  display: block;
  font-size: 1.5rem;
  line-height: 2rem;
  height: 2rem;
  transition: all 0.125s ease-in 0s;
  flex: 1 1 0%;
  padding: 0px;
  border: none;
  outline: 0px;
  color: rgb(73, 80, 87);
  min-width: 0px;

  @media (max-width: 768px) {
    flex: 1 1 0%;
    font-size: 1.125rem;
    line-height: 1.5;
    height: auto;
  }
`;
