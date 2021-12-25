import styled from 'styled-components';
import { palette } from 'Styles/palette';

export default function Text(props) {
  const {
    clamp,
    size,
    line,
    letter,
    margin,
    bold,
    color,
    wordBr,
    wrap,
    children,
  } = props;

  const styles = {
    clamp,
    size,
    line,
    letter,
    margin,
    bold,
    color,
    wordBr,
    wrap,
  };

  return <ElText {...styles}>{children}</ElText>;
}

Text.defaultProps = {
  clamp: false,
  size: '1.125rem',
  line: '1.7',
  letter: '-0.004em',
  margin: '18px 0 18px',
  bold: '400',
  color: palette.gray[10],
  wordBr: 'keep-all',
  wrap: 'break-word',
  children: null,
};

const ElText = styled.p`
  font-size: ${(props) => props.size};
  line-height: ${(props) => props.line};
  letter-spacing: -0.0004em;
  margin: ${(props) => props.margin};
  font-weight: ${(props) => props.bold};
  color: ${(props) => (props.clamp ? 'rgb(53, 77, 102)' : props.color)};

  ${(props) =>
    props.clamp
      ? 'display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; text-overflow: ellipsis;height: 3.9375rem; overflow: hidden; '
      : ''}

  word-break: ${(props) => props.wordBr};
  ${(props) => (props.wrap ? `overflow-wrap: ${props.wrap}` : '')};
`;

const P = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0px 0px 1.5rem;
  color: rgb(73, 80, 87);

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  height: 3.9375rem;
  overflow: hidden;

  word-break: break-word; // 또는 keep-all
  overflow-wrap: break-word;
`;
