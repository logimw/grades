import React from "react";
import UsersListItem from "components/molecules/UsersListItem/UserListItem";
import PropTypes from "prop-types";
import { UserShape } from "types";
import { Title } from "components/atoms/Title/Title";

const UserList = ({ users }) => {
  return (
    <>
      <Title>{!users ? "Loading..." : "Students list"}</Title>
      <ul>
        {users.map((userData, index) => {
          return (
            <UsersListItem key={index} index={index} userData={userData} />
          );
        })}
      </ul>
    </>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default UserList;
