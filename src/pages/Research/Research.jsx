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
  RatingIcon,
  MoviesNavigation,
  MoviesNavigationList,
  MoviesNavigationItem,
  MoviesNavigationButton,
  MoviesNavigationButtonActive,
  EndButton,
} from "./Research.styled.jsx";
import ResearchFilters from "../../components/ResearchFilters/ResearchFilters";
import imdb from "../../media/imdb.png";
import { getMovies } from "../../api/movies";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Research = () => {
  const [moviesList, setMoviesList] = useState(null);
  const [totalPages, setTotalPages] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getData = async () => {
      const data = await getMovies(searchParams.get("page"));
      setMoviesList(data.results);
      setTotalPages(data.total_pages);
    };

    getData();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [searchParams]);

  const currentPage =
    searchParams.get("page") !== null ? Number(searchParams.get("page")) : 1;

  let pageNumbers = [];
  const createPageNumbersList = () => {
    pageNumbers.push(currentPage - 4);
    pageNumbers.push(currentPage - 3);
    pageNumbers.push(currentPage - 2);
    pageNumbers.push(currentPage - 1);
    for (let i = 0; i < 5; i += 1) {
      pageNumbers.push(currentPage + i);
    }
    pageNumbers = [
      ...pageNumbers.filter(function (x) {
        return x > 0 && x <= totalPages;
      }),
    ];
  };
  createPageNumbersList();

  // console.log(currentPage, pageNumbers);

  return (
    <ResearchStyled>
      <ResearchFilters />
      {moviesList ? (
        <MoviesList>
          {moviesList.map((item) => {
            const path = `https://image.tmdb.org/t/p/original/${item.poster_path}`;

            return (
              <MoviesItem key={item.id}>
                <MoviesHeader>
                  <MoviesPoster path={path}></MoviesPoster>
                  <MoviesHeaderContent>
                    <MoviesName>{item.original_title}</MoviesName>
                    <MoviesYear>
                      {new Date(item.release_date).getFullYear()}
                    </MoviesYear>
                    <MoviesParagraph>
                      <RatingIcon src={imdb} width="30" />
                      {item.vote_average}
                    </MoviesParagraph>
                    {/* <MoviesParagraph>
                      <span>Director: </span>
                      {item.director}
                    </MoviesParagraph> */}
                    {/* <MoviesParagraph>{item.duration}</MoviesParagraph> */}
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
      <MoviesNavigation>
        <EndButton onClick={() => setSearchParams({ page: 1 })}>
          First
        </EndButton>
        {currentPage > 5 && <p>...</p>}
        <MoviesNavigationList>
          {pageNumbers.length > 0 &&
            pageNumbers.map((item) => (
              <MoviesNavigationItem key={item}>
                {currentPage !== item && (
                  <MoviesNavigationButton
                    onClick={() =>
                      setSearchParams({
                        page: item,
                      })
                    }
                  >
                    {item}
                  </MoviesNavigationButton>
                )}
                {currentPage === item && (
                  <MoviesNavigationButtonActive>
                    {item}
                  </MoviesNavigationButtonActive>
                )}
              </MoviesNavigationItem>
            ))}
        </MoviesNavigationList>
        {currentPage < totalPages - 4 && <p>...</p>}
        <EndButton onClick={() => setSearchParams({ page: totalPages })}>
          Last
        </EndButton>
      </MoviesNavigation>
    </ResearchStyled>
  );
};

export default Research;

// https://image.tmdb.org/t/p/original/
