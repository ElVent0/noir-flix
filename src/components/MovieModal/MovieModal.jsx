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
  TrailerName,
  YoutubeLogo,
  Rating,
  CornerElementLeft,
  CornerElementBottom,
  DeleteFromLibraryButton,
  InLibraryBlock,
  EditButton,
  ModalContainer,
  CollectionBlock,
  CollectionList,
  CollectionItem,
  CollectionItemLink,
  CollectionItemPoster,
  CollectionItemTitle,
  MoviePlansButton,
} from "./MovieModal.styled";
import { RiCloseLine } from "react-icons/ri";
import { FaClipboardList } from "react-icons/fa";
import { useEffect, useState } from "react";
import { TbStar } from "react-icons/tb";
import { TbStarFilled } from "react-icons/tb";
import { FaCrown } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import youtubeLogo from "../../media/youtube-logo.png";
import { Toaster } from "react-hot-toast";
import ModalReviews from "../ModalReviews/ModalReviews";
import {
  errorMovieToast,
  successToast,
  successEditToast,
  successDeleteToast,
} from "../../utils/toasters.js";
import { getVideoByIds, getCollection } from "../../api/movies.jsx";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { ThemeContext } from "../App";
import { useContext } from "react";
import { starsColor } from "../../utils/colors";
import {
  sendMovie,
  updateStars,
  updateForLater,
  deleteMovie,
} from "../../api/database";
import poster from "../../media/poster.png";
import { v4 as uuidv4 } from "uuid";
import { useSearchParams } from "react-router-dom";
import { sendPlan, getPlansList, deletePlan } from "../../api/database";

