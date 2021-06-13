import React, { useContext, useState } from "react";
import MessageInput from "./../MessageInput/MessageInput";

import "./Dialog.css";
import Message from "../Message/Message";
import MessagePageContext from "./../pages/Context/MessagePageContext";

const Dialog = () => {
	const [msg, setMsg] = useState([
		{
			message:
				"hello this is a  realllyrealllyrealllyrealllyrealllyrealllyreallly  realllyrealllyrealllyrealllyrealllyrealllyreallly  realllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyreallly realllyrealllyrealllyrealllyrealllyreallly long message",
			recipient: "loggedInUser",
			sender: "otherUser",
		},
		{
			message: `This is v0 of the chatting feature!`,
			recipient: "otherUser",
			sender: "loggedInUser",
		},
		{
			message: `We currently support serverless, authenticationless, self messaging only LMFAO`,
			recipient: "loggedInUser",
			sender: "otherUser",
		},
	]);

	const users = [
		{ name: "Tyler", username: "loggedInUser" },
		{ name: "Andrew", username: "otherUser" },
	];

	const [loggedInUser, setLoggedInUser] = useState(users[0]);

	const { hello } = useContext(MessagePageContext);

	const handleMessage = (msg, user, i) => {
		return (
			<Message
				userSent={msg.sender == user.username ? true : false}
				key={i}
				message={msg.message}
				name={msg.recipient}
			/>
		);
	};

	return (
		<div className="dialog">
			{msg.map((msg, i) => {
				return handleMessage(msg, loggedInUser, i);
			})}
			<div>{hello}</div>
			<MessageInput />
		</div>
	);
};

export default Dialog;
