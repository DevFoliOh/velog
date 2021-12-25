import styled from 'styled-components';
import { palette } from 'Styles/palette';

export default function Button(props) {
  const {
    width,
    height,
    bg,
    color,
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
  disable: false,
  padding: '0 20px',
  margin: '0',
  border: 'none',
  children: null,
  type: 'button',
  _onClick: () => {},
};

const ElButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.bg};
  pointer-events: ${(props) => (props.disable ? 'none' : 'auto')};
  color: ${(props) => props.color};
  border-radius: 5px;
  margin: ${(props) => props.margin};
  border: ${(props) => props.border};
`;
