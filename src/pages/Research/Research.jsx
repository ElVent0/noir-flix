import { ResearchStyled } from "./Research.styled.jsx";
import MoviesFilters from "../../components/MoviesFilters/MoviesFilters";
import MoviesList from "../../components/MoviesList/MoviesList";
import MoviesNavigation from "../../components/MoviesNavigation/MoviesNavigation";
import MovieModal from "../../components/MovieModal/MovieModal";
import RecentMovies from "../../components/RecentMovies/RecentMovies";
import MainPoster from "../../components/MainPoster/MainPoster";
import { getMovies, getMovieByTitle, getMovieById } from "../../api/movies";
import { useEffect, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import poster from "../../media/poster.jpg";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

const Research = ({ onAddToRecentMovies, recentList, setRecentList }) => {
  const [moviesList, setMoviesList] = useState(null);
  const [moviesListIds, setMoviesListIds] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalPages, setTotalPages] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [inputSort, setInputSort] = useState("Popularity");
  const [movieData, setMovieData] = useState(null);

  const [trendingList, setTrendingList] = useState([]);

  const location = useLocation();

  const session = useSession();
  const supabase = useSupabaseClient();

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
    const getData = async () => {
      const data = await getMovies(1, "Popularity");
      setTrendingList(data.results);
    };
    getData();
  }, []);

  useEffect(() => {
    if (searchParams.get("id") !== null) {
      const getDataForMovie = async () => {
        const data = await getMovieById(searchParams.get("id"));
        setMovieData(data);
      };
      getDataForMovie();
    } else if (searchParams.get("page") !== null) {
      window.scrollTo({
        top: 117,
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

  useEffect(() => {
    const getMoviesFromLibarary = async (id) => {
      const { data, error } = await supabase.from("library").select("*");

      if (session) {
        let result = data
          .filter((item) => item.user_id === session.user.id)
          .sort(
            (a, b) =>
              new Date(b.creation_date).getTime() -
              new Date(a.creation_date).getTime()
          );

        result = result.filter((obj, index, self) => {
          return index === self.findIndex((o) => o.movie_id === obj.movie_id);
        });

        setMoviesListIds(result);
      }
    };

    getMoviesFromLibarary();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  return (
    <>
      {moviesList ? (
        <>
          <MainPoster
            trendingList={trendingList}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            onAddToRecentMovies={onAddToRecentMovies}
          />
          <ResearchStyled>
            <MoviesFilters
              setInputSort={setInputSort}
              inputSort={inputSort}
              searchInput={searchInput}
              changeSearchInput={changeSearchInput}
            />
            <MoviesList
              moviesList={moviesList}
              genres={genres}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
              onAddToRecentMovies={onAddToRecentMovies}
              page="research"
            />
            <MoviesNavigation totalPages={totalPages} />
          </ResearchStyled>
          <RecentMovies
            genres={genres}
            poster={poster}
            recentList={recentList}
            setRecentList={setRecentList}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            onAddToRecentMovies={onAddToRecentMovies}
            getMovieById={getMovieById}
          />
          {movieData !== null && (
            <MovieModal
              movieData={movieData}
              onCloseReadMore={onCloseReadMore}
              genresInEnglish={genres}
              page="research"
              moviesListIds={moviesListIds}
            />
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
      {moviesList && moviesList.length === 0 && <p>Упс, тут нічого...</p>}
    </>
  );
};

export default Research;
