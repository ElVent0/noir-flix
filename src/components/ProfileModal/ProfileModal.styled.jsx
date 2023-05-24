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
  width: 540px;
  height: 381px;
  background: #f7f7f7;
  border-radius: 10px;
  display: flex;
  padding: 18px 12px;
  position: relative;
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

export const Logout = styled.button`
  background-color: var(--pure-white);
  font-size: 16px;
  line-height: 19px;
  color: var(--nav-black-transparent);
  height: 36px;
  align-items: flex-end;
  border-radius: 10px;
  padding: 6px 16px 6px 8px;
  display: flex;
  transition: 0.3s;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  & > svg {
    font-size: 23px;
    margin-right: 7px;
    color: var(--accent);
  }
  &:hover,
  &:active {
    background-color: var(--hover-grey);
  }
`;

export const Profile = styled.div`
  width: 50%;
  border-right: 1px solid var(--element-grey);
  padding-top: 60px;
`;

export const UserImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  width: 96px;
  height: 96px;
  border-radius: 50%;
`;

export const UserName = styled.p`
  text-align: center;
  color: var(--text-main);
  font-size: 16px;
  margin-bottom: 6px;
`;

export const UserMail = styled.p`
  text-align: center;
  color: var(--text-main);
  font-size: 14px;
`;

export const Statistics = styled.div``;
