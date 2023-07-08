import styled from "styled-components";

export const ModalReviewsStyled = styled.div`
  width: 264px;
  margin-left: 6px;
`;

export const MoviesReviews = styled.div`
  background-color: var(--bg-grey);
  border-radius: 10px;
  padding: 6px 6px 0 6px;
  color: var(--text-main);
  /* height: calc(100% - 166px - 40px); */
`;

export const RatingList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 40px;
  margin-bottom: 6px;
`;

export const RatingItem = styled.li`
  display: flex;
  align-items: center;
  gap: 6px;
  &:first-of-type {
    & > svg {
      font-size: 20px;
      color: #2ad349;
    }
  }
  &:last-of-type {
    & > svg {
      font-size: 20px;
      color: #ff6969;
    }
  }
`;

export const ReviewsList = styled.ul`
  height: 276px;
  padding-bottom: 6px;
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

export const ReviewItem = styled.li`
  padding: 8px;
  border-radius: 8px;
  background-color: var(--pure-white);
  margin-bottom: 6px;
  margin-right: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const NothingBlock = styled.div`
  height: 276px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  & > p {
    width: 80%;
    font-size: 14px;
    line-height: 15px;
    color: var(--text-main-transparent);
    text-align: center;
  }
`;

export const ItemHeader = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  margin-bottom: 8px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--element-grey);
  & > svg {
    color: ${(prop) => (prop.isgood ? "#2ad349" : "#ff6969")};
  }
`;

export const UserName = styled.p`
  font-size: 14px;
  line-height: 15px;
  color: var(--text-main);
`;

export const UserDate = styled.p`
  margin-left: auto;
  font-size: 12px;
  line-height: 15px;
  color: var(--text-main-transparent);
  opacity: 0.6;
`;

export const ItemBody = styled.div``;

export const ItemReview = styled.p`
  font-size: 14px;
  line-height: 15px;
  color: var(--text-main-transparent);
`;

export const NewReviewForm = styled.form`
  background-color: var(--bg-grey);
  border-radius: 10px;
  padding: 6px;
  color: var(--text-main);
  height: 160px;
  margin-top: 6px;
`;

export const TextArea = styled.textarea`
  display: block;
  height: 74%;
  margin-bottom: 6px;
  width: 100%;
  font-family: "Roboto", sans-serif;
  resize: none;
  border-radius: 8px;
  border: 1px solid var(--element-grey);
  background-color: var(--pure-white);
  padding: 8px;
  font-size: 14px;
  transition: 0.3s;
  overflow: auto;
  color: ${(prop) =>
    prop.themeType ? "var(--pure-white)" : "var(--text-main)"};
  &:hover,
  &:focus {
    border: 1px solid var(--text-main);
  }
  ::placeholder {
    color: var(--text-main-transparent);
  }
  &:focus {
    border: 1px solid var(--accent);
    outline: none;
    ::placeholder {
      color: transparent;
    }
  }
`;

export const NewReviewFormFooter = styled.div`
  height: calc(26% - 8px);
  display: flex;
  gap: 6px;
`;

export const GoodButton = styled.button`
  height: 100%;
  width: 36px;
  display: block;
  border-radius: 8px;
  background-color: ${(prop) => (prop.isActive ? "#2ad349" : "transparent")};
  border: 1px solid #2ad349;
  font-size: 17px;
  color: #fff;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover,
  &:focus {
    background-color: #2ad349;
    border: 2px solid #2ad349;
  }
`;

export const BadButton = styled.button`
  height: 100%;
  width: 36px;
  display: block;
  border-radius: 8px;
  background-color: ${(prop) => (prop.isActive ? "#ff6969" : "transparent")};
  border: 1px solid #ff6969;
  font-size: 17px;
  color: #fff;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover,
  &:focus {
    background-color: #ff6969;
    border: 2px solid #ff6969;
  }
`;

export const ButtonCofirm = styled.button`
  height: 100%;
  margin-right: 4px;
  padding: 0 14px;
  display: block;
  border-radius: 8px;
  background-color: var(--accent);
  color: #fff;
  transition: 0.3s;
  &:hover,
  &:focus {
    background-color: var(--accent-hover);
  }
`;
