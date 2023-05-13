import {
  ResearchStyled,
  Filters,
  FiltersParagraph,
  SearchInput,
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
} from "./Research.styled.jsx";
import imdb from "../../media/imdb.png";

const Research = () => {
  const moviesList = [
    {
      name: "Batman",
      year: 2022,
      imdb: 7.8,
      director: "Matt Reeves",
      duration: "176 min",
      plot: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    },
    {
      name: "Batman",
      year: 2022,
      imdb: 7.8,
      director: "Matt Reeves",
      duration: "176 min",
      plot: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    },
    {
      name: "Batman",
      year: 2022,
      imdb: 7.8,
      director: "Matt Reeves",
      duration: "176 min",
      plot: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    },
    {
      name: "Batman",
      year: 2022,
      imdb: 7.8,
      director: "Matt Reeves",
      duration: "176 min",
      plot: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    },
    {
      name: "Batman",
      year: 2022,
      imdb: 7.8,
      director: "Matt Reeves",
      duration: "176 min",
      plot: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    },
    {
      name: "Batman",
      year: 2022,
      imdb: 7.8,
      director: "Matt Reeves",
      duration: "176 min",
      plot: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    },
    {
      name: "Batman",
      year: 2022,
      imdb: 7.8,
      director: "Matt Reeves",
      duration: "176 min",
      plot: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    },
    {
      name: "Batman",
      year: 2022,
      imdb: 7.8,
      director: "Matt Reeves",
      duration: "176 min",
      plot: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    },
    {
      name: "Batman",
      year: 2022,
      imdb: 7.8,
      director: "Matt Reeves",
      duration: "176 min",
      plot: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    },
    {
      name: "Batman",
      year: 2022,
      imdb: 7.8,
      director: "Matt Reeves",
      duration: "176 min",
      plot: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    },
    {
      name: "Batman",
      year: 2022,
      imdb: 7.8,
      director: "Matt Reeves",
      duration: "176 min",
      plot: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    },
    {
      name: "Batman",
      year: 2022,
      imdb: 7.8,
      director: "Matt Reeves",
      duration: "176 min",
      plot: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    },
    {
      name: "Batman",
      year: 2022,
      imdb: 7.8,
      director: "Matt Reeves",
      duration: "176 min",
      plot: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    },
    {
      name: "Batman",
      year: 2022,
      imdb: 7.8,
      director: "Matt Reeves",
      duration: "176 min",
      plot: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    },
    {
      name: "Batman",
      year: 2022,
      imdb: 7.8,
      director: "Matt Reeves",
      duration: "176 min",
      plot: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    },
    {
      name: "Batman",
      year: 2022,
      imdb: 7.8,
      director: "Matt Reeves",
      duration: "176 min",
      plot: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    },
  ];

  return (
    <ResearchStyled>
      <Filters>
        <FiltersParagraph>Sort</FiltersParagraph>
        <div>aaa</div>
        <FiltersParagraph>Rating</FiltersParagraph>
        <div>aaa</div>
        <FiltersParagraph>Categories</FiltersParagraph>
        <div>aaa</div>
        <SearchInput placeholder="Search"></SearchInput>
      </Filters>
      <MoviesList>
        {moviesList.map((item) => {
          const resultPlot = `${item.plot
            .split(" ")
            .slice(0, 16)
            .join(" ")} ...`;

          return (
            <MoviesItem key={item.name}>
              <MoviesHeader>
                <MoviesPoster></MoviesPoster>
                <MoviesHeaderContent>
                  <MoviesName>{item.name}</MoviesName>
                  <MoviesYear>{item.year}</MoviesYear>
                  <MoviesParagraph>
                    <RatingIcon src={imdb} width="30" />
                    {item.imdb}
                  </MoviesParagraph>
                  <MoviesParagraph>
                    <span>Director: </span>
                    {item.director}
                  </MoviesParagraph>
                  <MoviesParagraph>{item.duration}</MoviesParagraph>
                </MoviesHeaderContent>
              </MoviesHeader>
              <MoviesBody>{item.plot}</MoviesBody>
              <ReadMore>More</ReadMore>
            </MoviesItem>
          );
        })}
      </MoviesList>
    </ResearchStyled>
  );
};

export default Research;
