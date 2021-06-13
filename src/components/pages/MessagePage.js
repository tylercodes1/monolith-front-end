import React, { useState } from "react";
import "./MessagePage.css";
import Dialog from "./../Dialog/Dialog";
import UsersList from "./../UsersList/UsersList";
import GroupsList from "./../GroupsList/GroupsList";
import MessagePageContext from "./Context/MessagePageContext";

const MessagePage = () => {
	const [selectedUser, setSelectedUser] = useState({});
	const [selectedGroup, setSelectedGroup] = useState({
		group: {
			groupId: 0,
			groupName: "Burger Lovers",
		},
		id: 0,
		user: {
			email: "abc@gmail.com",
			firstName: "Annie",
			lastName: "Tang",
			userId: 0,
			username: "Tangry",
		},
	});

	const messagePageContext = {
		hello: "hello message page context",
	};

	return (
		<MessagePageContext.Provider value={messagePageContext}>
			<div className="message-page">
				<GroupsList onSelect={setSelectedGroup} selected={selectedGroup} />
				<Dialog />
				<UsersList onSelect={setSelectedUser} selected={selectedUser} />
			</div>
		</MessagePageContext.Provider>
	);
};

export default MessagePage;
