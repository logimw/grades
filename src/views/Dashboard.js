import React, { useEffect, useState } from "react";
import UserList from "components/organisms/UserList/UserList";
import { Link, useParams } from "react-router-dom";
import ViewWrapper from "components/molecules/ViewWrapper/ViewWrapper";
import axios from "axios";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [groups, setGroups] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    axios
      .get("/groups")
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.log(err));
  }, [id]);
  useEffect(() => {
    axios
      .get(`/students/${id || groups[0]}`)
      .then((data) => {
        console.log(data.data);
        setUsers(data.data.students);
      })
      .catch((e) => console.log(e));
  }, [id, groups]);

  return (
    <ViewWrapper>
      <nav>
        {groups.map((group) => (
          <Link key={group} to={`/group/${group}`}>
            {group} -{" "}
          </Link>
        ))}
      </nav>
      <UserList users={users} />
    </ViewWrapper>
  );
};

export default Dashboard;
