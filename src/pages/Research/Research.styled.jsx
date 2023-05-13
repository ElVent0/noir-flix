import styled from "styled-components";

export const ResearchStyled = styled.div``;

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
  background-image: url(${(props) => props.path});
  background-repeat: no-repeat;
  background-size: cover;
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

export const MoviesNavigation = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 14px;
`;

export const MoviesNavigationList = styled.ul`
  display: flex;
  gap: 6px;
`;

export const MoviesNavigationItem = styled.li`
  /* width: 26px; */
  height: 26px;
`;

export const MoviesNavigationButton = styled.button`
  height: 100%;
  padding: 6px;
  min-width: 26px;
  background-color: var(--bg-grey);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover,
  &:focus {
    background-color: var(--element-grey);
  }
`;

export const MoviesNavigationButtonActive = styled.button`
  height: 100%;
  padding: 6px;
  min-width: 26px;
  background-color: var(--accent);
  color: var(--pure-white);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EndButton = styled.button`
  background-color: var(--bg-grey);
  padding: 6px 12px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover,
  &:focus {
    background-color: var(--element-grey);
  }
`;
