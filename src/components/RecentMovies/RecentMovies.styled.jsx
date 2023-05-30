import styled from "styled-components";
import background from "../../media/research-poster.jpg";

export const RecentMoviesStyled = styled.div`
  margin-top: 12px;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  height: 200px;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 0 20px 0 255px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RecentParagraph = styled.p`
  color: var(--hover-grey);
  font-size: 18px;
  margin-bottom: 12px;
`;

export const RecentList = styled.ul`
  display: flex;
  gap: 16.8px;
`;

export const RecentItem = styled.li`
  width: 140px;
  height: 134px;
  padding: 4px;
  background: var(--bg-grey);
  border-radius: 10px;
`;

export const MoviesHeader = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 4px;
  max-height: 95px;
  overflow: hidden;
`;

export const MoviesPoster = styled.div`
  min-width: 66px;
  height: 95px;
  border-radius: 10px;
  background-image: url(${(props) => props.path});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const MoviesHeaderContent = styled.div`
  width: 100%;
`;

export const ReadMore = styled.button`
  color: var(--pure-white);
  background-color: var(--accent);
  transition: 0.3s;
  padding: 6px 13px;
  width: 100%;
  border-radius: 8px;
  display: block;
  &:hover,
  &:focus {
    background-color: var(--accent-hover);
    color: var(--hover-grey);
  }
`;

export const MoviesName = styled.p`
  font-size: 14px;
  line-height: 15px;
  max-height: 15px;
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
  font-size: 12px;
  line-height: 14px;
  color: var(--text-main-transparent);
  margin-bottom: 8px;
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
  font-size: 12px;
  line-height: 14px;
  color: var(--text-main-transparent);
  margin-bottom: 2px;
  max-height: 60px;
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

export const RecentNothing = styled.div`
  display: flex;
  position: relative;
  left: -24px;
  padding-bottom: 24px;
`;

export const DialogElement = styled.div`
  margin-top: 30px;
  width: 0;
  height: 0;
  border-top: 24px solid var(--bg-grey);
  border-left: 24px solid transparent;
`;

export const RecentNothingContent = styled.div`
  width: 420px;
  height: 110px;
  padding: 16px 232px 16px 16px;
  background-color: var(--bg-grey);
  border-radius: 10px 0 0 10px;
  display: flex;
  flex-direction: column;
  -webkit-mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1) 30%,
    rgba(0, 0, 0, 0.9) 40%,
    rgba(0, 0, 0, 0.8) 50%,
    rgba(0, 0, 0, 0.6) 60%,
    rgba(0, 0, 0, 0.4) 70%,
    rgba(0, 0, 0, 0.2) 80%,
    rgba(0, 0, 0, 0) 90%
  );
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1) 30%,
    rgba(0, 0, 0, 0.9) 40%,
    rgba(0, 0, 0, 0.8) 50%,
    rgba(0, 0, 0, 0.6) 60%,
    rgba(0, 0, 0, 0.4) 70%,
    rgba(0, 0, 0, 0.2) 80%,
    rgba(0, 0, 0, 0) 90%
  );
`;

export const RecentNothingParagraph = styled.p`
  font-size: 15px;
  margin-bottom: 8px;
`;

export const RecentNothingButton = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 10px;
  background-color: var(--accent);
  color: var(--pure-white);
  transition: 0.3s;
  &:hover,
  &:focus {
    background-color: var(--accent-hover);
    color: var(--hover-grey);
  }
`;
