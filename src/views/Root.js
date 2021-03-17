import UserList from "components/organisms/UserList/UserList";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { theme } from "assets/styles/theme";
import { Wrapper } from "./Root.styles";

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />{" "}
      <Wrapper>
        <UserList />
      </Wrapper>
    </ThemeProvider>
  );
}

export default Root;
