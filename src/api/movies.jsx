const currentDate = new Date();
const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
const day = currentDate.getDate().toString().padStart(2, "0");
const dateString = `${year}-${month}-${day}`;

export const getMovies = async (currentPage, inputSort) => {
  const inputSortType = () => {
    if (inputSort === "Popularity") {
      return `popularity.desc&vote_average.gte=3.0&vote_count.gte=100`;
    } else if (inputSort === "Vote") {
      return `vote_average.desc&vote_average.gte=3.0&vote_count.gte=100`;
    } else if (inputSort === "Title") {
      return `original_title.asc&vote_average.gte=3.0&vote_count.gte=100`;
    } else if (inputSort === "New") {
      return `release_date.desc&primary_release_date.lte=${dateString}&vote_average.gte=3.0&vote_count.gte=100`;
    } else if (inputSort === "Future") {
      return `release_date.asc&primary_release_date.gte=${dateString}`;
    }
  };

  const data = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${
      process.env.REACT_APP_API_KEY
    }&page=${currentPage}&sort_by=${inputSortType()}`
  );
  const result = await data.json();
  // console.log(result);
  return result;
};

export const getMovieByTitle = async (title, currentPage) => {
  const resultPage = currentPage === null ? 1 : currentPage;

  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${title}&page=${resultPage}`
  );
  const result = await data.json();
  return result;
};

export const getMovieById = async (id) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&&language=en-US
`
  );
  const result = await data.json();
  return result;
};

export const getVideoByIds = async (id) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US
`
  );
  const result = await data.json();
  // console.log("dasfsdfsdf", result);
  return result;
};
