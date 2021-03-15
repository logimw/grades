import React from "react";
import PropTypes from "prop-types";

const UsersListItem = ({ userData: { name, avg, attendance = "0%" } }) => {
  return (
    <li>
      <div>{avg}</div>
      <div>
        <p>{name}</p>
        <p>attendance {attendance}</p>
      </div>
      <button>X</button>
    </li>
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