const MovieModal = ({
  movieData,
  onCloseReadMore,
  page,
  moviesListIds,
  onclose,
  setMoviesListIds,
  getMoviesFromLibarary,
  isOpenModal,
}) => {
  const [editStarsMode, setEditStarsMode] = useState(false);
  const [stars, setStars] = useState(0);
  const [forLater, setForLater] = useState(false);
  const [isConfirmForm, setIsConfirmForm] = useState(false);
  const [movieTrailer, setMovieTrailer] = useState(null);
  const [isInLibrary, setIsInLibrary] = useState(false);
  const [collection, setCollection] = useState([]);
  const [plansList, setPlansList] = useState([]);
  const [isPlanned, setIsPlanned] = useState(false);

  const session = useSession();
  const supabase = useSupabaseClient();
  const themeType = useContext(ThemeContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const getTrailers = async () => {
    const data = await getVideoByIds(movieData.id);

    const arrayItem = data.results.filter(
      (item) => item.name === "Final Trailer" || item.type === "Trailer"
    );

    const finalArray = arrayItem.map((item) => ({
      id: uuidv4(),
      name: item.name,
      link: `https://www.youtube.com/watch?v=${item.key}`,
      preview: `https://img.youtube.com/vi/${item.key}/0.jpg`,
    }));

    setMovieTrailer(
      finalArray
        .slice(0, 3)
        .sort((a, b) =>
          a.name.toUpperCase().localeCompare(b.name.toUpperCase())
        )
    );
  };

  useEffect(() => {
    const getTrailer = async () => {
      if (movieData && movieData.belongs_to_collection) {
        const collectionData = await getCollection(
          movieData.belongs_to_collection.id
        );

        setCollection(
          collectionData.parts
            .filter(
              (item) =>
                new Date(item.release_date).getTime() < new Date().getTime()
            )
            .sort(
              (a, b) =>
                new Date(b.release_date).getTime() -
                new Date(a.release_date).getTime()
            )
        );
      }

      getTrailers();
    };

    // Встановлюємо трейлер до фільму
    getTrailer();

    if (page === "library") {
      setStars(movieData.stars);
      setForLater(movieData.for_later);
    }

    getPlansList(supabase, session, setPlansList);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setIsPlanned(plansList.some((i) => i.movieId === movieData.id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plansList]);

  // -----------------------------------------------------------------------------------------

  useEffect(() => {
    getTrailers();

    if (moviesListIds && page === "research") {
      const fragmentData = moviesListIds.filter(
        (item) => item.movie_id === movieData.id
      );
      setIsInLibrary(fragmentData.length === 0 ? false : true);
      setIsConfirmForm(false);
    }

    if (page === "library") {
      setForLater(movieData.for_later);
      setStars(movieData.stars);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieData]);

  // -----------------------------------------------------------------------------------------

  useEffect(() => {
    if (moviesListIds) {
      const fragmentData = moviesListIds.filter(
        (item) => item.movie_id === movieData.id
      );
      setIsInLibrary(fragmentData.length === 0 ? false : true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moviesListIds]);

  // -----------------------------------------------------------------------------------------

  const onConfirmForm = () => {
    if (stars === 0) {
      errorMovieToast();
      return;
    }

    if (page === "research") {
      sendMovie(
        supabase,
        session,
        movieData,
        stars,
        forLater,
        successToast,
        setMoviesListIds
      );
      // setIsInLibrary((prev) => !prev);
    } else if (page === "library") {
      updateStars(
        supabase,
        stars,
        session,
        movieData,
        successEditToast,
        setMoviesListIds,
        setEditStarsMode,
        getMoviesFromLibarary
      );
    }
  };

  // -----------------------------------------------------------------------------------------

  const onClickForLater = () => {
    updateForLater(
      page,
      supabase,
      forLater,
      session,
      movieData,
      successEditToast,
      setMoviesListIds,
      getMoviesFromLibarary
    );
    setForLater((prev) => !prev);
  };

  // -----------------------------------------------------------------------------------------

  const onDeleteMovie = () => {
    deleteMovie(
      supabase,
      session,
      movieData,
      successDeleteToast,
      onclose,
      setMoviesListIds,
      getMoviesFromLibarary
    );
  };

  // -----------------------------------------------------------------------------------------

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

  const onSendPlanRequest = (movieId) => {
    if (isPlanned) {
      deletePlan(supabase, session, movieId, successDeleteToast, setPlansList);
    } else {
      sendPlan(supabase, session, movieData, successToast, setPlansList);
    }
  };

  return ReactDOM.createPortal(
    <ModalBackdrop onClick={onCloseReadMore} isOpenModal={isOpenModal}>
      <ModalContainer movieData={movieData}>
        <CollectionBlock onClick={onCloseReadMore}>
          {collection.length !== 0 && (
            <>
              <CollectionList>
                {collection.map((item) => {
                  const isCurrentMovie =
                    item.id === movieData.id ? true : false;

                  const onChangeMovie = () => {
                    const params = { id: item.id };

                    if (searchParams.get("page")) {
                      params.page = searchParams.get("page");
                    }

                    setSearchParams(params);
                  };

                  return (
                    <CollectionItem
                      isCurrentMovie={isCurrentMovie}
                      key={item.id}
                    >
                      <CollectionItemLink onClick={onChangeMovie}>
                        <CollectionItemPoster
                          src={
                            item.poster_path
                              ? `https://image.tmdb.org/t/p/original/${item.poster_path}`
                              : poster
                          }
                          alt="movie poster"
                          width="44"
                          height="66"
                        />
                        <CollectionItemTitle>
                          {item.original_title}
                        </CollectionItemTitle>
                      </CollectionItemLink>
                    </CollectionItem>
                  );
                })}
              </CollectionList>
            </>
          )}
        </CollectionBlock>
        <Modal themetype={themeType}>
          <PosterContainer>
            <ModalPoster
              width="338"
              height="484"
              src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`}
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
                    <FaCrown />
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
                          starsColor={starsColor(stars)}
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
                    <ConfirmButton
                      onClick={onConfirmForm}
                      themeType={themeType}
                    >
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
              <MoviePlansButton
                type="button"
                onClick={() => onSendPlanRequest(movieData.id)}
                isplanned={isPlanned}
              >
                {plansList.some((i) => i.movieId === movieData.id) ? (
                  <MdOutlineDone />
                ) : (
                  <FaClipboardList />
                )}
              </MoviePlansButton>
            </ModalContentBody>
            {movieTrailer && (
              <TrailerList>
                {movieTrailer.map((item) => (
                  <TrailerItem
                    key={item.id}
                    path={
                      item.preview
                        ? item.preview
                        : `https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`
                    }
                  >
                    <TrailerButton href={item.link} target="_blank">
                      <YoutubeLogo
                        src={youtubeLogo}
                        width="26"
                        height="auto"
                        alt="youtube logo"
                      />
                    </TrailerButton>
                    <TrailerName>
                      <p>{item.name}</p>
                    </TrailerName>
                  </TrailerItem>
                ))}
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
                                starsColor={starsColor(stars)}
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
                            <FaCrown />
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
        <ModalReviews movieData={movieData} />
      </ModalContainer>
    </ModalBackdrop>,
    document.body
  );
};

export default MovieModal;
