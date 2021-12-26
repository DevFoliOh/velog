import styled from 'styled-components';
import { palette } from 'Styles/palette';

export const Button = (props) => {
  const {
    flex,
    width,
    height,
    bg,
    color,
    size,
    bold,
    padding,
    margin,
    border,
    disable,
    hoverBg,
    children,
    _onClick,
  } = props;

  const styles = {
    flex,
    width,
    height,
    bg,
    color,
    size,
    bold,
    padding,
    margin,
    border,
    disable,
    hoverBg,
  };

  return (
    <ElButton {...styles} onClick={_onClick}>
      {children}
    </ElButton>
  );
};

Button.defaultProps = {
  flex: 'flex',
  width: '150px',
  height: '40px',
  bg: palette.teal[1],
  color: '#fff',
  size: '1.125rem',
  bold: false,
  padding: '0 20px',
  margin: '0',
  border: 'none',
  disable: false,
  hoverBg: '',
  type: 'button',
  children: null,
  _onClick: () => {},
};

const ElButton = styled.button`
  display: ${(props) => props.flex};
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  ${(props) => (props.width ? `width: ${props.width}` : '')};
  ${(props) => (props.height ? `height: ${props.height}` : '')};
  background: ${(props) => props.bg};
  font-size: ${(props) => props.size};
  ${(props) => (props.bold ? 'font-weight: 600' : '')};
  color: ${(props) => props.color};
  ${(props) => (props.margin ? `margin: ${props.margin}` : '')};
  padding: ${(props) => props.padding};
  ${(props) => (props.disable ? 'pointer-events: none' : '')};
  border: ${(props) => props.border};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.hoverBg};
  }
`;
