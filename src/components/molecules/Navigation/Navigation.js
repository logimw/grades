import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bronze};
`;
export const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  a {
    padding: 2rem 0;
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
  }
`;
const Navigation = () => {
  return (
    <StyledNav>
      <NavWrapper>
        <Link to="add-user">add user</Link>
        <Link to="/">home</Link>
      </NavWrapper>
    </StyledNav>
  );
};

export default Navigation;
