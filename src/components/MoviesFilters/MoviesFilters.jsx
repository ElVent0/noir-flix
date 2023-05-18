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
} from "./MoviesFilters.styled";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { useSearchParams } from "react-router-dom";

const ResearchFilters = ({
  setInputSort,
  inputSort,
  searchInput,
  changeSearchInput,
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

  return (
    <Filters>
      {!onFocus && (
        <>
          <FiltersParagraph>Sort</FiltersParagraph>
          <FilterInputSort>
            <HeaderSort onClick={() => setIsOpenSort((prev) => !prev)}>
              {inputSort}
              <IoIosArrowDown />
            </HeaderSort>
            {isOpenSort && (
              <BodySort>
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
      </Search>
    </Filters>
  );
};

export default ResearchFilters;
