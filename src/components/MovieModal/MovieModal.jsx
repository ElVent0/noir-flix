import ReactDOM from "react-dom";
import {
  ModalBackdrop,
  Modal,
  ModalPoster,
  PosterContainer,
  MoreCheckPoster,
  MoreCheckButtonPoster,
  ModalContent,
  ModalContentHeader,
  ModalContentBody,
  ModalContentFooter,
  Title,
  Year,
  CloseButton,
  ModalParagraph,
  AddButton,
  StarsList,
  StarItem,
  StarButton,
  ConfirmButton,
  MoreCheck,
  MoreCheckButton,
  TrailerList,
  TrailerItem,
  TrailerButton,
  YoutubeLogo,
  Rating,
  CornerElementLeft,
  CornerElementBottom,
  DeleteFromLibraryButton,
  InLibraryBlock,
} from "./MovieModal.styled";
import { RiCloseLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { TbStar } from "react-icons/tb";
import { TbStarFilled } from "react-icons/tb";
import { MdMoreTime } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
import youtubeLogo from "../../media/youtube-logo.png";
import toast from "react-hot-toast";
import { getVideoByIds } from "../../api/movies.jsx";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

const MovieModal = ({
  movieData,
  onCloseReadMore,
  genresInEnglish,
  page,
  moviesListIds,
  onclose,
}) => {
  const [stars, setStars] = useState(0);
  const [forLater, setForLater] = useState(false);
  const [isConfirmForm, setIsConfirmForm] = useState(false);
  const [movieTrailer, setMovieTrailer] = useState(null);
  const [isInLibrary, setIsInLibrary] = useState(false);

  const posterPath = `https://image.tmdb.org/t/p/original/${movieData.poster_path}`;
  const bgPath = `https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`;

  const session = useSession();
  const supabase = useSupabaseClient();

  // console.log("movieData", movieData);

  useEffect(() => {
    if (moviesListIds) {
      const fragmentData = moviesListIds.filter(
        (item) => item.movie_id === movieData.id
      );
      setIsInLibrary(fragmentData.length === 0 ? false : true);
    }
  }, [moviesListIds]);

  const errorToast = () =>
    toast.error("Rate the movie first", {
      duration: 4000,
      style: {
        padding: "16px",
        textAlign: "center",
        color: "#606770",
      },
      iconTheme: {
        primary: "#fa4b34",
        secondary: "#ffffff",
      },
    });

  const successToast = () =>
    toast.success("The movie has been added to the library", {
      duration: 4000,
      style: {
        padding: "16px",
        textAlign: "center",
        color: "#606770",
      },
      iconTheme: {
        primary: "#11b3ff",
        secondary: "#ffffff",
      },
    });

  const successEditToast = () =>
    toast.success("The movie data have been changed in your library", {
      duration: 4000,
      style: {
        padding: "16px",
        textAlign: "center",
        color: "#606770",
      },
      iconTheme: {
        primary: "#11b3ff",
        secondary: "#ffffff",
      },
    });

  const successDeleteToast = () =>
    toast.success("The movie has been removed from your library", {
      duration: 4000,
      style: {
        padding: "16px",
        textAlign: "center",
        color: "#606770",
      },
      iconTheme: {
        primary: "#11b3ff",
        secondary: "#ffffff",
      },
    });

  const getRatingList = () => {
    const ratingList = [];
    for (let i = 1; i <= stars; i += 1) {
      ratingList.push(true);
    }
    for (let i = 1; i <= 5 - stars; i += 1) {
      ratingList.push(false);
    }
    return ratingList;
  };

  const onStars = (number) => {
    setStars(number);
  };

  const onConfirmForm = () => {
    if (stars === 0) {
      errorToast();
      return;
    }
    if (page === "research") {
      // Тут відправляю ці дані на сервер (створюю новий фільм в бібліотеці)

      const sendMovie = async () => {
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

          // const { errorSecond } = await supabase
          //   .from("users_movies")
          //   .insert({
          //     user_id: session.user.id,
          //     movie_id: movieData.id,
          //   })
          //   .single();

          // window.location.reload();
          if (error) {
            console.error(1, error);
            return;
          } else {
            successToast();
          }
        } catch (error) {
          console.error(2, error);
        }
      };

      sendMovie();
    } else if (page === "library") {
      supabase
        .from("library")
        .update({ movie_rating: stars })
        .match({
          user_id: session.user.id,
          movie_id: movieData.id,
        })
        .then((response) => {
          console.log("Рядок успішно оновлено:", response);
          successEditToast();
        })
        .catch((error) => {
          console.error("Помилка оновлення рядка:", error);
        });
    }
  };

  const onDeleteMovie = () => {
    // Тут видаляю фільм з бібліотеки
    supabase
      .from("library")
      .delete()
      .match({
        user_id: session.user.id,
        movie_id: movieData.id,
      })
      .then((response) => {
        successDeleteToast();
        onclose();
        console.log("Рядок успішно видалено:", response);
        // window.location.reload();
      })
      .catch((error) => {
        console.error("Помилка видалення рядка:", error);
      });
  };

  useEffect(() => {
    if (page === "library") {
      supabase
        .from("library")
        .update({ movie_for_future: forLater })
        .match({
          user_id: session.user.id,
          movie_id: movieData.id,
        })
        .then((response) => {
          console.log("Рядок успішно оновлено:", response);
        })
        .catch((error) => {
          console.error("Помилка оновлення рядка:", error);
        });
    }
    // console.log("Changing forLater", movieData.id, forLater);
  }, [forLater]);

  useEffect(() => {
    const getTrailer = async () => {
      const data = await getVideoByIds(movieData.id);

      const arrayItem = data.results.filter(
        (item) => item.name === "Final Trailer"
      );

      let trailer;
      if (data.results.length > 0 && arrayItem[0] !== undefined) {
        trailer = `https://www.youtube.com/watch?v=${arrayItem[0].key}`;
      } else if (data.results.length > 0 && arrayItem[0] === undefined) {
        trailer = `https://www.youtube.com/watch?v=${
          data.results[data.results.length - 1].key
        }`;
      } else {
        return;
      }

      setMovieTrailer(trailer);
    };

    getTrailer();
    // eslint-disable-next-line react-hooks/exhaustive-deps

    // console.log("================", movieData);

    if (page === "library") {
      setStars(movieData.stars);
      setForLater(movieData.for_later);
    }
  }, []);

  return ReactDOM.createPortal(
    <ModalBackdrop onClick={onCloseReadMore}>
      <Modal>
        <PosterContainer>
          <ModalPoster
            width="300"
            height="430"
            src={posterPath}
            alt="Movie poster"
          />
          {page === "library" && (
            <>
              <CornerElementLeft></CornerElementLeft>
              <CornerElementBottom></CornerElementBottom>
              <MoreCheckPoster page={page}>
                <MoreCheckButtonPoster
                  forLater={forLater}
                  onClick={() => setForLater((prev) => !prev)}
                >
                  <MdMoreTime />
                </MoreCheckButtonPoster>
              </MoreCheckPoster>
            </>
          )}
        </PosterContainer>
        <ModalContent>
          <ModalContentHeader>
            <div>
              <Title>{movieData.original_title}</Title>
              <Year>{new Date(movieData.release_date).getFullYear()}</Year>
            </div>

            <CloseButton id="button-close" onClick={onCloseReadMore}>
              <RiCloseLine />
            </CloseButton>
          </ModalContentHeader>
          <ModalContentBody>
            {page === "library" && (
              <Rating>
                <StarsList>
                  {getRatingList().map((item, index) => (
                    <StarItem key={index}>
                      <StarButton
                        item={item}
                        onClick={() => onStars(index + 1)}
                      >
                        {item ? <TbStarFilled /> : <TbStar />}
                      </StarButton>
                    </StarItem>
                  ))}
                </StarsList>
                <ConfirmButton onClick={onConfirmForm}>Confirm</ConfirmButton>
              </Rating>
            )}
            <ModalParagraph>
              <span>Tagline:</span> {movieData.tagline}
            </ModalParagraph>
            <ModalParagraph>
              <span>Rating:</span> {movieData.vote_average.toFixed(1)} / 10 (
              {movieData.vote_count} votes)
            </ModalParagraph>
            <ModalParagraph>
              <span>Runtime:</span> {movieData.runtime} min
            </ModalParagraph>
            <ModalParagraph>
              <span>Genres:</span>{" "}
              {movieData.genres.map((item) => item.name).join(", ")}
            </ModalParagraph>
            <ModalParagraph>
              <span>Countries:</span>{" "}
              {movieData.production_countries
                .map((item) => item.name)
                .join(", ")}
            </ModalParagraph>
            <ModalParagraph page={page}>
              <span>{movieData.overview}</span>
            </ModalParagraph>
          </ModalContentBody>
          {movieTrailer && (
            <TrailerList>
              <TrailerItem path={bgPath}>
                <TrailerButton href={movieTrailer} target="_blank">
                  <YoutubeLogo src={youtubeLogo} alt="youtube logo" />
                </TrailerButton>
              </TrailerItem>
            </TrailerList>
          )}

          {!isInLibrary && page === "research" ? (
            <ModalContentFooter>
              {page === "research" && (
                <>
                  {!isConfirmForm && (
                    <AddButton
                      onClick={() => {
                        setIsConfirmForm((prev) => !prev);
                      }}
                    >
                      Add to library
                    </AddButton>
                  )}
                  {isConfirmForm && (
                    <>
                      <StarsList>
                        {getRatingList().map((item, index) => (
                          <StarItem key={index}>
                            <StarButton
                              item={item}
                              onClick={() => onStars(index + 1)}
                            >
                              {item ? <TbStarFilled /> : <TbStar />}
                            </StarButton>
                          </StarItem>
                        ))}
                      </StarsList>
                      <MoreCheck>
                        <MoreCheckButton
                          forLater={forLater}
                          onClick={() => setForLater((prev) => !prev)}
                        >
                          <MdMoreTime />
                        </MoreCheckButton>
                      </MoreCheck>
                      <ConfirmButton onClick={onConfirmForm}>
                        Confirm
                      </ConfirmButton>
                    </>
                  )}
                </>
              )}
            </ModalContentFooter>
          ) : (
            <>
              {page === "research" && (
                <InLibraryBlock>
                  <MdOutlineDone />
                  In library
                </InLibraryBlock>
              )}
            </>
          )}
          {page === "library" && (
            <DeleteFromLibraryButton onClick={onDeleteMovie}>
              Delete from library
            </DeleteFromLibraryButton>
          )}
        </ModalContent>
      </Modal>
    </ModalBackdrop>,
    document.body
  );
};

export default MovieModal;
