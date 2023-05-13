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

export const SearchInput = styled.input`
  display: block;
  margin-left: auto;
  border: 0.6px solid var(--element-grey);
  border-radius: 8px;
  width: 160px;
  height: 30px;
  padding: 0 13px;
  display: flex;
  align-items: center;
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
  padding: 6px 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
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
  &:hover,
  &:focus {
    background-color: var(--hover-grey);
    cursor: pointer;
  }
`;
