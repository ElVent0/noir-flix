import {
  ReviewsStyled,
  ReviewsFilters,
  FiltersParagraph,
  ReviewsList,
  ReviewsItem,
  MoviePoster,
  ReviewContent,
  ReviewContentHeader,
  MovieName,
  ReviewContentBody,
  UserName,
  UserReview,
  //   UserImage,
} from "./Reviews.styled.jsx";
import { getReviews, getUserReviews } from "../../api/database";
import { useEffect, useState } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { createAvatar } from "@dicebear/core";
import { funEmoji } from "@dicebear/collection";

const Reviews = ({ onAddToRecentMovies }) => {
  const [reviewsList, setReviewsList] = useState([]);
  const [isUsersReviews, setIsUsersReviews] = useState(false);

  const session = useSession();
  const supabase = useSupabaseClient();

  useEffect(() => {
    const getData = async () => {
      if (!isUsersReviews) {
        getReviews(supabase, setReviewsList);
      } else {
        getUserReviews(supabase, session, setReviewsList);
      }
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("reviewsList", reviewsList);

  return (
    <ReviewsStyled>
      <ReviewsFilters>
        <FiltersParagraph>Only mine</FiltersParagraph>
      </ReviewsFilters>
      <ReviewsList>
        {reviewsList.map((item) => {
          return (
            <ReviewsItem key={item.id}>
              <MoviePoster></MoviePoster>
              <ReviewContent>
                <ReviewContentHeader isgood={item.good}>
                  <div>
                    <img
                      src={createAvatar(funEmoji, {
                        seed: session.user.identities[0].id,
                      }).toDataUriSync()}
                      alt="User avatar"
                    />
                    <UserName>{item.username}</UserName>
                  </div>
                  {item.good ? <BiSolidLike /> : <BiSolidDislike />}
                </ReviewContentHeader>
                <ReviewContentHeader>
                  <MovieName>{item.movieId}</MovieName>
                </ReviewContentHeader>
                <ReviewContentBody>
                  <UserReview>{item.content}</UserReview>
                </ReviewContentBody>
              </ReviewContent>
            </ReviewsItem>
          );
        })}
      </ReviewsList>
    </ReviewsStyled>
  );
};

export default Reviews;
