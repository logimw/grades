import React from "react";
import { ReactComponent as CloseIcon } from "assets/cancel.svg";
import { StyledButton } from "./Buttons.styles";

const Button = () => {
  return (
    <StyledButton>
      <CloseIcon />
    </StyledButton>
  );
};

export default Button;
