import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const ModalContainer = styled.div`
  height: 400px;
  width: 278px;
  position: absolute;
  right: ${(prop) => (prop.isFixed ? "20px" : "0")};
  top: ${(prop) => (prop.isFixed ? "81px" : "77px")};
  z-index: 1005;
  animation: ${({ isFixed }) =>
    isFixed ? "rightChanging .3s linear" : "none"};
  @keyframes rightChanging {
    0% {
      right: 0;
    }

    100% {
      right: 20px;
    }
  }
`;

export const PlansList = styled.ul`
  width: 100%;
  height: 100%;
  background: var(--pure-white-bg);
  box-shadow: 0px 10px 40px -14px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  position: relative;
  padding: 40px 10px 10px 10px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: block;
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
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
  animation: ${(props) =>
    props.isopen
      ? "upScaling 0.3s ease-in-out"
      : "downScaling 0.3s ease-in-out"};
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

export const PlansHeader = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  z-index: 1;
  background-color: var(--pure-white);
  padding: 6px 10px 6px 10px;
  border-radius: 10px 0px 0px 10px;
  animation: ${(props) =>
    props.isopen
      ? "upScaling 0.3s ease-in-out"
      : "downScaling 0.3s ease-in-out"};
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

export const MoviesCounter = styled.p`
  background-color: transparent;
  font-size: 14px;
  line-height: 15px;
  color: var(--text-main-transparent);
  margin-left: 10px;
  margin-right: auto;
  position: relative;
  top: 4px;
`;

export const ReloadButton = styled.button`
  width: 20px;
  height: 20px;
  background-color: transparent;
  & > svg {
    font-size: 20px;
    color: var(--text-main);
    &:hover,
    &:focus {
      color: var(--text-main-transparent);
    }
    animation: rotation 1s linear;
  }
  ${(prop) =>
    prop.rotation &&
    css`
      animation: rotateAnimation 1s linear forwards;
    `};

  @keyframes rotateAnimation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const ButtonClose = styled.button`
  width: 20px;
  height: 20px;
  background-color: transparent;
  margin-right: 10px;
  & > svg {
    font-size: 20px;
    color: var(--text-main);
    &:hover,
    &:focus {
      color: var(--text-main-transparent);
    }
  }
`;

export const PlansItem = styled.li`
  display: flex;
  align-items: center;
  background-color: var(--bg-grey);
  border-radius: 10px;
  padding: 4px 10px 4px 4px;
  margin-bottom: 6px;
  transition: 0.3s;
  &:hover,
  &:focus {
    background-color: var(--hover-grey);
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const PlansLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 74%;
`;

export const PlansPoster = styled.img`
  border-radius: 10px;
  margin-right: 8px;
`;

export const PlansText = styled.div`
  /* width: 70%; */
`;

export const PlansName = styled.p`
  margin-bottom: 8px;
  font-size: 15px;
  line-height: 16px;
  font-weight: 700;
  color: var(--text-main);
  max-height: 32px;
  overflow: hidden;
`;

export const PlansYear = styled.p`
  font-size: 14px;
  line-height: 15px;
  color: var(--text-main-transparent);
`;

export const ButtonUp = styled.button`
  background-color: transparent;
  margin-right: 5px;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    font-size: 20px;
    color: var(--text-main-transparent);
    opacity: 0.2;
    transition: 0.3s;
    &:hover,
    &:focus {
      opacity: 0.6;
    }
  }
`;

export const PlansDeleteButton = styled.button`
  background-color: transparent;
  margin-left: auto;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    font-size: 20px;
    color: var(--text-main-transparent);
    opacity: 0.4;
    transition: 0.3s;
    &:hover,
    &:focus {
      opacity: 0.6;
    }
  }
`;

export const NothingBlock = styled.div`
  width: 100%;
  height: 100%;
  background: var(--pure-white-bg);
  box-shadow: 0px 10px 40px -14px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  animation: ${(props) =>
    props.isopen
      ? "upScaling 0.3s ease-in-out"
      : "downScaling 0.3s ease-in-out"};
  display: flex;
  justify-content: center;
  align-items: center;
  & > p {
    font-size: 14px;
    line-height: 15px;
    color: var(--text-main-transparent);
    width: 80%;
    text-align: center;
  }
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
