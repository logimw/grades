import React from "react";
import { users } from "data/users";
import UsersListItem from "components/molecules/UsersListItem/UserListItem";
import { Wrapper } from "./UserList.styles";

const UserList = () => {
  return (
    <Wrapper>
      <ul>
        {users.map((userData) => {
          return <UsersListItem userData={userData} />;
        })}
      </ul>
    </Wrapper>
  );
};

export default UserList;
