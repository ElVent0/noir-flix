import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LibraryStyled = styled.div`
  background-color: var(--pure-white);
  min-height: calc(100vh - 194px);
  padding: 0 20px 40px 20px;
  border-radius: 10px;
  position: relative;
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
`;

export const NavigationLink = styled(NavLink)`
  color: var(--pure-white);
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
