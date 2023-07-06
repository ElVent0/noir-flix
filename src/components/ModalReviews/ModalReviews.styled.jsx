import styled from "styled-components";

export const ModalReviewsStyled = styled.div`
  width: 264px;
  margin-left: 6px;
`;

export const MoviesReviews = styled.div`
  background-color: var(--bg-grey);
  border-radius: 10px;
  padding: 4px;
  color: var(--text-main);
  height: calc(100% - 166px);
`;

export const Rating = styled.div``;

export const ReviewsList = styled.ul``;

export const ReviewItem = styled.li``;

export const RatingList = styled.ul``;

export const RatingItem = styled.li``;

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
