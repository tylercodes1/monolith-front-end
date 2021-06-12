import React from "react";
import "./UsersList.css";
import { Joiner } from "./../../helpers";

export default function UserList({ onSelect, selected }) {
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
    {
      email: "jkl@gmail.com",
      firstName: "Kobe",
      lastName: "TheDog",
      userId: 4,
      username: "KobeTheDog",
    },
  ];

  return (
    <div>
      {users.map((user) => (
        <UserCard
          key={user.userId + user.username}
          user={user}
          onSelect={onSelect}
          selected={selected}
        />
      ))}
    </div>
  );
}

function UserCard({ user, onSelect, selected }) {
  return (
    <div
      className={Joiner("user-card", (selected.userId === user.userId && "selected-user"))}
      onClick={() => onSelect(user)}
    >
      <div className="user-icon">
        <p>{user.username.substring(0, 1)}</p>
      </div>
      <p>{user.username}</p>
    </div>
  );
}
