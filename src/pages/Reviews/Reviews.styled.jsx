import styled from "styled-components";
import { Link } from "react-router-dom";

export const ReviewsStyled = styled.div`
  /* background-color: var(--pure-white); */
  background: var(--pure-white-bg);
  min-height: calc(100vh - 217px);
  padding: 0 20px;
  border-radius: 10px;
  position: relative;
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

export const ReviewsFilters = styled.div`
  display: flex;
  align-items: center;
  height: 68px;
  border-bottom: 1px solid var(--element-grey);
`;

export const FiltersButton = styled.button`
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  transition: 0.6s;
  border-radius: 8px;
  font-size: 16px;
  position: relative;
  background-color: ${(props) =>
    props.isUsersReviews ? "var(--accent)" : "var(--pure-white)"};
  color: ${(props) => (props.isUsersReviews ? "#fff" : "var(--accent)")};
  border: ${(props) =>
    props.isUsersReviews
      ? "1px solid var(--pure-white)"
      : "1px solid var(--accent)"};
  &:hover,
  &:focus {
    background-color: ${(props) =>
      props.isUsersReviews ? "var(--accent-hover)" : "var(--bg-grey)"};
  }
  animation: animateOpacity 1s linear;
  @keyframes animateOpacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
  &:first-of-type {
    margin-right: 6px;
    &::before {
      content: "";
      width: 1px;
      height: 30px;
      background-color: var(--element-grey);
      position: absolute;
      left: -15px;
      top: -3px;
    }
    &:first-child {
      margin-left: 0;
      &::before {
        display: none;
      }
    }
  }
`;

export const ReviewsList = styled.ul`
  padding: 0 0 10px 0;
  & {
    ${(prop) => !prop.isone && `display: flex; flex-wrap: wrap; gap: 4%;`}
  }
`;

export const ReviewsItem = styled.li`
  padding: 12px 0;
  border-bottom: 1px solid var(--element-grey);
  display: flex;
  gap: 12px;
  & {
    ${(prop) =>
      !prop.isone &&
      `width: 48%;
  position: relative;
  &:nth-child(2n-1) {
    &::after {
      content: "";
      width: 1px;
      height: 80%;
      background-color: var(--element-grey);
      position: absolute;
      right: -4%;
      top: 10%;
    }
  }`}
  }
  &:first-of-type {
    padding-top: 20px;
  }

  & {
    ${(prop) =>
      prop.isone &&
      `
  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }`}
  }
  /* &:nth-last-child(2), */
`;

export const ColumnsSort = styled.div`
  margin-left: auto;
  display: flex;
  gap: 6px;
`;

export const ButtonColumns = styled.button`
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  transition: 0.6s;
  border-radius: 8px;
  font-size: 16px;
  position: relative;
  background-color: ${(props) =>
    props.isone ? "var(--accent)" : "var(--pure-white)"};
  color: ${(props) => (props.isone ? "#fff" : "var(--accent)")};
  border: ${(props) =>
    props.isone ? "1px solid var(--pure-white)" : "1px solid var(--accent)"};
  &:hover,
  &:focus {
    background-color: ${(props) =>
      props.isone ? "var(--accent-hover)" : "var(--bg-grey)"};
  }
  animation: animateOpacity 1s linear;
  @keyframes animateOpacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
  &:last-of-type {
    background-color: ${(props) =>
      props.isone ? "var(--pure-white)" : "var(--accent)"};
    color: ${(props) => (props.isone ? "var(--accent)" : "#fff")};
    border: ${(props) =>
      props.isone ? "1px solid var(--accent)" : "1px solid var(--pure-white)"};
  }
