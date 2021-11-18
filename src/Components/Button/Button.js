import React from 'react';
import { style } from './ButtonStyle';

const Button = (props) => {
  const { _style, _onClick } = props;
  return (
    <ButtonContainer style={_style} onClick={_onClick}>
      {props.text}
    </ButtonContainer>
  );
};

export default Button;

const { ButtonContainer } = style;
