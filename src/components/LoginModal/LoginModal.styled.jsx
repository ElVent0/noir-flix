import styled from "styled-components";

export const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(57, 76, 84);
  background: radial-gradient(
    circle,
    rgba(57, 76, 84, 0.4) 0%,
    rgba(29, 33, 35, 0.6) 100%
  );
  backdrop-filter: blur(4px);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  animation: ${(props) =>
    props.isOpenModalLogin
      ? "upScaling 0.3s ease-in-out"
      : "downScaling 0.2s ease-in-out"};
  transform: translateZ(0);
  transform: translate3d(0, 0, 0);
  @keyframes upScaling {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes downScaling {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const Modal = styled.div`
  width: 640px;
  height: 451px;
  /* background-color: ${(prop) =>
    prop.themeType ? "var(--pure-white)" : "var(--hover-grey)"}; */
  /* background-color: var(--bg-grey); */
  border-radius: 10px;
  display: flex;
  overflow: hidden;
`;

export const UnderModal = styled.div`
  position: absolute;
  top: 25%;
  left: 35%;
  z-index: -1;
  height: 60%;
  width: 30%;
  filter: blur(140px);
  background-image: linear-gradient(
    132deg,
    var(--accent),
    #3c67e3 43%,
    #4e00c2
  );
  opacity: 1;
  transition: opacity 0.5s;
  animation: spin 5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ModalContent = styled.div`
  width: 340px;
  padding: 34px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-grey-transparent);

  &::before {
    content: "";
    width: 200%;
    height: 160%;
    border-radius: 8px;
    background: linear-gradient(132deg, var(--accent), #3d6eff 43%, #6600ff);
    position: absolute;
    filter: blur(80px);
    z-index: -1;
    top: -30%;
    left: -40%;
    animation: spin 2s linear infinite;
  }
`;

export const ModalPoster = styled.div`
  width: 300px;
  height: auto;
  background-image: linear-gradient(132deg, #13131320 20%, #3d6dffa3),
    url(${(props) => props.path});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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
`;

export const OrElement = styled.p`
  font-size: 12px;
  color: var(--element-grey);
  position: relative;
  &::before {
    content: "";
    width: 121px;
    height: 1px;
    background-color: var(--element-grey);
    position: absolute;
    top: 50%;
    left: 20px;
  }
  &::after {
    content: "";
    width: 121px;
    height: 1px;
    background-color: var(--element-grey);
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
  margin-bottom: 8px;
  border-radius: 10px;
  border: 1px solid var(--text-main-transparent);
  background-color: var(--pure-white);
  padding: 0 12px;
  font-size: 16px;
  transition: 0.3s;
  color: ${(prop) =>
    prop.themeType ? "var(--pure-white)" : "var(--text-main)"};
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

export const PasswordContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  margin-bottom: 8px;
  & > input {
    display: block;
    width: calc(100% - 44px);
    height: 100%;
    margin-bottom: 0;
  }
  & > button {
    width: 40px;
    height: 40px;
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    & > svg {
      font-size: 22px;
      color: var(--text-main-transparent);
    }
  }
`;

export const ButtonSubmit = styled.button`
  width: 100%;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: var(--accent);
  font-size: 18px;
  color: ${(prop) =>
    prop.themeType ? "var(--pure-white)" : "var(--text-main)"};
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
