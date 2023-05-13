import {
  MoviesNavigationStyled,
  MoviesNavigationList,
  MoviesNavigationItem,
  MoviesNavigationButton,
  MoviesNavigationButtonActive,
  EndButton,
} from "./MoviesNavigation.styled";
import { useSearchParams } from "react-router-dom";

const MoviesNavigation = ({ pageNumbers, totalPages }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage =
    searchParams.get("page") !== null ? Number(searchParams.get("page")) : 1;

  return (
    <MoviesNavigationStyled>
      <EndButton onClick={() => setSearchParams({ page: 1 })}>First</EndButton>
      {currentPage > 5 && <p>...</p>}
      <MoviesNavigationList>
        {pageNumbers.length > 0 &&
          pageNumbers.map((item) => (
            <MoviesNavigationItem key={item}>
              {currentPage !== item && (
                <MoviesNavigationButton
                  onClick={() =>
                    setSearchParams({
                      page: item,
                    })
                  }
                >
                  {item}
                </MoviesNavigationButton>
              )}
              {currentPage === item && (
                <MoviesNavigationButtonActive>
                  {item}
                </MoviesNavigationButtonActive>
              )}
            </MoviesNavigationItem>
          ))}
      </MoviesNavigationList>
      {currentPage < 496 && <p>...</p>}
      <EndButton onClick={() => setSearchParams({ page: 496 })}>Last</EndButton>
    </MoviesNavigationStyled>
  );
};

export default MoviesNavigation;
