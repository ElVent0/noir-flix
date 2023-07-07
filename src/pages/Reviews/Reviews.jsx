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
} from "./Reviews.styled.jsx";
import nothing from "../../media/nothing.png";
import nothingLight from "../../media/nothing-2.png";
import { getReviews, getUserReviews, deleteReview } from "../../api/database";
import { useEffect, useState, useContext } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { createAvatar } from "@dicebear/core";
import { funEmoji } from "@dicebear/collection";
import { successDeleteToast } from "../../utils/toasters";
import poster from "../../media/poster.png";
import { getDate } from "../../utils/utils";
import { ThemeContext } from "../../components/App";

const Reviews = () => {
  const [reviewsList, setReviewsList] = useState([]);
  const [isUsersReviews, setIsUsersReviews] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);

  const session = useSession();
  const supabase = useSupabaseClient();
  const themetype = useContext(ThemeContext);

  const getData = async () => {
    if (!isUsersReviews) {
      getReviews(supabase, setReviewsList);
    } else {
      getUserReviews(supabase, session, setReviewsList);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      setReviewsList
    );
  };

  return (
    <ReviewsStyled>
      {/* {reviewsList.length !== 0 ? ( */}

      {session && (
        <ReviewsFilters>
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
        </ReviewsFilters>
      )}
      {reviewsList.length !== 0 ? (
        <ReviewsList>
          {reviewsList.map((item) => {
            return (
              <ReviewsItem key={item.id}>
                <PosterContainer>
                  <MoviePoster
                    src={
                      item.moviePoster
                        ? `https://image.tmdb.org/t/p/original/${item.moviePoster}`
                        : poster
                    }
                    alt="Movie poster"
                  />
                  <MovieName>{item.movieName}</MovieName>
                </PosterContainer>
                <ReviewContent>
                  <ReviewContentHeader isgood={item.good}>
                    {session ? (
                      <HeaderProfile isme={item.userId === session.user.id}>
                        <img
                          src={createAvatar(funEmoji, {
                            seed: item.userId,
                          }).toDataUriSync()}
                          alt="User avatar"
                        />
                        <UserName>{item.username}</UserName>
                      </HeaderProfile>
                    ) : (
                      <HeaderProfile isme={false}>
                        <img
                          src={createAvatar(funEmoji, {
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
          <p>There are no reviews yet. Be the first to comment on something</p>
        </NothingBlock>
      )}
    </ReviewsStyled>
  );
};

export default Reviews;
