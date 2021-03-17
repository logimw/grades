import React from "react";
import PropTypes from "prop-types";
import Button from "components/atoms/Button/Button";
import { Wrapper } from "./UserListItem.styles";

const UsersListItem = ({ userData: { name, avg, attendance = "0%" } }) => {
  return (
    <Wrapper>
      <div>{avg}</div>
      <div>
        <p>{name}</p>
        <p>attendance {attendance}</p>
      </div>
      <Button />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    avg: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
