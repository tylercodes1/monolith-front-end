import { React, useState, useContext } from "react";
import MessagePageContext from "./../pages/Context/MessagePageContext";
import "./MessageInput.css";

const MessageInput = () => {
	const [chatValue, setChatValue] = useState("");
	const { selectedGroup } = useContext(MessagePageContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		const msg = chatValue.trim();
		if (msg.length > 0) {
			// do something with api here
			console.log(msg);
		}
	};

	const handleChange = (e) => {
		setChatValue(e.value);
	};

	return (
		<form className="chat-bar" onSubmit={(e) => handleSubmit(e)}>
			<input
				type="text"
				className="chat-input"
				placeholder={`Message ${selectedGroup.group.groupName}`}
				value={chatValue}
				onChange={(e) => handleChange(e)}
			/>
			<button className="chat-send">Send</button>
		</form>
	);
};

export default MessageInput;
