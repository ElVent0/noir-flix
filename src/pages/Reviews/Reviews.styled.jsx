import styled from "styled-components";

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

export const ReviewsList = styled.ul`
  padding: 0 0 20px 0;
`;

export const ReviewsItem = styled.li`
  padding: 12px 0;
  border-bottom: 1px solid var(--element-grey);
  display: flex;
  gap: 12px;
  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }
`;

export const MoviePoster = styled.div`
  width: 80px;
  height: 120px;
  background-color: red;
`;

export const ReviewContent = styled.div`
  width: calc(100% - 112px);
`;

export const UserName = styled.p`
  display: inline-block;
`;

export const ReviewContentHeader = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 8px;
  align-items: center;
  &:first-of-type {
    margin-bottom: 12px;
    & > svg {
      font-size: 22px;
      color: ${(props) => (props.isgood ? "#2ad349" : "#ff6969")};
    }
    & > div {
      background-color: #dadde140;
      display: flex;
      align-items: center;
      border-radius: 4px;
      padding: 0 8px 0 0;
      & > img {
        border-radius: 4px;
        width: 22px;
        height: 22px;
        display: inline-block;
        margin-right: 6px;
      }
    }
  }
`;

// export const UserImage = styled.img`
//   display: inline-block;
//   margin-right: 6px;
//   position: relative;
//   top: 2px;
// `;

export const MovieName = styled.p``;

export const ReviewContentBody = styled.div``;

export const UserReview = styled.p`
  color: var(--text-main-transparent);
  font-size: 14px;
`;
