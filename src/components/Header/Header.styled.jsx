import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderStyled = styled.div`
  height: 77px;
  padding-top: 40px;
  display: flex;
  align-items: center;
  position: sticky;
  justify-content: space-between;
  top: 0px;
  z-index: 1000;
  border-radius: 0 0 10px 10px;
  background-color: ${(prop) =>
    prop.isFixed ? "var(--pure-white)" : "transparent"};
  padding: ${(prop) => (prop.isFixed ? "0 20px" : "0px")};
  box-shadow: ${(prop) =>
    prop.isFixed ? "0px 10px 24px -14px rgba(0,0,0,0.4)" : "none"};
  animation: ${({ isFixed }) =>
    isFixed ? "headerAnimationOn .3s linear" : "none"};

  @keyframes headerAnimationOn {
    0% {
      background-color: transparent;
      box-shadow: none;
      padding: 0;
    }

    100% {
      background-color: var(--pure-white);
      box-shadow: 0px 10px 24px -14px rgba(0, 0, 0, 0.4);
      padding: 0 20px;
    }
  }
`;

export const Logo = styled.img`
  position: relative;
  top: ${(prop) => (prop.isFixed ? "0px" : "-6px")};
  display: block;
`;

export const ThemeButton = styled.button`
  display: block;
  background-color: var(--pure-white);
  height: 36px;
  width: 36px;
  border-radius: 10px;
  display: flex;
  justify-content: ${(prop) => (prop.themeType ? "flex-start" : "flex-end")};
  align-items: center;
  padding: 0 3px;
  transition: 0.3s;
  overflow: hidden;
  & > svg {
    font-size: 23px;
    color: var(--accent);
  }
  &:hover,
  &:active {
    background-color: var(--hover-grey);
  }
`;

export const ThemeButtonDotLight = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  color: var(--text-main);
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  animation: ${({ themeType }) =>
    themeType
      ? "headerAnimationOn .6s linear"
      : "headerAnimationOff .6s linear"};

  @keyframes headerAnimationOn {
    0% {
      top: -30px;
    }

    100% {
      top: 0;
    }
  }
  @keyframes headerAnimationOff {
    0% {
      top: 0;
    }

    100% {
      top: 30px;
    }
  }
`;

export const ThemeButtonDotDark = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  color: var(--text-main);
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  animation: ${({ themeType }) =>
    !themeType
      ? "headerAnimationOn .6s linear"
      : "headerAnimationOff .6s linear"};

  @keyframes headerAnimationOn {
    0% {
      top: -30px;
    }

    100% {
      top: 0;
    }
  }
  @keyframes headerAnimationOff {
    0% {
      top: 0;
    }

    100% {
      top: 30px;
    }
  }
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
  /* margin-left: auto; */
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Login = styled.button`
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
    margin-right: 6px;
    color: var(--accent);
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
  &:hover,
  &:active {
    background-color: var(--hover-grey);
  }
`;

export const UserImage = styled.img`
  margin-right: 7px;
  width: 24px;
  height: 24px;
  border-radius: 6px;
`;
