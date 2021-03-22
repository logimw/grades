import UserList from "components/organisms/UserList/UserList";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { theme } from "assets/styles/theme";
import { Wrapper } from "./Root.styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { users as usersData } from "../data/users";
import Form from "components/organisms/Form/Form";

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else reject({ message: "Error" });
    }, 2000);
  });
};

const initialFormState = {
  name: "",
  avg: "",
  attendance: "",
};

const Root = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [formValues, setFormValues] = useState(initialFormState);
  useEffect(() => {
    setIsLoading(true);
    mockAPI()
      .then((data) => {
        setIsLoading(false);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputChange = (e) => {
    console.log(formValues);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      avg: formValues.avg,
    };
    setUsers([newUser, ...users]);
    setFormValues(initialFormState);
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />{" "}
        <Wrapper>
          <nav>
            <Link to="add-user">add user</Link>
            <Link to="/">home</Link>
          </nav>
          <Switch>
            <Route path="/add-user">
              <Form
                formValues={formValues}
                handleAddUser={handleAddUser}
                handleInputChange={handleInputChange}
              />
            </Route>
            <Route path="/">
              <UserList
                deleteUser={deleteUser}
                users={users}
                isLoading={isLoading}
              />
            </Route>{" "}
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
