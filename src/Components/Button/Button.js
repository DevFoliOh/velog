import React from 'react';
import { style } from './ButtonStyle';

const Button = (props) => {
  const { style, _onClick, text } = props;
  return (
    <ButtonContainer style={style} onClick={_onClick}>
      {text}
    </ButtonContainer>
  );
};

export default Button;

const { ButtonContainer } = style;
