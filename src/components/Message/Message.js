import React from "react";

import "./Message.css";

const Message = ({ userSent, message, name }) => {
	return (
		<div
			className={
				userSent ? "message-container user-sent" : "message-container"
			}
		>
			{!userSent && <div>{name}</div>}
			<p>{message}</p>
			{userSent && <div>{name}</div>}
		</div>
	);
};

export default Message;
