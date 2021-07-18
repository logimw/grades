import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 2;
`;
