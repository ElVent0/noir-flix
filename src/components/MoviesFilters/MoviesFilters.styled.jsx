import styled from "styled-components";

export const Filters = styled.div`
  display: flex;
  align-items: center;
  height: 68px;
  border-bottom: 1px solid var(--element-grey);
`;

export const FiltersParagraph = styled.p`
  font-size: 14px;
  line-height: 17px;
  color: var(--text-main);
  margin-right: 10px;
  margin-left: 30px;
  position: relative;
  &::before {
    content: "";
    width: 1px;
    height: 30px;
    background-color: var(--element-grey);
    position: absolute;
    left: -15px;
    top: -6.5px;
  }
  &:first-child {
    margin-left: 0;
    &::before {
      display: none;
    }
  }
  animation: animateOpacity 1s linear;
  @keyframes animateOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const FilterInputSort = styled.div`
  width: 120px;
  height: 36px;
  position: relative;
  animation: animateOpacity 1s linear;
  @keyframes animateOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const HeaderSort = styled.button`
  width: 100%;
  height: 100%;
  border: 0.6px solid var(--element-grey);
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 4px 0 12px;
  color: var(--text-main);
  background-color: transparent;
  & > svg {
    margin-left: auto;
    font-size: 14px;
  }
`;

export const BodySort = styled.ul`
  position: absolute;
  z-index: 1000;
  width: 120px;
  background-color: var(--pure-white);
  border-radius: 4px;
  overflow: hidden;
  top: 36px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

export const ItemSort = styled.li`
  position: relative;
  &::after {
    content: "";
    width: 86%;
    height: 1px;
    background-color: var(--element-grey);
    position: absolute;
    bottom: 0;
    left: 7%;
  }
  &:last-child {
    &::after {
      display: none;
    }
  }
`;

export const ButtonSort = styled.button`
  width: 100%;
  text-align: start;
  background-color: var(--pure-white);
  padding: 6px 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: var(--text-main);
  transition: 0.3s;
  &:hover,
  &:focus {
    background-color: var(--hover-grey);
  }
`;

export const Search = styled.div`
  display: block;
  margin-left: auto;
  border-radius: 8px;
  height: 36px;
  padding: 0 12px 0 8px;
  display: flex;
  align-items: center;
  & > svg {
    margin-right: 6px;
    font-size: ${({ focusEvent }) => (focusEvent === true ? "18px" : "16px")};
  }
  transition: 0.6s;
  width: ${({ focusEvent }) => (focusEvent === true ? "100%" : "160px")};
  border: ${({ focusEvent }) =>
    focusEvent === true ? "none" : "0.6px solid var(--element-grey)"};
  animation: ${({ focusEvent }) =>
    focusEvent === true
      ? "animateBorderLeft .3s linear"
      : "animateBorderRight .6s linear"};
  @keyframes animateBorderRight {
    0% {
      border: 0.6px solid transparent;
    }
    100% {
      border: 0.6px solid var(--element-grey);
    }
  }
  @keyframes animateBorderLeft {
    0% {
      border: 0.6px solid var(--element-grey);
    }
    100% {
      border: 0.6px solid transparent;
    }
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  color: var(--text-main);
  font-size: ${({ focusEvent }) => (focusEvent === true ? "18px" : "14px")};
  &::placeholder {
    font-size: ${({ focusEvent }) => (focusEvent === true ? "18px" : "14px")};
    color: var(--text-main);
  }
  &:focus {
    outline: none;
  }
`;

export const CloseSearchButton = styled.button`
  display: block;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--pure-white);
  background-color: var(--element-grey);
  border-radius: 8px;
  padding: 0;
  font-size: 18px;
  transition: 0.3s;
  &:hover,
  &:focus {
    background-color: ${(prop) =>
      prop.themeType ? "var(--hover-grey)" : "var(--nav-black)"};
  }
`;

export const StarsList = styled.ul`
  display: flex;
  gap: 4px;
  animation: animateOpacity 1s linear;
  @keyframes animateOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const StarItem = styled.li``;

export const StarButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-size: 22px;
  color: var(--accent);
  & > svg {
    transition: 0.6s;
    &:hover,
    &:focus {
      transform: rotate(20deg);
    }
  }
`;

export const ButtonAll = styled.button`
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  padding: 0 10px;
  transition: 0.6s;
  border-radius: 8px;
  font-size: 16px;
  background-color: ${(props) =>
    props.stars === 0 ? "var(--accent)" : "var(--pure-white)"};
  color: ${(props) => (props.stars === 0 ? "#fff" : "var(--accent)")};
  border: 1px solid var(--accent);
  &:hover,
  &:focus {
    background-color: ${(props) =>
      props.stars === 0 ? "var(--accent-hover)" : "var(--bg-grey)"};
  }
  animation: animateOpacity 1s linear;
  @keyframes animateOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const MoreCheck = styled.div`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: animateOpacity 1s linear;
  @keyframes animateOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const MoviesCounter = styled.p`
  margin-left: auto;
  font-size: 14px;
  color: var(--text-main-transparent);
`;

export const MoreCheckButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: transparent;
  font-size: 17px;
  transition: 0.3s;
  border-radius: 8px;
  background: ${({ forLater }) =>
    forLater === true ? "var(--more-check)" : "var(--bg-grey)"};
  color: ${({ forLater }) =>
    forLater === true ? "var(--pure-white)" : "var(--text-main)"};
  & > svg {
    transition: 0.6s;
    &:hover,
    &:focus {
      transform: rotate(20deg);
    }
  }
`;

export const GenresList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-right: 20px;
  max-width: 750px;
  animation: animateOpacity 1s linear;
  @keyframes animateOpacity {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const GenresItem = styled.li`
  border-radius: 8px;
  background-color: ${(prop) =>
    prop.isActive ? "var(--accent)" : "var(--hover-grey)"};
  transition: 0.3s;
  &:hover,
  &:focus {
    background-color: ${(prop) =>
      prop.isActive ? "var(--accent)" : "var(--element-grey)"};
  }
`;

export const GenresButton = styled.button`
  padding: 5px 10px;
  border-radius: 8px;
  background-color: transparent;
  color: ${({ isActive, themeType }) =>
    isActive && themeType ? "var(--pure-white)" : "var(--nav-black)"};
`;
