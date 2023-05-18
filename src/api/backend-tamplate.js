export const backendTamplate = {
  user_id: 1,
  user_nickname: "John",
  user_mail: "mail@gmail.com",
  user_password: "password",
  user_data: {
    rating_list: [
      { movie_id: 502356, movie_rating: 3, movie_for_future: false },
      { movie_id: 640146, movie_rating: 4, movie_for_future: true },
      { movie_id: 447365, movie_rating: 5, movie_for_future: true },
    ],
    collections: [
      {
        collection_id: 11111111,
        collection_name: "На вечір",
        collection_movies: [502356, 640146],
      },
      {
        collection_id: 22222222,
        collection_name: "На потім",
        collection_movies: [447365],
      },
    ],
  },
};
