import React from 'react';
import { style } from './TagStyle';

const Tag = ({ tagContent }) => {
  return <Tagitem>{tagContent}</Tagitem>;
};

export default Tag;

const { Tagitem } = style;
