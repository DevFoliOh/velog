import styled from 'styled-components';

export const Image = (props) => {
  const { src, alt, position, top, left, width, height, shadow, radius } =
    props;

  const styles = {
    position,
    top,
    left,
    width,
    height,
    shadow,
    radius,
  };

  return <ElImage {...styles} src={src} alt={alt} />;
};

Image.defaultProps = {
  position: false,
  top: false,
  left: false,
  width: '100%',
  height: '100%',
  shadow: '',
  radius: '50%',
};

const ElImage = styled.img`
  ${(props) => (props.position ? `position: absolute` : '')};
  ${(props) => (props.top ? `top: 0` : '')};
  ${(props) => (props.left ? `left: 0` : '')};
  ${(props) => (props.shadow ? `box-shadow: ${props.shadow}` : '')};
  ${(props) => (props.radius ? `border-radius: ${props.radius}` : '')};
  display: block;
  width: ${(props) => (props.width ? props.width : '')};
  height: ${(props) => (props.height ? props.height : '')};
  object-fit: cover;
  cursor: pointer;
`;
