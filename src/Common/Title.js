import styled from 'styled-components';

export const Title = (props) => {
  const { h1, h3, h4, children } = props;

  const styles = {
    h1,
    h3,
    h4,
  };

  return (
    <Title {...styles}>
      {h1 ? (
        <H1>{children}</H1>
      ) : h3 ? (
        <H3>{children}</H3>
      ) : h4 ? (
        <H4>{children}</H4>
      ) : (
        ''
      )}
    </Title>
  );
};

Title.defaultProps = {
  h1: false,
  h3: false,
  h4: false,
};

const H1 = styled.h1`
  font-size: 3rem;
  line-height: 1.5;
  letter-spacing: -0.004em;
  margin: 0 0 2rem;
  font-weight: 800;
  color: rgb(52, 58, 64);
  word-break: keep-all;

  @media (max-width: 1024px) {
    font-size: 2.25rem;
  }
`;

const H3 = styled.h3`
  font-size: 1.5rem;
  line-height: 1.5;
  letter-spacing: -0.004em;
  margin: 1.5rem 0 1rem;
  font-weight: 700;
  color: rgb(34, 36, 38);
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }
`;

const H4 = styled.h4`
  font-size: 1rem;
  margin: 0px 0px 0.25rem;
  line-height: 1.5;
  word-break: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: rgb(33, 37, 41);
`;
