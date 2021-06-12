import React from "react";
import "./UsersList.css";

export default function UserList() {
  const users = [
    {
      email: "abc@gmail.com",
      firstName: "Annie",
      lastName: "Tang",
      userId: 0,
      username: "Tangry",
    },
    {
      email: "def@gmail.com",
      firstName: "Tyler",
      lastName: "Kim",
      userId: 1,
      username: "GamerGhost99",
    },
    {
      email: "ghi@gmail.com",
      firstName: "Rosie",
      lastName: "TheDog",
      userId: 3,
      username: "RosieTheDog",
    },
  ];

  return (
    <div>
      {users.map((user) => (
        <UserCard user={user} key={user.userId} />
      ))}
    </div>
  );
}

function UserCard(props) {
  return (
    <div className="user-card">
      <div className="user-icon">
        <p>{props.user.username.substring(0, 1)}</p>
      </div>
      <p>{props.user.username}</p>
    </div>
  );
}
