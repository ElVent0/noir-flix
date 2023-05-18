import { ResearchStyled } from "./Research.styled.jsx";
import MoviesList from "../../components/MoviesList/MoviesList";
import MoviesNavigation from "../../components/MoviesNavigation/MoviesNavigation";
import ResearchFilters from "../../components/ResearchFilters/ResearchFilters";
import MovieModal from "../../components/MovieModal/MovieModal";
import { getMovies } from "../../api/movies";
import { getMovieByTitle } from "../../api/movies";
import { getMovieById } from "../../api/movies";
import { useEffect, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";

const Research = () => {
  const [moviesList, setMoviesList] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalPages, setTotalPages] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [inputSort, setInputSort] = useState("Popularity");
  const [movieData, setMovieData] = useState(null);

  const location = useLocation();

  const getData = async () => {
    const data = await getMovies(searchParams.get("page"), inputSort);
    setMoviesList(data.results);
    setTotalPages(data.total_pages);
  };

  const getDataByTitle = async () => {
    const data = await getMovieByTitle(searchInput, searchParams.get("page"));
    setMoviesList(data.results);
    setTotalPages(data.total_pages);
  };

  useEffect(() => {
    if (searchParams.get("id") !== null) {
      const getDataForMovie = async () => {
        console.log("id", searchParams.get("id"));
        const data = await getMovieById(searchParams.get("id"));
        setMovieData(data);
      };
      getDataForMovie();
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (searchInput === "") {
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    if (searchInput !== "") {
      getDataByTitle();
    } else if (searchInput === "") {
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput, location]);

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

  const changeSearchInput = (e) => {
    setSearchInput(e.currentTarget.value);
    setSearchParams({ page: 1 });
  };

  const onCloseReadMore = (e) => {
    const onclose = () => {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.delete("id");
      const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
      window.history.replaceState({}, "", newUrl);
      setMovieData(null);
    };
    if (e.target === e.currentTarget) {
      onclose();
    }
    if (e.currentTarget.id === "button-close") {
      onclose();
    }
  };

  return (
    <>
      <ResearchStyled>
        <ResearchFilters
          setInputSort={setInputSort}
          inputSort={inputSort}
          searchInput={searchInput}
          changeSearchInput={changeSearchInput}
        />
        {moviesList ? (
          <MoviesList
            moviesList={moviesList}
            genres={genres}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
        ) : (
          <p>Loading...</p>
        )}
        {moviesList && moviesList.length === 0 && <p>Упс, тут нічого...</p>}
        <MoviesNavigation totalPages={totalPages} />
      </ResearchStyled>
      {movieData !== null && (
        <MovieModal
          movieData={movieData}
          onCloseReadMore={onCloseReadMore}
          genresInEnglish={genres}
        />
      )}
    </>
  );
};

export default Research;
