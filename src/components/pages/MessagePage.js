import React, { useEffect, useState } from "react";
import "./MessagePage.css";
import Dialog from "./../Dialog/Dialog";
import UsersList from "./../UsersList/UsersList";
import GroupsList from "./../GroupsList/GroupsList";
import MessagePageContext from "./Context/MessagePageContext";
import allGroups from "./../../dummyData";
import allMessages from "./../../messagesDummyData";
import UserMenu from "./../UserMenu/UserMenu";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import url from "./../../api/URL";
import useInterval from "./../../util/useInterval";

const MessagePage = () => {
	const [users, setUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState({
		email: "string",
		firstName: "string",
		lastName: "string",
		userId: 0,
		username: "string",
	});
	const [groups, setGroups] = useState([
		{
			group: {
				groupId: 0,
				groupName: "string",
			},
			id: 0,
			user: {
				email: "string",
				firstName: "string",
				lastName: "string",
				userId: 0,
				username: "string",
			},
		},
	]);
	const [selectedGroup, setSelectedGroup] = useState(groups[0]);
	const [messages, setMessages] = useState([]);
	const currUsersGroups = getCurrGroups();
	const [loading, setLoading] = useState(true);
	const [delay] = useState(1000);

	// useInterval(async () => {
	// 	const messagesPromise = axios.get(url + "/message");
	// 	const res = await Promise.all([messagesPromise]);
	// 	console.log(res[0].data);
	// 	setMessages(res[0].data);
	// }, delay);

	const messagePageContext = {
		currUsersGroups,
		getMessagesByGroup,
		groups,
		messages,
		users,
		setSelectedGroup,
		selectedGroup,
		setSelectedUser,
		selectedUser,
	};

	useEffect(() => {
		async function fetchData() {
			const usersPromise = axios.get(url + "/user");
			const groupsPromise = axios.get(url + "/groupuser");
			const messagesPromise = axios.get(url + "/message");
			const res = await Promise.all([
				usersPromise,
				groupsPromise,
				messagesPromise,
			]);
			console.log(res);
			setUsers(res[0].data);
			// setGroups(res[1].data);
			setMessages(res[2].data);
			setLoading(false);
		}
		fetchData();
		setLoading(false);
	}, []);

	return loading ? (
		<div className="message-page">
			<CircularProgress />
		</div>
	) : (
		<MessagePageContext.Provider value={messagePageContext}>
			<div className="message-page">
				<UserMenu />
				<GroupsList />
				<Dialog />
				<UsersList />
			</div>
		</MessagePageContext.Provider>
	);

	// helper data-filtering functions
	function getMessagesByGroup(groupId, messages) {
		return messages.filter((message) => message.group.groupId === groupId);
	}

	function getCurrGroups() {
		const newCurrGroups = groups.filter(
			(userGroup) => userGroup.user.userId === selectedUser.userId
		);
		if (!newCurrGroups.includes(selectedGroup))
			setSelectedGroup(newCurrGroups[0]);
		return newCurrGroups;
	}
};

export default MessagePage;
