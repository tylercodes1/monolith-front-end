import React, { useContext } from "react";
import { Joiner } from "../../helpers";
import MessagePageContext from "./../pages/Context/MessagePageContext";
import UserIcon from "./../UserIcon/UserIcon";
import "./UserMenu.css";
import { CircularProgress } from "@material-ui/core";

export default function UserMenu() {
  const { users, setSelectedUser, selectedUser } =
    useContext(MessagePageContext);
  return (
    <div id="user-menu">
      <p>Select the user you'd like to be!</p>
      {users.length > 0 ? (
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
      ) : (
        <CircularProgress />
      )}
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
