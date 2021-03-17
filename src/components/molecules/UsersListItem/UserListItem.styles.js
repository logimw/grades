import styled from "styled-components";

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: left;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  &:not(:last-child)::after {
    content: "";
    position: absolute;
    bottom: -10px;
    width: 100%;
    height: 2px;
    background-color: #8c7a6b;
  }
`;
