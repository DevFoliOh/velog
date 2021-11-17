import React from 'react';
import { style } from './ButtonStyle';

const Button = (props) => {
  return <ButtonContainer>{props.text}</ButtonContainer>;
};

export default Button;

const { ButtonContainer } = style;
