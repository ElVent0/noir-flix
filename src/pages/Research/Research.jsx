import {
  ResearchStyled,
  RecentMovies,
  RecentParagraph,
  RecentList,
  RecentItem,
  MoviesHeader,
  MoviesYear,
  MoviesName,
  ReadMore,
  MoviesHeaderContent,
  MoviesPoster,
  MoviesParagraph,
  RecentNothing,
  RecentNothingContent,
  RecentNothingParagraph,
  RecentNothingButton,
  DialogElement,
} from "./Research.styled.jsx";
import MoviesFilters from "../../components/MoviesFilters/MoviesFilters";
import MoviesList from "../../components/MoviesList/MoviesList";
import MoviesNavigation from "../../components/MoviesNavigation/MoviesNavigation";
import MovieModal from "../../components/MovieModal/MovieModal";
import { getMovies, getMovieByTitle, getMovieById } from "../../api/movies";
import { useEffect, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import poster from "../../media/poster.jpg";

const Research = () => {
  const [moviesList, setMoviesList] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalPages, setTotalPages] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [inputSort, setInputSort] = useState("Popularity");
  const [movieData, setMovieData] = useState(null);
  const [recentList, setRecentList] = useState(
    JSON.parse(localStorage.getItem("RecentListForNoirflix"))
  );
  const [recentMoviesData, setRecentMoviesData] = useState([]);

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
    const newRecentList = [];
    if (!JSON.parse(localStorage.getItem("RecentListForNoirflix"))) {
      localStorage.setItem(
        "RecentListForNoirflix",
        JSON.stringify(newRecentList)
      );
      setRecentList([]);
    } else {
      const recentMoviesList = JSON.parse(
        localStorage.getItem("RecentListForNoirflix")
      );
      setRecentList(recentMoviesList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getDataForMovie = async (item) => {
      const data = await getMovieById(item);
      return data;
    };

    const fetchRecentMoviesData = async () => {
      if (recentList && recentList.length === 0) {
        return;
      }

      if (recentList) {
        const promises = recentList.map((item) => getDataForMovie(item));
        const resolvedData = await Promise.all(promises);
        setRecentMoviesData(resolvedData);
      }
    };

    fetchRecentMoviesData();
  }, [recentList]);

  const onAddToRecentMovies = (id) => {
    let newRecentList = JSON.parse(
      localStorage.getItem("RecentListForNoirflix")
    );

    newRecentList = newRecentList.filter((item) => item !== id);

    newRecentList.unshift(id);

    if (newRecentList.length >= 7) {
      newRecentList.pop();
    }

    localStorage.setItem(
      "RecentListForNoirflix",
      JSON.stringify(newRecentList)
    );

    setRecentList(newRecentList);
  };

  return (
    <>
      <ResearchStyled>
        <MoviesFilters
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
            onAddToRecentMovies={onAddToRecentMovies}
          />
        ) : (
          <p>Loading...</p>
        )}
        {moviesList && moviesList.length === 0 && <p>Упс, тут нічого...</p>}
        <MoviesNavigation totalPages={totalPages} />
      </ResearchStyled>

      <RecentMovies>
        <RecentParagraph>Recently watched</RecentParagraph>
        {recentList && recentList.length > 0 ? (
          <RecentList>
            {recentMoviesData &&
              recentMoviesData.map((item) => {
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

                const genreIds = (item) => {
                  return item.genres
                    .map((item) => genres[item.id])
                    .splice(0, 3)
                    .join(", ");
                };

                return (
                  <RecentItem key={item.id}>
                    <MoviesHeader>
                      <MoviesPoster path={path}></MoviesPoster>
                      <MoviesHeaderContent>
                        <MoviesName>{item.title}</MoviesName>
                        <MoviesYear>
                          {new Date(item.release_date).getFullYear()}
                        </MoviesYear>
                        <MoviesParagraph>
                          <b>{item.vote_average.toFixed(1)}</b> / 10
                        </MoviesParagraph>
                        <MoviesParagraph>{genreIds(item)}</MoviesParagraph>
                      </MoviesHeaderContent>
                    </MoviesHeader>
                    <ReadMore onClick={() => onReadMore(item.id)}>
                      More
                    </ReadMore>
                  </RecentItem>
                );
              })}
          </RecentList>
        ) : (
          <RecentNothing>
            <DialogElement></DialogElement>
            <RecentNothingContent>
              <RecentNothingParagraph>
                You haven't explored the movies yet
              </RecentNothingParagraph>
              <RecentNothingButton
                onClick={() => {
                  window.scrollTo({
                    top: 117,
                    behavior: "smooth",
                  });
                }}
              >
                Go
              </RecentNothingButton>
            </RecentNothingContent>
          </RecentNothing>
        )}
      </RecentMovies>
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
