import React from 'react';
import { style } from './ButtonStyle';

const Button = (props) => {
  const { _onClick } = props;
  return <ButtonContainer onClick={_onClick}>{props.text}</ButtonContainer>;
};
// Button.defaultProps = {_onClick: () => {}, };

export default Button;

const { ButtonContainer } = style;
