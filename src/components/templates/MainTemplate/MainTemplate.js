import React from "react";
import { Wrapper } from "components/templates/MainTemplate/MainTemplate.styles";
import Navigation from "components/molecules/Navigation/Navigation";

const MyComponent = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default MyComponent;
