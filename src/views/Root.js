import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { theme } from "assets/styles/theme";
import { Wrapper } from "./Root.styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React from "react";

import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import AddUser from "./AddUser";
import Dashboard from "./Dashboard";

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Switch>
              <Route exact path="/">
                <Redirect to="/group" />
              </Route>
              <Route path="/add-user">
                <AddUser />
              </Route>
              <Route path="/group/:id?">
                <Dashboard />
              </Route>{" "}
            </Switch>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
