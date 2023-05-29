import ReactDOM from "react-dom";
import {
  ModalBackdrop,
  Modal,
  ModalPoster,
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
} from "./MovieModal.styled";
import { RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { TbStar } from "react-icons/tb";
import { TbStarFilled } from "react-icons/tb";
import { MdMoreTime } from "react-icons/md";
import toast from "react-hot-toast";

const MovieModal = ({ movieData, onCloseReadMore, genresInEnglish }) => {
  const [stars, setStars] = useState(0);
  const [forLater, setForLater] = useState(false);
  const [isConfirmForm, setIsConfirmForm] = useState(false);
  const posterPath = `https://image.tmdb.org/t/p/original/${movieData.poster_path}`;

  // console.log("movieData", movieData);

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
    }
    // Тут відправляю ці дані на сервер (створюю новий фільм в бібліотеці)
    console.log("Sending data", movieData.id, stars, forLater);
  };

  return ReactDOM.createPortal(
    <ModalBackdrop onClick={onCloseReadMore}>
      <Modal>
        <ModalPoster
          width="300"
          height="430"
          src={posterPath}
          alt="Movie poster"
        />
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
            <ModalParagraph>
              <span>{movieData.overview}</span>
            </ModalParagraph>
          </ModalContentBody>
          <ModalContentFooter>
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
                <ConfirmButton onClick={onConfirmForm}>Confirm</ConfirmButton>
              </>
            )}
          </ModalContentFooter>
        </ModalContent>
      </Modal>
    </ModalBackdrop>,
    document.body
  );
};

export default MovieModal;
