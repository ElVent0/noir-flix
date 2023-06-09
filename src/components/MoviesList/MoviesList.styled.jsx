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
  /* color: var(--text-main); */
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
  color: var(--accent);
`;

export const MoreCheck = styled.div`
  width: 24px;
  height: 24px;
  display: ${({ forLater }) => (forLater === true ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border-radius: 8px;
  color: var(--pure-white);
  /* background-color: var(--pure-white); */
  background-color: ${(prop) =>
    prop.themeType ? "var(--accent)" : "var(--text-main)"};
  position: absolute;
  top: 10px;
  left: 10px;
  & > svg {
    position: relative;
    top: -1px;
    left: 1px;
  }
`;
