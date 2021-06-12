import React, {useState} from "react";
import "./MessagePage.css";
import Dialog from "./../Dialog/Dialog";
import UsersList from "./../UsersList/UsersList";

const MessagePage = () => {
	const [selectedUser, setSelectedUser] = useState({});
	console.log(selectedUser);
	return (
		<div className="message-page">
			<Dialog></Dialog>
			<UsersList onSelect={setSelectedUser} selected={selectedUser} />
		</div>
	);
};

export default MessagePage;
