import React from "react";
import { users } from "data/users";
import UsersListItem from "components/UsersListItem/UserListItem";

const UserList = () => {
  return (
    <div>
      <ul>
        {users.map((userData) => {
          return <UsersListItem userData={userData} />;
        })}
      </ul>
    </div>
  );
};

export default UserList;
