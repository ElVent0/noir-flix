import {
  MoviesListStyled,
  MoviesItem,
  MoviesHeader,
  MoviesPoster,
  MoviesHeaderContent,
  MoviesBody,
  ReadMore,
  MoviesName,
  MoviesYear,
  MoviesParagraph,
  StarsList,
  StarItem,
  MoreCheck,
} from "./MoviesList.styled";
import poster from "../../media/poster.jpg";
import { TbStar } from "react-icons/tb";
import { TbStarFilled } from "react-icons/tb";
import { MdMoreTime } from "react-icons/md";
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../App";

const MoviesList = ({
  moviesList,
  moviesListIds,
  genres: genresNames,
  searchParams,
  setSearchParams,
  stars,
  forLater,
  onAddToRecentMovies,
  page,
}) => {
  const [finalList, setFinalList] = useState([]);
  const themeType = useContext(ThemeContext);

  const genreIds = (item) => {
    if (page === "research") {
      return item.genre_ids.map((item) => genresNames[item]).join(", ");
    } else if (page === "library") {
      return item.genres.map((item) => genresNames[item.id]).join(", ");
    }
  };

  useEffect(() => {
    if (page === "library") {
      if (moviesListIds && moviesListIds.length > 0) {
        const resultList = moviesList.map((item, index) => {
          item.creation_date = moviesListIds[index].creation_date;
          item.stars = moviesListIds[index].movie_rating;
          item.for_later = moviesListIds[index].movie_for_future;
          return item;
        });

        if (stars === 0 && forLater === false) {
          setFinalList(resultList);
          return;
        } else if (stars === 0 && forLater === true) {
          const result = finalList
            ? resultList.filter((item) => item.for_later === forLater)
            : finalList.filter((item) => item.for_later === forLater);

          setFinalList(result);
        } else if (stars !== 0 && forLater === false) {
          const result = finalList
            ? resultList.filter((item) => item.stars === stars)
            : finalList.filter((item) => item.stars === stars);

          setFinalList(result);
        } else {
          const result = finalList
            ? resultList
                .filter((item) => item.for_later === forLater)
                .filter((item) => item.stars === stars)
            : finalList
                .filter((item) => item.for_later === forLater)
                .filter((item) => item.stars === stars);

          setFinalList(result);
        }
      }
    } else {
      setFinalList(moviesList);
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moviesList, stars, forLater]);

  return (
    <MoviesListStyled>
      {finalList.map((item, index) => {
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

        const getRatingList = () => {
          const stars = finalList[index].stars;

          const ratingList = [];
          for (let i = 1; i <= stars; i += 1) {
            ratingList.push(true);
          }
          for (let i = 1; i <= 5 - stars; i += 1) {
            ratingList.push(false);
          }
          return ratingList;
        };

        return (
          <MoviesItem key={item.id}>
            <MoviesHeader>
              <MoviesPoster path={path}></MoviesPoster>
              <MoviesHeaderContent>
                <MoviesName>{item.title}</MoviesName>
                <MoviesYear>
                  {new Date(item.release_date).getFullYear()}
                </MoviesYear>
                {page === "library" && (
                  <StarsList>
                    {getRatingList().map((item, index) => (
                      <StarItem key={index}>
                        {item ? <TbStarFilled /> : <TbStar />}
                      </StarItem>
                    ))}
                  </StarsList>
                )}
                <MoviesParagraph>{genreIds(item)}</MoviesParagraph>
              </MoviesHeaderContent>
            </MoviesHeader>
            <MoviesBody>{item.overview}</MoviesBody>
            <ReadMore onClick={() => onReadMore(item.id)}>More</ReadMore>
            {page === "library" && (
              <MoreCheck
                forLater={finalList[index].for_later}
                themeType={themeType}
              >
                <MdMoreTime />
              </MoreCheck>
            )}
          </MoviesItem>
        );
      })}
    </MoviesListStyled>
  );
};

export default MoviesList;
