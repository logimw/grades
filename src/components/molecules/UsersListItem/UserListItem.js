import React, { useContext } from "react";
import PropTypes from "prop-types";
import DeleteButton from "components/atoms/DeleteButton/DeleteButton";
import { Avg, Wrapper } from "./UserListItem.styles";
import { UsersContext } from "providers/UsersProvider";
import { UserShape } from "types";

const UsersListItem = ({ userData: { name, avg, attendance = "0%" } }) => {
  const { deleteUser } = useContext(UsersContext);
  return (
    <Wrapper>
      <Avg avg={avg}>{avg}</Avg>
      <div>
        <p>{name}</p>
        <p>attendance {attendance}</p>
      </div>
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default UsersListItem;
