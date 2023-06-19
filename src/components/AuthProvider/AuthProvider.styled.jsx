import styled from "styled-components";

export const AuthContainer = styled.div`
  background-color: var(--pure-white);
  min-height: calc(100vh - 217px);
  padding: 0 20px 40px 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AuthParagraph = styled.div`
  margin-top: 40px;
  & > span {
    color: var(--accent);
  }
`;

export const Login = styled.button`
  background-color: var(--accent);
  font-size: 18px;
  line-height: 20px;
  color: ${(prop) =>
    prop.themetype ? "var(--pure-white)" : "var(--nav-black)"};
  height: 44px;
  width: 100px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  display: flex;
  transition: 0.3s;
  margin-top: 20px;
  & > svg {
    font-size: 23px;
    color: ${(prop) =>
      prop.themetype ? "var(--pure-white)" : "var(--nav-black)"};
    margin-right: 6px;
  }
  &:hover,
  &:active {
    background-color: var(--accent-hover);
  }
`;

export const Logintext = styled.p`
  font-size: 16px;
  line-height: 19px;
`;
