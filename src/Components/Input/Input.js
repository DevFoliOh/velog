import React, { useState, useRef } from 'react';
import { style } from './InputStyle';
import default_thumb from 'Assets/default_image.png';

const Input = () => {
  const inputOpenImageRef = useRef(null);
  const [imgFile, setImgFile] = useState(null);
  const [imgBase64, setImgBase64] = useState('');

  const handleOpenImageRef = () => {
    inputOpenImageRef.current.click();
  };

  const handleChangeFile = (e) => {
    let reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString());
      }
    };
    if (file) {
      reader.readAsDataURL(file);
      setImgFile(file);
    }
  };

  console.log(imgBase64);

  return (
    <UploadContainer>
      <Preview
        src={imgBase64 ? imgBase64 : default_thumb}
        onClick={handleOpenImageRef}
        alt="Thumbnail"
      ></Preview>
      <UploadInputContainer>
        <UploadInput
          onChange={handleChangeFile}
          ref={inputOpenImageRef}
        ></UploadInput>
      </UploadInputContainer>
    </UploadContainer>
  );
};

export default Input;

const { UploadContainer, Preview, UploadInputContainer, UploadInput } = style;
