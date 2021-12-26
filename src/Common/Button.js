import styled from 'styled-components';
import { palette } from 'Styles/palette';

export default function Button(props) {
  const {
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
    children,
    _onClick,
  } = props;

  const styles = {
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
  };

  return (
    <ElButton {...styles} onClick={_onClick}>
      {children}
    </ElButton>
  );
}

Button.defaultProps = {
  width: '100%',
  height: '40px',
  bg: palette.gray[3],
  color: '#fff',
  size: '1.125rem',
  bold: false,
  padding: '0 20px',
  margin: '0',
  border: 'none',
  disable: false,
  type: 'button',
  children: null,
  _onClick: () => {},
};

const ElButton = styled.button`
  display: flex;
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
`;
