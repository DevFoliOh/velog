import { Link } from 'react-router-dom';

const { default: styled } = require('styled-components');

export const Header = styled.header`
  height: 4rem;
`;

export const HeaderContent = styled.div`
  max-width: 1024px;
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoImg = styled.svg`
  margin-right: 1rem;
  width: 1.75rem;
  height: 1.75rem;
  display: block;
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  outline: none;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 0.75rem;

  &:hover {
    background-color: #0000000b;
  }
`;

export const WriteBtn = styled(Link)`
  display: flex;
  align-items: center;
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  border-radius: 1rem;
  outline: none;
  font-weight: bold;
  word-break: keep-all;
  border: 1px solid rgb(52, 58, 64);
  transition: all 0.125s ease-in 0s;
  cursor: pointer;
  margin-right: 1.25rem;
  text-decoration: none;
  background: white;
  color: rgb(52, 58, 64);
  &:hover {
    background-color: #343a40;
    color: #ffffff;
  }
`;

export const Profile = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const ProfileImg = styled.img`
  display: block;
  height: 2.5rem;
  width: 2.5rem;
  box-shadow: rgb(0 0 0 / 9%) 0px 0px 8px;
  border-radius: 50%;
  object-fit: cover;
  transition: all 0.125s ease-in 0s;
`;

export const Dropdown = styled.svg`
  font-size: 1.5rem;
  margin-left: 0.25 rem;
  color: rgb(134, 142, 150);
  transition: all 0.125s ease-in 0s;
  margin-right: -0.4375 rem;

  &:hover {
    color: rgb(52, 58, 64);
  }
`;
