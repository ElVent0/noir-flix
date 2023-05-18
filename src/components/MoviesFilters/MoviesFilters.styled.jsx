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
`;

export const Search = styled.div`
  display: block;
  margin-left: auto;
  border-radius: 8px;
  height: 30px;
  padding: 0 12px 0 8px;
  display: flex;
  align-items: center;
  & > svg {
    margin-right: 6px;
    font-size: ${({ focusEvent }) => (focusEvent === true ? "18px" : "16px")};
  }
  transition: 0.5s;
  width: ${({ focusEvent }) => (focusEvent === true ? "100%" : "160px")};
  border: ${({ focusEvent }) =>
    focusEvent === true ? "none" : "0.6px solid var(--element-grey)"};
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  color: var(---text-main);
  font-size: ${({ focusEvent }) => (focusEvent === true ? "18px" : "14px")};
  &::placeholder {
    font-size: ${({ focusEvent }) => (focusEvent === true ? "18px" : "14px")};
  }
  &:focus {
    outline: none;
  }
`;

export const FilterInputSort = styled.div`
  width: 100px;
  height: 30px;
  position: relative;
`;

export const HeaderSort = styled.button`
  width: 100%;
  height: 100%;
  border: 0.6px solid var(--element-grey);
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 4px 0 8px;
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
  width: 100px;
  background-color: var(--pure-white);
  border-radius: 4px;
  overflow: hidden;
  top: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  /* border: 1px solid var(--element-grey); */
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
  padding: 6px 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  &:hover,
  &:focus {
    background-color: var(--hover-grey);
  }
`;
