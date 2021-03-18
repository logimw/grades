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
export const Avg = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  padding: 1rem;
  border-radius: 50%;
  box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.3);
  background: ${(props) =>
    parseFloat(props.avg) >= 4
      ? props.theme.colors.green
      : parseFloat(props.avg) >= 3
      ? props.theme.colors.bronze
      : props.theme.colors.error};
`;
