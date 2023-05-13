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
