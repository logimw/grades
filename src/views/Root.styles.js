import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
