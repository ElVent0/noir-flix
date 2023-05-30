import {
  RecentMoviesStyled,
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
} from "./RecentMovies.styled";

const RecentMovies = ({
  genres,
  poster,
  recentList,
  recentMoviesData,
  searchParams,
  setSearchParams,
  onAddToRecentMovies,
}) => {
  return (
    <RecentMoviesStyled>
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
                  <ReadMore onClick={() => onReadMore(item.id)}>More</ReadMore>
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
    </RecentMoviesStyled>
  );
};

export default RecentMovies;
