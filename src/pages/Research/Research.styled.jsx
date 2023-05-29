import styled from "styled-components";
import background from "../../media/research-poster.jpg";

export const ResearchStyled = styled.div`
  background-color: var(--pure-white);
  padding: 0 20px 40px 20px;
  border-radius: 10px;
`;

export const RecentMovies = styled.div`
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  height: 200px;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
