import React from "react";
import UserIcon from "./../../UserIcon/UserIcon";

const UserMessageIcon = ({ userSent, prevName, name, user }) => {
	return userSent && prevName !== name ? (
		<UserIcon user={user} small />
	) : (
		<div className="user-icon-filler" />
	);
};

export default UserMessageIcon;
