import {
  ModalReviewsStyled,
  MoviesReviews,
  NewReviewForm,
  ReviewsList,
  ReviewItem,
  RatingList,
  RatingItem,
  TextArea,
  NewReviewFormFooter,
  GoodButton,
  BadButton,
  ButtonCofirm,
  ItemHeader,
  UserName,
  ItemBody,
  ItemReview,
  UserDate,
  NothingBlock,
  NoReviewForm,
} from "./ModalReviews.styled";
import fingerprint from "../../media/fingerprint.png";
import fingerprintLight from "../../media/fingerprint-2.png";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { useState } from "react";
import { useEffect } from "react";
import { sendReviews, getMovieReviews } from "../../api/database";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { errorReviewToast, successReviewToast } from "../../utils/toasters.js";
import { getDate } from "../../utils/utils";
import { createAvatar } from "@dicebear/core";
import { botttsNeutral } from "@dicebear/collection";

const ModalReviews = ({ movieData }) => {
  const [textArea, setTextArea] = useState("");
  const [goodButton, setGoodButton] = useState(false);
  const [badButton, setBadButton] = useState(false);
  const [movieReviewsList, setMovieReviewsList] = useState([]);

  const session = useSession();
  const supabase = useSupabaseClient();
  const themeType = useContext(ThemeContext);

  const onDefaultState = () => {
    setTextArea("");
    setBadButton(false);
    setGoodButton(false);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (textArea !== "" && (goodButton || badButton)) {
      sendReviews(
        supabase,
        session,
        movieData,
        textArea,
        goodButton,
        badButton,
        successReviewToast,
        onDefaultState,
        movieData.id,
        setMovieReviewsList
      );
    } else {
      errorReviewToast();
    }
  };

  const onChangeTextArea = (e) => {
    setTextArea(e.target.value);
  };

  const onClickGood = () => {
    setBadButton(false);
    setGoodButton(true);
  };

  const onClickBad = () => {
    setGoodButton(false);
    setBadButton(true);
  };

  useEffect(() => {
    getMovieReviews(supabase, movieData.id, setMovieReviewsList);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getMovieReviews(supabase, movieData.id, setMovieReviewsList);
    onDefaultState();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieData]);

  let initGood = 0;
  const goodReviews = movieReviewsList.reduce((a, b) => a + b.good, initGood);

  let initBad = 0;
  const badReviews = movieReviewsList.reduce((a, b) => a + b.bad, initBad);

  return (
    <ModalReviewsStyled>
      <MoviesReviews>
        <RatingList>
          <RatingItem>
            <BiSolidLike />
            {goodReviews}
          </RatingItem>
          <RatingItem>
            <BiSolidDislike />
            {badReviews}
          </RatingItem>
        </RatingList>
        {movieReviewsList.length !== 0 ? (
          <ReviewsList>
            {movieReviewsList.map((item) => (
              <ReviewItem key={item.id}>
                <ItemHeader isgood={item.good}>
                  <img
                    src={createAvatar(botttsNeutral, {
                      seed: item.userId,
                    }).toDataUriSync()}
                    width="20"
                    alt="User avatar"
                  />
                  <UserName>{item.username}</UserName>
                  {item.good ? <BiSolidLike /> : <BiSolidDislike />}
                  <UserDate>{getDate(item.created_at)}</UserDate>
                </ItemHeader>
                <ItemBody>
                  <ItemReview>{item.content}</ItemReview>
                </ItemBody>
              </ReviewItem>
            ))}
          </ReviewsList>
        ) : (
          <NothingBlock>
            <p>
              There are no reviews for this movie yet. Be the first to comment
              on it
            </p>
          </NothingBlock>
        )}
      </MoviesReviews>
      {session ? (
        <NewReviewForm onSubmit={(e) => onFormSubmit(e)}>
          <TextArea
            themeType={themeType}
            placeholder="Your review"
            onChange={(e) => onChangeTextArea(e)}
            value={textArea}
            id="review"
          ></TextArea>
          <NewReviewFormFooter>
            <GoodButton
              type="button"
              isActive={goodButton}
              valuse={goodButton}
              onClick={onClickGood}
            >
              <BiSolidLike />
            </GoodButton>
            <BadButton
              type="button"
              isActive={badButton}
              valuse={badButton}
              onClick={onClickBad}
            >
              <BiSolidDislike />
            </BadButton>
            <ButtonCofirm type="submit">Confirm</ButtonCofirm>
          </NewReviewFormFooter>
        </NewReviewForm>
      ) : (
        <NoReviewForm>
          <img
            src={themeType ? fingerprint : fingerprintLight}
            width="54"
            alt="fingerpring"
          />
          <p>You need to log in to leave a review</p>
        </NoReviewForm>
      )}
    </ModalReviewsStyled>
  );
};

export default ModalReviews;
