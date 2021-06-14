import React, { useContext } from "react";
import { Joiner } from "../../helpers";
import MessagePageContext from "./../pages/Context/MessagePageContext";
import UserIcon from "./../UserIcon/UserIcon";
import "./UserMenu.css";
import { CircularProgress } from "@material-ui/core";

export default function UserMenu() {
  const { users, setSelectedUser, selectedUser, groups, selectedGroup} =
    useContext(MessagePageContext);

  const members = groups.filter(
    (userGroup) => userGroup.group.groupId === selectedGroup.group.groupId
  );

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
              disabled={!members.some((member) => member.user.username === user.username)}
            />
          ))}
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}

function UserMenuItem({ user, setSelected, selected, disabled }) {
  return (
    <div
      key={user.userId}
      className={Joiner(
        "user-menu-item",
        selected.userId === user.userId && "selected-user", disabled && "disabled"
      )}
      onClick={() => setSelected(user)}
    >
      <UserIcon user={user} small />
      <p>{user.username}</p>
    </div>
  );
}
