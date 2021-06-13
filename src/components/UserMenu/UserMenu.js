import React, { useContext } from "react";
import { Joiner } from "../../helpers";
import MessagePageContext from "./../pages/Context/MessagePageContext";
import UserIcon from "./../UserIcon/UserIcon";
import "./UserMenu.css";

export default function UserMenu() {
  const { setSelectedUser, selectedUser } = useContext(MessagePageContext);

  return (
    <div id="user-menu">
      <p>Select the user you'd like to be!</p>
      <div id="user-menu-items">
        {users.map((user) => (
          <UserMenuItem
            key={user.userId}
            user={user}
            setSelected={setSelectedUser}
            selected={selectedUser}
          />
        ))}
      </div>
    </div>
  );
}

function UserMenuItem({ user, setSelected, selected }) {
  return (
    <div
      key={user.userId}
      className={Joiner(
        "user-menu-item",
        selected.userId === user.userId && "selected-user"
      )}
      onClick={() => setSelected(user)}
    >
      <UserIcon user={user} small />
      <p>{user.username}</p>
    </div>
  );
}

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
    userId: 2,
    username: "RosieTheDog",
  },
  {
    email: "jkl@gmail.com",
    firstName: "Kobe",
    lastName: "TheDog",
    userId: 3,
    username: "KobeTheDog",
  },
];
