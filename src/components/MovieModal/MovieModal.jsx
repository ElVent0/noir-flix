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
} from "./MovieModal.styled";
import { RiCloseLine } from "react-icons/ri";

const MovieModal = ({ movieData, onCloseReadMore, genresInEnglish }) => {
  const posterPath = `https://image.tmdb.org/t/p/original/${movieData.poster_path}`;

  console.log("movieData", movieData);

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
          <ModalContentFooter></ModalContentFooter>
        </ModalContent>
      </Modal>
    </ModalBackdrop>,
    document.body
  );
};

export default MovieModal;
