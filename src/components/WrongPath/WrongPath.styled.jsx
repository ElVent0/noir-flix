import styled from "styled-components";

export const WrongPathStyled = styled.div`
  background-color: var(--pure-white);
  min-height: calc(100vh - 217px);
  padding: 0 20px 40px 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > img {
    margin-bottom: 30px;
  }
`;
