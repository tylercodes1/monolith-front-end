import { React, useState, useContext } from "react";
import MessagePageContext from "./../pages/Context/MessagePageContext";
import "./MessageInput.css";
import axios from "axios";
import url from "./../../api/URL";
import SendRoundedIcon from '@material-ui/icons/SendRounded';

const MessageInput = () => {
	const [chatValue, setChatValue] = useState("");
	const { selectedGroup, selectedUser } = useContext(MessagePageContext);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const msg = chatValue.trim();
		if (msg.length > 0) {
			const body = JSON.stringify({
				message: msg,
				groupId: selectedGroup.group.groupId,
				userId: selectedUser.userId,
			});

			const headers = {
				"content-type": "application/json",
			};

			await axios({
				url: url + "/message",
				method: "post",
				data: body,
				headers: headers,
			});
			setChatValue("");
		}
	};

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
			<SendRoundedIcon onClick={(e) => handleSubmit(e)} style={{ cursor: "pointer", color: "#4f5660" }} />
		</form>
	);
};

export default MessageInput;
