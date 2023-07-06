import {
  ModalReviewsStyled,
  MoviesReviews,
  NewReviewForm,
  Rating,
  ReviewsList,
  ReviewItem,
  RatingList,
  RatingItem,
  TextArea,
  NewReviewFormFooter,
  GoodButton,
  BadButton,
  ButtonCofirm,
} from "./ModalReviews.styled";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { useState } from "react";
import { useEffect } from "react";
import { sendReviews } from "../../api/database";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { errorReviewToast, successReviewToast } from "../../utils/toasters.js";

const ModalReviews = ({ movieData }) => {
  const [textArea, setTextArea] = useState("");
  const [goodButton, setGoodButton] = useState(false);
  const [badButton, setBadButton] = useState(false);

  const session = useSession();
  const supabase = useSupabaseClient();
  const themeType = useContext(ThemeContext);

  //   let initGood = 0;
  //   const goodReviews = reviews.reduce((a, b) => a + b.good, initGood);

  //   let initBad = 0;
  //   const badReviews = reviews.reduce((a, b) => a + b.bad, initBad);

  //   console.log(session.user.identities.identity_data);
  //   console.log(session.user.user_metadata.name);
  //   console.log(session.user);

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
        // errorReviewToast,
        onDefaultState
      );
    } else {
      errorReviewToast();
    }
  };

  const onChangeTextArea = (e) => {
    setTextArea(e.target.value);
    console.log(textArea);
  };

  const onClickGood = () => {
    setBadButton(false);
    setGoodButton(true);
    console.log(goodButton, badButton);
  };

  const onClickBad = () => {
    setGoodButton(false);
    setBadButton(true);
    console.log(goodButton, badButton);
  };

  useEffect(() => {
    onDefaultState();
  }, [movieData]);

  return (
    <ModalReviewsStyled>
      <MoviesReviews>
        <Rating>
          <RatingList>
            <RatingItem>{/* {goodReviews} */}</RatingItem>
            <RatingItem>{/* {badReviews} */}</RatingItem>
          </RatingList>
        </Rating>
        <ReviewsList>
          {/* {reviews.map((item) => (
            <ReviewItem key={item.id}></ReviewItem>
          ))} */}
        </ReviewsList>
      </MoviesReviews>
      <NewReviewForm onSubmit={(e) => onFormSubmit(e)}>
        <TextArea
          themeType={themeType}
          placeholder="Your review"
          onChange={(e) => onChangeTextArea(e)}
          value={textArea}
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
    </ModalReviewsStyled>
  );
};

export default ModalReviews;
