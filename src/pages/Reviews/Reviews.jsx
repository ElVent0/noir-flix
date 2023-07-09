import {
  ReviewsStyled,
  ReviewsFilters,
  FiltersButton,
  ReviewsList,
  ReviewsItem,
  MoviePoster,
  ReviewContent,
  ReviewContentHeader,
  MovieName,
  ReviewContentBody,
  UserName,
  UserReview,
  PosterContainer,
  ReviewDate,
  DeleteButton,
  DeleteContainer,
  DeleteConfirmation,
  DeleteOption,
  HeaderProfile,
  NothingBlock,
  ReviewVotes,
  ButtonUpDown,
  FiltersParagraph,
  FilterInputSort,
  HeaderSort,
  BodySort,
  ItemSort,
  ButtonSort,
} from "./Reviews.styled.jsx";
import nothing from "../../media/nothing.png";
import nothingLight from "../../media/nothing-2.png";
import {
  getReviews,
  getUserReviews,
  deleteReview,
  addReviewRecommendation,
  addReviewNotRecommendation,
  deleteReviewRecommendation,
  deleteReviewNotRecommendation,
} from "../../api/database";
import { useEffect, useState, useContext } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { PiTriangleFill, PiTriangle } from "react-icons/pi";
import { AiFillDelete } from "react-icons/ai";
import { createAvatar } from "@dicebear/core";
import { botttsNeutral } from "@dicebear/collection";
import { successDeleteToast, errorReviewVote } from "../../utils/toasters";
import poster from "../../media/poster.png";
import { getDate } from "../../utils/utils";
import { ThemeContext } from "../../components/App";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

