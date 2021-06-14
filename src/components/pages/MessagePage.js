import React, { useEffect, useState } from "react";
import "./MessagePage.css";
import Dialog from "./../Dialog/Dialog";
import UsersList from "./../UsersList/UsersList";
import GroupsList from "./../GroupsList/GroupsList";
import MessagePageContext from "./Context/MessagePageContext";
import allGroups from "./../../dummyData";
import UserMenu from "./../UserMenu/UserMenu";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import url from "./../../api/URL";
import useInterval from "./../../util/useInterval";

const MessagePage = () => {
	const [users, setUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState({});
	const [groups, setGroups] = useState(allGroups);
	const [selectedGroup, setSelectedGroup] = useState(groups[0]);
	const [messages, setMessages] = useState([]);
	const currUsersGroups = getCurrGroups();
	const [loading, setLoading] = useState(true);
	const [delay] = useState(1000);

	useInterval(async () => {
		const messagesPromise = axios.get(url + "/message");
		const res = await messagesPromise;
		setMessages(res.data);
	}, delay);

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
			const usersRes = res[0].data;
			const groupsRes = res[1].data;
			setUsers(usersRes);
			setSelectedUser(usersRes[0]);
			setGroups(groupsRes);
			setSelectedGroup(groupsRes[0]);
			setMessages(res[2].data);
		}
		fetchData();
		setLoading(false);
	}, []);

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
		if (
			newCurrGroups.some(
				(userGroup) => userGroup.group.groupId === selectedGroup.groupId
			)
		) {
			setSelectedGroup(newCurrGroups[0]);
		}
		return newCurrGroups;
	}
};

export default MessagePage;
