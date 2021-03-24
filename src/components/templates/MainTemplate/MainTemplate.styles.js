import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 150px 1fr;
  background-color: ${({ theme }) => theme.colors.primary};
`;
