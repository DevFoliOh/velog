import styled from 'styled-components';

export const Text = (props) => {
  const { size, line, margin, bold, color, clamp, wordBr, wrap, children } =
    props;

  const styles = {
    size,
    line,
    margin,
    bold,
    color,
    clamp,
    wordBr,
    wrap,
  };

  return <ElText {...styles}>{children}</ElText>;
};

Text.defaultProps = {
  size: '1rem',
  line: '1.5',
  margin: '0',
  bold: '400',
  color: '#343a40',
  clamp: false,
  wordBr: 'keep-all',
  wrap: 'break-word',
  children: null,
};

const ElText = styled.p`
  letter-spacing: -0.0004em;
  font-size: ${(props) => props.size};
  line-height: ${(props) => props.line};
  margin: ${(props) => props.margin};
  font-weight: ${(props) => props.bold};
  color: ${(props) => props.color};
  ${(props) =>
    props.clamp
      ? 'display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; text-overflow: ellipsis; height: 4rem; overflow: hidden; '
      : ''}
  ${(props) => (props.wordBr ? `word-break: ${props.wordBr}` : '')};
  ${(props) => (props.wrap ? `overflow-wrap: ${props.wrap}` : '')};
`;
