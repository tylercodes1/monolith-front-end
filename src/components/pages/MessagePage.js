import React, { useState } from "react";
import "./MessagePage.css";
import Dialog from "./../Dialog/Dialog";
import UsersList from "./../UsersList/UsersList";
import GroupsList from "./../GroupsList/GroupsList";
import MessagePageContext from "./Context/MessagePageContext";

const MessagePage = () => {
	const [selectedUser, setSelectedUser] = useState({
		email: "abc@gmail.com",
			firstName: "Annie",
			lastName: "Tang",
			userId: 0,
			username: "Tangry",
	});
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

	const [msgs, setMsgs] = useState([
		{
			group: {
				groupId: 1,
				groupName: "This is library",
			},
			message: "message from ANNIE, WHO IS ALSO LOGGED IN",
			messageId: 1,
			user: {
				email: "abc@gmail.com",
				firstName: "Annie",
				lastName: "Tang",
				userId: 0,
				username: "Tangry",
			},
		},
		{
			group: {
				groupId: 1,
				groupName: "This is library",
			},
			message: "MSG FROM tyler",
			messageId: 2,
			user: {
				email: "xyz@gmail.com",
				firstName: "Tyler",
				lastName: "Kim",
				userId: 1,
				username: "tylercodes1",
			},
		},
		{
			group: {
				groupId: 1,
				groupName: "This is library",
			},
			message: "second one",
			messageId: 3,
			user: {
				email: "xyz@gmail.com",
				firstName: "Tyler",
				lastName: "Kim",
				userId: 1,
				username: "tylercodes1",
			},
		},
		{
			group: {
				groupId: 1,
				groupName: "This is library",
			},
			message: "second one",
			messageId: 4,
			user: {
				email: "xyz@gmail.com",
				firstName: "Melody",
				lastName: "Kim",
				userId: 2,
				username: "tylercodes1",
			},
		},
		{
			group: {
				groupId: 1,
				groupName: "This is library",
			},
			message: "second one",
			messageId: 5,
			user: {
				email: "xyz@gmail.com",
				firstName: "Melody",
				lastName: "Kim",
				userId: 2,
				username: "tylercodes1",
			},
		},
	]);

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

	const [loggedInUser, setLoggedInUser] = useState(users[0]);

	const messagePageContext = {
		hello: "hello message page context",
		msgs,
		setMsgs,
		users,
		loggedInUser,
		setSelectedGroup,
		selectedGroup,
		setSelectedUser,
		selectedUser,
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

function getMessagesByGroup(groupId) {

}

export default MessagePage;

