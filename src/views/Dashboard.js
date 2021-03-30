import React, { useContext } from "react";
import UserList from "components/organisms/UserList/UserList";
import { UsersContext } from "providers/UsersProvider";

const Dashboard = () => {
  const { users } = useContext(UsersContext);
  return <UserList users={users} />;
};

export default Dashboard;
