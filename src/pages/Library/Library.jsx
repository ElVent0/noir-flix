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
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
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
  const [isOpenModal, setIsOpenModal] = useState(false);

  const location = useLocation();
  const session = useSession();
  const supabase = useSupabaseClient();
  const themetype = useContext(ThemeContext);
  const navigate = useNavigate();

  const [finalList, setFinalList] = useState([]);

  useEffect(() => {
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moviesList, stars, forLater]);

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

  const getDataForMovie = async () => {
    const data = await getMovieById(searchParams.get("id"));
    const result =
      moviesListIds &&
      moviesListIds.filter((item) => item.movie_id === data.id);
    if (result === null || result.length === 0) {
      navigate(`/?id=${data.id}`);
      return;
    }
    if (moviesListIds) {
      data.creation_date = result[0].creation_date;
      data.stars = result[0].movie_rating;
      data.for_later = result[0].movie_for_future;
      setMovieData(data);
      document.body.style.overflow = "hidden";
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
      setIsOpenModal(true);
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
    document.body.style.overflow = "auto";
  };

  const onCloseReadMore = (e) => {
    if (e.target === e.currentTarget || e.currentTarget.id === "button-close") {
      setIsOpenModal(false);
      setTimeout(() => {
        onclose();
      }, 200);
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
                  moviesList={moviesList}
                  finalList={finalList}
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
                  finalList={finalList}
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
          isOpenModal={isOpenModal}
        />
      )}
    </>
  );
};

export default Library;
