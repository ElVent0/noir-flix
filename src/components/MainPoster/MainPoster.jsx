import {
  MainPosters,
  Poster,
  MainPosterStyled,
  MainPosterElementLeft,
  MainPosterElementRight,
  MainPosterContent,
} from "./MainPoster.styled";
import { useState, useEffect } from "react";

const MainPoster = ({ trendingList }) => {
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

  return (
    <MainPosters>
      {trendingList.length > 0 && (
        <MainPosterStyled>
          <MainPosterElementLeft></MainPosterElementLeft>
          <MainPosterElementRight></MainPosterElementRight>
          <MainPosterContent></MainPosterContent>
          <Poster
            height="220px"
            src={`https://image.tmdb.org/t/p/original/${trendingList[currentTrendOne].backdrop_path}`}
            alt="poster"
            currentTrend={currentTrendOne}
          />
        </MainPosterStyled>
      )}
      {trendingList.length > 0 && (
        <MainPosterStyled>
          <MainPosterElementLeft></MainPosterElementLeft>
          <MainPosterElementRight></MainPosterElementRight>
          <MainPosterContent></MainPosterContent>
          <Poster
            height="220px"
            src={`https://image.tmdb.org/t/p/original/${trendingList[currentTrendTwo].backdrop_path}`}
            alt="poster"
            currentTrend={currentTrendTwo}
          />
        </MainPosterStyled>
      )}
    </MainPosters>
  );
};

export default MainPoster;
