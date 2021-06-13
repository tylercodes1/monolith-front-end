import React, { useEffect, useState } from "react";
import "./MessagePage.css";
import Dialog from "./../Dialog/Dialog";
import UsersList from "./../UsersList/UsersList";
import GroupsList from "./../GroupsList/GroupsList";
import MessagePageContext from "./Context/MessagePageContext";
import allGroups from "./../../dummyData";
import allMessages from "./../../messagesDummyData";
import UserMenu from "./../UserMenu/UserMenu";
import allUsers from "./../../userDummyData";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import url from "./../../api/URL";

const MessagePage = () => {
	const [users, setUsers] = useState(allUsers[0]);
	const [msgs, setMsgs] = useState(allMessages[0]);
	const [groups, setGroups] = useState(allGroups[0]);
	const [selectedUser, setSelectedUser] = useState(allUsers[0]);
	const [selectedGroup, setSelectedGroup] = useState(groups[0]);
	const currUsersGroups = getCurrGroups(selectedUser);
	const [loading, setLoading] = useState(true);

	const messagePageContext = {
		setUsers,
		setGroups,
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

	useEffect(async () => {
		const usersPromise = axios.get(url + "/user");
		const groupsPromise = axios.get(url + "/groupuser");
		const messagesPromise = axios.get(url + "/message");

		await Promise.all([usersPromise, groupsPromise, messagesPromise]).then(
			(res) => {
				console.log(res[0].data, res[1].data, res[2].data);
				setUsers(res[0].data);
				setGroups(res[1].data);
				setUsers(res[2].data);
				setLoading(false);
			}
		);

		// await axios.get(url + "/user").then((res) => {
		// 	setUsers(res.data);
		// });
	}, []);

	console.log(users);

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
