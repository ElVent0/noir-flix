import { ResearchStyled, NothingBlock } from "./Research.styled.jsx";
import MoviesFilters from "../../components/MoviesFilters/MoviesFilters";
import MoviesList from "../../components/MoviesList/MoviesList";
import Loader from "../../components/Loader/Loader";
import MoviesNavigation from "../../components/MoviesNavigation/MoviesNavigation";
import MovieModal from "../../components/MovieModal/MovieModal";
import RecentMovies from "../../components/RecentMovies/RecentMovies";
import MainPoster from "../../components/MainPoster/MainPoster";
import { getMovies, getMovieByTitle, getMovieById } from "../../api/movies";
import { useEffect, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import poster from "../../media/poster.png";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { getUserMovies } from "../../api/database";
import { GiEmptyChessboard } from "react-icons/gi";

const Research = ({ onAddToRecentMovies, recentList, setRecentList }) => {
  const [moviesList, setMoviesList] = useState(null);
  const [moviesListIds, setMoviesListIds] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalPages, setTotalPages] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [inputSort, setInputSort] = useState("Popularity");
  const [currentGenre, setCurrentGenre] = useState("0");
  const [movieData, setMovieData] = useState(null);
  const [trendingList, setTrendingList] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const location = useLocation();
  const session = useSession();
  const supabase = useSupabaseClient();

  const getData = async () => {
    const currentPage = searchParams.get("page");
    const data = await getMovies(
      currentPage ? currentPage : 1,
      inputSort,
      currentGenre
    );
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
      const data = await getMovies(1, "New");
      setTrendingList(data.results);
    };
    getData();
  }, []);

  // -----------------------------------------------------------------------------------------

  useEffect(() => {
    getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentGenre]);

  // -----------------------------------------------------------------------------------------

  useEffect(() => {
    if (searchInput !== "") {
      getDataByTitle();
    } else if (searchInput === "") {
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput, location]);

  // -----------------------------------------------------------------------------------------

  useEffect(() => {
    if (session) {
      getUserMovies(supabase, session, setMoviesListIds);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  // -----------------------------------------------------------------------------------------

  useEffect(() => {
    if (searchParams.get("id") !== null) {
      const getDataForMovie = async () => {
        const data = await getMovieById(searchParams.get("id"));
        setMovieData(data);
        document.body.style.overflow = "hidden";
      };

      getDataForMovie();

      setIsOpenModal(true);
    } else if (searchParams.get("page") !== null) {
      window.scrollTo({
        top: 262,
        behavior: "smooth",
      });
    }
    if (searchInput === "") {
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  // -----------------------------------------------------------------------------------------

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
      document.body.style.overflow = "auto";
    };

    if (e.target === e.currentTarget || e.currentTarget.id === "button-close") {
      setIsOpenModal(false);
      setTimeout(() => {
        onclose();
      }, 200);
    }
  };

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
              setSearchInput={setSearchInput}
              setCurrentGenre={setCurrentGenre}
              currentGenre={currentGenre}
            />
            {moviesList && moviesList.length !== 0 && (
              <>
                <MoviesList
                  moviesList={moviesList}
                  searchParams={searchParams}
                  setSearchParams={setSearchParams}
                  onAddToRecentMovies={onAddToRecentMovies}
                  page="research"
                />
                <MoviesNavigation totalPages={totalPages} />
              </>
            )}
            {
              moviesList && moviesList.length === 0 && (
                <NothingBlock>
                  <GiEmptyChessboard />
                  It seems that there is no such film...
                </NothingBlock>
              )
              // : (
              // <MoviesNavigation totalPages={totalPages} />
              // )
            }

            {/* {moviesList && moviesList.length !== 0 && (
              <MoviesNavigation totalPages={totalPages} />
            )} */}
          </ResearchStyled>
          <RecentMovies
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
              page="research"
              moviesListIds={moviesListIds}
              setMoviesListIds={setMoviesListIds}
              isOpenModal={isOpenModal}
            />
          )}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Research;
