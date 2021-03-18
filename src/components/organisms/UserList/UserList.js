import React from "react";
import { users } from "data/users";
import UsersListItem from "components/molecules/UsersListItem/UserListItem";
import { Wrapper } from "./UserList.styles";

const UserList = () => {
  return (
    <Wrapper>
      <ul>
        {users.map((userData, index) => {
          return <UsersListItem key={index} userData={userData} />;
        })}
      </ul>
    </Wrapper>
  );
};

export default UserList;
