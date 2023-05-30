import styled from "styled-components";

export const MainPosters = styled.div`
  display: flex;
  gap: 20px;
`;

export const MainPosterStyled = styled.div`
  margin-bottom: 12px;
  border-radius: 10px;
  width: 49%;
  height: 220px;
  background-color: var(--pure-white);
  overflow: hidden;
  position: relative;
`;

export const Poster = styled.img`
  position: relative;
  animation: fade 8s ease-in-out infinite;
  @keyframes fade {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    85% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const MainPosterElementLeft = styled.div`
  position: absolute;
  /* width: 0;
  height: 0;
  left: 0;
  top: 0;
  border-top: 220px solid var(--pure-white);
  border-right: 60px solid transparent; */
  z-index: 1000;
  opacity: 0.6;
  width: 140px;
  height: 140px;
  overflow: hidden;
  &:before {
    content: "";
    display: block;
    width: 200%;
    height: 200%;
    position: absolute;
    border-radius: 50%;
    top: 0;
    left: 0;
    box-shadow: -50px -50px 0 0 var(--accent-transparent);
  }
  animation: fade 8s ease-in-out infinite;
  @keyframes fade {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    85% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const MainPosterElementRight = styled.div`
  position: absolute;
  /* width: 0;
  height: 0; */
  right: 34%;
  bottom: 0;
  /* border-bottom: 220px solid var(--pure-white);
  border-left: 60px solid transparent; */
  z-index: 1000;
  width: 170px;
  height: 170px;
  overflow: hidden;
  &:before {
    content: "";
    display: block;
    width: 200%;
    height: 200%;
    position: absolute;
    border-radius: 50%;
    bottom: 0;
    right: 0;
    box-shadow: 50px 50px 0 0 var(--pure-white);
  }
`;

export const MainPosterContent = styled.div`
  position: absolute;
  width: 34%;
  height: 100%;
  left: 66%;
  top: 0;
  background-color: var(--pure-white);
  z-index: 1000;
`;
