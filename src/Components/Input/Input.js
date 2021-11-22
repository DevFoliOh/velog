import React, { useState, useRef, useEffect } from 'react';
import { style } from './InputStyle';
import default_thumb from 'Assets/default_image.png';
import { getImageAction } from 'Modules/getImage/getImage';
import { useDispatch, useSelector } from 'react-redux';

const Input = ({ url, setUrl }) => {
  const inputOpenImageRef = useRef(null);
  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const { getImage } = getImageAction;
  const dispatch = useDispatch();

  const thumbnail = useSelector((state) => state.getImageReducer.thumbnail);

  useEffect(() => {
    setPreviewSource(thumbnail);
  }, [thumbnail]);

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
  useEffect(() => {
    if (previewSource) {
      dispatch(getImage(previewSource));
      // setPreviewSource(props.url);
    }
  }, [previewSource]);

  const uploadImage = () => {
    const formData = new FormData();
    formData.append('file', previewSource);
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
      .then(alert('이미지 업로드가 완료되었습니다.'))
      .catch((err) => console.log(err));
  };

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
