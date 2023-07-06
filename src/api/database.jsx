export const getUserMovies = async (
  supabase,
  session,
  setMoviesListIds,
  inputSort
) => {
  const { data } = await supabase
    .from("library")
    .select("*")
    .eq("user_id", session.user.id);

  // Сортування за датою

  let result;

  if (window.location.pathname === "/") {
    result = data.sort(
      (a, b) =>
        new Date(b.creation_date).getTime() -
        new Date(a.creation_date).getTime()
    );

    result = result.filter((obj, index, self) => {
      return index === self.findIndex((o) => o.movie_id === obj.movie_id);
    });
  } else if (window.location.pathname === "/library") {
    if (inputSort === "New") {
      result = data.sort(
        (a, b) =>
          new Date(b.creation_date).getTime() -
          new Date(a.creation_date).getTime()
      );

      result = result.filter((obj, index, self) => {
        return index === self.findIndex((o) => o.movie_id === obj.movie_id);
      });
    } else if (inputSort === "Favorite") {
      result = data.sort((a, b) => b.movie_rating - a.movie_rating);

      result = result.filter((obj, index, self) => {
        return index === self.findIndex((o) => o.movie_id === obj.movie_id);
      });
    }
  }

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

export const sendReviews = async (
  supabase,
  session,
  movieData,
  textArea,
  goodButton,
  badButton,
  successToast,
  // setMoviesListIds,
  onDefaultState
) => {
  try {
    const { error } = await supabase
      .from("reviews")
      .insert({
        userId: session.user.id,
        username: session.user.user_metadata.name,
        movieId: movieData.id,
        content: textArea,
        good: goodButton,
        bad: badButton,
      })
      .single();

    if (error) {
      console.error("insert review error 1", error);
      return;
    } else {
      // getUserMovies(supabase, session, setMoviesListIds);
      onDefaultState();
      successToast();
    }
  } catch (e) {
    console.error("insert review error 2", e);
  }
};

export const getReviews = async (supabase, setReviewsList) => {
  const { data } = await supabase.from("reviews").select("*");

  // Сортування за датою
  let result;
  if (window.location.pathname === "/reviews") {
    result = data.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
    setReviewsList(result);
  }
};

export const getUserReviews = async (supabase, session, setReviewsList) => {
  const { data } = await supabase
    .from("reviews")
    .select("*")
    .eq("user_id", session.user.id);

  // Сортування за датою
  let result;
  if (window.location.pathname === "/reviews") {
    result = data.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
    setReviewsList(result);
  }
};
