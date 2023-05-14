import { useState } from "react";
import {
  Filters,
  FiltersParagraph,
  SearchInput,
  FilterInputSort,
  HeaderSort,
  BodySort,
  ItemSort,
} from "./ResearchFilters.styled";
import { IoIosArrowDown } from "react-icons/io";
import { useSearchParams } from "react-router-dom";

const ResearchFilters = ({ setInputSort, inputSort }) => {
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const onSort = (item) => {
    setInputSort(item);
    setIsOpenSort((prev) => !prev);
    setSearchParams({ page: 1 });
    setSearchParams({ sort: item });
  };

  const sortItems = ["Popularity", "Vote", "Title", "New", "Future"];

  return (
    <Filters>
      <FiltersParagraph>Sort</FiltersParagraph>
      <FilterInputSort>
        <HeaderSort onClick={() => setIsOpenSort((prev) => !prev)}>
          {inputSort}
          <IoIosArrowDown />
        </HeaderSort>
        {isOpenSort && (
          <BodySort>
            {sortItems.map((item) => (
              <ItemSort key={item} onClick={() => onSort(item)}>
                {item}
              </ItemSort>
            ))}
          </BodySort>
        )}
      </FilterInputSort>
      {/* <FiltersParagraph>Rating</FiltersParagraph>
      <div>aaa</div>
      <FiltersParagraph>Categories</FiltersParagraph>
      <div>aaa</div> */}
      <SearchInput placeholder="Search"></SearchInput>
    </Filters>
  );
};

export default ResearchFilters;
