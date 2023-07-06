import { useState } from "react";
import {
  Filters,
  FiltersParagraph,
  Search,
  SearchInput,
  FilterInputSort,
  HeaderSort,
  BodySort,
  ItemSort,
  ButtonSort,
  CloseSearchButton,
  StarsList,
  StarItem,
  ButtonAll,
  StarButton,
  MoreCheck,
  MoreCheckButton,
  GenresList,
  GenresItem,
  GenresButton,
} from "./MoviesFilters.styled";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { useSearchParams } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { TbStar } from "react-icons/tb";
import { TbStarFilled } from "react-icons/tb";
import { FaCrown } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../App";
import genresData from "../../utils/genres.json";

const ResearchFilters = ({
  setInputSort,
  inputSort,
  searchInput,
  changeSearchInput,
  stars,
  onStars,
  forLater,
  onForLater,
  onAllStarsButton,
  setSearchInput,
  setCurrentGenre,
  currentGenre,
}) => {
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [onFocus, setOnFocus] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const themeType = useContext(ThemeContext);

  const onSort = (item) => {
    setInputSort(item);
    setIsOpenSort((prev) => !prev);
    setSearchParams({ page: 1 });
    setSearchParams({ sort: item });
  };

  const onSortInLibrary = (item) => {
    setInputSort(item);
    setIsOpenSort((prev) => !prev);
  };

  const sortItems = ["Popularity", "Vote", "Title", "New", "Future"];
  const sortItemsInLibrary = ["Favorite", "New"];

  const onFocusInput = () => {
    if (!onFocus) {
      setOnFocus((prev) => !prev);
    }
  };

  const clearSearch = () => {
    setSearchInput("");
    setOnFocus((prev) => !prev);
  };

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

  const finalGenresList = [["0", "All"], ...Object.entries(genresData)];

  return (
    <Filters>
      {!onFocus && window.location.pathname === "/" && (
        <>
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
                {sortItems
                  .filter((item) => item !== inputSort)
                  .map((item) => (
                    <ItemSort key={item} onClick={() => onSort(item)}>
                      <ButtonSort themeType={themeType}>{item}</ButtonSort>
                    </ItemSort>
                  ))}
              </BodySort>
            )}
          </FilterInputSort>
          <FiltersParagraph>Genres</FiltersParagraph>
          <GenresList>
            {finalGenresList.map((item) => {
              let isActive;
              if (currentGenre === item[0]) {
                isActive = true;
              } else {
                isActive = false;
              }

              const onChangeGenre = (item) => {
                const params = {};

                if (searchParams.get("page")) {
                  params.page = "1";
                }

                setSearchParams(params);

                setCurrentGenre(item);
              };

              return (
                <GenresItem key={item[0]} isActive={isActive}>
                  <GenresButton
                    id={item[0]}
                    onClick={() => onChangeGenre(item[0])}
                    isActive={isActive}
                    themeType={themeType}
                  >
                    {[item[1]]}
                  </GenresButton>
                </GenresItem>
              );
            })}
          </GenresList>
        </>
      )}
      {!onFocus && window.location.pathname === "/library" && (
        <>
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
                      <ButtonSort themeType={themeType}>{item}</ButtonSort>
                    </ItemSort>
                  ))}
              </BodySort>
            )}
          </FilterInputSort>
          <FiltersParagraph>Rating</FiltersParagraph>
          <StarsList>
            {getRatingList().map((item, index) => (
              <StarItem key={index}>
                <StarButton item={item} onClick={() => onStars(index + 1)}>
                  {item ? <TbStarFilled /> : <TbStar />}
                </StarButton>
              </StarItem>
            ))}
          </StarsList>
          <ButtonAll stars={stars} onClick={onAllStarsButton}>
            All
          </ButtonAll>
          <FiltersParagraph>Favorite</FiltersParagraph>
          <MoreCheck>
            <MoreCheckButton forLater={forLater} onClick={onForLater}>
              <FaCrown />
            </MoreCheckButton>
          </MoreCheck>
        </>
      )}
      {window.location.pathname === "/" && (
        <Search focusEvent={onFocus} onClick={onFocusInput}>
          <AiOutlineSearch />
          <SearchInput
            type="text"
            name="search"
            placeholder="Search"
            autoComplete="off"
            value={searchInput}
            onChange={changeSearchInput}
            focusEvent={onFocus}
            themeType={themeType}
          ></SearchInput>
          {onFocus && (
            <CloseSearchButton onClick={clearSearch} themeType={themeType}>
              <RiCloseLine />
            </CloseSearchButton>
          )}
        </Search>
      )}
    </Filters>
  );
};

export default ResearchFilters;
