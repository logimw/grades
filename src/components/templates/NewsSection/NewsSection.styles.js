import styled from "styled-components";
import ViewWrapper from "components/molecules/ViewWrapper/ViewWrapper";
import { Button } from "components/atoms/Button/Button";

export const Wrapper = styled.div`
  grid-row: 1/ 3;
  grid-column: 3 /3;
  background: ${({ theme }) => theme.colors.primary};
  border-left: 1px solid ${({ theme }) => theme.colors.russian};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 50px;
  overflow-y: scroll;
  height: 100vh;
`;

export const NewsSectionHeader = styled.h2`
  margin-right: auto;
`;

export const ArticleWrapper = styled(ViewWrapper)`
  margin: 30px 0;
  width: 100%;
  max-width: unset;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.secondary};
  ${Button} {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
  }
  p {
    line-height: 1.6;
  }
`;

export const TitleWrapper = styled.div`
  h3 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  p {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  img {
    margin-left: 25px;
    max-width: 200px;
    object-fit: cover;
  }
`;
