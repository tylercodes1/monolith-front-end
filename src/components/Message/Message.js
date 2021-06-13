import React from "react";

import "./Message.css";
import UserIcon from "./../UserIcon/UserIcon";

const Message = ({ prevName, userSent, message, name, user }) => {
	console.log(prevName, name, user);
	return (
		<div
			className={
				userSent ? "message-container user-sent" : "message-container"
			}
		>
			{!userSent && prevName !== name && <UserIcon user={user} small />}
			<p>{message}</p>
			{userSent && prevName !== name && <UserIcon user={user} small />}
		</div>
	);
};

export default Message;
