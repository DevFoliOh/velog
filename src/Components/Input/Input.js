import React, { useState, useRef } from 'react';
import { style } from './InputStyle';
import default_thumb from 'Assets/default_image.png';

const Input = () => {
  const inputOpenImageRef = useRef(null);
  // const [imgFile, setImgFile] = useState(null);
  // const [imgBase64, setImgBase64] = useState('');
  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [url, setUrl] = useState('');

  const handleOpenImageRef = () => {
    inputOpenImageRef.current.click();
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const uploadImage = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('upload_preset', 'rwvzsde8');
    formData.append('cloud_name', 'ddupb73kz');
    fetch('https://api.cloudinary.com/v1_1/ddupb73kz/image/upload', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };

  console.log(url);

  return (
    <UploadContainer>
      <Preview
        src={previewSource ? previewSource : default_thumb}
        onClick={handleOpenImageRef}
        alt="Thumbnail"
      />
      <UploadButton onClick={uploadImage}>업로드하기</UploadButton>
      <UploadInputContainer>
        <UploadInput
          onChange={handleFileInputChange}
          ref={inputOpenImageRef}
        ></UploadInput>
      </UploadInputContainer>
    </UploadContainer>
  );
};

export default Input;

const {
  UploadContainer,
  Preview,
  UploadButton,
  UploadInputContainer,
  UploadInput,
} = style;
