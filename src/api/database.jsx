export const getUserMovies = async (supabase, session, setMoviesListIds) => {
  const { data } = await supabase
    .from("library")
    .select("*")
    .eq("user_id", session.user.id);

  // Сортування за датою
  let result = data.sort(
    (a, b) =>
      new Date(b.creation_date).getTime() - new Date(a.creation_date).getTime()
  );

  // Виявлення дублікатів
  result = result.filter((obj, index, self) => {
    return index === self.findIndex((o) => o.movie_id === obj.movie_id);
  });

  setMoviesListIds(result);

  return result;
};
