import styled from "styled-components";

export const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(36, 36, 36, 0.2);
  backdrop-filter: blur(2px);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  width: 340px;
  /* height: 381px; */
  background: #f7f7f7;
  border-radius: 10px;
  padding: 34px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 6px;
  right: 6px;
  background-color: transparent;
  & > svg {
    font-size: 20px;
    color: var(--text-main);
    &:hover,
    &:focus {
      color: var(--text-main-transparent);
    }
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
  /* border-bottom: 1px solid var(--element-grey); */
`;

export const OrElement = styled.p`
  font-size: 12px;
  color: var(--element-grey);
  /* color: var(--text-main-transparent); */
  position: relative;
  &::before {
    content: "";
    width: 121px;
    height: 1px;
    background-color: var(--element-grey);
    /* background-color: var(--text-main-transparent); */
    position: absolute;
    top: 50%;
    left: 20px;
  }
  &::after {
    content: "";
    width: 121px;
    height: 1px;
    background-color: var(--element-grey);
    /* background-color: var(--text-main-transparent); */
    position: absolute;
    top: 50%;
    right: 20px;
  }
`;

export const Title = styled.p`
  text-align: center;
  margin-bottom: 20px;
  font-size: 22px;
  color: var(--text-main-transparent);
`;

export const MailInput = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 8px;
  border: 1px solid var(--text-main-transparent);
  background-color: var(--pure-white);
  padding: 0 12px;
  font-size: 16px;
  transition: 0.3s;
  &:hover,
  &:focus {
    border: 1px solid var(--text-main);
  }
  ::placeholder {
    color: var(--text-main-transparent);
  }
  &:focus {
    border: 1px solid var(--accent);
    outline: none;
    ::placeholder {
      color: transparent;
    }
  }
  &:last-of-type {
    margin-bottom: 12px;
  }
`;

export const ButtonSubmit = styled.button`
  width: 100%;
  height: 46px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  background-color: var(--accent);
  font-size: 18px;
  color: var(--pure-white);
  transition: 0.3s;
  &:hover,
  &:focus {
    background-color: var(--accent-hover);
  }
`;

export const RegisterButton = styled.button`
  color: var(--text-main);
  text-decoration: underline;
  transition: 0.3s;
  font-size: 14px;
  background-color: transparent;
  &:hover,
  &:focus {
    color: var(--text-main-transparent);
  }
`;

export const GoogleLogin = styled.button`
  width: 100%;
  height: 46px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 26px;
  transition: 0.3s;
  background-color: transparent;
  border: 1px solid var(--text-main-transparent);
  & > svg {
    font-size: 22px;
    margin-right: 10px;
  }
  & > p {
    font-size: 18px;
    color: var(--text-main);
    position: relative;
    top: 1px;
  }
  &:hover,
  &:focus {
    background-color: var(--hover-grey);
  }
`;
