import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active-link";

export const StyledLink = styled(NavLink).attrs({
  activeClassName,
})`
  font-weight: bold;
  text-decoration: none;
  font-size: 2.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  &.${activeClassName} {
    color: ${({ theme }) => theme.colors.russian};
    &::after {
      opacity: 1;
    }
  }

  &::after {
    opacity: 0;
    content: "";
    position: absolute;
    transition: opacity 400ms ease-in-out;
    width: 19px;
    height: 3px;
    top: 50%;
    right: 0;
    background-color: ${({ theme }) => theme.colors.russian};
  }
`;
