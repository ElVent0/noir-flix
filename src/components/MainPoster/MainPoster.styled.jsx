import styled from "styled-components";

export const MainPosters = styled.div`
  display: flex;
  gap: 12px;
  animation: anumationOn 0.6s linear;
  @keyframes anumationOn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 100%;
    }
  }
`;

export const MainPosterStyled = styled.div`
  margin-bottom: 12px;
  border-radius: 10px;
  width: 1188px;
  height: 220px;
  background-color: var(--pure-white);
  overflow: hidden;
  position: relative;
`;

export const Poster = styled.div`
  position: relative;
  animation: fade 8s ease-in-out infinite;
  width: 66%;
  height: 220px;
  background-image: linear-gradient(transparent, #00000099),
    url(${(props) => props.path});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left;
  @keyframes fade {
    0% {
      opacity: 0;
    }
    5% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    95% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const MainPosterElementLeft = styled.div`
  position: absolute;
  z-index: 998;
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
    80% {
      opacity: 1;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const MainPosterElementRight = styled.div`
  position: absolute;
  right: 34%;
  bottom: 0;
  z-index: 998;
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
  z-index: 998;
  padding: 12px;
`;

export const MainPosterRating = styled.p`
  position: absolute;
  color: var(--pure-white);
  left: 12px;
  top: 12px;
  z-index: 999;
  font-size: 20px;
  font-weight: 900;
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
    80% {
      opacity: 1;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const MainPosterName = styled.p`
  position: absolute;
  bottom: 12px;
  left: 12px;
  z-index: 998;
  color: var(--pure-white);
  font-size: 22px;
  width: 280px;
  & > span {
    color: var(--element-grey);
    margin-left: 10px;
    font-weight: 400;
  }
  font-weight: 700;
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
    80% {
      opacity: 1;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const MainPosterAbout = styled.p`
  height: 160px;
  font-size: 14px;
  line-height: 15px;
  color: var(--text-main);
  overflow: hidden;
  -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.1)
  );
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1));
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
    80% {
      opacity: 1;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const MainPosterMore = styled.button`
  color: var(--pure-white);
  background-color: var(--accent);
  transition: 0.3s;
  width: 100%;
  height: 26px;
  padding: 0 13px;
  border-radius: 8px;
  display: block;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  &:hover,
  &:focus {
    background-color: var(--accent-hover);
    color: var(--hover-grey);
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
    80% {
      opacity: 1;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;
