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
  CloseSerachButton,
  StarsList,
  StarItem,
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

const ResearchFilters = ({
  setInputSort,
  inputSort,
  searchInput,
  changeSearchInput,
  stars,
  onStars,
  forLater,
  onForLater,
}) => {
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [onFocus, setOnFocus] = useState(false);
  const [, setSearchParams] = useSearchParams();

  const onSort = (item) => {
    setInputSort(item);
    setIsOpenSort((prev) => !prev);
    setSearchParams({ page: 1 });
    setSearchParams({ sort: item });
  };

  const sortItems = ["Popularity", "Vote", "Title", "New", "Future"];

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
                      <ButtonSort>{item}</ButtonSort>
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
            placeholder="Search"
            value={searchInput}
            onChange={changeSearchInput}
            onFocus={onFocusInput}
            onBlur={onFocusInput}
            focusEvent={onFocus}
          ></SearchInput>
          {onFocus && (
            <CloseSerachButton>
              <RiCloseLine />
            </CloseSerachButton>
          )}
        </Search>
      )}
    </Filters>
  );
};

export default ResearchFilters;
