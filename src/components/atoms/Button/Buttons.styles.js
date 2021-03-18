import styled from "styled-components";

export const StyledButton = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 4px;
  border: 1px solid transparent;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  background: ${(props) => (props.isSecondary ? "#bc8034" : "#90323D")};
  color: #e7e7e7;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms ease;
  &:hover {
    background: ${({ theme }) => theme.colors.error};
  }
  svg {
    height: 20px;
    width: 20px;
    fill: #e7e7e7;
  }
`;
