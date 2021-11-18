import styled from 'styled-components';

const UploadContainer = styled.div``;

const Preview = styled.img`
  width: 150px;
  height: 150px;
  background-color: #efefef;
  object-fit: cover;
`;

const UploadInputContainer = styled.div``;

const UploadInput = styled.input.attrs({
  type: 'file',
  name: 'imgFile',
  id: 'imgFile',
})`
  display: none;
`;

export const style = {
  UploadContainer,
  Preview,
  UploadInputContainer,
  UploadInput,
};
