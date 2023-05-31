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
  z-index: 1001;
`;

export const Modal = styled.div`
  /* width: 540;
  height: 381; */
  background: #f7f7f7;
  border-radius: 10px;
  display: flex;
  padding: 6px 0 6px 6px;
  position: relative;
`;

export const ModalPoster = styled.img`
  border-radius: 10px;
  display: block;
`;

export const ModalContent = styled.div`
  width: 380px;
  padding: 0 6px 0 12px;
  display: flex;
  flex-direction: column;
`;

export const ModalContentHeader = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 3px;
  padding-bottom: 6px;
  margin-bottom: 10px;
  border-bottom: 1px solid var(--element-grey);
`;

export const Title = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
  max-width: 320px;
`;

export const Year = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  margin-top: 6px;
  color: var(--text-main-transparent);
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

export const ModalContentBody = styled.div``;

export const ModalParagraph = styled.p`
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  color: var(--text-main-transparent);
  &:last-child {
    max-height: 114px;
    overflow-y: scroll;
  }
  & > span {
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
    color: var(--text-main);
  }
`;

export const ModalContentFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: auto;
  padding-bottom: 10px;
`;

export const TrailerList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const TrailerItem = styled.li`
  width: 112px;
  height: 70px;
  border-radius: 10px;
  background-image: url(${(props) => props.path});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;

export const TrailerButton = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  background: #00000090;
  cursor: pointer;
  &:hover,
  &:focus {
    background: red;
    & > img {
      width: 82%;
    }
  }
`;

export const YoutubeLogo = styled.img`
  width: 44px;
  height: auto;
  transition: 0.3s;
  animation: scaling 2s ease-in-out infinite;
  @keyframes scaling {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const AddButton = styled.button`
  background-color: transparent;
  height: 36px;
  display: flex;
  align-items: center;
  border: 1px solid var(--accent);
  color: var(--accent);
  border-radius: 10px;
  padding: 0px 16px;
  transition: 0.3s;
  &:hover,
  &:active {
    background-color: var(--hover-grey);
  }
`;

export const StarsList = styled.ul`
  display: flex;
  gap: 4px;
  background-color: var(--pure-white);
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 0px 10px;
`;

export const StarItem = styled.li`
  transition: 0.3s;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const StarButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-size: 22px;
  color: var(--accent);
`;

export const ConfirmButton = styled.button`
  background-color: var(--accent);
  color: var(--pure-white);
  height: 36px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 0px 16px;
  transition: 0.3s;
  &:hover,
  &:active {
    background-color: var(--accent-hover);
  }
`;

export const MoreCheck = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;

  &:hover,
  &:focus {
    & > button > svg {
      transition: 0.3s;
      transform: scale(1.1);
    }
  }
`;

export const MoreCheckButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 18px;
  border-radius: 10px;
  background-color: var(--pure-white);
  transition: 0.3s;
  & > svg {
    font-size: 22px;
  }
  /* background-color: ${({ forLater }) =>
    forLater === true ? "var(--accent)" : "var(--pure-white)"}; */
  color: ${({ forLater }) =>
    forLater === true ? "var(--accent)" : "var(--text-main)"};
  border: ${({ forLater }) =>
    forLater === true ? "1px solid var(--accent)" : "transparent"};
`;
