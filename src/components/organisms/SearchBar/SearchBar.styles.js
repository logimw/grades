import styled from "styled-components";
import { Input } from "components/atoms/Input/Input";

export const SearchBarWrapper = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  grid-row: 1/2;
  grid-column: 2/3;
  border-bottom: 1px solid ${({ theme }) => theme.colors.russian};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px;

  ${Input} {
    font-size: ${({ theme }) => theme.fontSize.l};
    width: 100%;
    max-width: 350px;
    border: none;
  }
`;

export const StatusInfo = styled.div`
  color: ${({ theme }) => theme.colors.russian};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-right: 40px;

  p {
    margin: 5px;
  }
`;
