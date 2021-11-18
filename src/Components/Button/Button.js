import React from 'react';
import { style } from './ButtonStyle';

const Button = (props) => {
  const { _style, _onClick, _text, _link } = props;
  return (
    <ButtonContainer to={_link} style={_style} onClick={_onClick}>
      {_text}
    </ButtonContainer>
  );
};

export default Button;

const { ButtonContainer } = style;
