export const getMovies = async (currentPage) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=55f0b5ef3d71b89f5c992026821b4edc&page=${currentPage}`
  );
  const result = await data.json();
  console.log(result);
  return result;
};
