import React, { useState, useEffect } from "react";
import { users as usersData } from "data/users";
import UsersListItem from "components/molecules/UsersListItem/UserListItem";
import { Wrapper } from "./UserList.styles";
import FormField from "../../molecules/FormField/FormField";

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else reject({ message: "Error" });
    }, 2000);
  });
};

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

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

  return (
    <>
      <Wrapper>
        <h1>Add new student</h1>
        <FormField id="name" name="Name" label="Name" />
        <FormField id="attendance" name="Attendance" label="Attendance" />
        <FormField id="average" name="Average" label="Average" />
        button
      </Wrapper>
      <Wrapper>
        <h1>{isLoading ? "Loading..." : "Students list"}</h1>
        <ul>
          {users.map((userData, index) => {
            return (
              <UsersListItem
                key={index}
                index={index}
                userData={userData}
                deleteUser={deleteUser}
              />
            );
          })}
        </ul>
      </Wrapper>
    </>
  );
};

export default UserList;
