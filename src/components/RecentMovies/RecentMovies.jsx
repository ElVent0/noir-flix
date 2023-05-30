import {
  RecentMoviesStyled,
  RecentParagraph,
  RecentList,
  RecentItem,
  MoviesHeader,
  MoviesYear,
  MoviesName,
  ReadMore,
  MoviesHeaderContent,
  MoviesPoster,
  MoviesParagraph,
  RecentNothing,
  RecentNothingContent,
  RecentNothingParagraph,
  RecentNothingButton,
  DialogElement,
} from "./RecentMovies.styled";
import { useState, useEffect } from "react";

const RecentMovies = ({
  genres,
  poster,
  recentList,
  setRecentList,
  searchParams,
  setSearchParams,
  onAddToRecentMovies,
  getMovieById,
}) => {
  const [recentMoviesData, setRecentMoviesData] = useState([]);

  useEffect(() => {
    const newRecentList = [];
    if (!JSON.parse(localStorage.getItem("RecentListForNoirflix"))) {
      localStorage.setItem(
        "RecentListForNoirflix",
        JSON.stringify(newRecentList)
      );
      setRecentList([]);
    } else {
      const recentMoviesList = JSON.parse(
        localStorage.getItem("RecentListForNoirflix")
      );
      setRecentList(recentMoviesList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getDataForMovie = async (item) => {
      const data = await getMovieById(item);
      return data;
    };

    const fetchRecentMoviesData = async () => {
      if (recentList && recentList.length === 0) {
        return;
      }

      if (recentList) {
        const promises = recentList.map((item) => getDataForMovie(item));
        const resolvedData = await Promise.all(promises);
        setRecentMoviesData(resolvedData);
      }
    };

    fetchRecentMoviesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recentList]);

  return (
    <RecentMoviesStyled>
      <RecentParagraph>Recently explored</RecentParagraph>
      {recentList && recentList.length > 0 ? (
        <RecentList>
          {recentMoviesData &&
            recentMoviesData.map((item) => {
              const path = item.poster_path
                ? `https://image.tmdb.org/t/p/original/${item.poster_path}`
                : poster;

              const onReadMore = async (id) => {
                const params = {};
                if (searchParams.get("page")) {
                  params.page = searchParams.get("page");
                }
                params.id = id;
                setSearchParams(params);
                onAddToRecentMovies(id);
              };

              const genreIds = (item) => {
                return item.genres
                  .map((item) => genres[item.id])
                  .splice(0, 3)
                  .join(", ");
              };

              return (
                <RecentItem key={item.id}>
                  <MoviesHeader>
                    <MoviesPoster path={path}></MoviesPoster>
                    <MoviesHeaderContent>
                      <MoviesName>{item.title}</MoviesName>
                      <MoviesYear>
                        {new Date(item.release_date).getFullYear()}
                      </MoviesYear>
                      <MoviesParagraph>
                        <b>{item.vote_average.toFixed(1)}</b> / 10
                      </MoviesParagraph>
                      <MoviesParagraph>{genreIds(item)}</MoviesParagraph>
                    </MoviesHeaderContent>
                  </MoviesHeader>
                  <ReadMore onClick={() => onReadMore(item.id)}>More</ReadMore>
                </RecentItem>
              );
            })}
        </RecentList>
      ) : (
        <RecentNothing>
          <DialogElement></DialogElement>
          <RecentNothingContent>
            <RecentNothingParagraph>
              You haven't explored the movies yet
            </RecentNothingParagraph>
            <RecentNothingButton
              onClick={() => {
                window.scrollTo({
                  top: 117,
                  behavior: "smooth",
                });
              }}
            >
              Go
            </RecentNothingButton>
          </RecentNothingContent>
        </RecentNothing>
      )}
    </RecentMoviesStyled>
  );
};

export default RecentMovies;
