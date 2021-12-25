import styled from 'styled-components';

export default function Grid(props) {
  const {
    is_flex,
    column,
    flex,
    align,
    justify,
    padding,
    margin,
    position,
    top,
    left,
    flexWrap,
    maxHeight,
    minHeight,
    children,
  } = props;

  const styles = {
    is_flex,
    column,
    flex,
    align,
    justify,
    padding,
    margin,
    position,
    top,
    left,
    maxHeight,
    minHeight,
    flexWrap,
  };

  return <GridBox {...styles}>{children}</GridBox>;
}

Grid.defaultProps = {
  is_flex: false,
  column: false,
  flex: false,
  align: '',
  justify: '',
  padding: '0',
  margin: '0',
  position: 'absolute',
  top: '0',
  left: '0',
  flexWrap: 'wrap',
  maxHeight: '0',
  minHeight: '0',
  children: null,
};

const GridBox = styled.div`
  /* box-sizing: border-box; */
  ${(props) => (props.is_flex ? 'display: flex' : '')};
  ${(props) => (props.column ? 'flex-direction: column' : '')};
  ${(props) => (props.flex ? 'flex: 1 1 0%' : '')};
  ${(props) => (props.align ? `align-items: ${props.align};` : '')}
  ${(props) => (props.justify ? `justify-content: ${props.justify};` : '')}
  ${(props) => (props.position ? `position: ${props.position};` : '')}
  ${(props) => (props.top ? `top: ${props.top};` : '')}
  ${(props) => (props.left ? `left: ${props.left};` : '')}
  ${(props) => (props.padding ? `padding: ${props.padding};` : '')}
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  ${(props) => (props.flexWrap ? `flex-wrap: ${props.flexWrap};` : '')}
  ${(props) => (props.maxHeight ? `max-height: ${props.maxHeight};` : '')}
  ${(props) => (props.minHeight ? `min-height: ${props.minHeight};` : '')}
`;
