import {
  MoviesNavigationStyled,
  MoviesNavigationList,
  MoviesNavigationItem,
  MoviesNavigationButton,
  MoviesNavigationButtonActive,
  EndButton,
} from "./MoviesNavigation.styled";
import { useSearchParams } from "react-router-dom";
import { ImArrowLeft2 } from "react-icons/im";
import { ImArrowRight2 } from "react-icons/im";
import { useContext } from "react";
import { ThemeContext } from "../App";

const MoviesNavigation = ({ totalPages }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const themeType = useContext(ThemeContext);

  const currentPage =
    searchParams.get("page") !== null ? Number(searchParams.get("page")) : 1;

  const pageNumbersList = () => {
    let pageNumbersArray = [];

    pageNumbersArray.push(currentPage - 4);
    pageNumbersArray.push(currentPage - 3);
    pageNumbersArray.push(currentPage - 2);
    pageNumbersArray.push(currentPage - 1);

    for (let i = 0; i < 5; i += 1) {
      pageNumbersArray.push(currentPage + i);
    }

    pageNumbersArray = [
      ...pageNumbersArray.filter(function (x) {
        return x > 0 && x <= 496 && x <= totalPages;
      }),
    ];

    return pageNumbersArray;
  };

  return (
    <MoviesNavigationStyled>
      <EndButton onClick={() => setSearchParams({ page: 1 })}>First</EndButton>
      {currentPage > 1 && (
        <EndButton onClick={() => setSearchParams({ page: currentPage - 1 })}>
          <ImArrowLeft2 />
        </EndButton>
      )}
      {currentPage > 5 && <p>...</p>}
      <MoviesNavigationList>
        {pageNumbersList().length > 0 &&
          pageNumbersList().map((item) => (
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
                <MoviesNavigationButtonActive themeType={themeType}>
                  {item}
                </MoviesNavigationButtonActive>
              )}
            </MoviesNavigationItem>
          ))}
      </MoviesNavigationList>
      {currentPage < (totalPages > 496 ? 496 : totalPages) && <p>...</p>}
      {((currentPage < 496 && totalPages > 496) ||
        (currentPage < totalPages && totalPages < 496)) && (
        <EndButton onClick={() => setSearchParams({ page: currentPage + 1 })}>
          <ImArrowRight2 />
        </EndButton>
      )}
      <EndButton
        onClick={() =>
          setSearchParams({ page: totalPages > 496 ? 496 : totalPages })
        }
      >
        Last
      </EndButton>
    </MoviesNavigationStyled>
  );
};

export default MoviesNavigation;
