import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderStyled = styled.div`
  height: 77px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  margin-left: 150px;
  position: relative;
  top: -6px;
`;

export const Navigation = styled.nav``;

export const NavigationList = styled.ul`
  display: flex;
`;

export const NavigationItem = styled.li``;

export const NavigationLink = styled(NavLink)`
  color: var(--nav-black);
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 16px;
  line-height: 19px;
  color: var(--nav-black);
  position: relative;
  transition: 0.3s;
  padding: 0px 12px;
  border-radius: 6px;
  &:first-child {
    margin-right: 4px;
  }
  &:hover,
  &:active {
    background-color: var(--hover-grey);
  }
  &.active {
    color: var(--accent);
  }
`;

export const LoginMenu = styled.div`
  margin-left: auto;
  display: flex;
  align-items: baseline;
  gap: 10px;
`;

export const Login = styled.button`
  background: var(--pure-white);
  height: 36px;
  align-items: center;
  border-radius: 10px;
  padding: 0px 12px;
  display: flex;
  transition: 0.3s;
  & > svg {
    font-size: 18px;
  }
  &:hover,
  &:active {
    background-color: var(--hover-grey);
  }
  &:first-of-type {
    color: #1778f2;
  }
`;

export const Logout = styled.button`
  background-color: var(--pure-white);
  color: var(--accent);
  height: 36px;
  align-items: center;
  border-radius: 10px;
  padding: 0px 12px;
  display: flex;
  transition: 0.3s;
  & > svg {
    font-size: 18px;
  }
  &:hover,
  &:active {
    background-color: var(--hover-grey);
  }
`;

export const Logintext = styled.p`
  font-size: 16px;
  line-height: 19px;
  color: var(--nav-black-transparent);
`;

export const Profile = styled.button`
  background-color: var(--pure-white);
  font-size: 16px;
  line-height: 19px;
  color: var(--nav-black-transparent);
  height: 36px;
  align-items: flex-end;
  border-radius: 10px;
  padding: 6px 16px 6px 8px;
  display: flex;
  transition: 0.3s;
  & > svg {
    font-size: 23px;
    margin-right: 7px;
    color: var(--accent);
  }
  &:hover,
  &:active {
    background-color: var(--hover-grey);
  }
`;
