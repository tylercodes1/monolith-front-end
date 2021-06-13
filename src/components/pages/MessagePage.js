import React, { useEffect, useState } from "react";
import "./MessagePage.css";
import Dialog from "./../Dialog/Dialog";
import UsersList from "./../UsersList/UsersList";
import GroupsList from "./../GroupsList/GroupsList";
import MessagePageContext from "./Context/MessagePageContext";
import allGroups from "./../../dummyData";
import allMessages from "./../../messagesDummyData";
import UserMenu from "./../UserMenu/UserMenu";
import users from "./../../userDummyData";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

const MessagePage = () => {
	const [selectedUser, setSelectedUser] = useState(users[0]);
	const [selectedGroup, setSelectedGroup] = useState(allGroups[0]);
	const [msgs, setMsgs] = useState(allMessages);
	const currUsersGroups = getCurrGroups(selectedUser);
	const [loading, setLoading] = useState(true);

	const messagePageContext = {
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

	useEffect(() => {
		axios.get("http://monolith-service.herokuapp.com/hello").then((res) => {
			console.log(res.data);
			setLoading(false);
		});
	}, []);

	return loading ? (
		<div className="message-page">
			<CircularProgress />
		</div>
	) : (
		<MessagePageContext.Provider value={messagePageContext}>
			<div className="message-page">
				<UserMenu />
				<GroupsList onSelect={setSelectedGroup} selected={selectedGroup} />
				<Dialog />
				<UsersList onSelect={setSelectedUser} selected={selectedUser} />
			</div>
		</MessagePageContext.Provider>
	);

	// helper data-filtering functions
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
