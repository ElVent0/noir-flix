import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LibraryStyled = styled.div`
  background-color: var(--pure-white);
  min-height: calc(100vh - 217px);
  padding: 0 20px 40px 20px;
  border-radius: 10px;
  position: relative;
  animation: anumationOn 0.6s linear;
  @keyframes anumationOn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 100%;
    }
  }
`;

export const NothingBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  & > img {
    display: block;
    margin: 0 auto 20px auto;
  }
  & > p {
    text-align: center;
  }
  /* animation: anumationOn 10s linear;
  @keyframes anumationOn {
    0% {
      opacity: 0;
    }
    0% {
      opacity: 50%;
    }

    100% {
      opacity: 100%;
    }
  } */
`;

export const NavigationLink = styled(NavLink)`
  color: ${(prop) =>
    prop.themeType ? "var(--pure-white)" : "var(--text-main)"};
  background-color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 120px;
  font-size: 16px;
  line-height: 19px;
  border-radius: 10px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  &:first-child {
    margin-right: 4px;
  }
  &:hover,
  &:active {
    background-color: var(--accent-hover);
  }
`;
