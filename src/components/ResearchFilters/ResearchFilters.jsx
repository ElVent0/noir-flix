import {
  Filters,
  FiltersParagraph,
  SearchInput,
} from "./ResearchFilters.styled";

const ResearchFilters = () => {
  return (
    <Filters>
      <FiltersParagraph>Sort</FiltersParagraph>
      <div>aaa</div>
      <FiltersParagraph>Rating</FiltersParagraph>
      <div>aaa</div>
      <FiltersParagraph>Categories</FiltersParagraph>
      <div>aaa</div>
      <SearchInput placeholder="Search"></SearchInput>
    </Filters>
  );
};

export default ResearchFilters;
