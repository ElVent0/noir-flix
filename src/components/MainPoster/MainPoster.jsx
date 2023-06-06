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
  const [currentTrendOne, setCurrentTrendOne] = useState(0);
  const [currentTrendTwo, setCurrentTrendTwo] = useState(10);

  // console.log("trendingList", trendingList);

  const updateCount = () => {
    setInterval(() => {
      // let randomNumberOne = Math.random() * (9 - 0) + 0;
      // let randomNumberTwo = Math.random() * (18 - 10) + 10;

      // if (currentTrendOne === currentTrendTwo && currentTrendTwo === 3) {
      //   randomNumberTwo -= 1;
      // } else if (currentTrendOne === currentTrendTwo && currentTrendTwo !== 3) {
      //   randomNumberTwo += 1;
      // }
      // if (currentTrendOne === currentTrendTwo && currentTrendTwo === 3) {
      //   randomNumberTwo -= 1;
      // } else if (currentTrendOne === currentTrendTwo && currentTrendTwo !== 3) {
      //   randomNumberTwo += 1;
      // }

      setCurrentTrendOne((prev) => (prev + 1) % 20);
      setCurrentTrendTwo((prev) => (prev + 1) % 20);
    }, 8000);
  };
  // console.log(currentTrendOne, currentTrendTwo, "===============");

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
          {trendingList[currentTrendOne].vote_average && (
            <MainPosterRating>
              {trendingList[currentTrendOne].vote_average.toFixed(1)}
            </MainPosterRating>
          )}
          {trendingList[currentTrendOne].title &&
            trendingList[currentTrendOne].release_date && (
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
          {trendingList[currentTrendTwo].vote_average && (
            <MainPosterRating>
              {trendingList[currentTrendTwo].vote_average.toFixed(1)}
            </MainPosterRating>
          )}
          {trendingList[currentTrendTwo].title &&
            trendingList[currentTrendTwo].release_date && (
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
