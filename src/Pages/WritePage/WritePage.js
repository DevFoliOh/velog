import React from 'react';
import { style } from './WritePageStyle';

const WritePage = () => {
  return (
    <WriteContainer>
      <WriteHeader>
        <WriteTitle></WriteTitle>
        <WriteLine></WriteLine>
        <WriteTagContainer>
          <WriteTag></WriteTag>
        </WriteTagContainer>
      </WriteHeader>
      <WriteFooter></WriteFooter>
    </WriteContainer>
  );
};

export default WritePage;

const {
  WriteContainer,
  WriteHeader,
  WriteTitle,
  WriteLine,
  WriteTagContainer,
  WriteTag,
  WriteFooter,
} = style;