const Reviews = () => {
  const [reviewsList, setReviewsList] = useState([]);
  const [isUsersReviews, setIsUsersReviews] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [inputSort, setInputSort] = useState("New");

  const onSortInLibrary = (item) => {
    setInputSort(item);
    setIsOpenSort((prev) => !prev);
  };

  const sortItemsInLibrary = ["Popular", "New"];

  const session = useSession();
  const supabase = useSupabaseClient();
  const themetype = useContext(ThemeContext);

  const getData = async () => {
    if (!isUsersReviews) {
      getReviews(supabase, setReviewsList, inputSort);
    } else {
      getUserReviews(supabase, session, setReviewsList, inputSort);
    }
  };

  useEffect(() => {
    getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputSort]);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUsersReviews]);

  const onAllReviews = () => {
    setIsUsersReviews(false);
  };

  const onMineReviews = () => {
    setIsUsersReviews(true);
  };

  const onDeleteReview = (id) => {
    deleteReview(
      supabase,
      session,
      id,
      isUsersReviews,
      successDeleteToast,
      setReviewsList,
      inputSort
    );
  };

  const onTriangleUp = (id, isRecommendations, isNotRecommendations) => {
    if (session) {
      if (isRecommendations) {
        deleteReviewRecommendation(
          supabase,
          session,
          id,
          setReviewsList,
          session.user.id,
          inputSort,
          isUsersReviews
        );
        return;
      } else if (isNotRecommendations) {
        deleteReviewNotRecommendation(
          supabase,
          session,
          id,
          setReviewsList,
          session.user.id,
          inputSort,
          isUsersReviews
        );
      }
      addReviewRecommendation(
        supabase,
        session,
        id,
        session.user.id,
        setReviewsList,
        inputSort,
        isUsersReviews
      );
    } else {
      errorReviewVote();
    }
  };

  const onTriangleDown = (id, isRecommendations, isNotRecommendations) => {
    if (session) {
      if (isNotRecommendations) {
        deleteReviewNotRecommendation(
          supabase,
          session,
          id,
          setReviewsList,
          session.user.id,
          inputSort,
          isUsersReviews
        );
        return;
      } else if (isRecommendations) {
        deleteReviewRecommendation(
          supabase,
          session,
          id,
          setReviewsList,
          session.user.id,
          inputSort,
          isUsersReviews
        );
      }
      addReviewNotRecommendation(
        supabase,
        session,
        id,
        session.user.id,
        setReviewsList,
        inputSort,
        isUsersReviews
      );
    } else {
      errorReviewVote();
    }
  };

  return (
    <ReviewsStyled>
      <ReviewsFilters>
        <FiltersParagraph>Sort</FiltersParagraph>
        <FilterInputSort
          onMouseEnter={() => setIsOpenSort((prev) => !prev)}
          onMouseLeave={() => setIsOpenSort((prev) => !prev)}
        >
          <HeaderSort>
            {inputSort}
            <IoIosArrowDown />
          </HeaderSort>
          {isOpenSort && (
            <BodySort isOpenSort={isOpenSort}>
              {sortItemsInLibrary
                .filter((item) => item !== inputSort)
                .map((item) => (
                  <ItemSort key={item} onClick={() => onSortInLibrary(item)}>
                    <ButtonSort themeType={themetype}>{item}</ButtonSort>
                  </ItemSort>
                ))}
            </BodySort>
          )}
        </FilterInputSort>
        {session && (
          <>
            <FiltersButton
              onClick={onAllReviews}
              isUsersReviews={!isUsersReviews}
            >
              All reviews
            </FiltersButton>
            <FiltersButton
              onClick={onMineReviews}
              isUsersReviews={isUsersReviews}
            >
              Only mine
            </FiltersButton>
          </>
        )}
      </ReviewsFilters>
      {reviewsList.length !== 0 ? (
        <ReviewsList>
          {reviewsList.map((item) => {
            let isRecommendations;
            let isNotRecommendations;

            if (session) {
              isRecommendations = item.recommendations.includes(
                `${session.user.id}`
              );

              isNotRecommendations = item.notRecommendations.includes(
                `${session.user.id}`
              );
            }

            const recommendationsResult = () => {
              const number =
                item.recommendations.length - item.notRecommendations.length;

              if (number <= 0) {
                return number;
              } else {
                return `+${number}`;
              }
            };

            return (
              <ReviewsItem key={item.id}>
                <PosterContainer to={`/?id=${item.movieId}`}>
                  <MoviePoster
                    src={
                      item.moviePoster
                        ? `https://image.tmdb.org/t/p/original/${item.moviePoster}`
                        : poster
                    }
                    alt="Movie poster"
                  />
                  <AiOutlineSearch />
                  <MovieName>{item.movieName}</MovieName>
                </PosterContainer>
                <ReviewContent>
                  <ReviewContentHeader isgood={item.good}>
                    {session ? (
                      <HeaderProfile isme={item.userId === session.user.id}>
                        <img
                          src={createAvatar(botttsNeutral, {
                            seed: item.userId,
                          }).toDataUriSync()}
                          alt="User avatar"
                        />
                        <UserName isme={item.userId === session.user.id}>
                          {item.username}
                        </UserName>
                      </HeaderProfile>
                    ) : (
                      <HeaderProfile isme={false}>
                        <img
                          src={createAvatar(botttsNeutral, {
                            seed: item.userId,
                          }).toDataUriSync()}
                          alt="User avatar"
                        />

                        <UserName>{item.username}</UserName>
                      </HeaderProfile>
                    )}
                    {item.good ? <BiSolidLike /> : <BiSolidDislike />}
                    <ReviewDate>{getDate(item.created_at)}</ReviewDate>
                    {session && session.user.id === item.userId && (
                      <DeleteContainer>
                        {deleteConfirmation === item.id ? (
                          <DeleteConfirmation>
                            <DeleteOption
                              onClick={() => {
                                onDeleteReview(item.id);
                                setDeleteConfirmation(false);
                              }}
                            >
                              Delete
                            </DeleteOption>
                            <DeleteOption
                              onClick={() => setDeleteConfirmation(false)}
                            >
                              Cancel
                            </DeleteOption>
                          </DeleteConfirmation>
                        ) : (
                          <DeleteButton
                            onClick={() => setDeleteConfirmation(item.id)}
                          >
                            <AiFillDelete />
                          </DeleteButton>
                        )}
                      </DeleteContainer>
                    )}
                  </ReviewContentHeader>
                  <ReviewContentBody>
                    <UserReview>{item.content}</UserReview>
                    <ReviewVotes>
                      <ButtonUpDown
                        type="button"
                        onClick={() =>
                          onTriangleUp(
                            item.id,
                            isRecommendations,
                            isNotRecommendations
                          )
                        }
                        isRecommendations={isRecommendations}
                        session={session}
                      >
                        {session ? <PiTriangleFill /> : <PiTriangle />}
                      </ButtonUpDown>
                      <p>{recommendationsResult()}</p>
                      <ButtonUpDown
                        type="button"
                        onClick={() =>
                          onTriangleDown(
                            item.id,
                            isRecommendations,
                            isNotRecommendations
                          )
                        }
                        isNotRecommendations={isNotRecommendations}
                      >
                        {session ? <PiTriangleFill /> : <PiTriangle />}
                      </ButtonUpDown>
                    </ReviewVotes>
                  </ReviewContentBody>
                </ReviewContent>
              </ReviewsItem>
            );
          })}
        </ReviewsList>
      ) : (
        <NothingBlock>
          <img
            src={themetype ? nothing : nothingLight}
            width="160"
            alt="Nothing illustration"
          />
          <p>
            {isUsersReviews
              ? "You haven't left any reviews yet. Comment something"
              : "There are no reviews yet. Be the first to comment on something"}
          </p>
        </NothingBlock>
      )}
    </ReviewsStyled>
  );
};

export default Reviews;
