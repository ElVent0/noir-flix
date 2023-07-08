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
    props.isOpenModalProfile
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
  width: 540px;
  height: 381px;
  border-radius: 10px;
  display: flex;
  position: relative;
  overflow: hidden;

  padding: 3px;
  position: relative;
  color: rgb(88 199 250 / 0%);

  &::before {
    content: "";
    width: 150%;
    height: 180%;
    border-radius: 8px;
    background: linear-gradient(132deg, var(--accent), #3d6eff 43%, #6600ff);
    position: absolute;
    z-index: -1;
    top: -35%;
    left: -25%;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
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

export const Logout = styled.button`
  font-size: 16px;
  line-height: 19px;
  background-color: var(--accent);
  color: #fff;
  height: 36px;
  align-items: flex-end;
  border-radius: 10px;
  padding: 6px 16px 6px 12px;
  display: flex;
  transition: 0.3s;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  & > svg {
    font-size: 23px;
    margin-right: 7px;
    color: #fff;
  }
  &:hover,
  &:active {
    background-color: var(--accent-hover);
  }
`;

export const Profile = styled.div`
  width: 534px;
  height: 375px;
  background: var(--bg-grey-transparent);
  border-radius: 10px;
  padding-top: 60px;
  padding: 18px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;

  perspective: 1000px;
`;

export const UserImageContainer = styled.div.attrs(({ mouseX, mouseY }) => ({
  style: {
    transform: `rotateY(${(window.innerWidth / 2 - mouseX) / 20}deg) rotateX(${
      (window.innerHeight / 2 + mouseY - 800) / 20
    }deg)`,
  },
}))`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  position: relative;
`;

export const ShadowContainer = styled.div`
  width: 140px;
  height: 14px;
  background-color: #00000099;
  border-radius: 50%;
  filter: blur(14px);
  margin-bottom: 16px;
  margin-left: auto;
  margin-right: auto;
`;

export const UserImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const UserImageCover = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  top: 0;
`;

export const UserImageCoverContent = styled.div.attrs(({ rotation }) => ({
  style: {
    transform: `rotate(${rotation}deg)`,
  },
}))`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(0, 0, 0, 0.1) 60%,
    rgba(0, 0, 0, 0.2) 100%
  );
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

// export const Statistics = styled.div`
//   width: 50%;
//   background-image: url(${(props) => props.path});
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: left;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
