import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 150px 1fr 0.75fr;
  grid-template-rows: 90px 1fr;
  //overflow-x: scroll;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  overflow-y: hidden;
`;
