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

  const themeType = useContext(ThemeContext);

  const getMoviesFromLibarary = async (id) => {
    const { data } = await supabase.from("library").select("*");

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

    setMoviesList([]);

    for (let item of result) {
      const getDataForSingleMovie = async () => {
        const newData = await getMovieById(item.movie_id);
        setMoviesList((prev) => [...prev, newData]);
      };

      getDataForSingleMovie();
    }
  };

  useEffect(() => {
    if (session) {
      console.log(1, session);
      getMoviesFromLibarary();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  useEffect(() => {
    if (searchParams.get("id") !== null) {
      const getDataForMovie = async () => {
        const data = await getMovieById(searchParams.get("id"));

        const result =
          moviesListIds &&
          moviesListIds.filter((item) => item.movie_id === data.id);

        if (result) {
          data.creation_date = result[0].creation_date;
          data.stars = result[0].movie_rating;
          data.for_later = result[0].movie_for_future;

          setMovieData(data);
        }
      };

      getDataForMovie();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

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
                  genres={genres}
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
                  src={themeType ? nothing : nothingLight}
                  width="160"
                  alt="Nothing illustration"
                />
                <p>
                  There are no entries in your library yet. <br />
                  Add your first movie
                </p>
                <NavigationLink to="/" themeType={themeType}>
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
          genresInEnglish={genres}
          page="library"
          moviesListIds={moviesListIds}
          onclose={onclose}
        />
      )}
    </>
  );
};

export default Library;
