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
  background-repeat: no-repeat;
  backdrop-filter: blur(4px);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transform: translateZ(0);
  transform: translate3d(0, 0, 0);
  animation: ${(props) =>
    props.isOpenModal
      ? "upScaling 0.3s ease-in-out"
      : "downScaling 0.3s ease-in-out"};
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

export const ModalContainer = styled.div`
  display: flex;
`;

export const CollectionBlock = styled.div`
  width: 160px;
  margin-right: 6px;
  border-radius: 6px;
  overflow: hidden;
  height: auto;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: block;
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--bg-grey);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--accent);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: var(--accent-hover);
    border-radius: 4px;
  }
`;

export const CollectionList = styled.ul`
  max-height: 496px;
  margin-right: 4px;
`;

export const CollectionItem = styled.li`
  margin-bottom: 6px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  &:last-child {
    margin-bottom: 0;
  }
  &:after {
    content: "";
    width: 6px;
    height: 100%;
    position: absolute;
    background-color: var(--accent);
    right: 0;
    top: 0;
    opacity: ${({ isCurrentMovie }) => (isCurrentMovie ? "1" : "0.2")};
    transition: 0.6s;
  }
  &:hover,
  &:focus {
    &:after {
      opacity: ${({ isCurrentMovie }) => (isCurrentMovie ? "1" : "0.6")};
    }
  }
`;

export const CollectionItemLink = styled.button`
  display: flex;
  align-items: center;
  background-color: var(--bg-grey);
  border-radius: 10px;
  padding: 4px;
  color: var(--text-main);
  gap: 8px;
  width: 100%;
  height: 100%;
  transition: 0.6s;
  &:hover,
  &:focus {
    background-color: var(--hover-grey);
  }
`;

export const CollectionItemPoster = styled.img`
  border-radius: 6px;
`;

export const CollectionItemTitle = styled.p`
  width: 100%;
  font-size: 12.6px;
  text-align: left;
`;

export const Modal = styled.div`
  background: var(--bg-grey);
  border-radius: 10px;
  display: flex;
  padding: 6px 0 6px 6px;
  position: relative;
`;

export const ModalPoster = styled.img`
  border-radius: ${(props) =>
    props.page === "library" ? "10px 0 10px 10px" : "10px"};
  display: block;
`;

export const PosterContainer = styled.div`
  /* width: 300px;
  height: 430px; */
  width: 338px;
  height: 484px;
  position: relative;
  overflow: hidden;
`;

export const ModalContent = styled.div`
  width: 420px;
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
    transition: 0.3s;
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
    max-height: ${(props) => props.page === "research" && "144px"};
    max-height: ${(props) => props.page === "library" && "114px"};
    overflow-y: scroll;
    margin-bottom: 0;

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: var(--bg-grey);
    }

    ::-webkit-scrollbar-thumb {
      background: var(--pure-white);
      border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #9d9d9d;
      border-radius: 4px;
    }
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
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const TrailerItem = styled.li`
  width: 124px;
  height: 70px;
  border-radius: 4px;
  background-image: url(${(props) => props.path});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  position: relative;
  & > div {
    pointer-events: none;
  }
  /* &:hover,
  &:focus {
    & > div {
      display: none;
    }
  } */
`;

export const TrailerButton = styled.a`
  width: 100%;
  height: 100%;
  transition: 0.3s;
  background: #00000040;
  position: absolute;
  cursor: pointer;
  &:hover,
  &:focus {
    background: red;
    & > img {
      width: 82%;
      top: 0px;
      left: 14px;
    }
  }
  &:hover,
  &:focus {
    & ~ div {
      display: none;
    }
  }
`;

export const YoutubeLogo = styled.img`
  transition: 0.3s;
  position: relative;
  top: 4px;
  left: 4px;
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

export const TrailerName = styled.div`
  background-color: #0f0f0fad;
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 0;
  bottom: 0;
  overflow: hidden;
  & > p {
    text-align: center;
    font-size: 11.2px;
    color: #fff;
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
  /* background-color: var(--pure-white); */
  background-color: ${(prop) =>
    prop.editStarsMode ? "var(--pure-white)" : "transparent"};
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 0px 10px;
`;

export const StarsListBottom = styled.ul`
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
  transition: 0.6s;
  &:hover,
  &:focus {
    transform: ${(prop) => (prop.editStarsMode ? "rotate(20deg)" : "none")};
  }
`;