`;

export const PosterContainer = styled(Link)`
  width: 80px;
  background-color: var(--bg-grey);
  border-radius: 8px;
  padding-bottom: 4px;
  height: fit-content;
  overflow: hidden;
  position: relative;
  & > svg {
    position: absolute;
    top: 44px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1;
    color: var(--text-main-transparent);
    font-size: 0;
    transition: 0.3s;
  }
  &:hover,
  &:focus {
    & > img {
      left: -80px;
      opacity: 0;
    }
    & > svg {
      font-size: 40px;
    }
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: 120px;
  border-radius: 8px;
  display: block;
  margin-bottom: 4px;
  position: relative;
  z-index: 2;
  left: 0;
  transition: 0.3s;
`;

export const ReviewContent = styled.div`
  width: calc(100% - 112px);
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.p`
  display: inline-block;
  color: ${(props) => (props.isme ? "#fff" : "var(--text-main)")};
`;

export const DeleteContainer = styled.div`
  margin-left: auto;
  margin-right: 11px;
`;

export const DeleteConfirmation = styled.div`
  display: flex;
  gap: 4px;
`;

export const DeleteOption = styled.button`
  background-color: transparent;
  color: var(--text-main-transparent);
  padding: 3px 8px;
  border-radius: 8px;
  transition: 0.3s;
  &:hover,
  &:focus {
    background-color: #dadde120;
  }
  &:first-of-type {
    background-color: #dadde140;
    color: var(--text-main);
    &:hover,
    &:focus {
      background-color: #ff6969;
    }
  }
`;

export const DeleteButton = styled.button`
  background-color: transparent;
  & > svg {
    font-size: 18px;
    color: var(--text-main-transparent);
    opacity: 0.4;
    transition: 0.3s;
    &:hover,
    &:focus {
      opacity: 0.6;
    }
  }
`;

export const ReviewContentHeader = styled.div`
  display: flex;
  margin-bottom: 8px;
  align-items: center;
  &:first-of-type {
    margin-bottom: 12px;
    & > svg {
      font-size: 22px;
      margin-left: 8px;
      color: ${(props) => (props.isgood ? "#2ad349" : "#ff6969")};
    }
  }
`;

export const HeaderProfile = styled.div`
  background-color: ${(props) =>
    props.isme ? "var(--accent-transparent)" : "#dadde140"};
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 0 8px 0 0;
  & > img {
    border-radius: 8px;
    width: 22px;
    height: 22px;
    display: inline-block;
    margin-right: 6px;
  }
`;

// export const UserImage = styled.img`
//   display: inline-block;
//   margin-right: 6px;
//   position: relative;
//   top: 2px;
// `;

export const MovieName = styled.p`
  color: var(--text-main);
  font-size: 12.4px;
  text-align: center;
  padding: 0 4px;
`;

export const ReviewContentBody = styled.div`
  flex-grow: 1;
  display: flex;
`;

export const ReviewVotes = styled.div`
  margin-left: 20px;
  width: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export const ButtonUpDown = styled.button`
  background-color: transparent;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  opacity: ${(prop) => (prop.isRecommendations ? "1" : "0.3")};

  & > svg {
    font-size: 30px;
    color: ${(prop) =>
      prop.isRecommendations ? "#2ad349" : "var(--text-main-transparent)"};
  }

  &:hover,
  &:focus {
    opacity: ${(prop) => (prop.isRecommendations ? "1" : "0.5")};
  }

  &:last-of-type {
    transform: rotate(180deg);
    opacity: ${(prop) => (prop.isNotRecommendations ? "1" : "0.3")};
    & > svg {
      color: ${(prop) =>
        prop.isNotRecommendations ? "#ff6969" : "var(--text-main-transparent)"};
    }
    &:hover,
    &:focus {
      opacity: ${(prop) => (prop.isNotRecommendations ? "1" : "0.5")};
    }
  }
`;

export const UserReview = styled.p`
  color: var(--text-main-transparent);
  font-size: 14px;
  width: calc(100% - 60px);
`;

export const ReviewDate = styled.p`
  font-size: 13px;
  color: var(--text-main-transparent);
  opacity: 0.6;
  margin-left: 12px;
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

export const FiltersParagraph = styled.p`
  font-size: 14px;
  line-height: 17px;
  color: var(--text-main);
  margin-right: 10px;
  margin-left: 30px;
  position: relative;
  &::before {
    content: "";
    width: 1px;
    height: 30px;
    background-color: var(--element-grey);
    position: absolute;
    left: -15px;
    top: -6.5px;
  }
  &:first-child {
    margin-left: 0;
    &::before {
      display: none;
    }
  }
  animation: animateOpacity 1s linear;
  @keyframes animateOpacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const FilterInputSort = styled.div`
  width: 120px;
  height: 36px;
  position: relative;
  animation: animateOpacity 1s linear;
  margin-right: 30px;
  @keyframes animateOpacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const HeaderSort = styled.button`
  width: 100%;
  height: 100%;
  border: 0.6px solid var(--element-grey);
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 4px 0 12px;
  color: var(--text-main);
  background-color: transparent;
  & > svg {
    margin-left: auto;
    font-size: 14px;
  }
`;

export const BodySort = styled.ul`
  position: absolute;
  z-index: 1000;
  width: 120px;
  background-color: var(--pure-white);
  border-radius: 4px;
  overflow: hidden;
  top: 36px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

export const ItemSort = styled.li`
  position: relative;
  &::after {
    content: "";
    width: 86%;
    height: 1px;
    background-color: var(--element-grey);
    position: absolute;
    bottom: 0;
    left: 7%;
  }
  &:last-child {
    &::after {
      display: none;
    }
  }
`;

export const ButtonSort = styled.button`
  width: 100%;
  text-align: start;
  background-color: var(--pure-white);
  padding: 6px 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: var(--text-main);
  transition: 0.3s;
  &:hover,
  &:focus {
    background-color: var(--hover-grey);
  }
`;
