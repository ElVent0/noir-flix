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
  StarsListBottom,
  StarItem,
  StarItemBottom,
  StarButton,
  StarButtonBottom,
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
  EditButton,
} from "./MovieModal.styled";
import { RiCloseLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { TbStar } from "react-icons/tb";
import { TbStarFilled } from "react-icons/tb";
import { MdMoreTime } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import youtubeLogo from "../../media/youtube-logo.png";
import { Toaster } from "react-hot-toast";
import {
  errorToast,
  successToast,
  successEditToast,
  successDeleteToast,
} from "../../utils/toasters.js";
import { getVideoByIds } from "../../api/movies.jsx";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { ThemeContext } from "../App";
import { useContext } from "react";

const MovieModal = ({
  movieData,
  onCloseReadMore,
  page,
  moviesListIds,
  onclose,
}) => {
  const [editStarsMode, setEditStarsMode] = useState(false);
  const [stars, setStars] = useState(0);
  const [forLater, setForLater] = useState(false);
  const [isConfirmForm, setIsConfirmForm] = useState(false);
  const [movieTrailer, setMovieTrailer] = useState(null);
  const [isInLibrary, setIsInLibrary] = useState(false);

  const posterPath = `https://image.tmdb.org/t/p/original/${movieData.poster_path}`;
  const bgPath = `https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`;

  const session = useSession();
  const supabase = useSupabaseClient();
  const themeType = useContext(ThemeContext);

  useEffect(() => {
    if (moviesListIds) {
      const fragmentData = moviesListIds.filter(
        (item) => item.movie_id === movieData.id
      );
      setIsInLibrary(fragmentData.length === 0 ? false : true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moviesListIds]);

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

          if (error) {
            console.error(1, error);
            return;
          } else {
            successToast();
          }
        } catch (e) {
          console.error("insert error", e);
        }
      };

      sendMovie();
    } else if (page === "library") {
      try {
        supabase
          .from("library")
          .update({ movie_rating: stars })
          .match({
            user_id: session.user.id,
            movie_id: movieData.id,
          })
          .then(() => {
            successEditToast();
          })
          .catch((error) => {
            console.error("Помилка оновлення рядка:", error);
          });
      } catch (e) {
        console.log("update error", e);
      }
    }
  };

  const onClickForLater = () => {
    setForLater((prev) => !prev);
    try {
      if (page === "library") {
        supabase
          .from("library")
          .update({ movie_for_future: !forLater })
          .match({
            user_id: session.user.id,
            movie_id: movieData.id,
          })
          .then(() => {
            successEditToast();
          })
          .catch((error) => {
            console.error("Помилка оновлення рядка:", error);
          });
      }
    } catch (e) {
      console.error(e);
    }
  };

  const onDeleteMovie = () => {
    try {
      supabase
        .from("library")
        .delete()
        .match({
          user_id: session.user.id,
          movie_id: movieData.id,
        })
        .then(() => {
          successDeleteToast();
          onclose();
        })
        .catch((error) => {
          console.error("Помилка видалення рядка:", error);
        });
    } catch (e) {
      console.log("delete error", e);
    }
  };

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

    if (page === "library") {
      setStars(movieData.stars);
      setForLater(movieData.for_later);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const starsColor = () => {
    if (stars === 1) {
      return "#c2c2c2";
    } else if (stars === 2) {
      return "#85c7e6";
    } else if (stars === 3) {
      return "#6492ff";
    } else if (stars === 4) {
      return "#af4dff";
    } else if (stars === 5) {
      return "#e32fff";
    } else if (stars === 0) {
      return "--accent";
    }
  };

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
                  onClick={() => onClickForLater()}
                  themeType={themeType}
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
                <StarsList editStarsMode={editStarsMode}>
                  {getRatingList().map((item, index) => (
                    <StarItem key={index} editStarsMode={editStarsMode}>
                      <StarButton
                        item={item}
                        editStarsMode={editStarsMode}
                        starsColor={starsColor()}
                        onClick={() => {
                          if (editStarsMode) {
                            onStars(index + 1);
                          }
                        }}
                      >
                        {item ? <TbStarFilled /> : <TbStar />}
                      </StarButton>
                    </StarItem>
                  ))}
                </StarsList>
                {!editStarsMode ? (
                  <EditButton
                    onClick={() => {
                      setEditStarsMode((prev) => !prev);
                    }}
                  >
                    <BiEditAlt />
                  </EditButton>
                ) : (
                  <ConfirmButton onClick={onConfirmForm} themeType={themeType}>
                    Confirm
                  </ConfirmButton>
                )}
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
                  {!isConfirmForm && session && (
                    <AddButton
                      onClick={() => {
                        setIsConfirmForm((prev) => !prev);
                        setEditStarsMode((prev) => !prev);
                      }}
                    >
                      Add to library
                    </AddButton>
                  )}
                  {isConfirmForm && (
                    <>
                      <StarsListBottom>
                        {getRatingList().map((item, index) => (
                          <StarItemBottom key={index}>
                            <StarButtonBottom
                              item={item}
                              starsColor={starsColor()}
                              onClick={() => onStars(index + 1)}
                            >
                              {item ? <TbStarFilled /> : <TbStar />}
                            </StarButtonBottom>
                          </StarItemBottom>
                        ))}
                      </StarsListBottom>
                      <MoreCheck>
                        <MoreCheckButton
                          forLater={forLater}
                          onClick={() => setForLater((prev) => !prev)}
                        >
                          <MdMoreTime />
                        </MoreCheckButton>
                      </MoreCheck>
                      <ConfirmButton
                        onClick={onConfirmForm}
                        themeType={themeType}
                      >
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
                <InLibraryBlock themeType={themeType}>
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
        <Toaster
          toastOptions={{
            style: {
              zIndex: 9999,
            },
          }}
        />
      </Modal>
    </ModalBackdrop>,
    document.body
  );
};

export default MovieModal;
