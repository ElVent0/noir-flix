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
  MoreCheckContainer,
  MoreCheck,
  CornerElementLeft,
  CornerElementBottom,
  NothingBlock,
} from "./MoviesList.styled";
import { ThemeContext } from "../../components/App";
import poster from "../../media/poster.png";
import { TbStar } from "react-icons/tb";
import { TbStarFilled } from "react-icons/tb";
import { FaCrown } from "react-icons/fa";
import { useEffect, useState, useContext } from "react";
import genresNames from "../../utils/genres.json";
import { starsColor } from "../../utils/colors";
import nothing from "../../media/nothing.png";
import nothingLight from "../../media/nothing-2.png";

const MoviesList = ({
  moviesList,
  moviesListIds,
  searchParams,
  setSearchParams,
  stars,
  forLater,
  onAddToRecentMovies,
  page,
}) => {
  const [finalList, setFinalList] = useState([]);

  const themetype = useContext(ThemeContext);

  const genreIds = (item) => {
    if (item && item.genre_ids) {
      if (page === "research") {
        return item.genre_ids.map((item) => genresNames[item]).join(", ");
      } else if (page === "library") {
        return item.genres.map((item) => genresNames[item.id]).join(", ");
      }
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
      {finalList.length !== 0 ? (
        finalList.map((item, index) => {
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

          let starsFinal = 0;

          const getRatingList = () => {
            const stars = finalList[index].stars;

            if (stars) {
              const ratingList = [];
              for (let i = 1; i <= stars; i += 1) {
                ratingList.push(true);
                starsFinal += 1;
              }
              for (let i = 1; i <= 5 - stars; i += 1) {
                ratingList.push(false);
              }
              return ratingList;
            }
          };

          return (
            <MoviesItem key={item.id}>
              <MoviesHeader>
                <MoviesPoster path={path}>
                  {page === "library" && finalList[index].for_later && (
                    <>
                      <MoreCheckContainer>
                        <MoreCheck>
                          <FaCrown />
                        </MoreCheck>
                      </MoreCheckContainer>
                      <CornerElementLeft></CornerElementLeft>
                      <CornerElementBottom></CornerElementBottom>
                    </>
                  )}
                </MoviesPoster>
                <MoviesHeaderContent>
                  <MoviesName>{item.title}</MoviesName>
                  <MoviesYear>
                    {new Date(item.release_date).getFullYear()}
                  </MoviesYear>
                  {page === "library" && (
                    <StarsList>
                      {getRatingList().map((item, index) => (
                        <StarItem
                          key={index}
                          starsColor={starsColor(starsFinal)}
                        >
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
            </MoviesItem>
          );
        })
      ) : (
        <NothingBlock>
          <img
            src={themetype ? nothing : nothingLight}
            width="160"
            alt="Nothing illustration"
          />
          <p>There are no records with this filter in your library yet</p>
        </NothingBlock>
      )}
    </MoviesListStyled>
  );
};

export default MoviesList;
