import styled from "styled-components";

export const ResearchStyled = styled.div`
  background-color: var(--pure-white);
  padding: 0 20px 40px 20px;
  border-radius: 10px;
  animation: anumationOn 0.6s linear;
  @keyframes anumationOn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 100%;
    }
  }
`;
