import styled from "styled-components";

export const MoviesListStyled = styled.ul`
  padding: 30px 0 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
`;

export const MoviesItem = styled.li`
  padding: 6px 6px 6px 6px;
  background: var(--bg-grey);
  width: 217px;
  max-height: 231.47px;
  border-radius: 10px;
  position: relative;
`;

export const MoviesHeader = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 10px;
`;

export const MoviesPoster = styled.div`
  min-width: 90px;
  height: 128px;
  border-radius: 10px;
  background-image: url(${(props) => props.path});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const MoviesHeaderContent = styled.div`
  width: 100%;
`;

export const MoviesBody = styled.div`
  height: 45px;
  font-size: 13px;
  line-height: 15px;
  color: var(--text-main);
  overflow: hidden;
  -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.1)
  );
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1));
`;

export const ReadMore = styled.button`
  color: var(--accent);
  background-color: var(--pure-white);
  transition: 0.3s;
  padding: 6px 13px;
  width: 100%;
  border-radius: 8px;
  display: block;
  margin-top: 10px;
  &:hover,
  &:focus {
    background-color: var(--hover-grey);
    color: var(--accent-hover);
  }
`;

export const MoviesName = styled.p`
  font-size: 13px;
  line-height: 17px;
  max-height: 17px;
  -webkit-mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1) 60%,
    rgba(0, 0, 0, 0) 90%
  );
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1) 60%,
    rgba(0, 0, 0, 0) 90%
  );

  color: var(--text-main);
`;

export const MoviesYear = styled.p`
  font-size: 13px;
  line-height: 15px;
  color: var(--text-main-transparent);
  margin-bottom: 10px;
  position: relative;
  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: var(--element-grey);
    position: absolute;
    left: 0;
    bottom: -6px;
  }
`;

export const MoviesParagraph = styled.p`
  font-size: 13px;
  line-height: 15px;

  color: var(--text-main-transparent);
  margin-bottom: 6px;
  max-height: 45px;
  overflow: hidden;
  & > span {
    color: var(--text-main);
  }
  & > svg {
    margin-right: 4px;
    font-size: 15px;
    position: relative;
    top: 3px;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const StarsList = styled.ul`
  display: flex;
  gap: 3px;
  height: 30px;
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

export const StarItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-size: 18px;
  color: ${({ starsColor }) => starsColor};
`;

export const MoreCheckContainer = styled.div`
  width: 30px;
  height: 30px;
  padding-right: 6px;
  padding-bottom: 6px;
  /* display: ${({ forLater }) => (forLater === true ? "block" : "none")}; */
  background-color: var(--bg-grey);
  position: absolute;
  border-radius: 0 0 10px 0;
`;

export const MoreCheck = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border-radius: 8px;
  color: var(--pure-white);
  background: var(--more-check);
`;

export const CornerElementLeft = styled.div`
  position: absolute;
  z-index: 1000;
  width: 30px;
  height: 30px;
  overflow: hidden;
  transform: rotate(0deg);
  left: 30px;
  top: 0px;
  &:before {
    content: "";
    display: block;
    width: 200%;
    height: 200%;
    position: absolute;
    border-radius: 14%;
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
  transform: rotate(0deg);
  left: 0px;
  top: 30px;
  &:before {
    content: "";
    display: block;
    width: 200%;
    height: 200%;
    position: absolute;
    border-radius: 14%;
    top: 0;
    left: 0;
    box-shadow: -50px -50px 0 0 var(--bg-grey);
  }
`;

export const NothingBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  & > img {
    display: block;
    margin: 0 auto 20px auto;
  }
  & > p {
    text-align: center;
  }
`;
