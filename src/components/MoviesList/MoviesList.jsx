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
} from "./MoviesList.styled";
import { MdOutlineAutoGraph } from "react-icons/md";
import poster from "../../media/poster.jpg";

const MoviesList = ({ moviesList, genres, searchParams, setSearchParams }) => {
  const genreIds = (item) => {
    return item.genre_ids.map((item) => genres[item]).join(", ");
  };

  return (
    <MoviesListStyled>
      {moviesList.map((item) => {
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
                <MoviesParagraph>
                  <MdOutlineAutoGraph />
                  <b>{item.vote_average}</b> / 10
                </MoviesParagraph>
                <MoviesParagraph>{genreIds(item)}</MoviesParagraph>
              </MoviesHeaderContent>
            </MoviesHeader>
            <MoviesBody>{item.overview}</MoviesBody>
            <ReadMore onClick={() => onReadMore(item.id)}>More</ReadMore>
          </MoviesItem>
        );
      })}
    </MoviesListStyled>
  );
};

export default MoviesList;
