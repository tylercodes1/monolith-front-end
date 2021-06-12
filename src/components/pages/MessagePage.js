import React, {useState} from "react";
import "./MessagePage.css";
import Dialog from "./../Dialog/Dialog";
import UsersList from "./../UsersList/UsersList";
import GroupsList from "./../GroupsList/GroupsList";

const MessagePage = () => {
	const [selectedUser, setSelectedUser] = useState({});
	console.log(selectedUser);
	return (
		<div className="message-page">
			<GroupsList />
			<Dialog />
			<UsersList onSelect={setSelectedUser} selected={selectedUser} />
		</div>
	);
};

export default MessagePage;
