import React from "react";

import "./Message.css";

const Message = ({ prevName, userSent, message, name }) => {
	console.log(prevName, name);
	return (
		<div
			className={
				userSent ? "message-container user-sent" : "message-container"
			}
		>
			{!userSent && prevName !== name && <div>{name}</div>}
			<p>{message}</p>
			{userSent && prevName !== name && <div>{name}</div>}
		</div>
	);
};

export default Message;
