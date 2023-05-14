import {
  ResearchStyled,
  MoviesList,
  MoviesItem,
  MoviesHeader,
  MoviesPoster,
  MoviesHeaderContent,
  MoviesBody,
  ReadMore,
  MoviesName,
  MoviesYear,
  MoviesParagraph,
} from "./Research.styled.jsx";
import MoviesNavigation from "../../components/MoviesNavigation/MoviesNavigation";
import ResearchFilters from "../../components/ResearchFilters/ResearchFilters";
import { getMovies } from "../../api/movies";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MdOutlineAutoGraph } from "react-icons/md";
import poster from "../../media/poster.jpg";

const Research = () => {
  const [moviesList, setMoviesList] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalPages, setTotalPages] = useState(null);
  const [inputSort, setInputSort] = useState("Popularity");

  useEffect(() => {
    const getData = async () => {
      const data = await getMovies(searchParams.get("page"), inputSort);
      setMoviesList(data.results);
      setTotalPages(data.total_pages);
    };

    getData();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [searchParams]);

  const genres = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

  const genreIds = (item) => {
    return item.genre_ids.map((item) => genres[item]).join(", ");
  };

  return (
    <ResearchStyled>
      <ResearchFilters setInputSort={setInputSort} inputSort={inputSort} />
      {moviesList ? (
        <MoviesList>
          {moviesList.map((item) => {
            const path = item.poster_path
              ? `https://image.tmdb.org/t/p/original/${item.poster_path}`
              : poster;

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
                    {/* <MoviesParagraph>
                      <span>Director: </span>
                      {item.director}
                    </MoviesParagraph> */}
                    <MoviesParagraph>{genreIds(item)}</MoviesParagraph>
                  </MoviesHeaderContent>
                </MoviesHeader>
                <MoviesBody>{item.overview}</MoviesBody>
                <ReadMore>More</ReadMore>
              </MoviesItem>
            );
          })}
        </MoviesList>
      ) : (
        <p>Loading...</p>
      )}
      <MoviesNavigation totalPages={totalPages} />
    </ResearchStyled>
  );
};

export default Research;

// https://image.tmdb.org/t/p/original/
