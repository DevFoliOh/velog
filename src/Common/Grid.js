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
    borderBottom,
    shadow,
    maxHeight,
    minHeight,
    _ref,
    children,
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
    borderBottom,
    shadow,
    maxHeight,
    minHeight,
    _ref,
    flexWrap,
  };

  return (
    <GridBox {...styles} ref={_ref}>
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
  padding: '',
  width: '',
  height: '',
  margin: '',
  bg: '',
  position: '',
  top: '',
  left: '',
  flexWrap: '',
  borderBottom: '',
  shadow: '',
  maxHeight: '',
  minHeight: '',
  _ref: null,
  children: null,
};

const GridBox = styled.div`
  box-sizing: border-box;
  ${(props) => (props.is_flex ? 'display: flex' : '')};
  ${(props) => (props.column ? 'flex-direction: column' : '')};
  ${(props) => (props.flex ? `flex: ${props.flex};` : '')}
  ${(props) => (props.align ? `align-items: ${props.align};` : '')}
  ${(props) => (props.justify ? `justify-content: ${props.justify};` : '')}
    ${(props) => (props.width ? `width: ${props.width};` : '')}
    ${(props) => (props.height ? `height: ${props.height};` : '')}
    ${(props) => (props.padding ? `padding: ${props.padding};` : '')}
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  ${(props) => (props.position ? `position: ${props.position};` : '')}
  ${(props) => (props.top ? `top: ${props.top};` : '')}
  ${(props) => (props.left ? `left: ${props.left};` : '')}
  ${(props) => (props.bg ? `background: ${props.bg};` : '')}
  ${(props) => (props.flexWrap ? `flex-wrap: ${props.flexWrap};` : '')}
  ${(props) =>
    props.borderBottom ? `border-bottom: ${props.borderBottom};` : ''}
  ${(props) => (props.maxHeight ? `max-height: ${props.maxHeight};` : '')}
  ${(props) => (props.shadow ? `box-shadow: ${props.shadow};` : '')}
  ${(props) => (props.minHeight ? `min-height: ${props.minHeight};` : '')}
`;
