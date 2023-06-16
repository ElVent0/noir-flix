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

export const sendMovie = async (
  supabase,
  session,
  movieData,
  stars,
  forLater,
  successToast,
  setMoviesListIds
) => {
  try {
    const { error } = await supabase
      .from("library")
      .insert({
        user_id: session.user.id,
        movie_id: movieData.id,
        movie_rating: stars,
        movie_for_future: forLater,
        creation_date: new Date(),
      })
      .single();

    if (error) {
      console.error("insert error 1", error);
      return;
    } else {
      getUserMovies(supabase, session, setMoviesListIds);
      successToast();
    }
  } catch (e) {
    console.error("insert error 2", e);
  }
};

export const updateStars = async (
  supabase,
  stars,
  session,
  movieData,
  successEditToast,
  setMoviesListIds,
  setEditStarsMode,
  getMoviesFromLibarary
) => {
  try {
    const { error } = await supabase
      .from("library")
      .update({ movie_rating: stars })
      .match({
        user_id: session.user.id,
        movie_id: movieData.id,
      });

    if (error) {
      console.error("update error 1", error);
      return;
    } else {
      getUserMovies(supabase, session, setMoviesListIds);
      setEditStarsMode((prev) => !prev);
      getMoviesFromLibarary();
      successEditToast();
    }
  } catch (e) {
    console.error("update error 2", e);
  }
};

export const updateForLater = async (
  page,
  supabase,
  forLater,
  session,
  movieData,
  successEditToast,
  setMoviesListIds,
  getMoviesFromLibarary
) => {
  try {
    if (page === "library") {
      const { error } = await supabase
        .from("library")
        .update({ movie_for_future: !forLater })
        .match({
          user_id: session.user.id,
          movie_id: movieData.id,
        });

      if (error) {
        console.error("Помилка оновлення рядка:", error);
        return;
      } else {
        getUserMovies(supabase, session, setMoviesListIds);
        getMoviesFromLibarary();
        successEditToast();
      }
    }
  } catch (e) {
    console.error(e);
  }
};

export const deleteMovie = async (
  supabase,
  session,
  movieData,
  successDeleteToast,
  onclose,
  setMoviesListIds,
  getMoviesFromLibarary
) => {
  try {
    const { error } = await supabase.from("library").delete().match({
      user_id: session.user.id,
      movie_id: movieData.id,
    });

    if (error) {
      console.error("Помилка видалення рядка:", error);
      return;
    } else {
      getUserMovies(supabase, session, setMoviesListIds);
      onclose();
      getMoviesFromLibarary();
      successDeleteToast();
    }
  } catch (e) {
    console.error("delete error", e);
  }
};
