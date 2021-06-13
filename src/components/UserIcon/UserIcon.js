import React from "react";
import "./UserIcon.css";
import { Joiner } from "./../../helpers";

const userColors = ["red", "yellow", "green", "blue"];

export default function UserIcon({ user, small }) {
  return (
    <div className={Joiner("user-icon", (small && "small"), userColors[user.userId % 4])}>
      <p>{user.username.substring(0, 1)}</p>
    </div>
  );
}
