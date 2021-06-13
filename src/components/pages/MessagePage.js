import React, { useState } from "react";
import "./MessagePage.css";
import Dialog from "./../Dialog/Dialog";
import UsersList from "./../UsersList/UsersList";
import GroupsList from "./../GroupsList/GroupsList";
import MessagePageContext from "./Context/MessagePageContext";
import allGroups from "./../../dummyData";
import allMessages from "./../../messagesDummyData";
import UserMenu from "./../UserMenu/UserMenu";

const MessagePage = () => {
	const users = [
		{
			email: "abc@gmail.com",
			firstName: "Annie",
			lastName: "Tang",
			userId: 0,
			username: "Tangry",
		},
		{
			email: "xyz@gmail.com",
			firstName: "Tyler",
			lastName: "Kim",
			userId: 1,
			username: "tylercodes1",
		},
	];
	const [selectedUser, setSelectedUser] = useState(users[0]);
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

	const [msgs, setMsgs] = useState(allMessages);
	const currUsersGroups = getCurrGroups(selectedUser);

	const messagePageContext = {
		hello: "hello message page context",
		currUsersGroups,
		allGroups,
		allMessages,
		getMessagesByGroup,
		msgs,
		setMsgs,
		users,
		setSelectedGroup,
		selectedGroup,
		setSelectedUser,
		selectedUser,
	};
	return (
		<MessagePageContext.Provider value={messagePageContext}>
			<div className="message-page">
				<UserMenu />
				<GroupsList onSelect={setSelectedGroup} selected={selectedGroup} />
				<Dialog />
				<UsersList onSelect={setSelectedUser} selected={selectedUser} />
			</div>
		</MessagePageContext.Provider>
	);

	function getMessagesByGroup(groupId) {
		return allMessages.filter((message) => message.group.groupId === groupId);
	}

	function getCurrGroups(user) {
		const newCurrGroups = allGroups.filter(
			(userGroup) => userGroup.user.userId === user.userId
		);
		if (!newCurrGroups.includes(selectedGroup))
			setSelectedGroup(newCurrGroups[0]);
		return newCurrGroups;
	}
};

export default MessagePage;
