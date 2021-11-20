import React from 'react';
import { style } from './ButtonStyle';

const Button = (props) => {
  const { style, _onClick, text, _link } = props;
  return (
    <ButtonContainer to={_link} style={style} onClick={_onClick}>
      {text}
    </ButtonContainer>
  );
};

export default Button;

const { ButtonContainer } = style;
