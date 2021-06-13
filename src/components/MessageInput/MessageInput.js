import { React, useState, useContext } from "react";
import MessagePageContext from "./../pages/Context/MessagePageContext";
import "./MessageInput.css";

const MessageInput = () => {
	const [chatValue, setChatValue] = useState("");
	const { selectedGroup, selectedUser, msgs, setMsgs } =
		useContext(MessagePageContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		const msg = chatValue.trim();
		if (msg.length > 0) {
			// do something with api here
			const newMessage = {
				group: selectedGroup.group,
				user: selectedUser,
				message: msg,
			};
			setMsgs([...msgs, newMessage]);
			setChatValue("");
		}
	};

	// {
	//    group: {
	//       groupId: 1,
	//       groupName: "This is library",
	//    },
	//    message: "message from ANNIE, WHO IS ALSO LOGGED IN",
	//    messageId: 1,
	//    user: {
	//       email: "abc@gmail.com",
	//       firstName: "Annie",
	//       lastName: "Tang",
	//       userId: 0,
	//       username: "Tangry",
	//    },
	// }

	const handleChange = (e) => {
		setChatValue(e.target.value);
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
