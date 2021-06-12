import React from "react";
import "./MessagePage.css";
import Dialog from "./../Dialog/Dialog";
import UsersList from "./../UsersList/UsersList";

const MessagePage = () => {
	return (
		<div className="message-page">
			<Dialog />
			<UsersList />
		</div>
	);
};

export default MessagePage;
