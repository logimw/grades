import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { theme } from "assets/styles/theme";
import { Wrapper } from "./Root.styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import AddUser from "./AddUser";
import Dashboard from "./Dashboard";
import UsersProvider from "../providers/UsersProvider";

// const mockAPI = (success) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (usersData) {
//         resolve([...usersData]);
//       } else reject({ message: "Error" });
//     }, 2000);
//   });
// };

const Root = () => {
  // const [isLoading, setIsLoading] = useState([]);
  //
  // useEffect(() => {
  //   setIsLoading(true);
  //   mockAPI()
  //     .then((data) => {
  //       setIsLoading(false);
  //       setUsers(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersProvider>
            <Wrapper>
              <Switch>
                <Route path="/add-user">
                  <AddUser />
                </Route>
                <Route path="/">
                  <Dashboard />
                </Route>{" "}
              </Switch>
            </Wrapper>
          </UsersProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
