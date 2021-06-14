import React from "react";
import "./UserIcon.css";
import { Joiner } from "./../../helpers";
import ReactTooltip from "react-tooltip";

const userColors = ["red", "yellow", "green", "blue"];

export default function UserIcon({ user, small }) {
  return (
    <>
      <div
        data-tip={`${user.firstName} ${user.lastName}<br />@${user.username}<br />${user.email}`}
				data-for={user.userId.toString() + user.username} 
        data-multiline
        data-class="shadow"
        className={Joiner("user-icon", (small && "small"), userColors[user.userId % 4])}>
        <p>{user.username.substring(0, 1).toUpperCase()}</p>
      </div>
      <ReactTooltip
				place="top"
				type="dark"
				effect="solid"
				id={user.userId.toString() + user.username}
			/>
    </>
  );
}
