import styled from "styled-components";
import { Link } from "react-router-dom";

export const ReviewsStyled = styled.div`
  background-color: var(--pure-white);
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
  &:nth-child(2) {
    margin-left: 10px;
  }
  padding: 0 10px;
  transition: 0.6s;
  border-radius: 8px;
  font-size: 16px;
  background-color: ${(props) =>
    props.isUsersReviews ? "var(--accent)" : "var(--pure-white)"};
  color: ${(props) =>
    props.isUsersReviews ? "var(--pure-white)" : "var(--accent)"};
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
`;

export const ReviewsList = styled.ul`
  padding: 0 0 10px 0;
`;

export const ReviewsItem = styled.li`
  padding: 12px 0;
  border-bottom: 1px solid var(--element-grey);
  display: flex;
  gap: 12px;
  &:first-of-type {
    padding-top: 20px;
  }
  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
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
`;

export const UserName = styled.p`
  display: inline-block;
`;

export const DeleteContainer = styled.div`
  margin-left: auto;
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
    opacity: 0.2;
    transition: 0.3s;
    &:hover,
    &:focus {
      opacity: 0.4;
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
  color: var(--text-main-transparent);
  font-size: 12.4px;
  text-align: center;
  padding: 0 4px;
`;

export const ReviewContentBody = styled.div``;

export const UserReview = styled.p`
  color: var(--text-main-transparent);
  font-size: 14px;
`;

export const ReviewDate = styled.p`
  font-size: 13px;
  color: var(--text-main-transparent);
  opacity: 0.4;
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
