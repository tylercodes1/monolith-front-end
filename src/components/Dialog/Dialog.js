import React, { useContext, useState } from "react";
import MessageInput from "./../MessageInput/MessageInput";

import "./Dialog.css";
import Message from "../Message/Message";
import MessagePageContext from "./../pages/Context/MessagePageContext";

const Dialog = () => {
	const { hello, msgs, user, loggedInUser } = useContext(MessagePageContext);

	const handleMessage = (msg, user, i) => {
		return (
			<Message
				userSent={msg.user.username == user.username ? true : false}
				key={i}
				message={msg.message}
				name={msg.recipient}
			/>
		);
	};

	return (
		<div className="dialog">
			{msgs.map((msg, i) => {
				return handleMessage(msg, loggedInUser, i);
			})}
			<div>{hello}</div>
			<MessageInput />
		</div>
	);
};

export default Dialog;
