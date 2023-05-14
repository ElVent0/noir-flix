import styled from "styled-components";

export const MoviesNavigationStyled = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 14px;
`;

export const MoviesNavigationList = styled.ul`
  display: flex;
  gap: 6px;
`;

export const MoviesNavigationItem = styled.li`
  height: 26px;
`;

export const MoviesNavigationButton = styled.button`
  height: 100%;
  padding: 6px;
  min-width: 26px;
  background-color: var(--bg-grey);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text-main);
  &:hover,
  &:focus {
    background-color: var(--element-grey);
  }
`;

export const MoviesNavigationButtonActive = styled.button`
  height: 100%;
  padding: 6px;
  min-width: 26px;
  background-color: var(--accent);
  color: var(--pure-white);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EndButton = styled.button`
  background-color: var(--bg-grey);
  padding: 6px 12px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text-main);
  &:hover,
  &:focus {
    background-color: var(--element-grey);
  }
  & > svg {
    margin-left: auto;
    font-size: 14px;
  }
`;
