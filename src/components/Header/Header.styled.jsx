import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderStyled = styled.div`
  height: 77px;
  display: flex;
  align-items: center;
  /* padding: 0 51px; */
`;

export const Logo = styled.img`
  margin-right: 22px;
  position: relative;
  top: -4px;
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

export const Login = styled.button`
  background: var(--pure-white);
  height: 40px;
  align-items: center;
  border-radius: 10px;
  padding: 0px 12px;
  display: flex;
  margin-left: auto;
  transition: 0.3s;
  & > svg {
    margin-right: 10px;
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
  color: var(--nav-black);
`;