export const StarItemBottom = styled.li`
  transition: 0.6s;
  &:hover,
  &:focus {
    transform: rotate(20deg);
  }
`;

export const StarButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-size: 22px;
  color: ${({ starsColor }) => starsColor};
  cursor: ${(prop) => (prop.editStarsMode ? "pointer" : "auto")};
`;

export const StarButtonBottom = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-size: 22px;
  color: var(--accent);
`;

export const EditButton = styled.button`
  background-color: transparent;
  color: ${(prop) =>
    prop.themeType ? "var(--pure-white)" : "var(--text-main)"};
  height: 36px;
  width: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: 0.3s;
  margin-left: -6px;
  opacity: 0.4;
  & > svg {
    font-size: 22px;
  }
  &:hover,
  &:active {
    background-color: var(--pure-white);
    opacity: 1;
  }
`;

export const ConfirmButton = styled.button`
  background-color: var(--accent);
  color: ${(prop) =>
    prop.themeType ? "var(--pure-white)" : "var(--text-main)"};
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
`;

export const MoreCheckButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 18px;
  border-radius: 10px;
  transition: 0.6s;
  & > svg {
    transition: 0.6s;
    font-size: 22px;
  }
  color: ${({ forLater }) =>
    forLater === true ? "var(--pure-white)" : "var(--text-main)"};
  background: ${({ forLater }) =>
    forLater === true ? "var(--more-check)" : "var(--pure-white)"};
  border: ${({ forLater }) =>
    forLater === true ? "1px solid var(--more-check)" : "transparent"};
  & > svg {
    &:hover,
    &:focus {
      transform: rotate(20deg);
    }
  }
`;

export const MoreCheckPoster = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  background-color: var(--bg-grey);
  border-radius: 0 0 0 12px;
`;

export const MoreCheckButtonPoster = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 36px;
  height: 36px;
  font-size: 18px;
  top: 0;
  right: 0;
  border-radius: 10px;
  & > svg {
    font-size: 26px;
  }
  color: ${({ forLater }) =>
    forLater === true ? "var(--pure-white)" : "var(--text-main)"};
  background: ${({ forLater }) =>
    forLater === true ? "var(--more-check)" : "var(--bg-grey)"};
  border: ${({ forLater }) =>
    forLater === true ? "1px solid var(--more-check)" : "transparent"};

  & > svg {
    transition: 0.6s;
    &:hover,
    &:focus {
      transform: rotate(20deg);
    }
  }
`;

export const Rating = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 8px;
`;

export const CornerElementLeft = styled.div`
  position: absolute;
  z-index: 1000;
  width: 30px;
  height: 30px;
  overflow: hidden;
  transform: rotate(90deg);
  right: 42px;
  top: 0px;
  &:before {
    content: "";
    display: block;
    width: 200%;
    height: 200%;
    position: absolute;
    border-radius: 20%;
    top: 0;
    left: 0;
    box-shadow: -50px -50px 0 0 var(--bg-grey);
  }
`;

export const CornerElementBottom = styled.div`
  position: absolute;
  z-index: 1000;
  width: 30px;
  height: 30px;
  overflow: hidden;
  transform: rotate(90deg);
  right: -1px;
  top: 42px;
  &:before {
    content: "";
    display: block;
    width: 200%;
    height: 200%;
    position: absolute;
    border-radius: 20%;
    top: 0;
    left: 0;
    box-shadow: -50px -50px 0 0 var(--bg-grey);
  }
`;

export const DeleteFromLibraryButton = styled.button`
  font-size: 16px;
  color: var(--text-main);
  background-color: transparent;
  text-decoration: underline;
  margin-top: auto;
  width: 140px;
  text-align: left;
  position: relative;
  bottom: 10px;
  transition: 0.3s;
  &:hover,
  &:focus {
    color: var(--text-main-transparent);
  }
`;

export const InLibraryBlock = styled.div`
  margin-top: auto;
  position: relative;
  bottom: 10px;
  background-color: transparent;
  width: 112px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--accent-hover);
  color: ${(prop) =>
    prop.themeType ? "var(--pure-white)" : "var(--text-main)"};
  border-radius: 10px;
  & > svg {
    font-size: 18px;
    margin-right: 6px;
  }
`;
