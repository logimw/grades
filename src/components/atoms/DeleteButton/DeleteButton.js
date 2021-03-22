import React from "react";
import { ReactComponent as CloseIcon } from "assets/cancel.svg";
import { StyledButton } from "./DeleteButtons.styles";

const DeleteButton = (props) => (
  <StyledButton {...props}>
    <CloseIcon />
  </StyledButton>
);

export default DeleteButton;
