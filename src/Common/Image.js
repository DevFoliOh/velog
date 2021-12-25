import styled from 'styled-components';
import { Grid } from 'Common';

export default function Image(props) {
  const { src, alt } = props;

  return <ElImage src={src} alt={alt} />;
}

const ElImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;
