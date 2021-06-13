import React, { useContext } from "react";
import MessageInput from "./../MessageInput/MessageInput";

import "./Dialog.css";
import Message from "../Message/Message";
import MessagePageContext from "./../pages/Context/MessagePageContext";

const Dialog = () => {
	const { selectedUser, selectedGroup, getMessagesByGroup, messages } =
		useContext(MessagePageContext);
	const msgs = getMessagesByGroup(selectedGroup.group.groupId, messages);
	const handleMessage = (prevName, msg, selectedUser, i) => {
		return (
			<Message
				prevName={prevName}
				userSent={msg.user.username === selectedUser.username}
				key={i}
				message={msg.message}
				name={msg.user.firstName}
				user={msg.user}
			/>
		);
	};

	return (
		<div className="dialog">
			<div className="message-view">
				{msgs.map((msg, i, arr) => {
					return i === 0
						? handleMessage("", msg, selectedUser, i)
						: handleMessage(
								arr[i - 1].user.firstName,
								msg,
								selectedUser,
								i
						  );
				})}
			</div>
			<MessageInput />
		</div>
	);
};

export default Dialog;
