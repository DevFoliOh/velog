import styled from 'styled-components';

export default function Responsive({ children }) {
  return <ElResponsive>{children}</ElResponsive>;
}

const ElResponsive = styled.div`
  width: 768px;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 3.5rem;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1024px) {
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0.5rem;
  }
`;
