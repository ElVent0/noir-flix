export const getMovies = async (currentPage, inputSort) => {
  const inputSortType = () => {
    if (inputSort === "Popularity") {
      return "popularity.desc";
    } else if (inputSort === "Vote") {
      return "vote_average.desc";
    } else if (inputSort === "Title") {
      return "original_title.asc";
    } else if (inputSort === "Date") {
      return "release_date.desc";
    }
  };

  const data = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=55f0b5ef3d71b89f5c992026821b4edc&page=${currentPage}&sort_by=${inputSortType()}`
  );
  const result = await data.json();
  console.log(result);
  return result;
};
