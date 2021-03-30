import React, { useContext } from "react";
import UsersListItem from "components/molecules/UsersListItem/UserListItem";
import { Wrapper } from "./UserList.styles";

const UserList = ({ users }) => {
  return (
    <>
      <Wrapper>
        {/*<h1>{isLoading ? "Loading..." : "Students list"}</h1>*/}
        <ul>
          {users.map((userData, index) => {
            return (
              <UsersListItem key={index} index={index} userData={userData} />
            );
          })}
        </ul>
      </Wrapper>
    </>
  );
};

export default UserList;
