import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
  height: 100vh;
  position: relative;
  background-color: ${({ theme }) => theme.colors.bronze};
  box-shadow: -15px 0px 5px 19px #7a7a7a;
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

export const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.russian};
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
  }
`;

const Navigation = () => {
  return (
    <StyledNav>
      <Logo>
        <h1>Grades</h1>
      </Logo>
      <NavWrapper>
        <Link to="add-user">add user</Link>
        <Link to="/">home</Link>
      </NavWrapper>
    </StyledNav>
  );
};

export default Navigation;
