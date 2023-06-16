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
} from "./MoviesFilters.styled";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { useSearchParams } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { TbStar } from "react-icons/tb";
import { TbStarFilled } from "react-icons/tb";
import { MdMoreTime } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext } from "../App";

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
}) => {
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [onFocus, setOnFocus] = useState(false);
  const [, setSearchParams] = useSearchParams();

  const themeType = useContext(ThemeContext);

  const onSort = (item) => {
    setInputSort(item);
    setIsOpenSort((prev) => !prev);
    setSearchParams({ page: 1 });
    setSearchParams({ sort: item });
  };

  // const onSortInLibrary = (item) => {
  //   setInputSort(item);
  //   setIsOpenSort((prev) => !prev);
  // };

  const sortItems = ["Popularity", "Vote", "Title", "New", "Future"];
  // const sortItemsInLibrary = ["Favorite", "New"];

  const onFocusInput = () => {
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
        </>
      )}
      {!onFocus && window.location.pathname === "/library" && (
        <>
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
          <FiltersParagraph>Watch again</FiltersParagraph>
          <MoreCheck>
            <MoreCheckButton forLater={forLater} onClick={onForLater}>
              <MdMoreTime />
            </MoreCheckButton>
          </MoreCheck>
        </>
      )}
      {window.location.pathname === "/" && (
        <Search focusEvent={onFocus}>
          <AiOutlineSearch />
          <SearchInput
            type="text"
            name="search"
            placeholder="Search"
            autoComplete="off"
            value={searchInput}
            onChange={changeSearchInput}
            onFocus={onFocusInput}
            onBlur={onFocusInput}
            focusEvent={onFocus}
            themeType={themeType}
          ></SearchInput>
          {onFocus && (
            <CloseSearchButton>
              <RiCloseLine />
            </CloseSearchButton>
          )}
        </Search>
      )}
    </Filters>
  );
};

export default ResearchFilters;
