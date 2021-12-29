import styled from 'styled-components';

export const Grid = (props) => {
  const {
    is_flex,
    column,
    flex,
    align,
    justify,
    width,
    height,
    padding,
    margin,
    bg,
    position,
    top,
    left,
    flexWrap,
    border,
    radius,
    borderBottom,
    shadow,
    maxHeight,
    minHeight,
    overflow,
    zIndex,
    _ref,
    children,
    _onClick,
  } = props;

  const styles = {
    is_flex,
    column,
    flex,
    align,
    justify,
    width,
    height,
    padding,
    margin,
    bg,
    position,
    top,
    left,
    flexWrap,
    border,
    radius,
    borderBottom,
    shadow,
    overflow,
    maxHeight,
    minHeight,
    zIndex,
    _ref,
  };

  return (
    <GridBox {...styles} ref={_ref} onClick={_onClick}>
      {children}
    </GridBox>
  );
};

Grid.defaultProps = {
  is_flex: false,
  column: false,
  flex: '',
  align: '',
  justify: '',
  width: '',
  height: '',
  padding: '0',
  margin: '0',
  bg: 'transparent',
  position: '',
  top: '0',
  left: '0',
  flexWrap: false,
  border: '',
  radius: '',
  borderBottom: false,
  shadow: '',
  overflow: false,
  maxHeight: '0',
  minHeight: '0',
  zIndex: false,
  _ref: null,
  children: null,
  _onClick: () => {},
};

const GridBox = styled.div`
  box-sizing: border-box;
  ${(props) => (props.is_flex ? 'display: flex' : '')};
  ${(props) => (props.column ? 'flex-direction: column' : '')};
  flex: ${(props) => props.flex};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
<<<<<<< HEAD
  background: ${(props) => props.bg};
=======
  background: ${(props) => props.background};
>>>>>>> 135ba82a9f93441598156f78e14a1c136dd63e1a
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  box-shadow: ${(props) => props.shadow};
  border: ${(props) => props.border};
<<<<<<< HEAD
  ${(props) => (props.radius ? `border-radius: ${props.radius}` : '')};
=======
  border-radius: ${(props) => props.radius};
>>>>>>> 135ba82a9f93441598156f78e14a1c136dd63e1a
  ${(props) => (props.flexWrap ? 'flex-wrap: wrap' : '')};
  ${(props) => (props.zIndex ? 'z-index: 999' : '')};
  ${(props) =>
    props.borderBottom ? 'border-bottom: 1px solid rgb(233, 236, 239)' : ''};
  ${(props) => (props.overflow ? 'overflow: hidden' : '')};
`;
