import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderStyled = styled.div`
  height: 77px;
  display: flex;
  align-items: center;
  padding: 0 51px;
`;

export const Logo = styled.img`
  margin-right: 30px;
  position: relative;
  top: -4px;
`;

export const Navigation = styled.nav``;

export const NavigationList = styled.ul`
  display: flex;
`;

export const NavigationItem = styled.li``;

export const NavigationLink = styled(NavLink)`
  color: #242424;
  font-size: 16px;
  line-height: 19px;
  color: #242424;
  position: relative;
  &:first-child {
    margin-right: 20px;
  }
  &.active {
    color: #fb6d00;
    &::after {
      content: "";
      width: 100%;
      height: 1px;
      background-color: #fb6d00;
      position: absolute;
      bottom: -2px;
      left: 0;
    }
  }
`;

export const Login = styled.button`
  background: #ffffff;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  margin-left: auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  & > svg {
    margin-right: 10px;
    font-size: 18px;
  }
  &:hover,
  &:active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const Logintext = styled.p`
  font-size: 16px;
  line-height: 19px;
  color: #242424;
`;
