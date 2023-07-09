import styled, { css } from "styled-components";

export const ResearchStyled = styled.div`
  min-height: calc(100vh - 339px);
  background: var(--pure-white-bg);
  padding: 0 20px 40px 20px;
  border-radius: 10px;
  animation: anumationOn 0.6s linear;
  position: relative;
  @keyframes anumationOn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 100%;
    }
  }
`;

export const NothingBlock = styled.div`
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > svg {
    font-size: 100px;
    margin-bottom: 30px;
    opacity: 0.6;
  }
`;
