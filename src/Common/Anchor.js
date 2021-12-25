import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Anchor(props) {
  const { children, to, _onClick } = props;

  return <ElAnchor to={to}>{children}</ElAnchor>;
}

const ElAnchor = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
`;
