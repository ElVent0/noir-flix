import styled from "styled-components";

export const ResearchStyled = styled.div``;

// Фільтри -------------------------------------

export const Filters = styled.div`
  display: flex;
  align-items: center;
  height: 68px;
  border-bottom: 1px solid var(--element-grey);
  /* margin-bottom: 16px; */
  /* position: relative; */
  /* &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: var(--element-grey);
    position: absolute;
    top: 36px;
  } */
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
`;

export const SearchInput = styled.input`
  display: block;
  margin-left: auto;
  border: 0.6px solid var(--element-grey);
  border-radius: 4px;
  width: 160px;
  height: 28px;
  padding: 0 13px;
  display: flex;
  align-items: center;
  &:focus {
    outline: none;
  }
`;

export const MoviesList = styled.ul`
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
  background-color: red;
`;

export const MoviesHeaderContent = styled.div`
  width: 100%;
`;

export const MoviesBody = styled.div`
  max-height: 45px;
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
  color: var(--text-main);
  transition: 0.3s;
  background-color: var(--pure-white);
  padding: 6px 13px;
  width: 100%;
  border-radius: 8px;
  display: block;
  margin-top: 10px;
  &:hover,
  &:focus {
    background-color: var(--hover-grey);
    color: var(--text-main);
  }
`;

export const MoviesName = styled.p`
  font-size: 14px;
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
  margin-bottom: 4px;
  & > span {
    color: var(--text-main);
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const RatingIcon = styled.img`
  margin-right: 4px;
  position: relative;
  top: 3px;
`;
