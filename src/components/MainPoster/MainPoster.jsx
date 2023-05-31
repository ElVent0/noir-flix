import {
  MainPosters,
  Poster,
  MainPosterStyled,
  MainPosterElementLeft,
  MainPosterElementRight,
  MainPosterContent,
  MainPosterRating,
  MainPosterName,
  MainPosterAbout,
  MainPosterMore,
} from "./MainPoster.styled";
import { useState, useEffect } from "react";

const MainPoster = ({
  trendingList,
  searchParams,
  setSearchParams,
  onAddToRecentMovies,
}) => {
  const [currentTrendOne, setCurrentTrendOne] = useState(
    Math.round(Math.random() * (19 - 0) + 0)
  );
  const [currentTrendTwo, setCurrentTrendTwo] = useState(
    Math.round(Math.random() * (19 - 0) + 0)
  );

  console.log("trendingList", trendingList);

  const updateCount = () => {
    setInterval(() => {
      let randomNumberOne = Math.random() * (19 - 0) + 0;
      let randomNumberTwo = Math.random() * (19 - 0) + 0;

      if (currentTrendOne === currentTrendTwo && currentTrendTwo === 3) {
        randomNumberTwo -= 1;
      } else if (currentTrendOne === currentTrendTwo && currentTrendTwo !== 3) {
        randomNumberTwo += 1;
      }
      if (currentTrendOne === currentTrendTwo && currentTrendTwo === 3) {
        randomNumberTwo -= 1;
      } else if (currentTrendOne === currentTrendTwo && currentTrendTwo !== 3) {
        randomNumberTwo += 1;
      }

      setCurrentTrendOne(Math.round(randomNumberOne));
      setCurrentTrendTwo(Math.round(randomNumberTwo));
    }, 8000);
  };

  useEffect(() => {
    updateCount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const path = (trend) => {
    return `https://image.tmdb.org/t/p/original/${trendingList[trend].backdrop_path}`;
  };

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
          <MainPosterRating>
            {trendingList[currentTrendOne].vote_average.toFixed(1)}
          </MainPosterRating>
          <MainPosterName>
            {trendingList[currentTrendOne].title}
            <span>
              (
              {new Date(
                trendingList[currentTrendOne].release_date
              ).getFullYear()}
              )
            </span>
          </MainPosterName>
          <MainPosterElementLeft></MainPosterElementLeft>
          <MainPosterElementRight></MainPosterElementRight>
          <MainPosterContent>
            <MainPosterAbout>
              {trendingList[currentTrendOne].overview}
            </MainPosterAbout>
            <MainPosterMore
              onClick={() => onReadMore(trendingList[currentTrendOne].id)}
            >
              More
            </MainPosterMore>
          </MainPosterContent>
          {/* <Poster
            height="220px"
            src={`https://image.tmdb.org/t/p/original/${trendingList[currentTrendOne].backdrop_path}`}
            alt="poster"
            currentTrend={currentTrendOne}
          /> */}
          <Poster path={path(currentTrendOne)}></Poster>
        </MainPosterStyled>
      )}
      {trendingList.length > 0 && (
        <MainPosterStyled>
          <MainPosterRating>
            {trendingList[currentTrendTwo].vote_average.toFixed(1)}
          </MainPosterRating>
          <MainPosterName>
            {trendingList[currentTrendTwo].title}
            <span>
              (
              {new Date(
                trendingList[currentTrendTwo].release_date
              ).getFullYear()}
              )
            </span>
          </MainPosterName>
          <MainPosterElementLeft></MainPosterElementLeft>
          <MainPosterElementRight></MainPosterElementRight>
          <MainPosterContent>
            <MainPosterAbout>
              {trendingList[currentTrendTwo].overview}
            </MainPosterAbout>
            <MainPosterMore
              onClick={() => onReadMore(trendingList[currentTrendTwo].id)}
            >
              More
            </MainPosterMore>
          </MainPosterContent>
          {/* <Poster
            height="220px"
            src={`https://image.tmdb.org/t/p/original/${trendingList[currentTrendTwo].backdrop_path}`}
            alt="poster"
            currentTrend={currentTrendTwo}
          /> */}
          <Poster path={path(currentTrendTwo)}></Poster>
        </MainPosterStyled>
      )}
    </MainPosters>
  );
};

export default MainPoster;
