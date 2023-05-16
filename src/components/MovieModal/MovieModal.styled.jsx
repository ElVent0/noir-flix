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
  /* width: 540;
  height: 381; */
  background: #f7f7f7;
  border-radius: 10px;
  display: flex;
  padding: 6px 0 6px 6px;
`;

export const ModalPoster = styled.img`
  border-radius: 10px;
  display: block;
`;

export const ModalContent = styled.div`
  width: 380px;
  padding: 0 6px 0 12px;
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
  margin-left: auto;
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
    margin-bottom: 0;
  }
  & > span {
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
    color: var(--text-main);
  }
`;

export const ModalContentFooter = styled.div``;
