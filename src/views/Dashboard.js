import React, { useContext } from "react";
import UserList from "components/organisms/UserList/UserList";
import { UsersContext } from "providers/UsersProvider";
import ViewWrapper from "components/molecules/ViewWrapper/ViewWrapper";

const Dashboard = () => {
  const { users } = useContext(UsersContext);
  return (
    <ViewWrapper>
      <UserList users={users} />
    </ViewWrapper>
  );
};

export default Dashboard;
