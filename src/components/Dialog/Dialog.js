import React, { useContext, useState } from "react";
import MessageInput from "./../MessageInput/MessageInput";

import "./Dialog.css";
import Message from "../Message/Message";
import MessagePageContext from "./../pages/Context/MessagePageContext";

const Dialog = () => {
	const { hello, msgs, user, loggedInUser } = useContext(MessagePageContext);

	const handleMessage = (prevName, msg, user, i) => {
		return (
			<Message
				prevName={prevName}
				userSent={msg.user.username == user.username ? true : false}
				key={i}
				message={msg.message}
				name={msg.user.firstName}
			/>
		);
	};

	return (
		<div className="dialog">
			{msgs.map((msg, i, arr) => {
				return i === 0
					? handleMessage("", msg, loggedInUser, i)
					: handleMessage(arr[i - 1].user.firstName, msg, loggedInUser, i);
			})}
			<div>{hello}</div>
			<MessageInput />
		</div>
	);
};

export default Dialog;
