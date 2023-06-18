import {
  MainPosters,
  Poster,
  MainPosterStyled,
  MainPosterElementLeft,
  MainPosterElementRight,
  MainPosterContent,
  MainPosterRating,
  MainPosterTitle,
  MainPosterName,
  MainPosterAbout,
  MainPosterMore,
} from "./MainPoster.styled";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../App";

const MainPoster = ({
  trendingList,
  searchParams,
  setSearchParams,
  onAddToRecentMovies,
}) => {
  const [currentTrendOne, setCurrentTrendOne] = useState(0);
  const [currentTrendTwo, setCurrentTrendTwo] = useState(10);

  const themeType = useContext(ThemeContext);

  useEffect(() => {
    const updateCount = () => {
      setInterval(() => {
        setCurrentTrendOne((prev) => (prev + 1) % 20);
        setCurrentTrendTwo((prev) => (prev + 1) % 20);
      }, 8000);
    };
    updateCount();
  }, []);

  const onReadMore = async (id) => {
    const params = {};
    if (searchParams.get("page")) {
      params.page = searchParams.get("page");
    }
    params.id = id;
    setSearchParams(params);
    onAddToRecentMovies(id);
  };

  return (
    <MainPosters>
      {trendingList.length > 0 && (
        <MainPosterStyled>
          {trendingList[currentTrendOne].vote_average && (
            <MainPosterRating themeType={themeType}>
              {trendingList[currentTrendOne].vote_average.toFixed(1)}
            </MainPosterRating>
          )}
          {trendingList[currentTrendOne].title &&
            trendingList[currentTrendOne].release_date && (
              <MainPosterTitle>
                <MainPosterName themeType={themeType}>
                  {trendingList[currentTrendOne].title}
                  <span>
                    (
                    {new Date(
                      trendingList[currentTrendOne].release_date
                    ).getFullYear()}
                    )
                  </span>
                </MainPosterName>
              </MainPosterTitle>
            )}
          <MainPosterElementLeft></MainPosterElementLeft>
          <MainPosterElementRight></MainPosterElementRight>
          <MainPosterContent>
            {trendingList[currentTrendOne].overview && (
              <MainPosterAbout>
                {trendingList[currentTrendOne].overview}
              </MainPosterAbout>
            )}
            <MainPosterMore
              onClick={() => onReadMore(trendingList[currentTrendOne].id)}
              themeType={themeType}
            >
              More
            </MainPosterMore>
          </MainPosterContent>
          <Poster
            path={`https://image.tmdb.org/t/p/original/${trendingList[currentTrendOne].backdrop_path}`}
          ></Poster>
        </MainPosterStyled>
      )}
      {trendingList.length > 0 && (
        <MainPosterStyled>
          {trendingList[currentTrendTwo].vote_average && (
            <MainPosterRating themeType={themeType}>
              {trendingList[currentTrendTwo].vote_average.toFixed(1)}
            </MainPosterRating>
          )}
          {trendingList[currentTrendTwo].title &&
            trendingList[currentTrendTwo].release_date && (
              <MainPosterTitle>
                <MainPosterName themeType={themeType}>
                  {trendingList[currentTrendTwo].title}
                  <span>
                    (
                    {new Date(
                      trendingList[currentTrendTwo].release_date
                    ).getFullYear()}
                    )
                  </span>
                </MainPosterName>
              </MainPosterTitle>
            )}
          <MainPosterElementLeft></MainPosterElementLeft>
          <MainPosterElementRight></MainPosterElementRight>
          <MainPosterContent>
            {trendingList[currentTrendTwo].overview && (
              <MainPosterAbout>
                {trendingList[currentTrendTwo].overview}
              </MainPosterAbout>
            )}
            <MainPosterMore
              onClick={() => onReadMore(trendingList[currentTrendTwo].id)}
              themeType={themeType}
            >
              More
            </MainPosterMore>
          </MainPosterContent>
          <Poster
            path={`https://image.tmdb.org/t/p/original/${trendingList[currentTrendTwo].backdrop_path}`}
          ></Poster>
        </MainPosterStyled>
      )}
    </MainPosters>
  );
};

export default MainPoster;
