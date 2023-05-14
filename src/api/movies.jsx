export const getMovies = async (currentPage, inputSort) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");
  const dateString = `${year}-${month}-${day}`;

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

  // const datePrefix = ?"lte":"gte"

  const data = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=55f0b5ef3d71b89f5c992026821b4edc&page=${currentPage}&sort_by=${inputSortType()}`
  );
  const result = await data.json();
  console.log(result);
  return result;
};
