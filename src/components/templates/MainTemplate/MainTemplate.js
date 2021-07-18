import React from "react";
import { Wrapper } from "components/templates/MainTemplate/MainTemplate.styles";
import Navigation from "components/molecules/Navigation/Navigation";
import SearchBar from "components/organisms/SearchBar/SearchBar";
import NewsSection from "components/templates/NewsSection/NewsSection";

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <NewsSection />
    </Wrapper>
  );
};

export default MainTemplate;
