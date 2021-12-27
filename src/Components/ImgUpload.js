import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import default_thumb from 'Assets/default_image.png';
import loadingSpinner from 'Assets/spinning-loading.gif';

export const ImgUpload = ({ url, setUrl, loading, setLoading }) => {
  const imgInputRef = useRef(null);
  const [previewSource, setPreviewSource] = useState(url);

  const onImgChange = (e) => {
    setLoading(true);
    const formData = new FormData();

    formData.append('file', e.target.files[0]);
    formData.append('upload_preset', 'rwvzsde8');
    formData.append('cloud_name', 'ddupb73kz');

    fetch('https://api.cloudinary.com/v1_1/ddupb73kz/image/upload', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
        setPreviewSource(data.url);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setPreviewSource(url);
  }, [url, loading]);

  return (
    <div>
      {loading ? (
        <Preview src={loadingSpinner} alt="Thumbnail" />
      ) : (
        <Preview
          src={previewSource ? previewSource : default_thumb}
          alt="Thumbnail"
        />
      )}
      <UploadButton onClick={() => imgInputRef.current.click()}>
        썸네일 이미지 등록
      </UploadButton>
      <div>
        <UploadInput
          type="file"
          name="file"
          id="thumbnailImage"
          ref={imgInputRef}
          onChange={onImgChange}
        />
      </div>
    </div>
  );
};

const Preview = styled.img`
  width: 150px;
  height: 150px;
  background-color: #efefef;
  object-fit: cover;
`;

const UploadButton = styled.button`
  width: 150px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-size: 14px;
  margin-bottom: 10px;
`;

const UploadInput = styled.input`
  display: none;
`;

export default ImgUpload;
