import React from "react";

import "./Message.css";
import { Joiner } from "./../../helpers";
import UserMessageIcon from "./UserMessageIcon/UserMessageIcon";

const Message = ({ prevName, userSent, message, name, user }) => {
	return (
		<div
			className={Joiner(
				"message-container",
				userSent && "user-sent",
				prevName !== name && "new-message"
			)}
			key={key}
		>
			<UserMessageIcon
				prevName={prevName}
				userSent={!userSent}
				name={name}
				user={user}
			/>
			<p>{message}</p>
			<UserMessageIcon
				prevName={prevName}
				userSent={userSent}
				name={name}
				user={user}
			/>
		</div>
	);
};

export default Message;
