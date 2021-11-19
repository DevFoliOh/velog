import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrap = styled.header`
  height: 4rem;
  padding: 0 1.3rem;
  background: transparent;
`;

const HeaderContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  color: rgb(33, 37, 41);
`;

const LogoImg = styled.svg`
  margin-right: 1rem;
  width: 1.75rem;
  height: 1.75rem;
  display: block;
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
`;

const Search = styled.div`
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

const WriteBtn = styled(Link)`
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

const Profile = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.img`
  display: block;
  height: 2.5rem;
  width: 2.5rem;
  box-shadow: rgb(0 0 0 / 9%) 0px 0px 8px;
  border-radius: 50%;
  object-fit: cover;
  transition: all 0.125s ease-in 0s;
`;

const Dropdown = styled.svg`
  font-size: 1.5rem;
  margin-left: 0.25 rem;
  color: rgb(134, 142, 150);
  transition: all 0.125s ease-in 0s;
  margin-right: -0.4375 rem;

  &:hover {
    color: rgb(52, 58, 64);
  }
`;

export const style = {
  HeaderWrap,
  HeaderContent,
  Logo,
  LogoImg,
  RightContent,
  Search,
  WriteBtn,
  Profile,
  ProfileImg,
  Dropdown,
  LogoLink,
};
