import React from "react";
import { ReactComponent as CloseIcon } from "assets/cancel.svg";
import { StyledButton } from "./Buttons.styles";

const Button = (props) => (
  <StyledButton {...props}>
    <CloseIcon />
  </StyledButton>
);

export default Button;
