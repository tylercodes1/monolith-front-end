import React from "react";

import "./Message.css";
import UserIcon from "./../UserIcon/UserIcon";

const Message = ({ prevName, key, userSent, message, name, user }) => {
	console.log(prevName, name, user);
	return (
		<div
			className={
				userSent ? "message-container user-sent" : "message-container"
			}
			key={key}
		>
			{!userSent && prevName !== name ? (
				<UserIcon user={user} small />
			) : (
				<div className="user-icon-filler" />
			)}
			<p>{message}</p>
			{userSent && prevName !== name ? (
				<UserIcon user={user} small />
			) : (
				<div className="user-icon-filler" />
			)}
		</div>
	);
};

export default Message;
