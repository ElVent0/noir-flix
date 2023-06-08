import styled from "styled-components";

export const Ellipsis = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  text-align: center;
  & > div {
    position: absolute;
    top: 33px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--accent);
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  & > div:nth-child(1) {
    left: 10px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  & > div:nth-child(2) {
    left: 10px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  & > div:nth-child(3) {
    left: 40px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  & > div:nth-child(4) {
    left: 60px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(30px, 0);
    }
  }
`;
