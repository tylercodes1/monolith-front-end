import React from "react";

import "./Message.css";

const Message = ({ userSent, message, name }) => {
	return (
		<div
			className={
				userSent ? "message-container user-sent" : "message-container"
			}
		>
			<p>{message}</p>
		</div>
	);
};

export default Message;
