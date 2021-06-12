import { React, useState } from "react";

import "./MessageInput.css";

const MessageInput = () => {
	const [chatValue, setchatValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const msg = chatValue.trim();
		if (msg.length > 0) {
			// do something with api here
			console.log(msg);
		}
	};

	const handleChange = (e) => {
		setchatValue(e.value);
	};

	return (
		<form className="chat-bar" onSubmit={(e) => handleSubmit(e)}>
			<input
				type="text"
				className="chat-input"
				placeholder="say something nice!"
				value={chatValue}
				onChange={(e) => handleChange(e)}
			/>
			<button>send</button>
		</form>
	);
};

export default MessageInput;
