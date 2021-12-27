import styled from 'styled-components';
import { palette } from 'Styles/palette';

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
  size: '1.125rem',
  line: '1.7',
  margin: '0',
  bold: '400',
  color: palette.gray[12],
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
      ? 'display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; text-overflow: ellipsis;height: 3.9375rem; overflow: hidden; '
      : ''}

  ${(props) => (props.wordBr ? `word-break: ${props.wordBr}` : '')};
  ${(props) => (props.wrap ? `overflow-wrap: ${props.wrap}` : '')};
`;
