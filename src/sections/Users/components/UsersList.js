import { useEffect, useState } from "react";
import UsersListItem from "./UsersListItem";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((users) => {
        setUsers(users.results);
      });
  }, []);

  console.log("users:", users);

  return (
    <ul className="users-list">
      {users.map((user, index) => (
        <UsersListItem key={index} user={user} />
      ))}
    </ul>
  );
};

export default UsersList;
