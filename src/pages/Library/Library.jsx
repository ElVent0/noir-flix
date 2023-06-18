import {
  LibraryStyled,
  NothingBlock,
  NavigationLink,
} from "./Library.styled.jsx";
import MoviesFilters from "../../components/MoviesFilters/MoviesFilters";
import MoviesList from "../../components/MoviesList/MoviesList";
import MovieModal from "../../components/MovieModal/MovieModal";
import AuthProvider from "../../components/AuthProvider/AuthProvider";
import Loader from "../../components/Loader/Loader";
import nothing from "../../media/nothing.png";
import nothingLight from "../../media/nothing-2.png";
import { getMovieById } from "../../api/movies";
import { useEffect, useState, useContext } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { ThemeContext } from "../../components/App";
import { getUserMovies } from "../../api/database";

const Library = ({ onAddToRecentMovies }) => {
  const [moviesList, setMoviesList] = useState(null);
  const [moviesListIds, setMoviesListIds] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieData, setMovieData] = useState(null);
  const [stars, setStars] = useState(0);
  const [forLater, setForLater] = useState(false);
  const [inputSort, setInputSort] = useState("New");

  const location = useLocation();
  const session = useSession();
  const supabase = useSupabaseClient();
  const themetype = useContext(ThemeContext);

  const getMoviesFromLibarary = async () => {
    const result = await getUserMovies(
      supabase,
      session,
      setMoviesListIds,
      inputSort
    );

    if (result) {
      const finalList = [];

      for (let item of result) {
        const newData = await getMovieById(item.movie_id);
        finalList.push(newData);
      }

      setMoviesList(finalList);
    }
  };

  useEffect(() => {
    if (session) {
      getMoviesFromLibarary();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session, inputSort]);

  // -----------------------------------------------------------------------------------------

  useEffect(() => {
    if (searchParams.get("id") !== null) {
      const getDataForMovie = async () => {
        const data = await getMovieById(searchParams.get("id"));

        // if (session) {
        // await getMoviesFromLibarary();

        const result =
          moviesListIds &&
          moviesListIds.filter((item) => item.movie_id === data.id);

        if (moviesListIds) {
          data.creation_date = result[0].creation_date;
          data.stars = result[0].movie_rating;
          data.for_later = result[0].movie_for_future;
          setMovieData(data);
        }
        // }
      };

      getDataForMovie();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  // -----------------------------------------------------------------------------------------

  const onclose = () => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.delete("id");
    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    window.history.replaceState({}, "", newUrl);
    setMovieData(null);
  };

  const onCloseReadMore = (e) => {
    if (e.target === e.currentTarget) {
      onclose();
    }
    if (e.currentTarget.id === "button-close") {
      onclose();
    }
  };

  const onStars = (number) => {
    setStars(number);
  };

  const onForLater = () => {
    setForLater((prev) => !prev);
  };

  const onAllStarsButton = () => {
    setStars(0);
  };

  return (
    <>
      <AuthProvider>
        {moviesList ? (
          <LibraryStyled>
            {moviesList.length !== 0 ? (
              <>
                <MoviesFilters
                  stars={stars}
                  onStars={onStars}
                  forLater={forLater}
                  onForLater={onForLater}
                  onAllStarsButton={onAllStarsButton}
                  setInputSort={setInputSort}
                  inputSort={inputSort}
                />

                <MoviesList
                  moviesList={moviesList}
                  moviesListIds={moviesListIds}
                  searchParams={searchParams}
                  setSearchParams={setSearchParams}
                  stars={stars}
                  setStars={setStars}
                  forLater={forLater}
                  setForLater={setForLater}
                  onAddToRecentMovies={onAddToRecentMovies}
                  page="library"
                />
              </>
            ) : (
              <NothingBlock>
                <img
                  src={themetype ? nothing : nothingLight}
                  width="160"
                  alt="Nothing illustration"
                />
                <p>
                  There are no entries in your library yet. <br />
                  Add your first movie
                </p>
                <NavigationLink
                  to="/"
                  themebackground={
                    themetype ? "var(--pure-white)" : "var(--text-main)"
                  }
                >
                  Research
                </NavigationLink>
              </NothingBlock>
            )}
          </LibraryStyled>
        ) : (
          <Loader />
        )}
      </AuthProvider>
      {movieData !== null && (
        <MovieModal
          movieData={movieData}
          onCloseReadMore={onCloseReadMore}
          page="library"
          moviesListIds={moviesListIds}
          onclose={onclose}
          setMoviesListIds={setMoviesListIds}
          getMoviesFromLibarary={getMoviesFromLibarary}
        />
      )}
    </>
  );
};

export default Library;
